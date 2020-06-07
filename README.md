# React hooks for carousel functionality

### Super simple/basic hook and APIs for creating and controlling any type of carousel

# Code sandbox demo

https://codesandbox.io/s/unruffled-sun-td66r

## Basic usage

```JSX
import React from "react";
import useCarousel from "./hooks/useCarousel";

import doggo from "./img/doggo1.jpg";
import doggo2 from "./img/doggo2.jpg";
import doggo3 from "./img/doggo3.jpg";

const data = [doggo, doggo2, doggo3];

export default function App() {
  const { index, next, previous, pause, resume, isPaused } = useCarousel({
    dataArray: data,
    interval: 3000,
    allowArrowKeysNavigation: true
  });

  return (
    <div className="carousel-container">
      <img src={data[index]} alt="Good doggy" />
      <div className="carousel-controls">
        <button onClick={previous}>Previous</button>
        {isPaused ? (
          <button onClick={resume}>Play</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
```

# Arguments

Arguments passed to `useCarousel` invocation

### `dataArray`

Array of items used to increment and decrement carousel index

Ex: `const data = [imgOne, imgTwo, imgThree]`

- Type: `any[]`
- Required: `true`
- Default: `undefined`

<hr>

### `interval`

Time in milliseconds to increment carousel index

- Type: `number`
- Required: `true`
- Default: `undefined`

### `allowArrowKeysNavigation`

Boolean to allow navigation the carousel using keyboard arrow keys

- Type: `boolean`
- Required: `false`
- Default: `undefined`

<hr>

# Returned Values

Values returned by the `useCarousel` invocation

Ex:

```js
const { index, next, previous } = useCarousel({ dataArray, interval });
```

### `index`

Current index of the carousel

- Type: `number`
- Default: `0`

<hr>

### `next`

Function to manually increment carousel index

- Type: `() => void`

<hr>

### `previous`

Function to manually decrement carousel index

- Type: `() => void`

<hr>

### `pause`

Function to pause carousel interval increment

- Type: `() => void`

<hr>

### `isPaused`

Boolean of the current paused state of the carousel

- Type: `boolean`
- Default: `false`

<hr>

### `resume`

Function to manually resume carousel index interval

- Type: `() => void`

<hr>
