# Mui Component Generator (in Development)
A generator for MUI components in ReactJS

## Note
No need for `npm install`, just run and install via `npx` and make sure to use `--dir` flag.
Change the value of `--dir` to directory you want to generate components in.

## Run Command (change the dir value!)
```bash
npx mui-component-generator --dir "D:\KR\New folder"
```
Command above will generate:
```
.../  
│── New folder/  
│   │── components/  
│   │   │── Accordion/
│   │   │   │── Accordion.tsx
│   │   │── AccordionActions/
│   │   │   │── AccordionActions.tsx
│   │   │── AccordionDetails/
│   │   │   │── AccordionDetails.tsx
│   │   │── AccordionSummary/
│   │   │   │── AccordionSummary.tsx
│   │   │── .../
│   │── │── index.tsx
│
```

## Flags
- `--dir` Generate files to specific directory: **Don't forget the quotation marks "\directory".**
```bash
npx mui-component-generator --dir "D:\KR\New folder"
```
<hr/>

- `--styled` Add styled components, see example below:
```bash
npx mui-component-generator --styled
```
```tsx
import React from 'react';
import { styled, Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const StyledButton = styled(({ ...props }: MuiButtonProps) => (
<Button {...props} />
))(({ theme }) => ({}))

export const MuiButton: React.FC<MuiButtonProps> = (props) => <StyledButton {...props} />;
```
<hr/>

- `--prefix` Adds prefix to components' name, see example below:
  - **default**: `Mui`
```bash
npx mui-component-generator --prefix "Rey"
```
```tsx
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type ReyButtonProps = ButtonProps;

export const ReyButton: React.FC<ReyButtonProps> = (props) => <Button {...props} />;
```
<hr/>

- `--styled-prefix` Adds prefix to styled components' name, see example below:
  - **default**: `Styled`
  - **required**: [`--styled`] 
```bash
npx mui-component-generator --styled --styled-prefix "Ken"
```
```tsx
import React from 'react';
import { styled, Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const KenButton = styled(({ ...props }: MuiButtonProps) => ( // concat the prefix to component name
<Button {...props} />
))(({ theme }) => ({}))

export const MuiButton: React.FC<MuiButtonProps> = (props) => <KenButton {...props} />;
```
<hr/>

- `--memoized` Wraps components in memo, see example below:
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

- `--directive` Add directive at the top of the file, see example below: **Don't forget the quotation marks "'use client;'".**
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
