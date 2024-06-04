import React from "react";

export default function Project() {
  return (
    <div className="mt-24 mb-24" 
    style={{backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-smooth-blue-flowing-wave-background_1017-19954.jpg?t=st=1717501769~exp=1717505369~hmac=424d6da602dfd1bec218e11721fa5ab47305a8617d993edf7167ddc840c82d22&w=1480)',
      height:'950px',
      width:'full',
      backgroundSize: 'cover',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}
    >
      <div
      style={{
        width:'1400px',
        height:'550px',
        background: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        WebkitBackdropFilter: 'blur( 4px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )'
      }}>
        <div style={{height:'50px', fontSize:'30px', backgroundColor:'#FF611D', color:'white', display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '10px 10px 0 0', fontWeight:'550',}}>Project</div>

        <div style={{display:'flex'}}>

          <div style={{
            width:'300px',
            height:'400px',
            margin:'40px auto auto auto',
            backgroundColor:'white',
            borderRadius:'3px',
          }}>
            <div style={{fontSize:'20px', fontWeight:'550', margin:'20px 0px 0px 20px'}}>Tati - 웹캠스터디</div>
            <img src="https://github.com/alsrbs/tati/raw/master/img/Untitled.png" alt="" 
            style={{
              width:'270px',
              margin:'10px auto',
              border:'3px solid black',
              borderRadius:'10px'
            }}
            />
            <ul style={{
              margin:'15px 0px 0px 20px', fontSize:'14px', fontWeight:'550'
            }}>
              <li style={{marginBottom:'5px'}}>일정 : 2023.07 ~ 2023.08</li>
              <li style={{marginBottom:'5px'}}>인원 : FE 2명, BE 4명</li>
              <a href="https://github.com/alsrbs/tati">
                <li style={{marginBottom:'5px'}}>url : https://github.com/alsrbs/tati</li>
              </a>
              <li>사용스킬</li>
              <div>JavaScript, React, Redux-tookit, Openvidu</div>
            </ul>
          </div>

          <div style={{
            width:'300px',
            height:'400px',
            margin:'40px auto auto auto',
            backgroundColor:'white',
            borderRadius:'3px'
          }}>
            <div style={{fontSize:'20px', fontWeight:'550', margin:'20px 0px 0px 20px'}}>BLOCK STOCK</div>
            <img src="https://github.com/alsrbs/BlockStock/raw/master/img/login.gif" alt="" 
            style={{
              width:'270px',
              margin:'10px auto',
              border:'3px solid black',
              borderRadius:'10px'
            }}
            />
            <ul style={{
              margin:'15px 0px 0px 20px', fontSize:'14px', fontWeight:'550'
            }}>
              <li style={{marginBottom:'5px'}}>일정 : 2023.08 ~ 2023.10</li>
              <li style={{marginBottom:'5px'}}>인원 : FE 3명, BE 3명</li>
              <a href="https://github.com/alsrbs/BlockStock">
                <li style={{marginBottom:'5px'}}>url : https://github.com/alsrbs/BlockStock</li>
              </a>
              <li>사용스킬</li>
              <div>Typescript, React, vite, Recoil, Styled Components </div>
            </ul>
          </div>

          <div style={{
            width:'300px',
            height:'400px',
            margin:'40px auto auto auto',
            backgroundColor:'white',
            borderRadius:'3px'
          }}>
            <div style={{fontSize:'20px', fontWeight:'550', margin:'20px 0px 0px 20px'}}>EEFY</div>
            <img src="https://github.com/alsrbs/EEFY/raw/main/img/signup.gif" alt="" 
            style={{
              width:'270px',
              margin:'10px auto',
              border:'3px solid black',
              borderRadius:'10px'
            }}
            />
            <ul style={{
              margin:'15px 0px 0px 20px', fontSize:'14px', fontWeight:'550'
            }}>
              <li style={{marginBottom:'5px'}}>일정 : 2023.10 ~ 2023.11</li>
              <li style={{marginBottom:'5px'}}>인원 : FE 3명, BE 3명</li>
              <a href="https://github.com/alsrbs/EEFY">
                <li style={{marginBottom:'5px'}}>url : https://github.com/alsrbs/EEFY</li>
              </a>
              <li>사용스킬</li>
              <div>Typescript, Next.js, next-pwa, Recoil, Styled Components, tailwindcss </div>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}