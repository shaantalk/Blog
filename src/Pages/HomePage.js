import React from "react";
import Hero from "../Components/Hero";
// import Skills from "../Components/Skills";
import Technologies from "../Components/Technologies";
export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <div className='row'>
        <div className='col-sm-8'> */}
      <Technologies />
      {/* </div>
        <div className='col-sm-4'>
          <Skills />
        </div>
      </div> */}
    </>
  );
}
