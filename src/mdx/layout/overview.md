import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Layout

Layout component. When using Layout it is required that all child components should be placed in his place like example.

Basic example of two columns layout with the header:

[Simple](demo://Simple.tsx)

### Usage

you can import Layout components by two-way.

```js
import {
  Layout,
  LayoutHeader,
  LayoutColumns,
  LayoutColumn,
  LayoutContainer,
  LayoutContent,
  LayoutFooter,
} from '@paljs/ui';
```

### Context Api

Layout have Context Api you can use it like this example:

```jsx
import {useContext} from 'react';
import { LayoutContext } from '@paljs/ui';

function Test () {
  const layout = useContext(LayoutContext);

  const addClassToLayout = () => {
    layout.addClass(['search-mode']);
  }
}
```

#### Nested

Layout maust nested component inside it like this example. you can remove part with his children not remove the parent and leave his children.

```jsx
<Layout>
  <LayoutHeader>Header</LayoutHeader>
  <LayoutContainer>
    <Sidebar>Sidebar</Sidebar>
    <LayoutContent>
      <LayoutHeader>SubHeader</LayoutHeader>
      <LayoutColumns>
        <LayoutColumn>column</LayoutColumn>
        <LayoutColumn>column</LayoutColumn>
      </LayoutColumns>
      <LayoutFooter>Footer</LayoutFooter>
    </LayoutContent>
  </LayoutContainer>
</Layout>
```

### LayoutHeader

Page header component. Located on top of the page above the layout columns and sidebars. Could be made fixed by setting the corresponding property. In the fixed mode the header becomes sticky to the top of the Layout (to of the page) like header in top of this page. `↑`

```jsx
<LayoutHeader fixed>Header</LayoutHeader>
```

To make `SubHeader` in `ContentLayout` place `LayoutHeader` component before `LayoutColumns` and add `withSubHeader` props to `Layout` component to remove `Sidebar` shadow

```jsx
<Layout withSubHeader>
  <LayoutHeader>Header</LayoutHeader>
  <LayoutContainer>
    <Sidebar>Sidebar</Sidebar>
    <LayoutContent>
      <LayoutHeader>SubHeader</LayoutHeader>
      <LayoutColumns>
        ....
```

[SubHeader](demo://SubHeader.tsx)

### LayoutColumn

A container component which determines a content position inside of the layout. The layout could contain unlimited columns (not including the sidebars).

By default, the columns are ordered from the left to the right, but it's also possible to overwrite this behavior by setting a `position` attribute to the column, it takes two value `start` `left`

[Column](demo://Column.tsx)

</MdxCard>