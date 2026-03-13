import React from "react";
import { motion } from "framer-motion";
import "./SE.css";
import Skills from "../MySkills/MySkills";
import htmlImg from "../../images/html.png";
import cssImg from "../../images/css.png";
import jsImg from "../../images/javascript.png";
import reactImg from "../../images/reactjs.png";
import cImg from "../../images/c.png";
import pythonImg from "../../images/Python.png";
import javaImg from "../../images/java.png";
import tailwindImg from "../../images/tailwind.png";
import NodeImg from "../../images/Nodejs.png";
import ExpressImg from "../../images/express-js.png";
import MongoDBImg from "../../images/mongodb.png";
import PostManImg from "../../images/postman.png";
import VSCodeImg from "../../images/VScode.png";
import githubImg from "../../images/github_round.png";
import typescriptImg from "../../images/TypeScript.jpg";
import nextjsImg from "../../images/NextJS.jpg";
import djangoImg from "../../images/Django.jpg";
import sqliteImg from "../../images/SQLite.jpg";
import forkImg from "../../images/fork.jpg";

const SkillsAndExp = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { bgimg: javaImg, name: "Java" },
        { bgimg: pythonImg, name: "Python" },
        { bgimg: cImg, name: "C" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { bgimg: htmlImg, name: "HTML" },
        { bgimg: cssImg, name: "CSS" },
        { bgimg: jsImg, name: "JavaScript" },
        { bgimg: typescriptImg, name: "TypeScript" },
        { bgimg: reactImg, name: "ReactJS" },
        { bgimg: nextjsImg, name: "Next.js" },
        { bgimg: tailwindImg, name: "Tailwind CSS" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { bgimg: NodeImg, name: "NodeJS" },
        { bgimg: ExpressImg, name: "ExpressJS" },
        { bgimg: djangoImg, name: "Django" },
        { bgimg: MongoDBImg, name: "MongoDB" },
        { bgimg: sqliteImg, name: "SQLite" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { bgimg: githubImg, name: "Git / Github" },
        { bgimg: forkImg, name: "Git Fork" },
        { bgimg: PostManImg, name: "Postman" },
        { bgimg: VSCodeImg, name: "VS Code" }
      ]
    }
  ];

  return (
    <motion.div 
      className="skills-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="skills-main-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Skills & Expertise
      </motion.h1>

      <div className="skills-bento-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="skills-bento-card glass-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
          >
            <h2 className="skills-category-title">{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.15 + skillIndex * 0.1 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Skills bgimg={skill.bgimg} name={skill.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsAndExp;
