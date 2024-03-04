import omjee from "../images/omjee.png";
import burgerMenuIcon from "../images/burgerMenuIcon.png";
import { useMediaQuery } from 'react-responsive';


import { Link } from "react-scroll";
import "./appBar.css"
import { useState } from "react";

export function AppBar() {

    const [showMenu, setShowMenu] = useState(false)

    const isLargeScreen = useMediaQuery({ minWidth: 1024 })

    return <div className="fixed top-0 left-0 w-full z-50">

        <div className=" bg-white flex justify-between py-2">
            <div className="cursor-pointer flex mx-2  text-black font-bold ">
                <div className="flex items-center fixed">
                    <img src={omjee} alt="omjee" className="w-12 mx-2 " />
                    <div className="text-xl flex space-x-1">
                        <div>Om</div>
                        <div>Jee</div>
                        <div>Mishra</div>
                    </div>
                </div>
            </div>

            {
                (
                    isLargeScreen ? <div className=" content-end ">
                        <div className=" flex justify-between  justify-center space-x-5 font-normal text-xl p-2 font-semibold text-2xl	 ">
                            <Link to="about" activeClass="active" spy={true} offset={-200} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800  ">About</Link>
                            <Link to="education" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Education</Link>
                            <Link to="project" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Projects</Link>
                            <Link to="skill" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Skills</Link>
                            <Link to="experience" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Experience</Link>
                            <Link to="achievements" activeClass="active" spy={true} offset={-70} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Certificates</Link>
                            <Link to="contact" activeClass="active" spy={true} offset={-70} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Contact</Link>
                        </div>
                    </div> :

                        <div>
                            <img onClick={() => {
                                setShowMenu(!showMenu)
                            }} src={burgerMenuIcon} alt="menu" className="flex content-end  w-10 h-10 hover:bg-gray-400 rounded-full" />
                            <div className="mr-36">
                                <div className="  fixed  cursor-pointer  ">

                                    {
                                        showMenu && (
                                            <div className=" fixed bg-white rounded-xl flex flex-col  font-normal text-xl p-2 font-semibold text-2xl	 ">
                                                <Link onClick={()=>setShowMenu(false)} to="about" activeClass="active" spy={true} offset={-200} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800  ">About</Link>
                                                <Link onClick={()=>setShowMenu(false)} to="education" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Education</Link>
                                                <Link onClick={()=>setShowMenu(false)} to="project" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Projects</Link>
                                                <Link onClick={()=>setShowMenu(false)} to="skill" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Skills</Link>
                                                <Link onClick={()=>setShowMenu(false)} to="experience" activeClass="active" spy={true} offset={-80} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Experience</Link>
                                                <Link onClick={()=>setShowMenu(false)} to="achievements" activeClass="active" spy={true} offset={-70} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Achievements</Link>
                                                <Link onClick={()=>setShowMenu(false)} to="contact" activeClass="active" spy={true} offset={-70} smooth={true} duration={1000} className="cursor-pointer hover:text-purple-800 ">Contact</Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>


                )
            }



        </div>
    </div>
}