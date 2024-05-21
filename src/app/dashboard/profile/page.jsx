import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className="mx-auto">
      <h3 className="profile_title">Profile Information</h3>
      <div className="profile_info_container">
        <div className="profile_pic_container">
          <Image fill src="/profile.jpg" alt="" />
        </div>
        <p className="sub_title mt-5">Full Name</p>
        <h3 className="profile_title">Aminul Islam</h3>
        <p className="sub_title mt-5">Gender</p>
        <h3 className="profile_title">Male</h3>
        <p className="sub_title mt-5">Date of Birth</p>
        <h3 className="profile_title">Aminul Islam</h3>
        <p className="sub_title mt-5">Email</p>
        <h3 className="profile_title">Aminul Islam</h3>

        <p className="sub_title mt-5">Employee ID</p>
        <h3 className="profile_title">Aminul Islam</h3>
      </div>
    </div>
  );
}

export default Profile;
