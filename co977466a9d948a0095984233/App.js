import React from "react"
import Info from "./Comp/Info.js"
import About from "./Comp/About.js"
import Interests from "./Comp/Interests.js"
import Footer from "./Comp/Footer.js"

export default function App()
{
    return (
        <div className = "container">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
        </div>
        
    )
}