import React from 'react'

export function Item(props){
    return(
        <img
            className = 'd-block w-100'
            style = {{ maxHeight: '800px'}}
            src = {props.src}
            alt = {props.alt}
        />
    )
}