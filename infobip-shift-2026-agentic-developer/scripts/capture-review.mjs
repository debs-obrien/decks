#!/usr/bin/env node
/**
 * Capture selected slides at 1280×720 into review/
 * Usage: node scripts/capture-review.mjs [baseUrl]
 */
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'review')
const base = process.argv[2] || 'http://127.0.0.1:3030'

// 1-based slide numbers → filename stem
const shots = [
  [6, '06-why-agentic'],
  [21, '21-bridge'],
  [28, '28-promptql-divider'],
  [29, '29-promptql-bio'],
  [30, '30-promptql-cards'],
  [31, '31-promptql-tee'],
  [32, '32-promptql-punch'],
  [33, '33-takeaways'],
  [8, '08-zurich-loop'],
  [18, '18-zurich-merge'],
]

await mkdir(outDir, { recursive: true })
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })

for (const [n, name] of shots) {
  const url = `${base}/#/${n}`
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(600)
  const file = path.join(outDir, `${name}.png`)
  await page.screenshot({ path: file, fullPage: false })
  console.log('wrote', file)
}

await browser.close()
console.log('done')
