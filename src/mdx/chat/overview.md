import MdxCard from 'src/components/MdxCard';

<MdxCard>

## Chat

Conversational UI collection - a set of components for chat-like UI construction.

#### Main features:

- different message types support (text, image, file, file group, map, etc)

- drag & drop for images and files with preview

- different UI styles

</MdxCard>

<MdxCard>

### Usage

```js
import { Chat, ChatForm, ChatMessages } from '@paljs/ui/Chat';
```

Enjoy the conversation and the beautiful UI.

[Example](demo://Example.tsx)


</MdxCard>

<MdxCard>

#### Map key

for map message type you need to pass map api key you can get from [Googal Maps](https://cloud.google.com/maps-platform/)

## Messages type

#### file

like this object

```js
{
    message: 'Hey looks at that pic I just found!',
    reply: false,
    date: new Date().toLocaleTimeString(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        type: 'image/jpeg'
      }
    ],
    sender: 'Ahmed Elywa',
    avatar: ''
  }
```

### map

```js
{
  message: 'Meet me there',
  reply: false,
  date: new Date().toLocaleTimeString(),
  type: 'map',
  latitude: 30.789901,
  longitude: 30.999093,
  sender: 'Ahmed Elywa',
  avatar: ''
}
```

### quote

```jsx
{
  message: 'What do you mean by that?',
  reply: false,
  date: new Date().toLocaleTimeString(),
  type: 'quote',
  quote:
    'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
  sender: 'Ahmed Elywa',
  avatar: ''
}
```

### text

by default it work as text

```js
{
  message:
    'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
  reply: false,
  date: new Date().toLocaleTimeString(),
  sender: 'Ahmed Elywa',
  avatar: 'https://i.gifer.com/no.gif'
}
```

</MdxCard>