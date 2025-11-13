import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Programs from './components/programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import './components/programs/Programs.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './components/About/About.jsx'

const App = () => {
  const programs = [
  {
    id: 1,
    title: "Deep Learning with Neural Networks",
    category: "Artificial Intelligence",
    description: "Master deep learning architectures, CNNs, RNNs, and transformers using TensorFlow and PyTorch.",
    duration: "6 Months",
    fees: "₹25,000",
    teacher: "Aman Verma",
    level: "Intermediate",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    category: "Machine Learning",
    description: "Learn supervised and unsupervised learning, regression, classification, and model evaluation.",
    duration: "4 Months",
    fees: "₹20,000",
    teacher: "Dr. Sneha Kapoor",
    level: "Beginner",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Natural Language Processing",
    category: "Artificial Intelligence",
    description: "Understand NLP concepts, text processing, sentiment analysis, and language models like BERT and GPT.",
    duration: "3 Months",
    fees: "₹15,000",
    teacher: "Rohit Sharma",
    level: "Beginner",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Computer Vision & Image Recognition",
    category: "Artificial Intelligence",
    description: "Deep dive into image processing, object detection, facial recognition, and CNN architectures.",
    duration: "3 Months",
    fees: "₹18,000",
    teacher: "Kiran Patel",
    level: "Intermediate",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "AI-Powered Chatbots & Virtual Assistants",
    category: "Artificial Intelligence",
    description: "Learn to build intelligent chatbots using NLP, dialogue systems, and conversational AI frameworks.",
    duration: "2 Months",
    fees: "₹12,000",
    teacher: "Ananya Roy",
    level: "Beginner",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Reinforcement Learning & AI Agents",
    category: "Machine Learning",
    description: "Create intelligent agents using Q-learning, policy gradients, and deep reinforcement learning.",
    duration: "5 Months",
    fees: "₹22,000",
    teacher: "Vikas Mehta",
    level: "Intermediate",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Generative AI & Large Language Models",
    category: "Artificial Intelligence",
    description: "Explore GANs, diffusion models, and fine-tune LLMs like GPT and Llama for custom applications.",
    duration: "6 Months",
    fees: "₹30,000",
    teacher: "Dr. Ritu Nair",
    level: "Advanced",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
  },
  {
    id: 8,
    title: "MLOps & AI Model Deployment",
    category: "Machine Learning",
    description: "Learn model deployment, monitoring, CI/CD for ML, Docker, Kubernetes, and cloud platforms.",
    duration: "4 Months",
    fees: "₹24,000",
    teacher: "Aditya Malhotra",
    level: "Intermediate",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    title: "AI for Data Analytics & Predictions",
    category: "Machine Learning",
    description: "Master predictive modeling, time series forecasting, and AI-driven business intelligence tools.",
    duration: "3 Months",
    fees: "₹14,000",
    teacher: "Nidhi Singh",
    level: "Beginner",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80"
  }
];

    
      
      

  const HomePage = () => (
    <>
      <Navbar />
      <Hero />
      <div className='container' id="programs">
        <Title title="What we offer" subtitle="OUR PROGRAM" />
        <div className='parent'>
          {programs.map(function(elem){
            return <Programs 
              description={elem.description} 
              duration={elem.duration} 
              title={elem.title} 
              teacher={elem.teacher}
              fees={elem.fees} 
              image={elem.image}
              level={elem.level}
              rating={elem.rating}
              key={elem.id}
            />
          })}
        </div>
      </div>
      <About />
      <Footer />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;