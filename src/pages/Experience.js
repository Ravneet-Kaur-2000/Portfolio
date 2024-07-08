import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Slider from "react-slick";
import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/Formula-ferrari.jpg";
import python from "../assets/python.png";
import pytorch from "../assets/pytorch.png";
import reactImage from "../assets/react.png";
import nodeImage from "../assets/node.png";
import tensorflow from "../assets/tf.png";
// import imageC from "../assets/c++.png";
import mySQL from "../assets/mySQL.png";
import mongoDB from "../assets/MongoDB.png";
import js from "../assets/js.png";
import cpp from "../assets/cpp.png";
import hf from "../assets/hf-logo.png";
import angular from "../assets/angular.png";
import swift from "../assets/swift.png";
import ibm from "../assets/ibm.png";
import isi from "../assets/isi-usc.png";
import viya from "../assets/viya2.png";
import crochet1 from "../assets/crochet1.jpg";
import cooking from "../assets/cooking.jpg";
import nature from "../assets/nature.jpg";
import traveling from "../assets/traveling2.jpg";
import rollercoaster from "../assets/rollercoaster.jpg";
import coding from "../assets/coding.png";




const styles = {
  sectionSubText: "text-gray-500 text-lg",
  sectionHeadText: "text-black text-3xl font-bold",
};

const experiences = [
    {
        date: "May 2024 - Present",
        title: " Data Sciene Intern - Gen AI",
        company_name: "ViyaMD - HealthCare StartUp ",
        icon: viya,
        iconBg: "#19777E",
        points: ["Fine-tuning the Llama3 model using Parameter Efficient Fine Tuning (PEFT) and PyTorch Lightning on a medical conversational dataset of 2.5 million rows, to significantly enhance model performance, reliability, and applicability in healthcare settings.", 
        "Developing a system for Retrieval Augmented Generation(RAG) by extracting data from various file formats, optimizing ingestion into vector databases, and implementing advanced retrieval and ranking algorithms using open-source libraries for performance evaluation."],
      },
  {
    date: "October 2023 - May 2024",
    title: "Graduate Research Assistant",
    company_name: "USC Information Sciences Institute ",
    icon: isi,
    iconBg: "#19777E",
    points: ["Analyzed Russia-Ukraine conflict data to identify top 10 misinformation and support spreaders using partial-matching and explored their fundraising patterns using clustering and community detection algorithms.", 
    "Leveraged and preprocessed datasets from diverse social media platforms, including Facebook, Twitter, and YouTube, comprising over 3 million rows to extract actionable insights."],
  },
  {
    date: "July 2022 - Jan 2023",
    title: "Software Development Engineer Intern",
    company_name: "IBM India Software Labs ",
    icon: ibm,
    iconBg: "#19777E",
    points: ["Integrated Fine Grain Access Request workflow into a Slack bot using REST APIs and Node.js, enabling end-users to raise a fine-grain permission request in under 60 seconds and upon approval, it would trigger a provisioning workflow.", 
    "Engineered a Webhook Microservice to consume provisioning events generated in access request workflow from IBM Security Verify and then fanning out events to integrated apps for tracking process of request workflow.", 
    "Facilitated direct request initiation and approval via Slack, resulting in a 40% reduction in processing delays by bypassing need to access IBM Security Verify separately."],
  },
];


const hobbies = [
  "Crocheting",
  "Watching Formula 1",
  "Cooking",
];

const hobbyImages = [
 image1,
 crochet1,
 rollercoaster,
 cooking,
 traveling,
 coding,
 nature
];

const hobbyTexts = [
  "Watching Formula 1",
  "Crocheting",
  "Roller Coasters",
  "Cooking",
  "Traveling",
  "Coding",
  "Nature"
];

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const skills = [
  { image: python, text: "Python" },
  { image: cpp, text: "C++" },
  { image: js, text: "JavaScript" },
  { image: nodeImage, text: "Node" },
  { image: reactImage, text: "React" },
  { image: angular, text: "Angular" },
  { image: tensorflow, text: "TensorFlow" },
  { image: pytorch, text: "PyTorch" },
  { image: hf, text: "Hugging Face" },
  { image: mongoDB, text: "MongoDB" },
  { image: mySQL, text: "MySQL" },
  { image: swift, text: "Swift" },
];


