import React from 'react'
import './Homepage.scss'
import facebook from '../Assets/facebook.png'
import facebookB from '../Assets/facebookB.png'
import instagramB from '../Assets/instagram.webp'
import gmailB from '../Assets/gmail.jpg'
import instagram from '../Assets/instagram.jpg'
import { Link } from "react-router-dom"
import camera from '../Assets/camera.jpeg'
import aboutImage from '../Assets/about.jpg'
import phone from '../Assets/phone.png'
import imagix from '../Assets/imagixlogo.jpg'
import eleli from '../Assets/elelilogo.jpg'

function Homepage() {
  return (
    <div className='homePageWrapper'>
        <div className="landingPage">
            <div className="header">
                <div className="hTittle">
                <Link to='/'> <span>IMAGIX <br /> MEDIA</span> </Link> 
                </div>
                <div className="socials">
                    <div className="links">
                        <a target="_blank" href="https://www.facebook.com/scola.imagix"><img src={facebook} alt="" srcset="" /></a>
                        <a target="_blank" href="https://instagram.com/imagixafrica?igshid=YmMyMTA2M2Y"><img src={instagram} alt="" srcset="" /></a>
                    </div>
                    <div className="phone">
                        <span>0702659667</span>
                    </div>
                </div>
            </div>
            <div className="body">
                  
               <div className="canva">
               
                   <img src={camera} alt="" />
                   <div className="text">
                       <span>IMAGIX</span>
                       <span>MEDIA</span>
                   </div>
                    <div className="right"></div>
                    
                    <div className="buttons">
                        <span> <Link to='/gallery'>Gallery</Link></span>
                        <span><Link to='/rates'>Rates</Link></span>
                        <span><Link to='/gallery'>Works</Link></span>
                        <span><Link to='/rates'>Book Now</Link></span>
                    </div>
               </div>
               <div className="pageTwo">
                    <div className="topHalf">
                        <h2>About Us</h2>
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about">
                        <h3>Imagix</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem praesentium labore ut mollitia nam consequatur eveniet nobis. Nesciunt adipisci voluptatum, consectetur quibusdam veniam recusandae beatae quos assumenda quia amet!</p>
                        <a href="">Book Us</a>
                    </div>
               </div>
               <div className="pageThree">
                    <h2>We Cover The Following</h2>
                    <div className="categories">
                        <span>Weddings</span>
                        <span>Events</span>
                        <span>Potraits</span>
                        <span>Birthdays</span>
                        <span>Baby Bumps</span>
                        <span>Ruracios</span>
                        <span>Corporate Meetings</span>
                        <span>Rallies</span>
                    </div>
                    <div className="desc">
                        <p>We shoot Proffesional Images and videos in all of the above.Click Button below to book us or see our rates</p>
                        <div className="links">
                            <a href="">Rates</a>
                            <a href="">Book Now</a>
                        </div>
                    </div>
               </div>
               <div className="pageFour" id='contacts'>
                    <h2>Contact Us Via</h2>
                    <div className="links">
                        <a target="_blank" href="https://www.facebook.com/scola.imagix"><img src={facebookB} alt="" /></a>
                        <a target="_blank" href="https://instagram.com/imagixafrica?igshid=YmMyMTA2M2Y"><img src={instagramB} alt="" /></a>
                        <a target="_blank" href=""><img src={gmailB} alt="" /></a>
                    </div>
                    <div className="phone">
                        <img src={phone} alt="" />
                        <p>07 02 659 667</p>
                        
                    </div>

                    <div className='end'>Find us on all social medias, alias imagix africa</div>
                    <div className="footer">
                        <span>
                            <h4>Made For</h4>
                            <img src={imagix} alt="" />
                        </span>
                        <span>
                            <h4>Made By</h4>
                            <img src={eleli} alt="" />
                        </span>
                    </div>
               </div>
            </div>

        </div>
       
    </div>
  )
}

export default Homepage