import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Tooltip

Powerful Tooltip Component, which provides the best UX for your users.

> NOTE: The pest hard work in Pal.js UI Tooltip component placement will be changes
> automatically with clockwise if default placement hide any popover content
> and if no placement will cover popover content will choose the best one to
> show the most of the contents

### Usage

```js
import Tooltip from '@paljs/ui/Tooltip';
```

Tooltip has different placements, such as: top, bottom, left, right, start and end which can be used as following:

[Placement](demo://Placement.tsx)

Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:

- Click mode shows the component when a user clicks on the host element and hides when the user clicks somewhere on the document outside the component.

- Hint provides capability to show the component when the user hovers over the host element and hide when the user hovers out of the host.

- Hover works like hint mode with one exception - when the user moves mouse from host element to the container element the component remains open, so that it is possible to interact with it content.

- Focus mode is applied when user focuses the element.

[Trigger](demo://Trigger.tsx)

It is also possible to specify tooltip color using `status`:

[Status](demo://Status.tsx)

### Note

<div class="note note-warning">
  <div class="note-title">Warning!</div>
  <div class="note-body">
    Please note that <strong>it is not possible</strong> to add Tooltip
    component outside Layout component to work with Layout event
  </div>
</div>

</MdxCard>
