import React from "react";
import { Footer , FooterParagraph } from './styles';
import Hyperlink from 'components/HyperlinkComponent'

export default function FooterComponent(){
    return (
        <Footer>
            <FooterParagraph>Coded by <Hyperlink href="https://github.com/dg0397" type = 'simple'>DG0397</Hyperlink></FooterParagraph>
        </Footer>
    )
}