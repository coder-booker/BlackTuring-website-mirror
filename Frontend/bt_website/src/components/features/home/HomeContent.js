"use client";

import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css';

import ARROW from 'P/right-arrow.jpg';
import PROFILE_ICON from 'P/profile-icon.png';
import MONEY from 'P/money.png';
import SPONSOR from 'P/sponsor.png';

import { useState } from 'react';

const RESTYLE_IMG_MAP = {
  0: PROFILE_ICON, 
  1: '/profile-icon2.png',
  2: PROFILE_ICON, 
  3: PROFILE_ICON
}

function Section1() {
  return (
    <div id={style.sec1} className={style['home-sec']}>
      <div>section1</div>
      <div id={style['temp-news']}>
        <div></div>
        <div>Black Turing is Back</div>
      </div>

      <div id={style.slogan}>Slogan Slogan Slogan</div>
      <div id={style.channels} className='single-row-flex-container'>
        <Link href='./'>App</Link>
        <Link href='./'>Discord</Link>
        <Link href='./'>Youtube</Link>
      </div>

    </div>
  );
}

function Section2() {
  const [restyle, setRestyle] = useState(0);

  function handleRestyleChange(style) {
    setRestyle(style);
  }

  return (
    <div id={style.sec2} className={style['home-sec']}>
      <div>Section 2</div>
      <div id={style.slogan2}>Slogan Slogan Slogan</div>
      <div id={style['sec2-demo-blks']} className='single-row-flex-container'>
        
        <div className={style.blk}>
          <div className={style['blk-title']}><b>Text to 3D</b></div>
          {/* <video src="temp.mp4" alt="err">GIF</video> */}
        </div>

        <div className={style.blk}>
          <div className={style['blk-title']}><b>Image to 3D</b></div>
          <div className='single-row-flex-container'>
            <Image alt="err"></Image>
            <Image alt="err"></Image>
          </div>
        </div>

        <div id={style.restyle} className={style.blk}>
          <div className={style['blk-title']}><b>Restyle 3D</b></div>
          
          <Image alt="restyle" 
            src={RESTYLE_IMG_MAP[restyle]}
            width={200}
            height={200} 
          />
          
          <div id={style['restyle-selection']}className='single-row-flex-container'>
            <div className='single-col-flex-container'>
              <div onClick={() => handleRestyleChange(0)}>Cartoon</div>
              <div onClick={() => handleRestyleChange(1)}>Realistic</div>
            </div>
            <div className='single-col-flex-container'>
              <div onClick={() => handleRestyleChange(2)}>Pixel</div>
              <div onClick={() => handleRestyleChange(3)}>Anything</div>
            </div>
          </div>
        </div>
      </div>
      <div id={style.rolling}>
        <div>
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
          <Image alt="err" />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div id={style.sec3} className={style['home-sec']}>
      <div>Section 3</div>
      <div id={style.slogan3}>Slogan Slogan Slogan</div>
      <div id={style['sec3-demo-blks']} className='single-col-flex-container'>
        <div id={style['sec3-row1']} className='single-row-flex-container'>
          <div>3D Exchange</div>
          <div></div>
          <div className="single-row-flex-container">
            {/* <Image alt="err" /> */}
            <Image alt="err" 
              src={PROFILE_ICON}
              style={{width: '25%', height: 'auto', objectFit: 'contain'}}
            />
            <Image alt="err" 
              src={ARROW}
              style={{width: '20%', height: 'auto', objectFit: 'contain'}}
            />
            
            <Image alt="err" 
              src={MONEY}
              style={{width: '25%', height: 'auto', objectFit: 'contain'}}
            />
          </div>
          
        </div>
        <div id={style['sec3-row2']} className='single-row-flex-container'>
          <div>3D Print</div>
          <div>
            <ul>
              <li>Carton</li>
              <li>Realistic</li>
              <li>Pixel</li>
              <li>Anything</li>
              <div className={style['gap-hor-50']}></div>
              <div className={style['gap-ver-50']}></div>
            </ul>
          </div>
          <div className='single-row-flex-container'>
            <Image alt="err" 
              src={PROFILE_ICON}
              style={{width: '25%', height: 'auto', objectFit: 'contain'}}
            />
            <Image alt="err" 
              src={ARROW}
              style={{width: '20%', height: 'auto', objectFit: 'contain'}}
            />
            <video src="temp.mp4" alt="err"></video>
          </div>
        </div>
        <div id={style['sec3-row3']} className='single-row-flex-container'>
          <div>Vtuber Utilities</div>
          <div>
            <ul className='single-col-flex-container'>
              <li>Cartoonization</li>
              <li>Clothes</li>
              <li>More</li>
            </ul>
          </div>
          <div>
            <ul className='single-col-flex-container'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  
  return (
    <>
      <div>Section 4</div>
      <div id={style.sec4} className={style['home-sec']}>
        <div>Growth with 100k users</div>
        <div className='single-row-flex-container'>
          <Image alt="err"
            src={SPONSOR}
            style={{
              maxHeight: '70%',
              // flexBasis
              objectFit: 'contain',
            }}
          />
          <Image alt="err"
            src={SPONSOR}
            style={{
              maxHeight: '70%',
              // flexBasis
              objectFit: 'contain',
            }}
          />
          <Image alt="err"
            src={SPONSOR}
            style={{
              maxHeight: '70%',
              // flexBasis
              objectFit: 'contain',
            }}
          />
          <Image alt="err"
            src={SPONSOR}
            style={{
              maxHeight: '70%',
              // flexBasis
              objectFit: 'contain',
            }}
          />
          
        </div>
        <div>Logo</div>
        <div>
          <ul>
            <li>temp</li>
            <li>temp</li>
            <li>temp</li>
            <li>temp</li>
            <li>temp</li>
            <li>temp</li>
            <li>temp</li>
            <li>temp</li>
          </ul>
        </div>
        
      </div>
    </>
  );
}

function Footer() {
  return (
    <div id={style.footer}>
      © 2024 Black Turing AI
    </div>
  );
}


export default function HomeContent() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
