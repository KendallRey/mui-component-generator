# Mui Component Generator (in Development)
A generator for MUI components in ReactJS

## Note
No need for `npm install`, just run and install via `npx` and make sure to use `--dir` flag.
Change the value of `--dir` to directory you want to generate components in.

## Run Command
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
│   │── index.tsx
│
```

## Flags
- `--dir` Generate files to specific directory: **Don't forget the quotation marks "\directory".**
```bash
npx mui-component-generator --dir "D:\KR\New folder"
```

- `--styled` Add styled components, see example below:
```tsx
import React from 'react';
import { styled, Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const StyledButton = styled(({ ...props }: MuiButtonProps) => (
<Button {...props} />
))(({ theme }) => ({}))

export const MuiButton: React.FC<MuiButtonProps> = (props) => <StyledButton {...props} />;
```
```bash
npx mui-component-generator --styled
```

- `--memoized` Wraps components in memo, see example below:
```tsx
import React, { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const MuiButton: React.FC<MuiButtonProps> = memo((props) => <Button {...props} />);
```
```bash
npx mui-component-generator --memoized
```

- `--directive` Add directive at the top of the file, see example below: **Don't forget the quotation marks "'use client;'".**
```tsx
'use client'; // adds this part
import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type MuiButtonProps = ButtonProps;

export const MuiButton: React.FC<MuiButtonProps> = (props) => <Button {...props} />;

```
```bash
npx mui-component-generator --directive "'use client';"
```
