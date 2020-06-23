import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Card

Basic content container component.

Basic card example:

[Basic](demo://Basic.tsx)

</MdxCard>

<MdxCard>

### Usage

```js
import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui';
```

Colored cards could be simply configured by providing a `status` property:

[Colored](demo://Colored.tsx)

It is also possible to assign an `accent` property for a slight card highlight as well as combine it with `status`:

[Accent](demo://Accent.tsx)

Multiple Sizes

[Size](demo://Size.tsx)

### header

Card header container.

Placeholder which contains a card header content, placed at the very top of the card outside of the scroll area.
just html element

```html
<header></header>
```

or

```jsx
<CardHeader></CardHeader>
```

### CardBody

Card scroll area container.

```jsx
<CardBody>body</CardBody>
```

### footer

Card footer container.

Placeholder which contains a card footer content, placed at the very bottom of the card outside of the scroll area.

just html element

```html
<footer></footer>
```

or

```jsx
<CardFooter></CardFooter>
```

</MdxCard>