# Mui Component Generator (in Development)
A generator for MUI components in ReactJS

## Note
No need to install this one, just run via npx.

## Run Command
```bash
npx mui-component-generator
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