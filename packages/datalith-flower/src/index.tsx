import { callOrGetValue, Color, Datum, Value } from '@datalith/util'
import * as React from 'react'
import Tooltip from 'react-tooltip'

const DEFAULT_COLOR = '#000000'
interface Props {
  /** Custom css classes to pass to the SVG element */
  className?: string
  /** Custom style object to apply to the SVG */
  style?: React.CSSProperties
  /** Width of the SVG */
  width: number
  /** Height of the SVG */
  height: number
  /** Data array */
  data: Datum[]
  /** Value Accessor */
  value: Value
  /** Color Accessor */
  color: Color
  /** Padding between elements */
  padding: number
  /** Add the fill color */
  fill: boolean
  /** Add the stroke color */
  stroke: boolean
  /** Center of the dataviz */
  center?: { x: number; y: number }
  /** Return HTML or text as a string to show on element mouseover */
  tooltip?: (d: Datum) => string
}

interface PolygonProps {
  datum: Datum
  value: Value
  color: Color
  index: number
  dataLength: number
  padding: number
  fill: boolean
  stroke: boolean
  center: { x: number; y: number }
  tooltip?: (d: Datum) => string
}

const getPolygonPoints = ({ index, value, center: { x, y }, padding, dataLength }): string => {
  const baseAngle = (Math.PI * 2) / dataLength
  const startAngle = Math.PI / 2 + index * baseAngle
  const middleAngle = startAngle + baseAngle / 2
  const endAngle = startAngle + baseAngle
  const complementarAngle = Math.PI - baseAngle / 2 - Math.PI / 2
  const longSide = value * (Math.sin(complementarAngle) + Math.cos(complementarAngle))

  const p0 = {
    x: x + padding * Math.cos(middleAngle),
    y: y + padding * Math.sin(middleAngle),
  }
  const p1 = {
    x: p0.x + value * Math.cos(startAngle),
    y: p0.y + value * Math.sin(startAngle),
  }
  const p2 = {
    x: p0.x + longSide * Math.cos(middleAngle),
    y: p0.y + longSide * Math.sin(middleAngle),
  }
  const p3 = {
    x: p0.x + value * Math.cos(endAngle),
    y: p0.y + value * Math.sin(endAngle),
  }

  const points = [p0, p1, p2, p3]
  return points.map(p => `${p.x},${p.y}`).join(' ')
}

const Polygon = ({
  datum,
  value: valueAccessor,
  color: colorAccessor,
  dataLength,
  index,
  center,
  padding,
  fill,
  stroke,
  tooltip,
}: PolygonProps) => {
  const color = callOrGetValue(colorAccessor, datum, index)

  const style = {
    fill: fill ? color : 'transparent',
    stroke: stroke ? color : 'transparent',
  }
  const polygonPoints = getPolygonPoints({
    index,
    dataLength,
    value: callOrGetValue(valueAccessor, datum, index),
    padding,
    center,
  })

  return (
    <g data-tip={tooltip && tooltip(datum)}>
      <polygon points={polygonPoints} style={style} />
    </g>
  )
}

export class Flower extends React.Component<Props> {
  static defaultProps = {
    value: d => d,
    color: DEFAULT_COLOR,
    fill: true,
    stroke: false,
    padding: 40,
  }

  render() {
    const {
      className,
      style,
      data,
      value,
      color,
      width,
      height,
      fill,
      stroke,
      padding,
      tooltip,
      center = {
        x: this.props.width / 2,
        y: this.props.height / 2,
      },
    } = this.props

    return (
      <>
        <svg className={className} style={style} width={width} height={height}>
          {data.map((datum, i) => (
            <Polygon
              key={i}
              index={i}
              center={center}
              datum={datum}
              value={value}
              color={color}
              dataLength={data.length}
              padding={padding}
              fill={fill}
              stroke={stroke}
              tooltip={tooltip}
            />
          ))}
        </svg>
        <Tooltip html />
      </>
    )
  }
}
