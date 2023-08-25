import {
  AiFillCompass,
  AiOutlineCompass,
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiFillPlusCircle,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Sidebar from "./Sidebar";
export const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
    activeIcon: <AiFillHome></AiFillHome>,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch></AiOutlineSearch>,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>,
    activeIcon: <AiFillCompass></AiFillCompass>,
  },
  {
    title: "Videos",
    icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>,
    activeIcon: <RiVideoFill></RiVideoFill>,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,
    activeIcon: <AiFillMessage></AiFillMessage>,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>,
    activeIcon: <AiFillHeart></AiFillHeart>,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
    activeIcon: <AiFillPlusCircle></AiFillPlusCircle>,
  },
  {
    title: "Profile",
    icon: <CgProfile className="text-2xl mr-5"></CgProfile>,
    activeIcons: <CgProfile></CgProfile>,
  },
];


