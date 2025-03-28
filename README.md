# Mui Component Generator
A generator for MUI components in ReactJS, to kickstart your customizable components.

## Note
No need for `npm install`, just run and install via `npx`.<br/>
**THIS MIGHT REWRITE YOUR CHANGES!, make sure to commit before running this command**.

## Run Command
```bash
npx mui-component-generator
```
Command above will generate:
```ts
│── components/  
│   │── Accordion/
│   │   │── Accordion.tsx
│   │── AccordionActions/
│   │   │── AccordionActions.tsx
│   │── AccordionDetails/
│   │   │── AccordionDetails.tsx
│   │── AccordionSummary/
│   │   │── AccordionSummary.tsx
│   │── .../
│   └── index.tsx
```

## Flags
### `--dir`
- Generate files to specific directory: **Don't forget the quotation marks "\directory".**
- **default**: Current directory in terminal.
```bash
npx mui-component-generator --dir "D:\KR\New folder"
```
```ts
D/
│── KR/
│   │── New folder/
│   │   │── components/  
│   │   │   │── Accordion/
│   │   │   │── AccordionActions/
│   │   │   │── AccordionDetails/
│   │   │   │── .../
│   │   │   └── index.tsx
```
<hr/>

### `--styled`
- Add styled components, see example below:
```bash
npx mui-component-generator --styled
```
```tsx
import React from 'react';
import { styled, Button, ButtonProps } from '@mui/material';

type StyledButtonProps = ButtonProps;

export const StyledButton = styled(({ ...props }: StyledButtonProps) => (
<Button {...props} />
))(({ theme }) => ({}))

export const MuiButton: React.FC<MuiButtonProps> = (props) => <StyledButton {...props} />;
```
<hr/>

### `--prefix`
- Modifies prefix to components' name, see example below:
- **default**: `Mui`
```bash
npx mui-component-generator --prefix "Rey"
```
```tsx
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type ReyButtonProps = ButtonProps; // modifies the prefix of component type

export const ReyButton: React.FC<ReyButtonProps> = (props) => <Button {...props} />; // modifies the prefix of component name
```
<hr/>

### `--styled-prefix`
- Modifies prefix to styled components' name and type, see example below:
- **default**: `Styled`
- **required**: [`--styled`] 
```bash
npx mui-component-generator --styled --styled-prefix "Ken"
```
```tsx
import React from 'react';
import { styled, Button, ButtonProps } from '@mui/material';

type KenButtonProps = ButtonProps; // modifies the prefix of styled component type

export const KenButton = styled(({ ...props }: KenButtonProps) => ( // modifies the prefix of styled component name
<Button {...props} />
))(({ theme }) => ({}))

export const MuiButton: React.FC<MuiButtonProps> = (props) => <KenButton {...props} />;
```
<hr/>

### `--memoized`
- Wraps components in memo, see example below:
```bash
npx mui-component-generator --memoized
```
```tsx
import React, { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const MuiButton: React.FC<MuiButtonProps> = memo((props) => <Button {...props} />);
```
<hr/>

### `--directive`
- Adds directive at the top of the file, see example below: **Don't forget the quotation marks "'use client;'".**
```bash
npx mui-component-generator --directive "'use client';"
```
```tsx
'use client'; // adds this part
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const MuiButton: React.FC<MuiButtonProps> = (props) => <Button {...props} />;

```
<hr/>

### `--type-overrides`
- Generates type declaration file overrides **mui.d.ts**, see example below:
- **Only**: [`Color`, `Size`, `Variant`] - depends whether a component supports such override/s.
```bash
npx mui-component-generator --type-overrides
```
```tsx
import {} from '@mui/material/AvatarGroup';
declare module '@mui/material/AvatarGroup' {
  interface AvatarGroupPropsVariantOverrides { }
}

import {} from '@mui/material/Badge';
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides { }
  interface BadgePropsVariantOverrides { }
}

import {} from '@mui/material/Button';
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides { }
  interface ButtonPropsSizeOverrides { }
  interface ButtonPropsVariantOverrides { }
}

...
```
