import React from 'react'
import { useEffect, memo } from 'react'
import Animated, {
Easing, useSharedValue, withTiming, interpolateColor, useAnimatedProps } from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg';

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const CheckMarkPath = 
'M6 27.5L14.1318 44.4708C15.8333 48.0217 20.4361 48.9989 23.4335 46.4455L58 17'
const outlineBoxPath = 
'M6 27.5L14.1318 44.4708C15.8333 48.0217 20.4361 48.9989 23.4335 46.4455L58 17'
const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
    checked?: boolean
}



const AnimatedCheckbox = (props: Props) => {
    const {checked} = props
    const checkmarkColor = '#000000'
    const highlightedColor = '#ff000'
    const boxOutlineColor = '#000000'

    const progress = useSharedValue(0)

    useEffect(() => {
        progress.value = withTiming(checked ? 1 : 0, {
            duration : Easing.linear
        })
    }, [checked])

    const animatedBoxProps = useAnimatedProps(
        () => ({
            stroke: interpolateColor(
                Easing.bezier(0.16,1,0.3,1)(progress.value),
            [0,1],
            ['#00000000', highlightColor],
            'RGB'
        ),
        fill: interpolateColor(
            Easing.bezier(0.16,1,0.3,1)(progress.value),
            [0,1],
            ['#00000000', highlightColor],
            'RGB'
        )
        }), [highlightColor, boxOutlineColor])

    return (
        <Svg 
        viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
        >
         
    <AnimatedPath 
        d={outlineBoxPath} 
        strokeWidth={7} 
        strokeLinejoin="round" 
        strokeLinecap="round"
        animatedProps={animatedBoxProps}
        />
    <Path 
        d={CheckMarkPath} stroke="black" />

        </Svg>
    )
}


export default AnimatedCheckbox ;
