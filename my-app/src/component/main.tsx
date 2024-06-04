"use client"

import React, {useEffect } from "react";
import { Typed } from "react-typed";

export default function Main() {

  useEffect(() => {
    const element = document.getElementById('typed-element');
    if (element) {
      new Typed(element, {
        strings: ["안녕하세요! <br> 프론트엔드 개발자 김민균입니다."],
        typeSpeed: 50,
        // loop: false,
      });
    }
  }, []);


  return (
    <div className="text-light-green" 
    style={{
      backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-smooth-blue-flowing-wave-background_1017-19954.jpg?t=st=1717501769~exp=1717505369~hmac=424d6da602dfd1bec218e11721fa5ab47305a8617d993edf7167ddc840c82d22&w=1480)',
      height:'950px',
      width:'full',
      backgroundSize: 'cover',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontSize:'40px'
    }}
    >
      <div style={{
        width:'800px',
        height:'400px',
        position:'relative',
        top:'15%',
        left:'5%',
        margin:'auto',
      }}>
        <div id="typed-element"/>
      </div>
    </div>
  );
}

