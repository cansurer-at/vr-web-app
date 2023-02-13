import React from 'react'
import Posts from '../components/Posts'
import RandomMap from '../components/RandomMap';
import VRTechText from "../components/VRTechText";

<div className="flex items-center justify-center">
        <h6>Why VR is important?</h6>
        <p></p>
      </div>

const ContentRichPage = () => {
  return (
    <>
      <Posts />
      <VRTechText/>
    </>
  );
 
}

export default ContentRichPage