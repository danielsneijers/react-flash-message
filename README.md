# React Flash Message ✨

Simple component that unmounts a component after a given delay. It adds no styling or animations, you can use other components like [react-transition-group](https://github.com/reactjs/react-transition-group) for that.

## Basic Example

```jsx
import React from 'react';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message'

const Message = () => (
  <FlashMessage duration={5000}>
    <strong>I will disapper in 5 seconds!</strong>
  </FlashMessage>
)

render(Message, document.body);
```

## API

### Component

```jsx
import FlashMessage from 'react-flash-message';

// inside render
<FlashMessage duration={5000} persistOnHover={true}>
  <p>Message</p>
</FlashMessage>;
```

### Props

| Prop             | Type   | Default | Description                                                      |
| ---------------- | ------ | ------- | ---------------------------------------------------------------- |
| `duration`       | number | 5000    | Number of milliseconds the component will show                   |
| `persistOnHover` | bool   | true    | Will not remove the component when the user hovers on it if true |

## Issues

Feel free to contribute. Submit a Pull Request or open an issue for further discussion.

## License

MIT
