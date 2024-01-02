"use client";
import { useState, useRef } from "react";
import { IoMail, IoLogoLinkedin } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

import { IconContext } from "react-icons";

import SubmitButton from "./SubmitButton";

import { sendMesssage } from "@/app/actions/actions";
import Link from "next/link";

const Message = () => {
  const [bannerMessage, setBannerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <main className="py-10 grid gap-4 place-items-center">
      <h2 className="text-xl lg:text-3xl text-center px-3 font-bold tracking-tighter">
        Let's build <span className="text-green-200">something amazing</span> together.
      </h2>
      <p className="text-sm lg:text-base">Shoot me a message on socials or below.</p>
      {bannerMessage != "" && (
        <p className="p-4 border rounded-lg border-green-300/40  text-center text-sm">
          {bannerMessage}
          <br />
          <Link href={"/"} className="hover:underline text-green-400">
            Go to homepage
          </Link>
        </p>
      )}
      <div className="my-4 py-5 px-3 w-9/12 max-w-lg lg:text-lg">
        <form
          ref={formRef}
          action={async (formData) => {
            // wait for the action to finish then clear the form
            await sendMesssage(formData);
            formRef?.current?.reset();
            setBannerMessage("Form submitted successfully");
          }}
          className="grid gap-3"
          autoComplete="off"
          id="message-form"
        >
          <div className="grid">
            <label className="mb-1 ml-1 text-neutral-400" htmlFor="name">
              Name
            </label>
            <input
              className="text-sm px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 rounded-lg focus-visible:outline focus:outline-offset-2 focus-within:outline-green-400/40 focus-within:bg-black"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid">
            <label className="mb-1 ml-1 text-neutral-400" htmlFor="email">
              Email
            </label>
            <input
              className="text-sm px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 rounded-lg focus-visible:outline focus:outline-offset-2 focus-within:outline-green-400/40"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid">
            <label className="mb-1 ml-1 text-neutral-400" htmlFor="message">
              Your message
            </label>
            <textarea
              className=" text-sm px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 rounded-lg focus-visible:outline focus:outline-offset-2 focus-within:outline-green-400/40"
              name="message"
              id="message"
              rows={8}
              minLength={10}
              autoComplete="off"
              required
            ></textarea>
          </div>
          <SubmitButton></SubmitButton>
        </form>
        <IconContext.Provider
          value={{
            size: "1.4rem",
            className:
              "text-neutral-500 group-hover:text-green-300 transition-colors transition-scale group-hover:scale-110 group-hover:cursor-pointer",
          }}
        >
          <div className="text-sm my-6 text-center">
            <p className="text-neutral-500 mb-5">Looking for other options?</p>
            <div className="flex flex-col mt-2 gap-2 items-center text-neutral-500">
              <Link className="flex group gap-2 hover:text-green-200" target="_blank" href={"mailto:w3dg@duck.com"}>
                <IoMail></IoMail>
                <span>w3dg@duck.com</span>
              </Link>
              <Link
                className="flex gap-2 group hover:text-green-200"
                target="_blank"
                href={"https://dgsh.vercel.app/li"}
              >
                <IoLogoLinkedin></IoLogoLinkedin>
                /in/debopamgupta
              </Link>
              <Link className="flex gap-2 group hover:text-green-200" target="_blank" href={"https://t.me/w3_dg"}>
                <FaTelegramPlane></FaTelegramPlane>
                @w3_dg
              </Link>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </main>
  );
};
export default Message;
