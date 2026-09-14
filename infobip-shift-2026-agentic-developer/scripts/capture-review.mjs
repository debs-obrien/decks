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
  [9, '09-work-open'],
  [10, '10-work-loop'],
  [11, '11-two-skills'],
  [12, '12-gates-kept'],
  [20, '20-merge-gate'],
  [23, '23-bridge'],
  [35, '35-takeaways'],
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
