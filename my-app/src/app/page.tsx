"use client"
import React, { useRef } from 'react';

import Main from "@/component/main";
import Skill from "@/component/skill";
import Project from "@/component/project";

export default function Home() {

  const mainRef = useRef(null); 
  const skillRef = useRef(null); 
  const projectRef = useRef(null); 

  const scrollToComponent = (ref:any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="bg-black h-24 fixed top-0 left-0 right-0 z-11">
        <div className="flex absolute top-0 right-5">
          <div className="text-light-green m-5 cursor-pointer" onClick={() => scrollToComponent(mainRef)}>PROFILE</div>
          <div className="text-light-green m-5 cursor-pointer" onClick={() => scrollToComponent(skillRef)}>SKILL</div>
          <div className="text-light-green m-5 cursor-pointer" onClick={() => scrollToComponent(projectRef)}>PROJECT</div>
        </div>
      </div>
      <div className="w-full h-full">
        <div ref={mainRef}>
          <Main/>
        </div>
        <div ref={skillRef}>
          <Skill/>
        </div>
        <div ref={projectRef}>
          <Project/>
        </div>
      </div>
      <div className="bg-black h-24 fixed bottom-0 left-0 right-0 z-11"></div>
    </div>
  );
}
