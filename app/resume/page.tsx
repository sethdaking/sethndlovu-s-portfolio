"use client";

import {
  FaHtml5,
  FaCss3,  
  FaJs,
  FaPython, 
  FaReact, 
  FaNodeJs, 
} from "react-icons/fa";

import { 
  SiTypescript,
  SiSolidity,
  SiEthereum,
  SiGraphql,
  SiTensorflow,
  SiOpencv,
  SiRedis,
  SiDocker,
  SiMongodb,
  SiGithub,
  SiGit,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";



// about dats

const about = 
  {
    title: 'About me',
    description: 'I am a freelance programmer with a passion for creating innovative software solutions. As a self-taught developer, I have honed my skills through online courses and hands-on projects, focusing on full-stack development, Web3 technologies, AI, and blockchain. Over the years, I have collaborated with startups, agencies, and fellow engineers, delivering high-quality applications tailored to meet client needs. My expertise spans JavaScript, TypeScript, and Python, along with frameworks like Next.js and React. I thrive in dynamic environments and pride myself on my problem-solving abilities, effective communication, and commitment to producing results that exceed expectations.',
    info: [
      {
        fieldName: "Name",
        fieldValue: "Seth Ndlovu",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+27) 83 637 1388",
      },
      {
        fieldName: "Experience",
        fieldValue: "4+ Years",
      },
      {
        fieldName: "Instagram",
        fieldValue: "seth.fullstack",
      },
      {
        fieldName: "Nationality",
        fieldValue: "South African",
      },
      {
        fieldName: "Email",
        fieldValue: "lastemail768@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Language",
        fieldValue: "English",
      },
    ]
  }


const experience = {
  icon: '/assets/assets/resume/badge.svg',
  title: 'My experience',
  description:  'I have extensive experience as a freelance programmer, collaborating with startups, agencies, and fellow software engineers to deliver high-quality solutions. Throughout my career, I have developed various projects that showcase my skills, including custom web applications, decentralized applications (dApps), and innovative automation software. ',
  items: [
    {
      company: "Yash Kulkarni.",
      position: "Freelance Web Developer(collaborator)",
      duration: "September 2024 - present"
    },
    {
      company: "Africa Moyane.",
      position: "Freelance Full Stack Developer",
      duration: " September 2024 - present"
    },
    {
      company: "Techbud's Solutions (startup)",
      position: "Contract Web Developer",
      duration: " July 2024 - August 2024"
    },
    {
      company: "Pentloop ICT",
      position: "Contract Web developer",
      duration: " March 2024 - August 2024"
    },
    {
      company: "Ntsthembo Junior.",
      position: "Freelance Web Developer",
      duration: "March 2024 - May 2024"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "Feb 2023 - June 2023"
    },

  ]
}

const education = {
  icon: '/assets/assets/resume/cap.svg',
  title: 'My education',
  description:  'I am a self-taught programmer who has completed various online courses and bootcamps in full-stack development, Web3 technologies, AI, and blockchain. Through hands-on projects and continuous learning, I’ve gained expertise in languages like JavaScript, TypeScript, and Python, allowing me to develop innovative software solutions and stay up to date with the latest technology trends.',
  items: [
    {
      institution: "Online Course Platform.",
      degree: "Full Stack Web Devlopment",
      duration: "2023"
    },
    {
      institution: "Codeacademy.",
      degree: "Frontend Track",
      duration: "2022"
    },
    {
      institution: "Online Course.",
      degree: "Programming course",
      duration: "2020-2021"
    },
    {
      institution: "Tech Institute.",
      degree: "Certified Web devloper",
      duration: "2019"
    },

   
  ]
}

const skills = {
  title: "My skills",
  description:  "I possess a diverse skill set that enables me to excel in various areas of software development. My programming expertise includes languages such as JavaScript, TypeScript, and Python, allowing me to build full-stack applications and implement machine learning models. I am proficient in frameworks like Next.js and React, which help me create responsive and user-friendly interfaces. My experience with blockchain technology includes developing decentralized applications (dApps) and smart contracts, ensuring secure and transparent transactions. Additionally, I have strong collaboration and communication skills, enabling me to work effectively in team environments and manage client relationships. I am also adept at problem-solving and delivering efficient, high-quality work.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'React JS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next JS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node JS',
    },
    {
      icon: <FaPython/>,
      name: 'Python',
    },
    {
      icon: <SiTypescript/>,
      name: 'TypeScript',
    },
    {
      icon: <SiSolidity/>,
      name: 'Solidity',
    },
    {
      icon: <SiEthereum/>,
      name: 'Ethereum',
    },
    {
      icon: <SiGraphql/>,
      name: 'Graphql',
    },
    {
      icon: <SiTensorflow/>,
      name: 'Tensorflow',
    },
    {
      icon: <SiOpencv/>,
      name: 'Opencv',
    },
    {
      icon: <SiRedis/>,
      name: 'Redis',
    },
    {
      icon: <SiDocker/>,
      name: 'Docker',
    },
    {
      icon: <SiMongodb/>,
      name: 'Mongodb',
    },
    {
      icon: <SiGithub/>,
      name: 'Github',
    },
    {
      icon: <SiGit/>,
      name: 'Git',
    },
    {
      icon: <SiOpencv/>,
      name: 'Opencv',
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip'

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0 }} 
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value='experience' className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent">

                                </span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                </div>
            </TabsContent>

            <TabsContent value='education' className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent">

                                </span>
                                <p className="text-white/60">{item.institution}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                </div>
            </TabsContent>

            <TabsContent value='skills' className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                    </p>
                   
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 xl:gap-[30px]">
                        {skills.skillList.map((skill, index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                              <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                              </TooltipProvider>
                            </li>
                          )
                        })}
                      </ul>
                    
                </div>
            </TabsContent>

            <TabsContent value='about' className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                    </p>
                    
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {about.info.map((item, index) => {
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                              <span className="text-accent">{item.fieldName}</span>
                              <span className="">{item.fieldValue}</span>
                            </li>
                          )
                        })}
                      </ul>
                  
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
    </motion.div>
  )
}

export default Resume