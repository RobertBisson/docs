import MdxCard from 'src/components/MdxCard';
import SEO from 'src/components/SEO';

<SEO title="Grid syatem" />
<MdxCard>

## Grid System

Pal.js UI Grid like bootstrap grid the different in use here we use javaScript functions and React Component

Grid system use these variables.

```js
// this default grid system

const gridSize = 12; // grid column number
const gridGutter = 24; //padding 24 (12px on each side of a column)
// default breakpoints
const breakpoints = {
  xs: 0,
  is: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
};

const maxContainer = {
  is: 380,
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320,
  xxxl: 1500,
};
```

</MdxCard>
<MdxCard>

### Customize

To customize this variables you need to send your values with theme settings
sorry for now you can't customize breakpoints but will work on it

```jsx
// here you can pass variables
<ThemeProvider theme={themes(theme, { dir, gridSize: 10, gridGutter: 30 })}>
  <Layout dir={dir} />
</ThemeProvider>
```

</MdxCard>
<MdxCard>

## Breakpoint functions

OAH themes have 4 breakpoints functions to use simply in styled components

#### breakpointUp

```js
import styled, { css } from 'styled-components';
import { breakpointUp } from '@paljs/ui';
// Example: Hide starting at `min-width: 0`, and then show at the `md` breakpoint
const Component = styled.div`
  display: none;
  ${breakpointUp('md')`
    display: block;
  `}
`;
```

#### breakpointDown

```js
import styled, { css } from 'styled-components';
import { breakpointDown } from '@paljs/ui';
// Example: Hide from `xxxl`, and then show at the `md` breakpoint to `min-width: 0;`
const Component = styled.div`
  display: none;
  ${breakpointDown('md')`
    display: block;
  `}
`;
```

#### breakpointBetween

```js
import styled, { css } from 'styled-components';
import { breakpointBetween } from '@paljs/ui';
// Example: show in width between 768 and 1200 this take lower breakpoint, upper breakpoint
const Component = styled.div`
  display: none;
  ${breakpointBetween('md', 'xl')`
    display: block;
  `}
`;
```

#### breakpointOnly

```js
import styled, { css } from 'styled-components';
import { breakpointOnly } from '@paljs/ui';
// Example: show in width between 768 and 991 from md to under lg
const Component = styled.div`
  display: none;
  ${breakpointOnly('md')`
    display: block;
  `}
`;
```

## Related Articles

- [Grid Components](/ui/components/grid).

</MdxCard>