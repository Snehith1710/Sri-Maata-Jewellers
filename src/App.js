import React from "react";
import "./App.css";
import Home from "./components/Home";
import Category from "./components/CategoryCarousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Necklace from "./components/featured pages/Necklace";
import Earrings from "./components/featured pages/Earrings";
import Noserings from "./components/featured pages/Noserings";
import Maangtika from "./components/featured pages/Maangtika";
import Bracelets from "./components/featured pages/Bracelets";
import Bangles from "./components/featured pages/Bangles";
import Waistchain from "./components/featured pages/Waistchain";
import Babywaist from "./components/featured pages/Babywaist";
import Armlets from "./components/featured pages/Armlets";
import Toerings from "./components/featured pages/Toerings";
import Brooches from "./components/featured pages/Brooches";
import Others from "./components/featured pages/Others";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/featured" component={Category} />
        <Route exact path="/Neckwear" component={Necklace} />
        <Route exact path="/Earrings" component={Earrings} />
        <Route exact path="/Noserings" component={Noserings} />
        <Route exact path="/Maangtikas" component={Maangtika} />
        <Route exact path="/Bracelets" component={Bracelets} />
        <Route exact path="/Bangles" component={Bangles} />
        <Route exact path="/Waistchains" component={Waistchain} />
        <Route exact path="/Babywaistchains" component={Babywaist} />
        <Route exact path="/Armlets" component={Armlets} />
        <Route exact path="/Toerings" component={Toerings} />
        <Route exact path="/Brooches" component={Brooches} />
        <Route exact path="/Others" component={Others} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
