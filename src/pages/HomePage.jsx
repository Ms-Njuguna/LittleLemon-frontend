import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/homepage/heroSection";

function HomePage() {
    return (
        <div>
            <div><Navbar /></div>
            <div><HeroSection /></div>
            <h1>the home page or landing page</h1>
        </div>
    );
}

export default HomePage;