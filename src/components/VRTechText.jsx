import React from 'react';
import VRText from "../assets/images/VRText.jpeg";
import { motion } from "framer-motion";


const VRTechText = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <section className="flex flex-col mx-4 md:flex-row">
        <img
          className="w-full p-8 md:w-1/2"
          src={VRText}
          alt="man wearing VR glass"
        />
        <div className="w-full md:w-1/2">
          <h2 className="p-8 text-xl font-bold ">Why VR is Important? </h2>
          <p className="text-lg">
            Virtual Reality (VR) technology is a rapidly growing field that is
            transforming the way we interact with digital content and experience
            the world. There are many reasons why VR is considered important,
            including the following:
          </p>
          <ul className="pl-10 list-disc">
            <li>
              <h3 className="text-lg font-bold">Immersion</h3>
              <p className="text-base">
                VR provides an incredibly immersive experience, allowing users
                to feel as if they are truly inside a digital environment. This
                can be used to create powerful and memorable experiences that
                would be impossible with traditional media.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold">Education and Training</h3>
              <p className="text-base">
                VR is a powerful tool for education and training. It can
                simulate real-world scenarios, allowing students and trainees to
                practice and develop skills in a safe, controlled environment.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold">Healthcare</h3>
              <p className="text-base">
                VR has numerous applications in the healthcare field, including
                pain management, physical therapy, and mental health treatment.
                By simulating real-world environments and experiences, VR can
                help patients overcome fears and phobias, as well as provide
                exposure therapy for various conditions.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold">Business and Productivity</h3>
              <p className="text-base">
                VR is also having an impact on the business world, helping to
                increase productivity, collaboration, and creativity. For
                example, VR can be used for virtual meetings and conferences,
                product demonstrations, and design and engineering simulations.
              </p>
            </li>
          </ul>
          <p className="text-lg"></p>
        </div>
      </section>
    </motion.div>
  );
};

export default VRTechText;
