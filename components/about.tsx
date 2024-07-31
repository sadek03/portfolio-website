"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-5 max-w-[45rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in BSc in Computer Science I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and SQL databases
        </span>
        . I am also involved in developing mobile applications using{" "}
        <span className="font-medium">React Native</span>. I am always looking
        to learn new technologies and improve my skills. I am currently working
        as a web developer with an Assam-based startup named bdhvbnvn xfhgxf
        ghsvhg
        <span className="font-medium">growhub.shop</span> for the last year. My
        core stack includes{" "}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}

// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

// export default function About() {
//   const { ref } = useSectionInView("About");

//   return (
//     <motion.section
//       ref={ref}
//       className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="about"
//     >
//       <SectionHeading>About me</SectionHeading>
//       <p className="mb-3">
//         After graduating with a BSc in{" "}
//         <span className="font-medium">Computer Science</span> in 2024, I have
//         been coding for the past 2 years. I am currently working with a company
//         named <span className="font-medium">growhub.shop</span>. My core stack
//         includes{" "}
{
  /* <span className="font-medium">React, Next.js, Node.js, and SQL databases</span>; */
}
//   . I am also involved in developing mobile applications using{" "}
//   <span className="font-medium">React Native</span>. I am always looking
//   to learn new technologies and improve my skills.
// </p>

//       <p>
//         <span className="italic">When I'm not coding</span>, I enjoy playing
//         video games, watching movies, and playing with my dog. I also enjoy{" "}
//         <span className="font-medium">learning new things</span>. I am currently
//         learning about{" "}
//         <span className="font-medium">history and philosophy</span>. I'm also
//         learning how to play the guitar.
//       </p>
//     </motion.section>
//   );
// }
