import React from 'react';
import Image from 'next/image';
import NavbarTopSite from '../nav/NavbarTopSite';
import MainPic from '../general/MainPic';
export default function Banner() {
  return (

    <section className="w-full h-screen relative grid  bg-zinc-100  overflow-hidden z-0 ">
      <NavbarTopSite />
      <MainPic/>
    </section>
  );
} 