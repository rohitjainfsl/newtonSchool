import React from "react";
import { BrowserRouter as Jishnu, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Header from "./Header";
import SingleBlog from "./SingleBlog";
import BlogParent from "./BlogParent";

function Home() {
  return (
    <>
      <Jishnu>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>



          <Route path="/blog" element={<BlogParent />}>
            <Route index element={<Blog />}></Route>
            <Route path=":id" element={<SingleBlog />}></Route>  
          </Route> 



          
                   
        </Routes>
      </Jishnu>
    </>
  );
}

export default Home;
