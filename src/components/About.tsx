import omjee from "../images/omjee.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import leetcode from "../images/leetcode.png";
import { Button } from "./subComponents/Button";


export function About() {
    return <div id="about" className="mt-10  justify-center mt-20 ">
        <div className="lg:flex justify-center items-center ">
            <div className="flex justify-center items-center">
                <img src={omjee} className=" w-100 "></img>
            </div>
            <div>
                <div className="ms-4  items-center  ">
                    <div className="text-xl lg:text-2xl ">HI THERE! I'M</div>
                    <div className="text-4xl lg:text-6xl font-bold py-1">
                        <span className="text-purple-700">Om Jee</span>
                        <span> Mishra</span>
                    </div>
                    <div className="mt-4 lg:text-xl py-2">As a <b>Full Stack Developer</b>, I bring ideas to life,<br></br>
                        crafting captivating web experiences with every line of code.
                    </div>

                </div>
                <div className="my-8 flex space-x-2 lg:space-x-5  items-center">
                    <a href="https://drive.google.com/file/d/1qk_0PV0KjO6Y4XlhOyJGDHxOkKYzLeP_/view?usp=drive_link" target="_blank"  >
                        <Button label={"Resume"} />
                    </a>

                    <a href="https://github.com/omjeem" target="_blank"  >
                        <img src={github} className="w-8 h-8 cursor-pointer "></img>
                    </a>
                    <a href="https://twitter.com/om_jee_mishra" target="_blank"  >
                        <img src={twitter} className="w-8 h-8 cursor-pointer "></img>
                    </a>
                    <a href="https://www.linkedin.com/in/omjeem/" target="_blank"  >
                        <img src={linkedin} className="w-8 h-8 cursor-pointer "></img>
                    </a>
                    <a href="https://leetcode.com/omjeem/" target="_blank"  >
                        <img src={leetcode} className="w-8 h-8  cursor-pointer"></img>
                    </a>
                </div>
            </div>

        </div>
    </div>
}   