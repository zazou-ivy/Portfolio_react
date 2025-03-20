import React from "react";
import "./skills.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaAngular } from "react-icons/fa";
import { SiMysql, SiDotnet, SiFlutter, SiJavascript, SiDocker, SiSwift } from "react-icons/si";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section section__padding" id="skills">
      <h2 className="section__title retro__style title__animation">What I fiddle with</h2>
      <span className="section__subtitle">
      From front-end to back-end, I enjoy crafting seamless digital experiences that blend functionality and aesthetics. <br />I also value multilingual communication. I am a native <b>French</b> speaker, have an intermediate level in <b>English</b>, and am currently learning <b>Dutch</b> to expand my horizons. Here are a few technologies I've been working and worked with 🚀:</span>

      <div className="skills-slider-container">
        <div className="skills-slider">
          <div className="slide-track">
            {/* Icônes des technologies */}
            <div className="slide"><FaReact size={60} className="text-blue-500" /></div>
            <div className="slide"><SiJavascript size={60} className="text-yellow-500" /></div>
            <div className="slide"><FaNodeJs size={60} className="text-green-600" /></div>
            <div className="slide"><FaHtml5 size={60} className="text-orange-500" /></div>
            <div className="slide"><FaCss3Alt size={60} className="text-blue-600" /></div>
            <div className="slide"><FaPhp size={60} className="text-indigo-500" /></div>
            <div className="slide"><SiMysql size={60} className="text-blue-600" /></div>
            <div className="slide"><FaWordpress size={60} className="text-blue-400" /><p></p></div>
            <div className="slide"><FaAngular size={60} className="text-red-600" /></div>
            <div className="slide">.<SiDotnet size={60} className="text-purple-600" /></div>
            <div className="slide"><SiFlutter size={60} className="text-blue-400" /></div>
            <div className="slide"><SiDocker size={60} className="text-blue-400" /></div>
            <div className="slide"><SiSwift size={60} className="text-blue-400" /></div>
          </div>
        </div>
      </div>
{/*
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>*/}
    </section>
  );
};

export default Skills;
