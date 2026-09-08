import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../public/images')

async function shot(page, url, file, opts = {}) {
  const { wait = 2000, actions } = opts
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(wait)
  if (actions) await actions(page)
  await page.screenshot({ path: path.join(outDir, file), type: 'png' })
  console.log('wrote', file)
}

async function main() {
  await mkdir(outDir, { recursive: true })
  const browser = await chromium.launch({ headless: true })
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: 'dark',
  })
  const page = await desktop.newPage()

  await shot(page, 'https://github.com/debs-obrien/debbie.codes/pull/621', 'hunt-pr-621.png', { wait: 2500 })
  await shot(
    page,
    'https://github.com/debs-obrien/debbie.codes/blob/cursor/site-bug-hunt-prod-49b2/qa/bug-candidates/mobile-duplicate-close-menu.md',
    'candidate-mobile-duplicate-close-menu.png',
    { wait: 2500 },
  )
  await shot(page, 'https://github.com/debs-obrien/debbie.codes/issues/622', 'issue-622.png', { wait: 2500 })
  await shot(page, 'https://github.com/debs-obrien/debbie.codes/pull/623', 'fix-pr-623.png', { wait: 2500 })
  await shot(page, 'https://github.com/debs-obrien/debbie.codes/pull/623/files', 'fix-pr-623-files-thetopbar.png', {
    wait: 3500,
    actions: async (p) => {
      await p.evaluate(() => {
        const el = [...document.querySelectorAll('.file-header, a, h3')].find((e) =>
          (e.textContent || '').includes('TheTopBar.vue'),
        )
        el?.scrollIntoView({ block: 'start' })
      })
      await p.waitForTimeout(600)
    },
  })
  await shot(page, 'https://github.com/debs-obrien/debbie.codes/pull/623/files', 'fix-pr-623-playwright-test.png', {
    wait: 3500,
    actions: async (p) => {
      await p.evaluate(() => {
        const el = [...document.querySelectorAll('.file-header, a, h3')].find((e) =>
          (e.textContent || '').includes('mobile-navigation.spec.ts'),
        )
        el?.scrollIntoView({ block: 'start' })
      })
      const only = p.getByText('Only one Close menu control while open')
      if (await only.count()) await only.first().scrollIntoViewIfNeeded()
      await p.waitForTimeout(500)
    },
  })

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  })
  const mpage = await mobile.newPage()
  await mpage.goto('https://debbie.codes/', { waitUntil: 'networkidle', timeout: 60000 })
  await mpage.waitForTimeout(1000)
  await mpage.getByRole('button', { name: 'Open menu' }).click()
  await mpage.waitForTimeout(800)
  await mpage.evaluate(() => {
    const buttons = [...document.querySelectorAll('button')].filter(
      (b) => b.getAttribute('aria-label') === 'Close menu',
    )
    const overlay = document.createElement('div')
    overlay.style.cssText = 'position:fixed;inset:0;z-index:2147483647;pointer-events:none;'
    buttons.forEach((b, i) => {
      const r = b.getBoundingClientRect()
      const box = document.createElement('div')
      box.style.cssText = `position:absolute;left:${r.left - 6}px;top:${r.top - 6}px;width:${Math.max(r.width, 28) + 12}px;height:${Math.max(r.height, 28) + 12}px;border:3px solid ${i === 0 ? '#f87171' : '#fbbf24'};border-radius:10px;`
      const badge = document.createElement('div')
      badge.textContent = `Close menu #${i + 1}`
      badge.style.cssText = `position:absolute;left:${r.left - 6}px;top:${Math.max(8, r.top - 36)}px;background:${i === 0 ? '#f87171' : '#fbbf24'};color:#111;font:700 14px/1.2 system-ui,sans-serif;padding:6px 10px;border-radius:8px;`
      overlay.appendChild(box)
      overlay.appendChild(badge)
    })
    const count = document.createElement('div')
    count.textContent = `${buttons.length} × aria-label="Close menu"`
    count.style.cssText =
      'position:absolute;left:16px;bottom:24px;background:#111827;color:#fff;font:800 16px/1.2 system-ui,sans-serif;padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.2)'
    overlay.appendChild(count)
    document.body.appendChild(overlay)
  })
  await mpage.screenshot({ path: path.join(outDir, 'before-two-close-menus.png'), type: 'png' })
  console.log('wrote before-two-close-menus.png')

  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
