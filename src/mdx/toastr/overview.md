import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Toastr

provides a capability to build toast notifications.

You can play with this example:

[Test](demo://Test.tsx)

</MdxCard>

<MdxCard>

### Usage

```js
import { Toastr } from '@paljs/ui/Toastr';
```

In Toastr Component there is Default setup

```jsx
Toastr.defaultProps = {
  position: 'topEnd',
  status: 'Primary',
  duration: 3000,
  hasIcon: true,
  destroyByClick: true,
  preventDuplicates: false,
};
```

and you can pass default setup over it from component props

```jsx
<Toastr
  ref={toastrRef}
  position="topStart"
  status="Success"
  duration={3000}
  hasIcon={false}
  destroyByClick={false}
  preventDuplicates
/>
```

when you add toast you can pass some config to write on this config.

```jsx
toastrRef.current.add(message, title, { duration: 0, hasIcon: true });
```

Config accepts following options:

`position` - determines where on the screen toast will be rendered. Default is topEnd.

`status` - coloring and icon of the toast. Default is Primary.

`duration` - the time after which the toast will be destroyed. 0 means endless toast, that may be destroyed by click only. Default is 3000 ms.

`destroyByClick` - provides a capability to destroy toast by click. Default is true.

`preventDuplicates` - don't create new toast if it has the same title and the same message with previous one. Default is false.

`hasIcon` - if true then render toast icon. icon - you can pass icon class that will be applied into the toast.

</MdxCard>
