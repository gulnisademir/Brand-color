import React from 'react'
import { getContrast } from '../Helpers'

export const Copied = ({color}) => {
  return (
    <div className='copied' 
    style={{
    "--bgColor": `#${color}`,
    "--textColor": `${getContrast(color)}`,
  }}>
        Copied to #{color} Clipboard
    </div>
  )
}
