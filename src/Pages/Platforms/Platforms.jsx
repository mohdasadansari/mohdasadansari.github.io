import React from "react";
import "./Platforms.css";
import { motion } from "framer-motion";
import Platform from "../MyCodingPlatform/MyPlatform";
import leetcodeImg from "../../images/leetcode.png";
import gfgImg from "../../images/gfg.png";
import hackerrankImg from "../../images/hackerrank.png";
import codeforcesImg from "../../images/codeforces.png";
import githubImg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";

const Platforms = () => {
  const platforms = [
    { img: leetcodeImg, name: "Leetcode", link: "https://leetcode.com/u/Ninja_ansari/", delay: 0.1 },
    { img: linkedinImg, name: "LinkedIn", link: "https://linkedin.com/in/asad-as2", delay: 0.2 },
    { img: githubImg, name: "GitHub", link: "https://github.com/asad-as1", delay: 0.3 },
    { img: hackerrankImg, name: "HackerRank", link: "https://www.hackerrank.com/profile/asad_as2", delay: 0.4 },
    { img: gfgImg, name: "GFG", link: "https://www.geeksforgeeks.org/user/asad_as2/", delay: 0.5 },
    { img: codeforcesImg, name: "CodeForces", link: "https://codeforces.com/profile/asad_as2", delay: 0.6 }
  ];

  return (
    <motion.div 
      className="codingPlatforms"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1>Platforms Profile</h1>
      <div className="platformNames">
        {platforms.map((platform, index) => (
          <Platform
            key={index}
            img={platform.img}
            name={platform.name}
            link={platform.link}
            delay={platform.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Platforms;
