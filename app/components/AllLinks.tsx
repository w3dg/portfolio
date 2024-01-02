"use client";

import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoLogoInstagram, IoLogoTwitch, IoLogoTwitter } from "react-icons/io5";
import { LuQuote, LuArrowUpRight } from "react-icons/lu";

import { IconContext } from "react-icons";

interface Props {
  footer: boolean;
}

export const AllLinks = ({ footer = false }) => {
  return (
    <IconContext.Provider
      value={{
        size: "1.25rem",
        className:
          "text-neutral-300 hover:text-green-300 transition-colors transition-scale hover:scale-110 hover:cursor-pointer",
      }}
    >
      <ul className={`flex flex-wrap items-center justify-center ${footer ? "w-auto" : "w-8/12"} gap-4 mx-auto`}>
        <li key={"gh"}>
          <a href="https://dgsh.vercel.app/gh" target="_blank">
            <IoLogoGithub></IoLogoGithub>
          </a>
        </li>
        <li key={"li"}>
          <a href="https://dgsh.vercel.app/li" target="_blank">
            <IoLogoLinkedin></IoLogoLinkedin>
          </a>
        </li>
        <li key={"mail"}>
          <a href="mailto:w3dg@duck.com" target="_blank">
            <IoMail></IoMail>
          </a>
        </li>
        <li key={"tg"}>
          <a href="https://t.me/w3_dg" target="_blank">
            <FaTelegramPlane></FaTelegramPlane>
          </a>
        </li>
        <li key={"ig"}>
          <a href="https://dgsh.vercel.app/ig" target="_blank">
            <IoLogoInstagram></IoLogoInstagram>
          </a>
        </li>
        <li key={"twi"}>
          <a href="https://dgsh.vercel.app/twitch" target="_blank">
            <IoLogoTwitch></IoLogoTwitch>
          </a>
        </li>
        <li key={"twitter"}>
          <a href="https://dgsh.vercel.app/twitter" target="_blank">
            <IoLogoTwitter></IoLogoTwitter>
          </a>
        </li>
        <li key={"discord"}>
          <a href="https://discord.com/users/613575716201824266" target="_blank">
            <FaDiscord></FaDiscord>
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  );
};
