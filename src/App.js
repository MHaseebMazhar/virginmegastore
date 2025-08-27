import './App.css';
import React from 'react';
import Header from './Components/DealPages/Header/Header';
import Deals from './Components/DealPages/Deals/Deals';
import StationeryDeals from './Components/DealPages/StationeryDeals/StationeryDeals';
import SaveBigMobile from './Components/DealPages/SaveBigMobile/SaveBigMobile';
import GamingDeals from './Components/DealPages/GamingDeals/GamingDeals';
import  PCGamingDeals from './Components/DealPages/PCGamingDeals/PCGamingDeals';
import LifeStyleDeals from './Components/DealPages/LifeStyleDeals/LifeStyleDeals';
import Trending from './Components/DealPages/Trending/Trending';
import TechDeals from './Components/DealPages/TechDeals/TechDeals';
import Footer from './Components/DealPages/Footer/Footer';
function App() {
  return (
    <div>
      <Header />
      <Deals />
      <StationeryDeals />
      <SaveBigMobile />
      <GamingDeals />
      <PCGamingDeals />
      <LifeStyleDeals />
      <Trending />
      <TechDeals />
      <Footer />
    </div>
  );
}
export default App;