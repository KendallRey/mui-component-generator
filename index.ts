import * as fs from 'fs'
import * as path from 'path'

import Mustache from 'mustache'

const componentTemplate = fs.readFileSync(
  path.resolve(__dirname, './templates/component.mustache'),
  'utf-8'
)

const COMPONENTS = ["Autocomplete", "Button"]

const componentsDir = path.join(__dirname, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true })
}

COMPONENTS.forEach((component) => {
  const componentPath = path.join(componentsDir, component)
  fs.mkdirSync(componentPath, { recursive: true })
  const content = Mustache.render(componentTemplate, {
    prefix: 'Ken',
    name: component,
  })
  fs.writeFileSync(path.join(componentPath, `${component}.tsx`), content)
})