import Card from "./Card";
import React, { useRef } from "react";

const CardSection = ({ sectionRef }) => {
  return (
    <div ref={sectionRef}>
      <span className="mb-1 block text-base font-semibold text-primary">
        Wide Range of
      </span>
      <h2 className="mb-2 text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
        Our Services
      </h2>
      <p className="text-base mb-6 text-body-color dark:text-dark-6">
        Elevate your online presence with our comprehensive suite of digital <br />
        marketing solutions tailored for your business's success.
      </p>

      <div className="flex md:flex-row flex-col gap-5 items-center">
        <Card
          imgSrc={"https://cdn-icons-png.flaticon.com/128/11138/11138660.png"}
          content={
            "Boostify enhances online visibility with SEO strategies. We optimize websites to boost rankings and drive organic traffic for business success."
          }
          heading={"SEO"}
        />

        <Card
          imgSrc={"https://cdn-icons-png.flaticon.com/128/3270/3270751.png"}
          content={
            "Boostify offers comprehensive research services, delivering actionable insights to fuel your business growth and stay ahead in the market."
          }
          heading={"Reaearch"}
        />

        <Card
          imgSrc={"https://cdn-icons-png.flaticon.com/128/1466/1466288.png"}
          content={
            "Boostify drives targeted traffic and maximizes ROI through expert PPC campaigns. Let us optimize your ads for unparalleled results."
          }
          heading={"PPC Marketing"}
        />

        <Card
          imgSrc={"https://cdn-icons-png.flaticon.com/128/4187/4187336.png"}
          content={
            "Elevate your brand's social media presence with Boostify's expert SMM services. We craft engaging content to fuel audience growth."
          }
          heading={"SMM"}
        />
      </div>
    </div>
  );
};

export default CardSection;