const textVariant = () => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
});

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#4BD99E",
        color: "black",
        boxShadow: "0 4px 6px #19777E",
      }}
      contentArrowStyle={{ borderRight: "15px solid #19777E" }}
      date={experience.date}
      dateClassName="text-date"
      iconStyle={{ background:'black' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className='object-contain'
            style={{width:'90%', height:'90%' ,marginLeft:'3px',marginTop:'15px'}}
          />
        </div>
      }
    >
      <div>
        <p className='text-black font-bold' style={{marginTop:0, marginBottom:0, fontSize:'1.5rem', fontFamily:'Roboto'}}>{experience.title}</p>
        <p
          className='font-bold'
          style={{ margin: 0 , marginTop:0, fontFamily:'Amatic SC', fontSize:'1.5rem', fontWeight:'bold'}}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='list-disc ml-5 space-y-2' style={{textAlign:'justify', marginTop:0}}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[1.5rem] pl-1 tracking-wider'
            style={{marginTop:'0.5rem', fontFamily:'Roboto', fontWeight:'500'}}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>

<section className="skills" style={{ marginTop: '100px', textAlign: 'center', width: '70%', margin: '0 auto' }}>
      <p className="section-head-text" style={{textAlign: "center", margin: "auto",  fontFamily:"Amatic SC", color: '#4BD99E', fontSize: '5rem', marginTop: '50px' }}>Skills</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={`Skill ${index}`} className="skill-image" />
            <p style={{color:'#4BD99E', fontSize:'1.2rem'}}>{skill.text}</p>
          </div>
        ))}
      </div>
    </section>

    <p className={styles.sectionHeadText} style={{ textAlign: "center", margin: "auto", fontFamily:"Amatic SC", color: '#4BD99E', fontSize: '5rem', marginTop: '50px'}}>Experience</p>
      <motion.div variants={textVariant()} initial="hidden" animate="visible" style={{ marginTop: '70px' }}>
      </motion.div>

      <div className='mt-20 flex flex-col items-center' >
        <VerticalTimeline lineColor="#19777E" >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <section className="hobbies" style={{ marginTop: '50px', textAlign: 'center' }}>
        <p className={styles.sectionHeadText} style={{ textAlign: "center", margin: "auto", fontFamily:"Amatic SC", color: '#4BD99E', fontSize: '5rem', paddingBottom:"2%", }}>Things that make me happy!!</p>
        {/* <ul className="list-disc list-inside mt-4" style={{ display: 'flex', justifyContent: 'space-between', padding: 0, width:"70%" , margin:"auto"}}>
          {hobbies.map((hobby, index) => (
            <li key={index} className="text-lg" style={{ listStyle: 'none' , color:"#4BD99E", fontSize:"1.5rem", }}>{hobby}</li>
          ))}
        </ul> */}
      </section>

      {/* <section className="carousel" style={{ marginTop: '50px', paddingBottom:"100px" }}>
        
        <Slider {...settings}>
          {hobbyImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Hobby ${index}`} style={{ width: "90%", borderRadius:"10px", boxShadow: "0 4px 6px #4BD99E", objectFit:"cover", marginLeft:"25px" }} />
            </div>
            
          ))}
        </Slider>
       
      </section> */}
      <section className="carousel" style={{ marginTop: '50px', paddingBottom: "100px" }}>
  <Slider {...settings}>
    {hobbyImages.map((image, index) => (
      <div key={index} style={{ padding: '0 10px' }}>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img 
            src={image} 
            alt={`Hobby ${index}`} 
            style={{ width: "90%", height:"200px", borderRadius: "10px", boxShadow: "0 4px 6px #4BD99E", objectFit: "cover", margin: "0 auto" }} 
          />
          <p style={{ marginTop: '2rem', color: '#4BD99E', fontSize: '1.5rem', fontFamily: 'Roboto' }}>
            {hobbyTexts[index]}
          </p>
        </div>
      </div>
    ))}
  </Slider>
</section>

    </>
  );
};

export default Experience;

