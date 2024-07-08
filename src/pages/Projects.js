import React from "react";
import StarsCanvas from "./StarsCanvas";
import stock from "../assets/stock.png";
import hurricane from "../assets/hurricane.png";
import RRSLM from "../assets/RRSLM.png";
import hostelhub from "../assets/hostelhub.jpg";
import stroke from "../assets/strokeprediction.png";
import uber from "../assets/uberinsights.jpeg";
import football from "../assets/football.jpg";
import sentiment from "../assets/sentiment.png";
import disney from "../assets/disney.png";

const projects = [
  {
    id: 1,
    title: "StockSurf: Full-Stack Stock Trading Platform",
    image: stock,
    description: "Designed and developed a real-time stock trading platform, integrating Highcharts and Polygon API to provide real-time stock data and interactive visualizations, enhancing user decision-making for investments. Also, added robust features for live stock trading, utilizing MongoDB for efficient data handling, and enabling users to create personalized watchlists, ensuring timely updates on price fluctuations.",
    link: "https://drive.google.com/drive/folders/1ha2VnEtnSecjXL4oXwwChYG2TrZbeH7K?usp=sharing",
    techStack: ["Angular", "Flask", "Node.js", "MongoDB","Highcharts", "Polygon API"],
  },
  {
    id: 2,
    title: "Refining Reasoning Skills in Language Models(RRSLM)",
    image: RRSLM,
    description: "Developed RRSLM by leveraging teacher models, such as GPT-4 (1.7 trillion parameters), and Llama-2 (13 billion parameters), to generate reasoning samples for fine-tuning smaller models like GPT-3 and GPT-2. Assessed the approach across 6 diverse datasets, covering complex reasoning tasks in arithmetic (SingleEq, AddSub, MultiArith, SVAMP) and miscellaneous challenges (Date Understanding, Tracking Shuffled Objects).",
    link: "https://github.com/Ravneet-Kaur-2000/Refining_Reasoning_Skills_in_Language_Models",
    techStack: ["Python", "Transformers", "GPT", "Fine-Tuning", "Llama-2"],
  },
  {
    id: 3,
    title: "Football Match Prediction using Multi-Output Regression",
    image: football,
    description: "Predicted the outcome of football matches and the winners of the 2022 FIFA World Cup using Exploratory Data Analysis (EDA) and machine learning algorithms, including Random Forests, Decision Trees, K-Nearest Neighbors, XGBoost, and Gradient Boosting. The models were hyper-parameter-tuned for optimal performance. Tree-boosting algorithms showed superior fit and faster results, with XGBoost outperforming Gradient Boosting with an accuracy of 98.34%. Applying the XGBoost model, the study predicted Argentina as the winner for the 2022 FIFA World Cup in Qatar.",
    link: "https://github.com/Ravneet-Kaur-2000/FIFA_WC_2022_Prediction",
    techStack: ["Python", "Forecasting", "Scikit-learn", "XGBoost", "EDA"],
  },
  {
    id: 4,
    title: "HostelHub: Smart Room Allocation System",
    image: hostelhub,
    description: "Developed a multi-college hostel management system, enabling seamless room bookings across diverse hostels while offering one, two and four sharing options based on real-time availability, allowing students to book and later reallocate rooms, optimizing utilization and enhancing flexibility. Also, designed an intuitive admin module facilitating comprehensive oversight, including student tracking, room availability checks, reallocation management.",
    link: "https://github.com/Ravneet-Kaur-2000/Hostel_management_system",
    techStack: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"],
  },
  {
    id: 5,
    title: "Uber Data Insights: GCP and BigQuery Exploration",
    image: uber,
    description: "Devised and implemented an end-to-end Extract, Transform & Load (ETL) pipeline using MageAI on a Google Cloud Virtual Machine, leveraging Cloud Storage to process and manage a vast dataset of over 100,000 Uber trips. Extracted transformed data into Google BigQuery and employed SQL queries to perform Exploratory Data Analysis(EDA) and created visually informative dashboards to provide valuable insights.",
    link: "https://lookerstudio.google.com/u/0/reporting/e49bb38f-b061-4138-b036-97eb2676688d/page/ppxaD",
    techStack: ["ETL Pipelining", "MageAI", "BigQuery", "Cloud Storage", "Looker Studio"],
  },
  {
    id: 6,
    title: "Disney+ Clone",
    image: disney,
    description: "Developed a front-end clone of Disney+, designed to mirror the streaming platform's user interface while incorporating enhanced authentication features. Utilized React for the core framework and React Router for seamless navigation, ensuring a smooth and intuitive user experience. Integrated Firebase to enable robust authentication, allowing users to log in with their Google credentials. Employed Styled Components to maintain a consistent and visually appealing design throughout the clone.",
    link: "https://react-disneyplus-clone-a6501.firebaseapp.com/",
    techStack: ["React", "React Router", "Firebase", "Styled Components"],
  },
  {
    id: 7,
    title: "Deep Learning Based Hurricane Intensity Estimation",
    image: hurricane,
    description: "Employed an innovative approach to extract crucial insights from National Hurricane Center’s HURDAT2 database for recent years (2019, 2018, 2017, 2016 and 2015) enabling precise hurricane intensity forecasts. Implemented a 5-layer Convolutional Neural Network (CNN) while harnessing a diverse range of performance metrics to comprehensively assess and refine predictive capabilities of engineered model.",
    link: "https://github.com/Ravneet-Kaur-2000/Deep-Learning-Based-Hurricane-Intensity-Estimation-",
    techStack: ["Python", "TensorFlow", "CNN", "Augmentation"],
  },
  {
    id: 8,
    title: "Stroke Prediction using Optimization and Exploratory Data Analysis",
    image: stroke,
    description: "Developed a predictive model for stroke likelihood using various machine learning algorithms (SVC, Decision Tree, Random Forest, XGBoost and KNeighbors) and achieved significant accuracy improvements through hyperparameter tuning, increasing prediction accuracy from 80-85% to approximately 95%. everaged Exploratory Data Analysis (EDA) for comprehensive visualization and analysis, providing valuable insights into the relationships between health behaviors and stroke risk factors. ",
    link: "https://ieeexplore.ieee.org/document/10119295",
    techStack: ["Python", "EDA", "HyperParameter Tuning", "XGBoost"],
  },
  ,
  {
    id: 9,
    title: "Analysis of Tweets with Emoticons for Sentiment Detection",
    image: sentiment,
    link:"https://github.com/Ravneet-Kaur-2000/Sentiment_Analysis",
    description: "Developed a sentiment analysis model using XGBoost to evaluate tweets containing both text and emoticons, achieving the highest accuracy of 87.84% compared to other algorithms (LinearSVC, Logistic Regression, BernoulliNB). The superior performance of XGBoost is due to the fact that it leverages gradient boosting to correct previous model errors and enhance performance, providing a robust tool for real-time sentiment analysis on social media platforms.",
    techStack: ["Python", "NLP", "Classification", "Random Forest"],
  },
];

const Projects = () => {
  return (
    <div className='main-container'>
      <StarsCanvas />
      <p style={{ textAlign: "center", margin: "auto", fontFamily:"Amatic SC", color: '#4BD99E', fontSize: '5rem', paddingBottom:"2%", marginTop: "80px" }}>Projects</p>
      <div className="container mx-auto mt-10 content">
        <div className="project-grid" style={{  marginBottom:"100px" }}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <p className="project-title">
                {project.title}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-solid fa-link"></i>
                </a>
              </p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

