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
      title: "Full Stack Web Development",
      category: "Programming",
      description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer.",
      duration: "6 Months",
      fees: "₹25,000",
      teacher: "Aman Verma",
      level: "Intermediate",
      rating: 4.8,
      image: "https://fiverr-res.cloudinary.com/videos/so_48.708688,t_main1,q_auto,f_auto/xtu7oxpvauthg9jwpuwh/do-react-angular-node-development-for-your-web-app.png"
    },
    {
      id: 2,
      title: "Python for Data Science",
      category: "Data Science",
      description: "Learn Python programming, data analysis, visualization, and machine learning fundamentals.",
      duration: "4 Months",
      fees: "₹20,000",
      teacher: "Dr. Sneha Kapoor",
      level: "Beginner",
      rating: 4.7,
      image: "https://www.opensourceforu.com/wp-content/uploads/2020/06/Data-Visualisation_May-2020.jpg"
    },
    {
      id: 3,
      title: "Java Programming Essentials",
      category: "Programming",
      description: "Understand Java syntax, OOP concepts, and build strong foundations for software development.",
      duration: "3 Months",
      fees: "₹15,000",
      teacher: "Rohit Sharma",
      level: "Beginner",
      rating: 4.6,
      image: "https://miro.medium.com/v2/resize:fit:1200/1*BTat1iehnwFKV5efkLR2PA.png"
    },
    {
      id: 4,
      title: "C++ Masterclass",
      category: "Programming",
      description: "Deep dive into C++ concepts including pointers, data structures, and competitive coding.",
      duration: "3 Months",
      fees: "₹18,000",
      teacher: "Kiran Patel",
      level: "Intermediate",
      rating: 4.5,
      image: "https://img.freepik.com/premium-photo/programming-code-abstract-technology-background_272306-158.jpg?w=360"
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      description: "Learn design thinking, wireframing, and prototyping with Figma and Adobe XD.",
      duration: "2 Months",
      fees: "₹12,000",
      teacher: "Ananya Roy",
      level: "Beginner",
      rating: 4.8,
      image: "https://www.techicy.com/wp-content/uploads/2021/09/What-is-UX-and-UI-Design.jpg"
    },
    {
      id: 6,
      title: "Android App Development with Kotlin",
      category: "Mobile Development",
      description: "Create native Android apps using Kotlin, Android Studio, and Firebase integration.",
      duration: "5 Months",
      fees: "₹22,000",
      teacher: "Vikas Mehta",
      level: "Intermediate",
      rating: 4.7,
      image: "https://tse3.mm.bing.net/th/id/OIP.VgfiGtE--ERlIOwdCoKvnwHaE8?cb=ucfimgc2&w=1024&h=683&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 7,
      title: "Machine Learning & AI",
      category: "Data Science",
      description: "Explore supervised, unsupervised learning, and neural networks using Python and TensorFlow.",
      duration: "6 Months",
      fees: "₹30,000",
      teacher: "Dr. Ritu Nair",
      level: "Advanced",
      rating: 4.9,
      image: "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_1280.jpg"
    },
    {
      id: 8,
      title: "Cybersecurity & Ethical Hacking",
      category: "Security",
      description: "Learn network security, penetration testing, and ethical hacking tools & techniques.",
      duration: "4 Months",
      fees: "₹24,000",
      teacher: "Aditya Malhotra",
      level: "Intermediate",
      rating: 4.6,
      image: "https://tse1.mm.bing.net/th/id/OIP.WHZ_ZejzHmFu2A3XYyI02QHaD4?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 9,
      title: "Digital Marketing Pro",
      category: "Marketing",
      description: "Master SEO, Google Ads, content strategy, and social media marketing to grow any brand.",
      duration: "3 Months",
      fees: "₹14,000",
      teacher: "Nidhi Singh",
      level: "Beginner",
      rating: 4.5,
      image: "https://tse3.mm.bing.net/th/id/OIP.JERpZ78cj0lFSBTyYo_g-wHaEO?cb=ucfimgc2&w=1050&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 10,
      title: "Data Structures & Algorithms (DSA)",
      category: "Programming",
      description: "Crack coding interviews by mastering algorithms, recursion, and problem-solving in C++ or Java.",
      duration: "4 Months",
      fees: "₹20,000",
      teacher: "Harsh Agarwal",
      level: "Advanced",
      rating: 4.9,
      image: "https://repository-images.githubusercontent.com/797203940/0aea70b7-7988-4d9b-b3b0-9352ace014c6"
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