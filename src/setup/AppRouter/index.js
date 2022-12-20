import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import BetterBee from '../../pages/projects/BetterBee';
import BRAINWORKS from '../../pages/projects/BRAINWORKS';
import LoveBox from '../../pages/projects/Lovebox';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects">
        <Route path="lovebox" element={<LoveBox />} />
        <Route path="better-bee" element={<BetterBee />} />
        <Route path="brainworks" element={<BRAINWORKS />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
