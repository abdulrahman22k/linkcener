import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ColorPicker } from 'react-color-gradient-picker'
import { ChromePicker, BlockPicker } from 'react-color'


import 'react-color-gradient-picker/dist/index.css'

const gradient = {
    points: [
        {
            left: 0,
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        },
        {
            left: 100,
            red: 255,
            green: 0,
            blue: 0,
            alpha: 1
        }
    ],
    degree: 0,
    type: 'linear'
}

function Test() {
    const [gradientAttrs, setGradientAttrs] = useState(gradient)
    
    const onChange = (gradientAttrs) => {
        setGradientAttrs(gradientAttrs)
        console.log(gradientAttrs)
    }
  
    return (
        <div style={{backgroundColor: gradientAttrs.style, background:gradientAttrs.style} }>
            <ChromePicker
                disableAlpha
                className='shadow-none'
            />
            <ColorPicker
                onStartChange={onChange}
                onChange={onChange}
                onEndChange={onChange}
                gradient={gradientAttrs}
                isGradient
            />
        </div>
    )
}


export default Test
