import sharp from 'sharp'
import { writeFileSync } from 'fs'

async function makeRound(size, outPath) {
  const circle = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
  )

  await sharp('public/logo2.png')
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: circle, blend: 'dest-in' }])
    .png()
    .toFile(outPath)
}

await makeRound(512, 'public/logo-icon.png')
await makeRound(180, 'src/app/apple-icon.png')
await makeRound(32, 'src/app/icon.png')
await makeRound(32, 'src/app/favicon.ico')

writeFileSync('scripts/.round-icon-ok', 'ok')
console.log('round icons written')
