#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'

import Mustache from 'mustache'

const FLAG = {
  DIR: '--dir',
  STYLED: '--styled',
  MEMOIZED: '--memoized',
  DIRECTIVE: '--directive',
  PREFIX: '--prefix',
  STYLED_PREFIX: '--styled-prefix',
}

const FLAGS = Object.values(FLAG)

const styled = process.argv.find((val) => val === FLAG.STYLED) ? 'styled-' : ''
const memoized = process.argv.find((val) => val === FLAG.MEMOIZED) ? 'memoized-' : ''

// #region [Flag] dir
const [dirValue, dirError] = getFlagAndValue(FLAG.DIR)
if (dirError) {
  throw dirError
}
const dir = dirValue ?? __dirname
// #endregion

// #region [Flag] directive
const [directiveValue, directiveError] = getFlagAndValue(FLAG.DIRECTIVE)
if (directiveError) {
  throw dirError
}
const directive = directiveValue || null

// #region [Flag] prefix
const [prefixValue, prefixError] = getFlagAndValue(FLAG.PREFIX)
if (prefixError) {
  throw prefixError
}
const prefix = prefixValue || 'Mui'

// #region [Flag] styled-prefix
const [styledPrefixValue, styledPrefixError] = getFlagAndValue(FLAG.STYLED_PREFIX)
if (styledPrefixError) {
  throw styledPrefixError
}
const styledPrefix = styledPrefixValue || 'Styled'

if ((prefixValue != null || styledPrefixValue != null) && prefixValue == styledPrefixValue) {
  throw new Error('--prefix and --styled-prefix must not have the same value!')
}

// #region getFlagAndValue
type FlagAndValueSuccess = [string | null, null]
type FlagAndValueFailed = [null, Error]
function getFlagAndValue(flag: string, required: boolean = false): FlagAndValueSuccess | FlagAndValueFailed {
  const hasFlag = process.argv.find((val) => val === flag)
  if (hasFlag) {
    const indexOfDirFlag = process.argv.indexOf(flag)
    const flagValue = process.argv[indexOfDirFlag + 1]
    if (!flagValue && !FLAGS.includes(flagValue)) return [null, new Error(`Invalid ${flag} value!`)]
    return [flagValue, null]
  } else {
    if (required) return [null, new Error(`Missing ${flag} flag!, please add: "${flag}".`)]
  }
  return [null, null]
}
// #endregion

const componentTemplate = fs.readFileSync(
  path.resolve(__dirname, `./templates/${memoized}${styled}component.mustache`),
  'utf-8',
)

type ComponentConfig = {
  name: string
  exports?: string[]
  typeGenerics?: string[]
  typeGenericsApplied?: string[]
  styledTypeGenerics?: string[]
  styledTypeGenericsApplied?: string[]
  componentTypes?: string[]
  assertStyledComponent?: boolean
  useFC?: boolean
}

type ComponentSetup = ComponentConfig | string

