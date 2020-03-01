# React hooks for carousel functionality

### Super simple/basic hook and APIs for creating and controlling any type of carousel

## Basic usage

```JSX
import React from "react";
import useCarousel from "./hooks/useCarousel";

import doggo from "./img/doggo1.jpg";
import doggo2 from "./img/doggo2.jpg";
import doggo3 from "./img/doggo3.jpg";

export default function App() {
  const imgs = [doggo, doggo2, doggo3];

  const { index, next, previous, pause, resume, paused } = useCarousel({
    dataArray: imgs,
    interval: 3000
  });

  return (
    <div className="carousel-container">
      <img src={imgs[index]} alt="Good doggy" />
      <div className="carousel-controls">
        <button onClick={previous}>Previous</button>
        {paused ? (
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

Arguments passed to useCarousel() invocation

### `dataArray`

Array of items to display in carousel

Ex: `const data = [imgOne, imgTwo, imgThree]`

- Type: `Array` of `Any`
- Required: `true`
- Default: `undefined`

<hr>

### `interval`

Time in milliseconds to increment carousel index

- Type: `Number`
- Required: `true`
- Default: `undefined`

<hr>

# Returned Values

Values returned by the `useSpeechToText()` invocation

Ex:

```js
const { index, next, previous } = useCarousel({ dataArray, interval });
```

### `index`

Current index of the carousel

- Type: `Number`
- Default: `0`

<hr>

### `next`

Function to manually increment carousel index

- Type: `Func`

<hr>

### `previous`

Function to manually decrement carousel index

- Type: `Func`

<hr>

### `pause`

Function to pause carousel interval increment

- Type: `Func`

<hr>

### `paused`

Boolean of the current paused state of the carousel

- Type: `Boolean`
- Default: `false`

<hr>

### `resume`

Function to manually resume carousel index interval

- Type: `Func`

<hr>
