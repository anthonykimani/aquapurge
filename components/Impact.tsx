import { impactSource } from "@/helpers/impactSource";
import React from "react";

const Impact = () => {
  return (
    <section>
      <h3 className="text-3xl lg:text-4xl font-semibold font-jakarta text-center my-[100px]">
        Total Impact
      </h3>
      <div className="flex justify-around flex-col md:flex-row">
        {impactSource.map((impact, index) => (
          <article
            key={index}
            className="text-black flex flex-col justify-around md:justify-center items-center px-10 text-center h-[200px]"
          >
            <h1 className="text-3xl lg:text-4xl font-semibold md:my-[20px] font-jakarta">
              {impact.title}
            </h1>
            <h2 className="md:my-[20px] font-DM">{impact.subtitle}</h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Impact;
