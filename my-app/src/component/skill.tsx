import React from "react";
import S from './skill.module.css';

export default function Skill() {

  return (
    <div className="mt-24 mb-24 text-black" 
    style={{backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-smooth-blue-flowing-wave-background_1017-19954.jpg?t=st=1717501769~exp=1717505369~hmac=424d6da602dfd1bec218e11721fa5ab47305a8617d993edf7167ddc840c82d22&w=1480)',
      height:'950px',
      width:'full',
      backgroundSize: 'cover',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}
    >
      <div style={{
        width:'1000px',
        height:'500px',
        position:'relative',
        fontSize:'30px',
        fontWeight:'550',
      }}>
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'10px 10px 0px 0px',
          backgroundColor:'#FF611D',
          color:'white',
          cursor:'pointer',
        }}
        title="스킬 열기">
          Skill
        </div>
        <div 
          className="skill-content-box"
          style={{
          width:'100%',
          height:'100%',
          background: 'rgba( 255, 255, 255, 0.25 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 4px )',
          WebkitBackdropFilter: 'blur( 4px )',
          borderRadius: '0px 0px 10px 10px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )'
        }}>
          <div style={{
            padding:'20px 0px 0px 20px',
            color:'white'
          }}>Front-end developer</div>
          
          <div style={{
            display:'flex',
          }}>
          <img 
          src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="html icon" 
          style={{
            width:'80px',
            padding:'10px',
            position:'relative',
            left:'3px'
          }}/>
          <img 
          src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="css icon" 
          style={{
            width:'80px',
            padding:'10px',
            transition:'.6s',
          }}/>
          <img 
          src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="javascript icon" 
          style={{
            width:'50px',
            margin:'13px',
            height:'50px',
            position:'relative',
            borderRadius:'8px',
            top:'6px',
            left:'6px'
          }}/>
          <img 
          src="data:image/png;base64,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" 
          alt="typescript icon" 
          style={{
            margin:'13px',
            width:'50px',
            height:'50px',
            position:'relative',
            borderRadius:'8px',
            top:'6px',
            left:'20px'
          }}/>
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaS4je2IbA_gRUhC8xc0HaCSlZFjAgFHADA&s" alt="react icon" 
          style={{
            margin:'13px',
            width:'90px',
            height:'50px',
            position:'relative',
            top:'6px',
            left:'30px',
            borderRadius:'8px',
          }}/>
          <img 
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqVI6V%2FbtsCauREBTl%2FjQxLDHk0caTqCZJe91Wkr0%2Fimg.png" alt="next.js icon" 
            style={{
              margin:'13px',
              width:'80px',
              height:'50px',
              position:'relative',
              top:'6px',
              left:'40px',
              borderRadius:'8px',
          }}/>
          <img 
            src="data:image/png;base64,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"
            alt="vue icon"
            style={{
              margin:'13px',
              width:'100px',
              height:'50px',
              position:'relative',
              top:'6px',
              left:'50px',
              borderRadius:'8px',
          }}/>
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Al9fl7_yid1TdvuEKlLSyjm3mzmlMJGI8g&s" alt="redux icon" 
          style={{
            margin:'13px',
            width:'100px',
            height:'50px',
            position:'relative',
            top:'6px',
            left:'55px',
            borderRadius:'8px',
          }}/>
          <div style={{
            backgroundColor:"white",
            position:'relative',
            top:'6px',
            left:'65px',
            height:'50px',
            width:'100px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            margin:'13px',
            borderRadius:'8px',
          }}>
            <img 
            src="https://i.namu.wiki/i/nM9EcQ7qgJqqdpbkSpPmE4Xx-KeDbC5h_vJpOkarPogOwLsNukpi7921MNyIMPQJ5yB-B3HjThgm0TtmhjoaFWtm1X6fFm4uk0hBDxiSC-k1XY7AJ4YuGSLV6YH5z7q5LYctP5d_7SB49JU9NUSyUQ.svg" alt="recoil icon"
            style={{
              width:'80px',
              height:'50px',
              borderRadius:'15px',
            }}/>
          </div>
          </div>

          <div style={{
            padding:'15px 0px 0px 20px',
            color:'white'
          }}>Back-end developer</div>

          <div style={{display:'flex'}}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/109px-Python-logo-notext.svg.png"
            style={{
              margin:'13px',
              width:'50px',
              height:'50px',
              borderRadius:'15px',
              position:'relative',
              left:'5px'
            }}/>
            <img 
            src="data:image/jpeg;base64,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"
            style={{
              margin:'13px',
              width:'100px',
              height:'50px',
              borderRadius:'8px',
              position:'relative',
              left:'5px'
            }}/>
          </div>

          <div style={{
            padding:'15px 0px 0px 20px',
            color:'white'
          }}>Team Toolkit</div>

          <div style={{display:'flex'}}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/100px-Notion-logo.svg.png"
            style={{
              margin:'13px',
              width:'50px',
              height:'50px',
              position:'relative',
              left:'8px'
            }}/>
             <img 
              src="data:image/png;base64,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"
              alt="jira icon"
              style={{
                margin:'13px',
                width:'100px',
                height:'50px',
                position:'relative',
                borderRadius:'8px',
                left:'8px'
              }}/>
             <img 
             src="data:image/png;base64,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"
             alt="jira icon" 
             style={{
                margin:'13px',
                width:'110px',
                height:'50px',
                position:'relative',
                borderRadius:'8px',
                left:'8px'
              }}/>
          </div>

        </div>
      </div>
    </div>
  );
}