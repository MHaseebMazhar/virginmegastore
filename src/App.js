import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/DealPages/CartContext/CartContext';
import AllPages from './Components/AllPages/AllPages';
import Header from './Components/DealPages/Header/Header';
import StationeryDeals from './Components/DealPages/StationeryDeals/StationeryDeals';
import SaveBigMobile from './Components/DealPages/SaveBigMobile/SaveBigMobile';
import GamingDeals from './Components/DealPages/GamingDeals/GamingDeals';
import PCGamingDeals from './Components/DealPages/PCGamingDeals/PCGamingDeals';
import LifeStyleDeals from './Components/DealPages/LifeStyleDeals/LifeStyleDeals';
import Trending from './Components/DealPages/Trending/Trending';
import TechDeals from './Components/DealPages/TechDeals/TechDeals';
import BestTechDeals from './Components/DealPages/BestTechDeals/BestTechDeals';
import LatestDeals from './Components/DealPages/LatestDeals/LatestDeals';
import CultureDeals from './Components/DealPages/CultureDeals/CultureDeals';
import PopularDeals from './Components/DealPages/PopularDeals/PopularDeals';
import BestSellingMusicDeals from './Components/DealPages/BestSellingMusicDeals/BestSellingMusicDeals';
import NewMusicalInstrument from './Components/DealPages/NewMusicalInstrument/NewMusicalInstrument';
import Buy2Get1 from './Components/DealPages/Buy2Get1/Buy2Get1';
import BestSellingBooksDeals from './Components/DealPages/BestSellingBooksDeals/BestSellingBooksDeals';
import ClearanceDeals from './Components/DealPages/ClearanceDeals/ClearanceDeals';
import Footer from './Components/DealPages/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      {/* ✅ Wrap everything inside CartProvider */}
      <CartProvider>
        <Header />
        <AllPages />
        <Routes>
          <Route
            path="/deals"
            element={
              <>
                <StationeryDeals />
                <SaveBigMobile />
                <GamingDeals />
                <PCGamingDeals />
                <LifeStyleDeals />
                <Trending />
                <TechDeals />
                <BestTechDeals />
                <LatestDeals />
                <CultureDeals />
                <PopularDeals />
                <BestSellingMusicDeals />
                <NewMusicalInstrument />
                <Buy2Get1 />
                <BestSellingBooksDeals />
                <ClearanceDeals />
              </>
            }
          />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
