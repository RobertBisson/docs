import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Sidebar

Layout sidebar component.

[Basic](demo://Basic.tsx)

### Usage

```js
import { Sidebar, SidebarBody } from '@paljs/ui/Sidebar';
```

Sidebar can be placed on the left, or the right side of the layout, or on start/end position of layout (depends on document direction, left to right or right to left) It can be fixed (shown above the content) or can push the layout when opened.

There are four states - `hidden` `visible` `compacted` `expanded`. By default, sidebar content is fixed and saves its position while the page is being scrolled.

Compacted sidebar example:

[Compacted](demo://Compacted.tsx)

Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.

### header

Sidebar header container.

Placeholder which contains a sidebar header content, placed at the very top of the sidebar outside of the scroll area.
just html element.

```html
<header></header>
```

### SidebarBody

Sidebar scroll area container.

```jsx
<SidebarBody>body</SidebarBody>
```

### footer

Sidebar footer container.

Placeholder which contains a sidebar footer content, placed at the very bottom of the sidebar outside of the scroll area.

just html element

```html
<footer></footer>
```

### Sidebar Ref methods

you can use sidebar ref methods like this example:

```jsx
import React, { useRef } from 'react';

function Layout() {
  const sidebarRef = useRef();

  return (
    <Sidebar ref={sidebarRef} />
    <button onClick={() => sidebarRef.current.toggle()}></button>
  );
}
```

</MdxCard>
