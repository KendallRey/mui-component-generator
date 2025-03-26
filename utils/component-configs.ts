type ComponentOverrideConfig = {
  name: string
  overrides: ('Size' | 'Color' | 'Variant')[]
}

export const COMPONENT_CONFIGS: ComponentOverrideConfig[] = [
  // 'Avatar'
  {
    name: 'AvatarGroup',
    overrides: ['Variant'],
  },
  // 'Backdrop'
  {
    name: 'Badge',
    overrides: ['Color', 'Variant'],
  },
  // 'BottomNavigation'
  // 'BottomNavigationAction'
  // 'Box'
  // 'Breadcrumbs'
  {
    name: 'Button',
    overrides: ['Color', 'Size', 'Variant'],
  },
  // 'ButtonBase'
  {
    name: 'ButtonGroup',
    overrides: ['Color', 'Size', 'Variant'],
  },
  // 'Card'
  // 'CardActionArea'
  // 'CardActions'
  // 'CardContent'
  // 'CardHeader'
  // 'CardMedia'
  {
    name: 'Checkbox',
    overrides: ['Size', 'Variant'],
  },
  {
    name: 'Chip',
    overrides: ['Color', 'Size', 'Variant'],
  },
  {
    name: 'CircularProgress',
    overrides: ['Color', 'Variant'],
  },
  // 'ClickAwayListener'
  // 'Collapse'
  // 'Container'
  // 'CssBaseline'
  // 'Dialog'
  // 'DialogActions'
  // 'DialogContent'
  // 'DialogContentText'
  // 'DialogTitle'
  {
    name: 'Divider',
    overrides: ['Variant'],
  },
  // 'Drawer'
  {
    name: 'Fab',
    overrides: ['Color', 'Size', 'Variant'],
  },
  // 'Fade'
  // 'FilledInput'
  {
    name: 'FormControl',
    overrides: ['Color', 'Size'],
  },
  // 'FormControlLabel'
  // 'FormGroup'
  {
    name: 'FormHelperText',
    overrides: ['Variant'],
  },
  {
    name: 'FormLabel',
    overrides: ['Color'],
  },
  // 'GlobalStyles'
  // 'Grid'
  // 'Grid2'
  // 'Grow'
  // 'Hidden'
  {
    name: 'Icon',
    overrides: ['Color', 'Size'],
  },
  {
    name: 'IconButton',
    overrides: ['Color', 'Size'],
  },
  {
    name: 'ImageList',
    overrides: ['Variant'],
  },
  // 'ImageListItem'
  // 'ImageListItemBar'
  // 'Input'
  // 'InputAdornment'
  {
    name: 'InputBase',
    overrides: ['Color', 'Size'],
  },
  {
    name: 'InputLabel',
    overrides: ['Size'],
  },
  {
    name: 'LinearProgress',
    overrides: ['Color', 'Variant'],
  },
  // 'Link'
  // 'List'
  // 'ListItem'
  // 'ListItemAvatar'
  // 'ListItemButton'
  // 'ListItemIcon'
  // 'ListItemSecondaryAction'
  // 'ListItemText'
  // 'ListSubheader'
  // 'Masonry'
  // 'Menu'
  // 'MenuItem'
  // 'MenuList'
  // 'MobileStepper'
  // 'Modal'
  // 'NativeSelect'
  // 'NoSsr'
  // 'OutlinedInput'
  {
    name: 'Pagination',
    overrides: ['Color', 'Size', 'Variant'],
  },
  {
    name: 'PaginationItem',
    overrides: ['Color', 'Size', 'Variant'],
  },
  {
    name: 'Paper',
    overrides: ['Variant'],
  },
  // 'PigmentContainer'
  // 'PigmentGrid'
  // 'PigmentHidden'
  // 'PigmentStack'
  // 'Popover'
  // 'Popper'
  // 'Portal'
  {
    name: 'Radio',
    overrides: ['Color', 'Size'],
  },
  // 'RadioGroup'
  {
    name: 'Rating',
    overrides: ['Size'],
  },
  // 'ScopedCssBaseline'
  // 'Select'
  {
    name: 'Skeleton',
    overrides: ['Variant'],
  },
  // 'Slide'
  {
    name: 'Slider',
    overrides: ['Color', 'Size'],
  },
  // 'Snackbar'
  // 'SnackbarContent'
  // 'SpeedDial'
  // 'SpeedDialAction'
  // 'SpeedDialIcon'
  // 'Stack'
  // 'Step'
  // 'StepButton'
  // 'StepConnector'
  // 'StepContent'
  // 'StepIcon'
  // 'StepLabel'
  // 'Stepper'
  {
    name: 'SvgIcon',
    overrides: ['Color', 'Size'],
  },
  // 'SwipeableDrawer'
  {
    name: 'Switch',
    overrides: ['Color', 'Size'],
  },
  // 'Tab'
  // 'TabContext'
  {
    name: 'Table',
    overrides: ['Size'],
  },
  // 'TableBody'
  {
    name: 'TableCell',
    overrides: ['Size', 'Variant'],
  },
  // 'TableContainer'
  // 'TableFooter'
  // 'TableHead'
  // 'TablePagination'
  // 'TableRow'
  // 'TableSortLabel'
  // 'TabList'
  // 'TabPanel'
  // 'Tabs'
  // 'TabScrollButton'
  // 'TextareaAutosize'
  {
    name: 'TextField',
    overrides: ['Color', 'Size'],
  },
  // 'Timeline'
  // 'TimelineConnector'
  // 'TimelineContent'
  // 'TimelineDot'
  // 'TimelineItem'
  // 'TimelineOppositeContent'
  // 'TimelineSeparator'
  {
    name: 'ToggleButton',
    overrides: ['Color', 'Size'],
  },
  {
    name: 'ToggleButtonGroup',
    overrides: ['Color', 'Size'],
  },
  {
    name: 'Toolbar',
    overrides: ['Variant'],
  },
  // 'Tooltip',
  {
    name: 'Typography',
    overrides: ['Color', 'Variant'],
  },
  // 'Zoom',
]
