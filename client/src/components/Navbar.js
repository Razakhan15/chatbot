import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  UsersIcon,
  CameraIcon,
  PaintBrushIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className=" bg-zinc-800 flex justify-between text-white px-5 py-2">
      <div className="hover:cursor-pointer">
        <h1 className="font-bold">
          secret<span className="bg-pink-700 rounded-sm px-1">desires</span>
        </h1>
        <p className="text-[0.5rem] text-gray-400">Open Beta</p>
      </div>
      <div className="hidden md:flex items-center justify-center gap-5 font-semibold">
        <div className="flex items-center justify-center  gap-1 text-pink-700 hover:cursor-pointer">
          <ChatBubbleLeftEllipsisIcon className="h-4 w-4 " />
          <p className="text-xs">Chat</p>
        </div>
        <div className="flex items-center justify-center  gap-1 hover:cursor-pointer">
          <UsersIcon className="h-4 w-4 " />
          <p className="text-xs">My characters</p>
        </div>
        <div className="flex items-center justify-center  gap-1 hover:cursor-pointer">
          <CameraIcon className="h-4 w-4 " />
          <p className="text-xs">Generate Images</p>
        </div>
        <div className="flex items-center justify-center bg-pink-700 p-2 rounded-lg  gap-1 hover:cursor-pointer">
          <PaintBrushIcon className="h-4 w-4 " />
          <p className="text-xs">Create Character</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 hover:cursor-pointer">
        <UserCircleIcon className="h-4 w-4 " />
        <p className="text-xs">My Profile</p>
        <ChevronDownIcon className="h-2 w-2 " />
      </div>
    </div>
  );
};

export default Navbar;
