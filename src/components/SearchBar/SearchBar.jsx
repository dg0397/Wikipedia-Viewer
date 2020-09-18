import React from 'react';
import {AppForm, RandomPageComponent} from './styles'
import Hyperlink from 'components/HyperlinkComponent';
import Form from 'components/Form'

function SearchBar(){
    return(
        <AppForm>
            <Form />
            <RandomPageComponent>
                <Hyperlink href="https://en.wikipedia.org/wiki/Special:Random" type = "buttonLink">Get a Ramdom Article</Hyperlink>
            </RandomPageComponent>
        </AppForm>
    )
}

export default React.memo(SearchBar)