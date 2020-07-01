import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Select

provides a capability to select one of the passed items.

This Component build on [React Select](https://react-select.com/) you can look to his docs for more props options

### Usage

```js
import Select from '@paljs/ui/Select';
```

If you want to use it as the multi-select control you have to mark it as multiple. In this case, `Select` will work only with arrays - accept arrays and propagate arrays.

[Example](demo://Example.tsx)

two additional style types - `outline`:

[Outline](demo://Outline.tsx)

Select is available in different shapes, that could be combined with the other properties:

[Shape](demo://Shape.tsx)

</MdxCard>
