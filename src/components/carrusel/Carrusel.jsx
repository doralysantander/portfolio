import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import Project from "../../assets/project1.jpg"
import Project3 from '../../assets/project3.svg';
import Project4 from '../../assets/img4.svg';
import Project5 from '../../assets/project4.svg'

const images =[Project, Project3, Project4,Project5]

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }
  //{ width: 1200, itemsToShow: 4 }
];

const Carrusel = () => {
  const [items, setItems] = useState(images)
  return (
    <div id="home"  className="App">
      <div className="controls-wrapper">
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper ">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item} ><img  className="shadow-lg shadow-[#CCD6F6] group container rounded-md flex justify-center items-center mx-auto content-div" src={item} alt="img"/></Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carrusel


