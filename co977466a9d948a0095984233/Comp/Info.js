import React from "react"

export default function Info() 
{return (
    <div className = "info">
    <img className = "profilePic" src = "../Images/profilePic.jpg" alt = "photo of self"></img>
    <h1 className = "name"> Khyati Bhat </h1>
    <p className = "jobTitle"> IITM Student & Beginner FrontEnd Dev </p>
    <p className = "website"> www.thisismysite.com </p> 

    <div className = "button">
    <a className= "mailButton" href = "mailto:Khyati9505@gmail.com"><img src = "../Images/mail.jpg" />Email</a>
    <a className = "linkedInButton" href = "www.linkedin.com/in/khyati-bhat-5846222a8"><img src = "../Images/linkedIn.png" />LinkedIn</a> 
    </div>
    </div>
)
}