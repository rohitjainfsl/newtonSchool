import React from "react";
import Header from "./Header";
import Section from "./Section";
import './tesla.css'
import Model3 from './images/model-3.jpg'
import ModelS from './images/model-s.jpg'
import ModelX from './images/model-x.jpg'
import ModelY from './images/model-y.jpg'
import SolarRoof from './images/solar-roof.jpg'
import SolarPanel from './images/solar-panel.jpg'
import Accessories from './images/accessories.jpg'

function Home() {
  return (
    <>
      <Header />
      <Section 
        name="Model 3"
        desc="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        downArrow = {true}
        background={Model3}
      />
      <Section 
        name="Model S"
        desc="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        background={ModelS}
      />
      <Section 
        name="Model X"
        desc="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        background={ModelX}
      />
      <Section 
        name="Model Y"
        desc="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        background={ModelY}
      />
      <Section 
        name="Solar Panels"
        desc="Lower Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        background={SolarPanel}
      />
      <Section 
        name="Solar Roof"
        desc="Produce Clean Energy from your roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        background={SolarRoof}
      />
      <Section 
        name="Accessories"
        leftBtn="Order Now"
        background={Accessories}
      />
    </>
  );
}

export default Home;
