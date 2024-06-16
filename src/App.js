import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Interests from './components/Interests';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const projects = [
    {
      image: 'https://opengraph.githubassets.com/8396179/Krupakar-Reddy-S/Image-Editor-Terminal',
      language: 'Java',
      title: 'Imag-Editor-Terminal',
      description: 'Terminal based Image Editor',
      githubLink: 'https://github.com/Krupakar-Reddy-S/Image-Editor-Terminal'
    },
    {
      image: 'https://opengraph.githubassets.com/8396179/Krupakar-Reddy-S/Web-Scraper-Product-Prices-Comparison',
      language: 'Python',
      title: 'Web-Scraper-Product-Prices-Comparison',
      description: 'Contains a package to extract products from search results of Amazon, Flipkart and snapdeal (all Indian), with an option to filter for relevant products and show their graph comparison',
      githubLink: 'https://github.com/Krupakar-Reddy-S/Web-Scraper-Product-Prices-Comparison'
    },
    {
      image: 'https://opengraph.githubassets.com/8396179/Krupakar-Reddy-S/bhashini-web-translator',
      language: 'JavaScript',
      title: 'bhashini-web-translator',
      description: 'Webpage Translator for specialized for Regional Languages. Built using Bhashini APIs',
      githubLink: 'https://github.com/Krupakar-Reddy-S/bhashini-web-translator'
    },
    {
      image: 'https://opengraph.githubassets.com/8396179/Krupakar-Reddy-S/Gemini-ChatBot',
      language: 'Python',
      title: 'Gemini-ChatBot',
      description: 'A ChatBot powered by Gemini \nhttps://gemini-chatbot-test.streamlit.app/',
      githubLink: 'https://github.com/Krupakar-Reddy-S/Gemini-ChatBot'
    },
    {
      image: 'https://opengraph.githubassets.com/8396179/Krupakar-Reddy-S/Backend-Project-E-Commerce',
      language: 'Java',
      title: 'Backend-Project-E-Commerce',
      description: 'ECommerce Backend System built with SpringBoot',
      githubLink: 'https://github.com/Krupakar-Reddy-S/Backend-Project-E-Commerce'
    },
    {
      image: 'https://opengraph.githubassets.com/8396179/Krupakar-Reddy-S/Portfolio',
      language: 'JavaScript',
      title: 'Portfolio',
      description: 'Portfolio Website built with React',
      githubLink: 'https://github.com/Krupakar-Reddy-S/Portfolio'
    }
  ];

  return (
    <div className='App'>
      <div className='background-image'></div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <About />
      <Portfolio />
      <Interests />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
