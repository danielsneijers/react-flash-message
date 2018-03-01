# React Flash Message ✨

Simple component that unmounts a component after a given delay. It adds no styling or animations, you can use other components like [react-transition-group](https://github.com/reactjs/react-transition-group) for that.

## Example

```javascript
import React from 'react';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message'

const Message = () => (
  <FlashMassage duration={5000}>
    <strong>I will disapper in 5 seconds!</strong>
  </FlashMessage>
)

render(Message, document.body);
```

## Options

```json
{
  duration: 5000 // Duration of visibility in ms
  persistOnHover: true // Pause timer when user hovers on message
}
```
