#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'

import Mustache from 'mustache'

const FLAGS = ['--styled', '--memoized']

const styled = process.argv.find((val) => val === '--styled') ? 'styled-' : ''
const memoized = process.argv.find((val) => val === '--memoized') ? 'memoized-' : ''

const hasDir = process.argv.find((val) => val === '--dir')
let dir = __dirname;
if(hasDir){
  const indexOfDirFlag = process.argv.indexOf('--dir');
  const flagValue = process.argv[indexOfDirFlag+1];
  if(!flagValue && !FLAGS.includes(flagValue)) throw new Error('invalid directory value')
  dir = flagValue;
}

const componentTemplate = fs.readFileSync(
  path.resolve(__dirname, `./templates/${memoized}${styled}component.mustache`),
  'utf-8',
)

const COMPONENTS = [
  'Autocomplete',
  'Button',
  'IconButton',
  'ButtonGroup',
  'Checkbox',
  'Fab',
  'RadioGroup',
  'Rating',
  'Select',
  'Slider',
  'Switch',
  'TextField',
  'ToggleButtonGroup',

  'FormControl',
  'FormControlLabel',
  'InputLabel',

  'Avatar',
  'Badge',
  'Chip',
  'Divider',
  'List',
  'ListItem',
  'ListItemButton',
  'ListItemAvatar',
  'ListItemIcon',
  'ListItemText',
  'TableContainer',
  'Table',
  'TableHead',
  'TableRow',
  'TableCell',
  'TableBody',
  'Tooltip',
  'Typography',

  'Alert',
  'Backdrop',
  'Dialog',
  'DialogTitle',
  'CircularProgress',
  'Skeleton',
  'Snackbar',
  'SnackbarContent',

  'Accordion',
  'AccordionActions',
  'AccordionSummary',
  'AccordionDetails',
  'AppBar',
  'Toolbar',
  'Card',
  'CardActions',
  'CardContent',
  'Paper',

  'BottomNavigation',
  'BottomNavigationAction',
  'Breadcrumbs',
  'Drawer',
  'Link',
  'Menu',
  'MenuItem',
  'Pagination',
  'SpeedDial',
  'SpeedDialIcon',
  'SpeedDialAction',
  'Step',
  'Stepper',
  'StepLabel',
  'Tab',
  'Tabs',

  'Box',
  'Container',
  'Stack',
  'ImageList',
  'ImageListItem',

  'Modal',
  'Popover',
  'Popper',
  'Collapse',
]

const componentsDir = path.join(dir, 'components')

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
    '\n',
  )
})

fs.writeFileSync(path.join(componentsDir, `index.tsx`), indexContent)
