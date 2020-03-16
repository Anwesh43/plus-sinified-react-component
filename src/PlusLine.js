import {divideScale} from './utils'

const sizeFactor = 9
const strokeWidthFactor = 60
const background = '#3F51B5'

const getPlusLineStyle = (scale, i, n, w, h) => {
    const size = Math.min(w, h) / sizeFactor
    const sc1 = divideScale(scale, i, n)
    const sc2 = divideScale(scale, i + 2, n)
    const left = `${w / 2 - size * sc2}px`
    const strokeWidth = Math.min(w, h) / strokeWidthFactors
    const height = `${strokeWidth}px`
    const top = `${h / 2 - strokeWidth / 2}px`
    const position = 'absolute'
    const width = `${size * sc1 + size * sc2}px`
    const WebkitTransform = `rotate(${90 * i}deg)`
    return {position, width, height, top, left, WebkitTransform, background}
}

const PlusLine = ({scale, i, n, w, h}) => {
    return <div style = {getPlusLineStyle(scale, i, n, w, h)}></div>
}

export default PlusLine
