import * as fs from 'fs'
import * as path from 'path'

import Mustache from 'mustache'

const componentTemplate = fs.readFileSync(
  path.resolve(__dirname, './templates/component.mustache'),
  'utf-8'
)

const COMPONENTS = ["Autocomplete", "Button", "ButtonGroup", "Checkbox", "Fab", "RadioGroup", "Rating"]

const componentsDir = path.join(__dirname, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true })
}

COMPONENTS.forEach((component) => {
  const componentPath = path.join(componentsDir, component)
  fs.mkdirSync(componentPath, { recursive: true })
  const content = Mustache.render(componentTemplate, {
    prefix: 'Mui',
    customName: `Styled${component}`,
    name: component,
  })
  fs.writeFileSync(path.join(componentPath, `${component}.tsx`), content)
})

let indexContent = ''
COMPONENTS.forEach((component) => {
  const componentPath = path.join(componentsDir, component)
  const files = fs.readdirSync(componentPath).filter((file) => file.endsWith('.tsx'))
  indexContent = indexContent.concat(
    files.map((file) => `export * from './${file.replace('.tsx', '')}/${file.replace('.tsx', '')}';`).join('\n'),
    '\n'
  )
})

fs.writeFileSync(path.join(componentsDir, `index.tsx`), indexContent)
