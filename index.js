#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const mustache_1 = __importDefault(require("mustache"));
const generators_1 = require("./utils/generators");
const FLAG = {
    DIR: '--dir',
    STYLED: '--styled',
    MEMOIZED: '--memoized',
    DIRECTIVE: '--directive',
    PREFIX: '--prefix',
    STYLED_PREFIX: '--styled-prefix',
    TYPE_OVERRIDES: '--type-overrides',
};
const FLAGS = Object.values(FLAG);
const styled = process.argv.find((val) => val === FLAG.STYLED) ? 'styled-' : '';
const memoized = process.argv.find((val) => val === FLAG.MEMOIZED) ? 'memoized-' : '';
const hasTypeOverrides = process.argv.find((val) => val === FLAG.TYPE_OVERRIDES) ? true : false;
// #region [Flag] dir
const [dirValue, dirError] = getFlagAndValue(FLAG.DIR);
if (dirError) {
    throw dirError;
}
const dir = (_a = dirValue !== null && dirValue !== void 0 ? dirValue : process.cwd()) !== null && _a !== void 0 ? _a : __dirname;
// #endregion
// #region [Flag] directive
const [directiveValue, directiveError] = getFlagAndValue(FLAG.DIRECTIVE);
if (directiveError) {
    throw dirError;
}
const directive = directiveValue || null;
// #region [Flag] prefix
const [prefixValue, prefixError] = getFlagAndValue(FLAG.PREFIX);
if (prefixError) {
    throw prefixError;
}
const prefix = prefixValue || 'Mui';
// #region [Flag] styled-prefix
const [styledPrefixValue, styledPrefixError] = getFlagAndValue(FLAG.STYLED_PREFIX);
if (styledPrefixError) {
    throw styledPrefixError;
}
const styledPrefix = styledPrefixValue || 'Styled';
if ((prefixValue != null || styledPrefixValue != null) && prefixValue == styledPrefixValue) {
    throw new Error('--prefix and --styled-prefix must not have the same value!');
}
function getFlagAndValue(flag, required = false) {
    const hasFlag = process.argv.find((val) => val === flag);
    if (hasFlag) {
        const indexOfDirFlag = process.argv.indexOf(flag);
        const flagValue = process.argv[indexOfDirFlag + 1];
        if (!flagValue && !FLAGS.includes(flagValue))
            return [null, new Error(`Invalid ${flag} value!`)];
        return [flagValue, null];
    }
    else {
        if (required)
            return [null, new Error(`Missing ${flag} flag!, please add: "${flag}".`)];
    }
    return [null, null];
}
// #endregion
const componentTemplate = fs.readFileSync(path.resolve(__dirname, `./templates/${memoized}${styled}component.mustache`), 'utf-8');
const COMPONENTS = [
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
];
const componentsDir = path.join(dir, 'components');
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}
// #region deconstructComponentSetup
function deconstructComponentSetup(component) {
    if (typeof component === 'object') {
        const { name, exports, typeGenerics, typeGenericsApplied, componentTypes } = component, otherProps = __rest(component, ["name", "exports", "typeGenerics", "typeGenericsApplied", "componentTypes"]);
        return Object.assign({ componentName: name, exports: (exports === null || exports === void 0 ? void 0 : exports.length) ? exports.join(',') : null, typeGenerics: (typeGenerics === null || typeGenerics === void 0 ? void 0 : typeGenerics.length) ? typeGenerics.join(',') : null, typeGenericsApplied: (typeGenericsApplied === null || typeGenericsApplied === void 0 ? void 0 : typeGenericsApplied.length) ? typeGenericsApplied.join(',') : null, componentTypes: (componentTypes === null || componentTypes === void 0 ? void 0 : componentTypes.length) ? componentTypes.join(',') : null }, otherProps);
    }
    return {
        componentName: component,
    };
}
// #endregion
COMPONENTS.forEach((component) => {
    const _a = deconstructComponentSetup(component), { componentName } = _a, otherProps = __rest(_a, ["componentName"]);
    const componentPath = path.join(componentsDir, componentName);
    fs.mkdirSync(componentPath, { recursive: true });
    const content = mustache_1.default.render(componentTemplate, Object.assign({ prefix, customName: `${styledPrefix}${componentName}`, name: componentName, directive }, otherProps));
    fs.writeFileSync(path.join(componentPath, `${componentName}.tsx`), content);
});
let indexContent = '';
COMPONENTS.forEach((component) => {
    const componentName = typeof component === 'object' ? component.name : component;
    const componentPath = path.join(componentsDir, componentName);
    const files = fs.readdirSync(componentPath).filter((file) => file.endsWith('.tsx'));
    indexContent = indexContent.concat(files.map((file) => `export * from './${file.replace('.tsx', '')}/${file.replace('.tsx', '')}';`).join('\n'), '\n');
});
fs.writeFileSync(path.join(componentsDir, `index.tsx`), indexContent);
// #region [--type-overrides]
if (hasTypeOverrides) {
    (0, generators_1.generateTypeDeclarationOverrides)(componentsDir);
}
// #endregion
