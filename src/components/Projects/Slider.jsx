import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from 'styled-components';

let data = [
  {
    img : require("./portfolio.PNG"),
    disc : "This is my portfolio website which I have created using ReactJs and CSS styled-components.",
    link : ""
  },
  {
    img : require("./travel.PNG"),
    disc : "This is a travel management website created using AngularJs, NodeJs and MongoDB.",
    link : "https://github.com/nimeshthakur0/Travel-Planneer"
  },
  {
      img : require("./quotes.PNG"),
      disc : "This is a website which generates quotes for you to keep you going and is created using ReactJs.",
      link : "https://github.com/nimeshthakur0/Random-Quotes-Generator"
  },
  {
    img : require("./blockpay.PNG"),
    disc : "This is a design that I created for the app called Blockpay using Figma.",
    link : "https://www.figma.com/file/Cw6jYicYqJoUkifVRjANGX/BlockPay?type=design&node-id=0%3A1&mode=design&t=TAFaWNWFrhI2McCV-1"
  },
  {
    img : require("./markdown.PNG"),
    disc : "This is markdown previewer website which lets you see the output of your HTML code in real time as you type.",
    link : "https://github.com/nimeshthakur0/Markdown-Previewer-using-React"
  }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};

const SliderComp = () => {
    const arrowRef = useRef(null);
      let sliderProject = "";
      sliderProject = data.map((item,i) => (
        <Project item = {item} key = {i}/>
      ))
  return (
    <Container>
      <Slider ref = {arrowRef} {...settings}>
          {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255,255,255,0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`