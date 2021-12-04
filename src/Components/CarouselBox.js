import React from 'react'
import { Carousel } from 'react-bootstrap'
import firstSlide from '../assets/photo1.jpg'
import secondSlide from '../assets/photo2.jpg'
import thirdSlide from '../assets/photo3.jpg'
import { Item } from './CarouselImage'

export function CarouselBox(){
    return(
        <Carousel>
            <Carousel.Item>
                <Item src = {firstSlide} alt = 'first'/>
            </Carousel.Item>
            <Carousel.Item>
                <Item src = {secondSlide} alt = 'second'/>
            </Carousel.Item>
            <Carousel.Item>
                <Item src = {thirdSlide} alt = 'third'/>
            </Carousel.Item>
        </Carousel>
    )
}