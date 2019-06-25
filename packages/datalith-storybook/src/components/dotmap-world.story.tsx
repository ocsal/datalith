import { DotMapWorld } from '@datalith/dotmap/src'
import notes from '@datalith/dotmap/src/components/DotMapWorld/README.md'
import { storiesOf } from '@storybook/react'
import { geoOrthographic } from 'd3-geo'
import * as React from 'react'
import { genCoordsValue } from '../scripts'

const width = window.innerWidth
const height = window.innerHeight
const defaultData = genCoordsValue(2000)
const side = 5

storiesOf('DotMap/DotMapWorld', module)
  .addParameters({ notes })
  .add('natural earth', () => {
    return (
      <DotMapWorld
        width={width}
        height={height}
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
      />
    )
  })
  .add('orthographic', () => {
    return (
      <DotMapWorld
        width={width}
        height={height}
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        projection={geoOrthographic()}
      />
    )
  })
  .add('stroke', () => {
    return (
      <DotMapWorld
        width={width}
        height={height}
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        stroke
        fill={false}
      />
    )
  })
  .add('tooltip', () => {
    return (
      <DotMapWorld
        width={width}
        height={height}
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        tooltip={({ v, y, z }) => `<p><b>Value: </b>${y && y.toFixed(2)}</p>`}
      />
    )
  })
