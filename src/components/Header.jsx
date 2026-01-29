import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-14 mb-24">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
        {/* <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Ada_Lovelace_Chalon_portrait.jpg" />
      </div>
      <div className="flex gap-2 text-[#333333] mt-4">
        <a href="https://instagram.com/kacamatabintangg" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="https://x.com/agsn_" target="_blank">
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="flex items-center gap-1 mt-9">
        <h1 className="text-4xl font-bold">Ada Lovelace</h1>
        <RiVerifiedBadgeFill color="blue" size={24} />
        {/* <div className="w-4 h-4 bg-[#2356fc] rounded-full mt-2"></div> */}
      </div>
    </div>
  );
};

export default Header;
