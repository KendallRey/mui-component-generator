import * as fs from 'fs'
import * as path from 'path'

import Mustache from 'mustache'

import { COMPONENT_CONFIGS } from './component-configs'

// #region generateTypeDeclarationOverrides
export function generateTypeDeclarationOverrides(dirPath: string) {
  let declarationContent = ''
  const interfaceOverridesTemplate = fs.readFileSync(
    path.resolve(__dirname, `../templates/interface-overrides.mustache`),
    'utf-8',
  )

  COMPONENT_CONFIGS.forEach((component) => {
    const content = Mustache.render(interfaceOverridesTemplate, {
      name: component.name,
      properties: component.overrides,
    })
    declarationContent = declarationContent.concat(content, '\n')
  })

  fs.writeFileSync(path.join(dirPath, `mui.d.ts`), declarationContent)
}
// #endregion
