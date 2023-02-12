import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import MainVideo from "../assets/videos/mainVideo.mp4";

const UserProfile = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <>
      <div className="flex flex-col justify-center py-8 mx-2 md:flex-row lg:mx-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="p-6 mx-auto mt-10 bg-white rounded-lg md:w-1/2"
        >
          <img
            src={userData.picture.thumbnail}
            alt={userData.name.first + " " + userData.name.last + " Thumbnail"}
            className="object-cover w-32 h-32 mb-4 rounded-full md:mb-0"
          />
          <form className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>
            <input
              value={userData.name.first + " " + userData.name.last}
              disabled={true}
              className="w-full p-2 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
            ></input>

            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              value={userData.email}
              disabled={true}
              className="w-full p-2 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
            ></input>

            <label className="block mb-2 font-medium text-gray-700">
              Phone
            </label>
            <input
              value={userData.phone}
              disabled={true}
              className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
            ></input>
          </form>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:ml-8 md:w-1/2"
        >
          <video
            className="rounded-lg"
            src={MainVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </motion.div>
      </div>
      <h1 className="mt-10 mb-20 text-3xl font-bold text-center">
        DISCOVER THE FEATURE
      </h1>
    </>
  );
};

export default UserProfile;