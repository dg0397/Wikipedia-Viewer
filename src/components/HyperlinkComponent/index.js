import React from 'react'
import {Hyperlink} from './styles'

export default function HyperlinkComponent({type = 'simple',href,children}) {
    return <Hyperlink href = {href} type = {type} target = "_blank" rel="noopener noreferrer" >{children}</Hyperlink>
}
