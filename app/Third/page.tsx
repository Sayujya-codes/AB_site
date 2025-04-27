"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast, Zoom } from "react-toastify";

const Third = () => {
  const handleClick = () => {
    toast("I understand. I'll wait. 🫶🏻🫶🏻", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  const handleyes = () => {
    toast("We will have a great time! 🌹🫶🏻", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-screen bg-cover">
        <p className="text-3xl text-center font-Dance">
          Can we start over... with a date?
        </p>
        <Image
          src="/last image.png"
          width={500}
          height={500}
          alt="Hero image"
        />
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-pink-400 rounded-md font-medium text-[16px] text-white cursor-pointer"
            onClick={handleyes}
          >
            Say Yes 💖
          </button>

          <button
            onClick={handleClick}
            className="px-4 py-2 bg-pink-400 rounded-md font-medium text-[16px] text-white cursor-pointer"
          >
            Maybe Later
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Third;
