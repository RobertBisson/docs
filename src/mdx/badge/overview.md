import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Badge

Badge is a simple labeling component. It can be used to add additional information to any content or highlight unread items.

Element is absolute positioned, so parent should be [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It means parent position should be set to anything except `static`, e.g. `relative`, `absolute`, `fixed`, or `sticky`.

### Usage

```js
import { Badge } from '@paljs/ui';
```

Badge with default position and status(color):

```jsx
<Badge>badge text</Badge>
```

For example, badge can be placed into `Card` header:

[Example](demo://Example.tsx)

</MdxCard>