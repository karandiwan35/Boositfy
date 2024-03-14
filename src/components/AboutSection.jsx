import React from "react";
import aboutSectionImg from "../assets/images/aboutsection.png";

const AboutSection = ({ sectionRef }) => {
  return (
    <div className="md:flex text-left" ref={sectionRef}>
      <div className="lg:w-1/2 pt-32 md:px-8">
        <span className="mb-2 block text-base font-semibold text-primary">
          Let's Know a bit
        </span>
        <h2 className="mb-3 text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
         About Us
        </h2>
        <p className="mb-8 ">
          At Boostify, we're not just a digital marketing agency – we're your
          dedicated growth partner. With a passion for innovation and a
          commitment to results, we specialize in elevating your online presence
          and driving tangible business outcomes. Our team of skilled
          professionals harnesses the power of cutting-edge strategies and
          technology to amplify your brand, expand your reach, and boost your
          bottom line. <br /> <br /> Whether you're a startup striving to make
          your mark or an established enterprise seeking to stay ahead, trust
          Boostify to propel your business to new heights in the digital
          landscape.
        </p>
        <button className="bg-orange-500 py-2 px-4 text-white text-bold rounded hover:bg-blue-500">
          Learn More
        </button>
      </div>
      <div className="lg:w-1/2 hover:scale-105 duration-700 ">
        <img src={aboutSectionImg} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
