"use client";
import React from "react";
import Link from "next/link";
import { ToastContainer, toast, Zoom } from "react-toastify";

const Second = () => {
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
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-screen bg-cover">
        <p className="text-3xl text-center font-Dance">
          I’ve thought a lot about what happened... and <br /> haven’t forgotten
          our conversation.
        </p>

        <div className="max-w-[900px] bg-gray-200 p-8 rounded-2xl">
          <p className="text-[18px]">
            I know I haven’t been able to express my feelings or ask for your
            forgiveness. But please don’t think I don’t care or that you’re not
            important to me. Right now, this is the way I can express how I
            feel, and I really want to show you that you matter to me. I care
            about you deeply and truly cherish your presence in my life. I know
            we need to communicate more, and I understand what needs to be done.
            Please don’t mistake my silence for ignorance. I love you so much,
            and I care about you more than words can say. I miss you and us,
            more than you know.
            <br />
            <br />I might not always express myself in the traditional way, but
            I hope this message shows you how much you mean to me.This is
            developers way of saying sorry, and I’m putting in the effort to
            make it right.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/Third">
            <button className="px-4 py-2 mt-4 bg-pink-400 rounded-md font-medium text-[16px] text-white cursor-pointer">
              I Forgive You💖
            </button>
          </Link>
          <button
            className="px-4 py-2 mt-4 bg-pink-400 rounded-md font-medium text-[16px] text-white cursor-pointer"
            onClick={handleClick}
          >
            I am not ready⌛
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Second;
