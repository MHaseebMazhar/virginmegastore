import React from "react";
import Deals from "../DealPages/Deals/Deals";

import Gaming from "../Gaming/Gaming";
import Toys from "../Toys/Toys";
import Collectibles from "../Collectibles/Collectibles";
import House from "../House/House";
import SportsAndOutdoor from "../Sports&Outdoor/Sports&Outdoor";
import Pets from "../Pets/Pets";
import Fashion from "../Fashion/Fashion";
import Stationery from "../Stationery/Stationery";
import Books from "../Books/Books";
import Music from "../Music/Music";
import MusicalInstruments from "../MusicalInstruments/MusicalInstruments";
import Codes from "../Codes/Codes";
import Ideas from "../Ideas/Ideas";
import Tickets from "../Tickets/Tickets";
import Circle from "../Circle/Circle";
import {Routes, Route } from "react-router-dom";
import TechDeals from "../DealPages/TechDeals/TechDeals";
import BestTechDeals from "../DealPages/BestTechDeals/BestTechDeals";
import ProductPage from "../Tech/ProductPages/Product/ProductPage";
function AllPages() {
  return (
    
      <Routes>
        <Route path="/deals" element={<Deals />} />
        <Route path="/tech" element={<><TechDeals /><BestTechDeals/></>} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/collectibles" element={<Collectibles />} />
        <Route path="/house" element={<House />} />
        <Route path="/sports-outdoor" element={<SportsAndOutdoor />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/stationery" element={<Stationery />} />
        <Route path="/books" element={<Books />} />
        <Route path="/music" element={<Music />} />
        <Route path="/musical-instruments" element={<MusicalInstruments />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/product/:id" element={<ProductPage />} />

      </Routes>
      
  );
}
export default AllPages;
