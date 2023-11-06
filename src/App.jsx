import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Models from './pages/Models';
import Scenes from './pages/Scenes';
import TeamIntro from './pages/TeamIntro';
import TopicIntro from './pages/TopicIntro';
import DataIntro from './pages/DataIntro';
import ModelIntro from './pages/ModelIntro';
import AchieveIntro from './pages/AchieveIntro';
import DataPage from './pages/DataPage';
import DataUsePage from './pages/DataUsePage';
import Teams from './pages/Teams';
import AboutPage from './pages/AboutPage';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

import MapPage from './pages/MapPage';
import FactoryPage from './pages/FactoryPage'

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      // once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/models" element={<Models />} />
        <Route path="/scenes" element={<Scenes />} />
        <Route path="/datas" element={<DataPage />} />
        <Route path="/datause/:id" element={<DataUsePage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:id" element={<TeamIntro />} />
        <Route path="/data/:id" element={<DataIntro />} />
        <Route path="/model/:id" element={<ModelIntro />} />
        <Route path="/achieve/:id" element={<AchieveIntro />} />
        <Route path="/topic/:id" element={<TopicIntro />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* map */}
        <Route path="/map" element={<MapPage />} />
        {/* factory */}
        <Route path="/factory" element={<FactoryPage />} />

      </Routes>
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </>
  );
}

export default App;
