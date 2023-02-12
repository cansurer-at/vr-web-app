import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import MainVideo from "../assets/videos/mainVideo.mp4";

const UserProfile = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center py-8 lg:mx-10 mx-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/2 mx-auto mt-10 bg-white rounded-lg p-6"
        >
          <img
            src={userData.picture.thumbnail}
            alt={userData.name.first + " " + userData.name.last + " Thumbnail"}
            className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
          />
          <form className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              value={userData.name.first + " " + userData.name.last}
              disabled={true}
              className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline mb-4"
            ></input>

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              value={userData.email}
              disabled={true}
              className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline mb-4"
            ></input>

            <label className="block text-gray-700 font-medium mb-2">
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
          className=" mt-10 md:ml-8 md:w-1/2"
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
      <h1 className="text-3xl font-bold text-center mt-10">
        DISCOVER THE FEATURE
      </h1>
    </>
  );
};

export default UserProfile;