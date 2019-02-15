# Transition Tailwind Plugin

## Installation
Add this plugin to your project:

# Install via npm
```sh
npm install yutahaga/tailwindcss-transition
```

## Usage

```js
require('@yutahaga/tailwindcss-transition')({
  easings: {
    'ease-in': 'ease-in'
  },
  durations: {
    fast: 100
  },
  prefix: 'transition-',
  variants: []
})
```

This configuration would create the following classes:

```css
.transition-ease-in { transition-timing-function: ease-in }
.transition-fast { transition-duration: 0.1s }
```
