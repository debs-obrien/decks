import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../review/v2')
const base = process.env.SLIDEV_URL || 'http://127.0.0.1:3030'

async function main() {
  await mkdir(outDir, { recursive: true })
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  })
  const page = await context.newPage()
  await page.goto(`${base}/#/1`, { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForTimeout(2500)

  const total = await page.evaluate(() => window.__slidev__?.nav?.total || 0)
  console.log('slide total:', total)
  if (!total) throw new Error('Could not read Slidev slide total')

  for (let i = 1; i <= total; i++) {
    if (i > 1) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(550)
    }
    // settle images briefly
    await page.waitForTimeout(250)
    const file = path.join(outDir, `slide-${String(i).padStart(2, '0')}.png`)
    try {
      await page.locator('.slidev-page').first().screenshot({ path: file, type: 'png', timeout: 10000 })
    } catch {
      await page.screenshot({ path: file, type: 'png' })
    }
    console.log('wrote', path.basename(file), 'page', await page.evaluate(() => window.__slidev__?.nav?.currentPage))
  }

  console.log('done', total)
  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
