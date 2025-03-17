import * as fs from 'fs'
import * as path from 'path'

const componentsDir = path.join(__dirname, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true })
}