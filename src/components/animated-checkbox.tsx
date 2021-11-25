import React from 'react'
import { useEffect, memo } from 'react'
import Animated, {
Easing, useSharedValue, withTiming, interpolateColor } from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN

const CheckMarkPath = 
'M6 27.5L14.1318 44.4708C15.8333 48.0217 20.4361 48.9989 23.4335 46.4455L58 17'
const outlineBoxPath = 
'M6 27.5L14.1318 44.4708C15.8333 48.0217 20.4361 48.9989 23.4335 46.4455L58 17'

const AnimatedCheckbox = () => {
    return (
        <Svg 
        viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
        >
        <Path d={outlineBoxPath} stroke="black" /> 
        <Path d={CheckMarkPath} stroke="black" />

        </Svg>
    )
}


export default AnimatedCheckbox ;
