import React, { createContext, useState } from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";

// A context is an object in React, just like state & prop.
// Context however has to be created.
// This context is that object which will hold our global state, the state variables held inside context are those variabels which any component in the component tree can use freely, without the need of prop drilling.

//Provider provides data to the context, which then can be used freely by any component


//Redux is dedicated global state manangement tool where we keep all the states separate in a store


export const ecommerceContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <ecommerceContext.Provider value={{cart, setCart}}>
        <Header />
        <Products />
        <Footer />
      </ecommerceContext.Provider>
    </>
  );
}

export default App;
