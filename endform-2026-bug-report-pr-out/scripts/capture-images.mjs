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
  })
  const page = await desktop.newPage()

  await shot(page, 'https://github.com/debs-obrien/playwright-movies-app/issues/92', '03-issue-92.png', { wait: 2500 })
  await shot(page, 'https://github.com/debs-obrien/playwright-movies-app/pull/93', '06-pr-93-card.png', { wait: 2500 })
  await shot(page, 'https://github.com/debs-obrien/playwright-movies-app/pull/93/files', '08-diff-MovieListItem.png', {
    wait: 3500,
    actions: async (p) => {
      await p.evaluate(() => {
        document.querySelectorAll('[class*="CheckAnnotation"], [class*="InlineAnnotation"]').forEach((el) => {
          el.style.display = 'none'
        })
      })
    },
  })
  await shot(
    page,
    'https://github.com/debs-obrien/playwright-movies-app/blob/cursor/fix-movie-link-accessible-name-e1e9/tests/logged-out/movie-link-accessible-name.spec.ts',
    '09-regression-spec.png',
    { wait: 2500 },
  )
  await shot(page, 'https://github.com/debs-obrien/playwright-movies-app/pull/93/checks', '10-draft-checks-gate.png', {
    wait: 3000,
  })

  // Hunt/before still need live overlays; after needs local PR#93 worktree (see IMAGE-MAP.md).
  console.log('GitHub receipts captured. Hunt/before/after are separate captures.')
  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
