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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const mustache_1 = __importDefault(require("mustache"));
const styled = process.argv.find((val) => val === '--styled') ? 'styled-' : '';
const memoized = process.argv.find((val) => val === '--memoized') ? 'memoized-' : '';
const componentTemplate = fs.readFileSync(path.resolve(__dirname, `./templates/${memoized}${styled}component.mustache`), 'utf-8');
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
];
const componentsDir = path.join(__dirname, 'components');
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}
COMPONENTS.forEach((component) => {
    const componentPath = path.join(componentsDir, component);
    fs.mkdirSync(componentPath, { recursive: true });
    const content = mustache_1.default.render(componentTemplate, {
        prefix: 'Mui',
        customName: `Styled${component}`,
        name: component,
    });
    fs.writeFileSync(path.join(componentPath, `${component}.tsx`), content);
});
let indexContent = '';
COMPONENTS.forEach((component) => {
    const componentPath = path.join(componentsDir, component);
    const files = fs.readdirSync(componentPath).filter((file) => file.endsWith('.tsx'));
    indexContent = indexContent.concat(files.map((file) => `export * from './${file.replace('.tsx', '')}/${file.replace('.tsx', '')}';`).join('\n'), '\n');
});
fs.writeFileSync(path.join(componentsDir, `index.tsx`), indexContent);