const COMPONENTS: ComponentSetup[] = [
  'Accordion',
  'AccordionActions',
  'AccordionDetails',
  'AccordionSummary',
  'Alert',
  'AlertTitle',
  'AppBar',
  // #region Autocomplete,
  {
    name: 'Autocomplete',
    exports: ['ChipTypeMap'],
    typeGenerics: [
      'T',
      'Multiple extends boolean | undefined = false',
      'DisableClearable extends boolean | undefined = false',
      'FreeSolo extends boolean | undefined = false',
      "ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']",
    ],
    typeGenericsApplied: ['T', 'Multiple', 'DisableClearable', 'FreeSolo', 'ChipComponent'],
    componentTypes: ['T'],
    assertStyledComponent: true,
  },
  // #endregion
  'Avatar',
  'AvatarGroup',
  'Backdrop',
  'Badge',
  'BottomNavigation',
  'BottomNavigationAction',
  'Box',
  'Breadcrumbs',
  'Button',
  'ButtonBase',
  'ButtonGroup',
  'Card',
  'CardActionArea',
  'CardActions',
  'CardContent',
  'CardHeader',
  'CardMedia',
  'Checkbox',
  'Chip',
  'CircularProgress',
  'ClickAwayListener',
  'Collapse',
  'Container',
  'CssBaseline',
  'Dialog',
  'DialogActions',
  'DialogContent',
  'DialogContentText',
  'DialogTitle',
  'Divider',
  'Drawer',
  'Fab',
  'Fade',
  'FilledInput',
  'FormControl',
  'FormControlLabel',
  'FormGroup',
  'FormHelperText',
  'FormLabel',
  'GlobalStyles',
  // 'Grid',
  'Grid2',
  'Grow',
  'Hidden',
  'Icon',
  'IconButton',
  'ImageList',
  'ImageListItem',
  'ImageListItemBar',
  'Input',
  'InputAdornment',
  'InputBase',
  'InputLabel',
  'LinearProgress',
  'Link',
  'List',
  'ListItem',
  'ListItemAvatar',
  'ListItemButton',
  'ListItemIcon',
  // 'ListItemSecondaryAction',
  'ListItemText',
  'ListSubheader',
  // 'Masonry',
  'Menu',
  'MenuItem',
  'MenuList',
  'MobileStepper',
  'Modal',
  'NativeSelect',
  'NoSsr',
  'OutlinedInput',
  'Pagination',
  'PaginationItem',
  'Paper',
  // 'PigmentContainer',
  // 'PigmentGrid',
  // 'PigmentHidden',
  // 'PigmentStack',
  'Popover',
  'Popper',
  'Portal',
  'Radio',
  'RadioGroup',
  'Rating',
  'ScopedCssBaseline',
  'Select',
  'Skeleton',
  'Slide',
  'Slider',
  'Snackbar',
  'SnackbarContent',
  'SpeedDial',
  'SpeedDialAction',
  'SpeedDialIcon',
  'Stack',
  'Step',
  'StepButton',
  'StepConnector',
  'StepContent',
  'StepIcon',
  'StepLabel',
  'Stepper',
  'SvgIcon',
  'SwipeableDrawer',
  'Switch',
  'Tab',
  // 'TabContext',
  'Table',
  'TableBody',
  'TableCell',
  'TableContainer',
  'TableFooter',
  'TableHead',
  'TablePagination',
  'TableRow',
  'TableSortLabel',
  // 'TabList',
  // 'TabPanel',
  'Tabs',
  'TabScrollButton',
  // 'TextareaAutosize',
  'TextField',
  // 'Timeline',
  // 'TimelineConnector',
  // 'TimelineContent',
  // 'TimelineDot',
  // 'TimelineItem',
  // 'TimelineOppositeContent',
  // 'TimelineSeparator',
  'ToggleButton',
  'ToggleButtonGroup',
  'Toolbar',
  'Tooltip',
  'Typography',
  // 'Zoom',
]

const componentsDir = path.join(dir, 'components')

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true })
}

// #region deconstructComponentSetup
function deconstructComponentSetup(component: ComponentSetup) {
  if (typeof component === 'object') {
    const { name, exports, typeGenerics, typeGenericsApplied, componentTypes, ...otherProps } = component
    return {
      componentName: name,
      exports: exports?.length ? exports.join(',') : null,
      typeGenerics: typeGenerics?.length ? typeGenerics.join(',') : null,
      typeGenericsApplied: typeGenericsApplied?.length ? typeGenericsApplied.join(',') : null,
      componentTypes: componentTypes?.length ? componentTypes.join(',') : null,
      ...otherProps,
    }
  }
  return {
    componentName: component,
  }
}
// #endregion

COMPONENTS.forEach((component) => {
  const { componentName, ...otherProps } = deconstructComponentSetup(component)

  const componentPath = path.join(componentsDir, componentName)
  fs.mkdirSync(componentPath, { recursive: true })
  const content = Mustache.render(componentTemplate, {
    prefix,
    customName: `${styledPrefix}${componentName}`,
    name: componentName,
    directive,
    ...otherProps,
  })
  fs.writeFileSync(path.join(componentPath, `${componentName}.tsx`), content)
})

let indexContent = ''
COMPONENTS.forEach((component) => {
  const componentName = typeof component === 'object' ? component.name : component

  const componentPath = path.join(componentsDir, componentName)
  const files = fs.readdirSync(componentPath).filter((file) => file.endsWith('.tsx'))
  indexContent = indexContent.concat(
    files.map((file) => `export * from './${file.replace('.tsx', '')}/${file.replace('.tsx', '')}';`).join('\n'),
    '\n',
  )
})

fs.writeFileSync(path.join(componentsDir, `index.tsx`), indexContent)
