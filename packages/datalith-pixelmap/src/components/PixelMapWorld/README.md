# \<PixelMapWorld \/>

```jsx
<PixelMapWorld
  className="pixel-map-world"
  width={width}
  height={height}
  side={5}
  data={data}
  projection={projection}
/>
```

| Name             | Default              | Type                                                | Description                                                  |
| :--------------- | :------------------- | :-------------------------------------------------- | :----------------------------------------------------------- |
| className        |                      | `string`                                            | Custom css classes to pass to the SVG                        |
| <b>width \*</b>  |                      | `number`                                            | Width of the SVG                                             |
| <b>height \*</b> |                      | `number`                                            | Height of the SVG                                            |
| <b>data \*</b>   |                      | `Array<Datum>` or`Array<[number, number]>`          | Array of data                                                |
| coords           | `(Datum) => Datum`   | `(Datum) => [number, number]` or `[number, number]` | Coords accessor                                              |
| value            | 10                   | `(Datum) => number` or`number`                      | Value accessor                                               |
| color            | `rgb(0,0,0)`         | `(Datum) => string` or `string`                     | Color accessor                                               |
| projection       | `geoNaturalEarth1()` | `GeoProjection`                                     | D3 GeoProjection to map coordinates                          |
| side             | `5`                  | `number`                                            | Grid cell dimension                                          |
| fill             | `true`               | `boolean`                                           | Whether to add the fill color                                |
| stroke           | `false`              | `boolean`                                           | Whether to add the stroke color                              |
| tooltip          |                      | `(Datum) => string`                                 | Return HTML or text as a string to show on element mouseover |