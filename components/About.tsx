import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col sm:flex-row">
      <article className="text-black flex flex-col justify-around md:justify-center items-center h-[300px] md:h-[500px] px-3 md:px-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-semibold md:my-[20px] font-jakarta">
          Our Mission
        </h1>
        <h2 className="md:my-[20px] font-DM">
          Combat Ocean pollution by incentivizing positive action and providing
          a platform for community-driven solutions.
        </h2>
        <Link href="https://aquapurge-project.gitbook.io/aqpp-whitepaper/introduction">
          <button className=" py-3 px-6 w-[200px] border border-[#0E6FFF] text-[#0E6FFF] font-semibold hover:text-white hover:bg-[#0157d7] hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </article>
      <article className="text-black flex flex-col justify-around md:justify-center items-center h-[300px] md:h-[500px] px-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-semibold md:my-[20px] font-jakarta">
          Our Vision
        </h1>
        <h2 className="md:my-[20px] font-DM">
          We aim to create a sustainable solution that encourages individuals to
          take action towards a cleaner ocean, while also providing benefits and
          rewards for their efforts.
        </h2>
        <Link href="https://aquapurge-project.gitbook.io/aqpp-whitepaper/the-aquapurge-solution">
          <button className=" py-3 px-6 w-[200px] border border-[#0E6FFF] text-[#0E6FFF] font-semibold hover:text-white hover:bg-[#0157d7] hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </article>
    </section>
  );
};

export default About;
