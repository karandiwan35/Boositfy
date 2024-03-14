import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function FaqSection({ sectionRef }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div ref={sectionRef} className="mt-4">
      <span className="mb-2 block text-base font-semibold text-primary">
        Find Out
      </span>
      <h1 className="text-5xl mb-8 font-bold">Frequently Asked Questions</h1>

      <Accordion
        className="text-left"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          1. What services does your digital marketing agency offer?
        </AccordionHeader>
        <AccordionBody>
          Our agency offers a comprehensive range of digital marketing services
          including but not limited to search engine optimization (SEO),
          pay-per-click advertising (PPC), social media marketing, content
          marketing, email marketing, website design and development, analytics
          and reporting, and more.
        </AccordionBody>
      </Accordion>
      <hr />
      <Accordion
        className="text-left"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(2)}>
          2. How do you determine the right digital marketing strategy for my
          business?
        </AccordionHeader>
        <AccordionBody>
          We start by conducting a thorough analysis of your business, industry,
          target audience, and competitors. Based on this information, we tailor
          a digital marketing strategy that aligns with your specific goals and
          objectives. We believe in a data-driven approach, using analytics and
          insights to continually optimize and refine our strategies.
        </AccordionBody>
      </Accordion>
      <hr />
      <Accordion
        className="text-left"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          3. What makes your agency different from others in the market?
        </AccordionHeader>
        <AccordionBody>
          Our agency stands out for several reasons. Firstly, we prioritize a
          personalized approach, understanding that every business is unique and
          requires a customized strategy. Secondly, we have a team of
          experienced professionals who are experts in their respective fields,
          ensuring high-quality results. Additionally, we place a strong
          emphasis on transparency and communication, keeping our clients
          informed and involved throughout the process.
        </AccordionBody>
      </Accordion>
      <hr />
      <Accordion
        className="text-left"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(4)}>
          4. How do you measure the success of your digital marketing campaigns?
        </AccordionHeader>
        <AccordionBody>
          We utilize a variety of key performance indicators (KPIs) to measure
          the success of our campaigns, depending on the specific goals
          outlined. These may include metrics such as website traffic,
          conversion rates, click-through rates, social media engagement, return
          on investment (ROI), and more. We provide regular reports and
          analytics to our clients, detailing the performance of each campaign
          and the progress made towards achieving their objectives.
        </AccordionBody>
      </Accordion>
      <hr />
      <Accordion
        className="text-left"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(5)}>
          5. How long does it take to see results from digital marketing
          efforts?
        </AccordionHeader>
        <AccordionBody>
          The timeline for seeing results can vary depending on various factors
          such as the competitiveness of your industry, the current state of
          your online presence, the effectiveness of the chosen strategies, and
          more. While some results may be immediate, such as increased website
          traffic or social media engagement, achieving significant and
          sustainable results often requires a longer-term investment and
          commitment to ongoing optimization and refinement.
        </AccordionBody>
      </Accordion>
      <hr />
      <Accordion
        className="text-left"
        open={open === 6}
        icon={<Icon id={6} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(6)}>
          6. Do you offer any guarantees for your digital marketing services?
        </AccordionHeader>
        <AccordionBody>
          While we cannot guarantee specific outcomes, we are committed to
          delivering high-quality services and achieving the best possible
          results for our clients. We adhere to industry best practices and
          constantly strive to exceed expectations, but ultimately, success in
          digital marketing is influenced by numerous external factors beyond
          our control. We are transparent about our processes and progress, and
          work closely with our clients to adjust strategies as needed to
          maximize effectiveness.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
