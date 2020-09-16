import React from 'react'
import { Link , Button } from './styles'

export default function ButtonComponent({href,children,type}) {
    return href ? <Link href = {href} type = {type}>{children}</Link> : <Button type = {type} >{children}</Button>
}
