import React from "react";
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () => {
  const userData = useSelector((state) => state.userReducer.userData);

  return (
    <div>
      <form>
        <input
          value={userData.name.first + " " + userData.name.last}
          disabled={true}
        ></input>
      </form>
    </div>
  );
};

export default UserProfile;
