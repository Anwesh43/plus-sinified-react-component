import {divideScale} from './utils'
import React from 'react'

const sizeFactor = 3
const strokeWidthFactor = 60
const background = '#3F51B5'


const getPlusLineStyle = (scale, i, n, w, h) => {
    const size = Math.min(w, h) / sizeFactor
    const strokeWidth = Math.min(w, h) / strokeWidthFactor
    const sc1 = divideScale(scale, i, n)
    const sc2 = divideScale(scale, i + 2, n)
    const wDynamic = (size * sc1 + size * sc2) * (1 - i) + i * strokeWidth
    const xDynamic = (size * sc2) * (1 - i) + i * (strokeWidth / 2)
    const hDynamic = (size * sc1 + size * sc2) * (i) + (1 - i) * strokeWidth
    const yDynamic = (size * sc2) * i + i * (strokeWidth / 2) * (1 - i)
    const left = `${w / 2 - xDynamic}px`
    const height = `${hDynamic}px`
    const top = `${h / 2 - yDynamic}px`
    const position = 'absolute'
    const width = `${wDynamic}px`
    console.log(scale)
    //const WebkitTransform = `rotate(${90 * i}deg)`
    return {position, width, height, top, left, background}
}

const PlusLine = ({scale, i, n, w, h}) => {
    return <div style = {getPlusLineStyle(scale, i, n, w, h)}></div>
}

export default PlusLine
