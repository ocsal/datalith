# @datalith/ripple

```sh
yarn add @datalith/ripple
```

## Docs

```jsx
<Ripple
  className="ripple"
  width={width}
  height={height}
  data={data}
  center={x: width / 2, y: height / 2}
/>
```

| Name             | Default                         | Type                              | Description                                                  |
| :--------------- | :------------------------------ | :-------------------------------- | :----------------------------------------------------------- |
| className        |                                 | `string`                          | Custom css classes to pass to the SVG                        |
| <b>width \*</b>  |                                 | `number`                          | Width of the SVG                                             |
| <b>height \*</b> |                                 | `number`                          | Height of the SVG                                            |
| <b>data \*</b>   |                                 | `Array<Datum>` or `Array<number>` | Array of data                                                |
| value            | `(Datum) => Datum`              | `(Datum) => number` or `number`   | Value accessor                                               |
| color            | `rgb(0,0,0)`                    | `(Datum) => string` or `string`   | Color accessor                                               |
| center           | `{x: width / 2, y: height / 2}` | `{x: number, y: number}`          | Center of the dataviz                                        |
| fill             | `true`                          | `boolean`                         | Whether to add the fill color                                |
| stroke           | `false`                         | `boolean`                         | Whether to add the stroke color                              |
| tooltip          |                                 | `(Datum) => string`               | Return HTML or text as a string to show on element mouseover |