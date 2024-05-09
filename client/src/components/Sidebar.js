import React from "react";
import "./sidebar.css";
import {
  CameraIcon,
  ChatBubbleOvalLeftIcon,
  ChevronLeftIcon,
  EllipsisVerticalIcon,
  LockClosedIcon,
  PencilSquareIcon,
  ShareIcon,
  WrenchIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className=" h-screen overflow-y-scroll bg-pink-700">
      <div className="bg-zinc-800 text-white z-10 relative flex justify-between shadow-[0_10px_20px_rgba(0,0,0,1)]">
        <div className="flex gap-2">
          <ChevronLeftIcon className="h-4 w-4 hover:cursor-pointer" />
          <p className="text-xs">
            Chats img: <span className="text-gray-400">3</span>
          </p>
          <p className="text-xs">msg:</p>
        </div>
        <div className="flex gap-2">
          <EllipsisVerticalIcon className="h-4 w-4 hover:cursor-pointer" />
          <WrenchIcon className="h-4 w-4 hover:cursor-pointer" />
          <ClipboardIcon className="h-4 w-4 hover:cursor-pointer" />
          <PencilSquareIcon className="h-4 w-4 hover:cursor-pointer" />
          <XMarkIcon className="h-4 w-4 hover:cursor-pointer" />
        </div>
      </div>
      <div className="relative">
        <img src="images.jfif" className="w-full" alt="" />
        <div className="absolute w-full bottom-0 bg-gradient-to-t from-gray-700 p-2">
          <h1 className="text-white font-bold">Jessica Anderson</h1>
          <p className="text-xs text-white">@jessica-anderson-2</p>
        </div>
      </div>
      <div className="flex justify-between bg-zinc-800 m-2 p-2 rounded-lg text-white text-xs">
        <div className="flex items-center gap-1">
          <CameraIcon className="h-4 w-4 hover:cursor-pointer" />
          <span>0</span>
          <ChatBubbleOvalLeftIcon className="h-4 w-4 hover:cursor-pointer" />
          <span>6</span>
        </div>
        <div className="flex items-center gap-1">
          <LockClosedIcon className="h-4 w-4 hover:cursor-pointer" />
          <p>Make Character Public</p>
          <ShareIcon className="h-4 w-4 hover:cursor-pointer" />
        </div>
      </div>
      <div className="bg-zinc-800 text-white m-2 p-2 text-sm rounded-lg flex gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Who I Am</h1>
          <div>
            <p className="font-bold">Personality</p>
            <span>Caregiver</span>
          </div>
          <div>
            <p className="font-bold">Work</p>
            <span>Yoga Instructor</span>
          </div>
          <div>
            <p className="font-bold">Hobbies</p>
            <span>Anime Fan</span>
          </div>
          <div>
            <p className="font-bold">Relationship</p>
            <span>Friend</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="font-bold">About Me</p>
            <PencilSquareIcon className="h-4 w-4 hover:cursor-pointer" />
          </div>
          <p>
            21-year-old anime fanatic and yoga instructor. I binge-watch anime
            Looking for someone to join me in downward dog and anime marathons.
            Fun fact: I can recite entire script of my favorite anime movies
            from memory. Let's chat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
