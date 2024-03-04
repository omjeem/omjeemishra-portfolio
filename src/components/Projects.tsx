import taskmaster from "../images/taskmaster.jpeg";
import payTm from "../images/payTm.png";
import portfolio from "../images/portfolio.png";


import { Button } from "./subComponents/Button";


export function Projects() {
    const project: Description[] = [
        {
            name: "Taskmaster",
            desc: `<b>Taskmaster</b> is a <b>MERN</b> project in <b>TypeScript</b>, 
            offering robust task management. Features responsive UI with <b>Toastify</b>, <b>Recoil</b> for state management, 
            <b>JWT</b> for authentication, <b>Zod</b> for validation, <b>Prisma</b> for ORM, <b>MongoDB</b> for database, and modular architecture with 
            local storage for <b>sessions</b>.`,
            tech: "React, Node, Express, MongoDB",
            caseStudy: "This is a case study",
            src: taskmaster,
            live: "https://taskmaster-todo-app.vercel.app/",
            forntend: "https://github.com/omjeem/taskmaster-frontend",
            backend: "https://github.com/omjeem/taskmaster-backend/"
        },
        {
            name: "My Wallet: A Paytm Wallet Clone ",
            desc: "Developed <b>Paytm Wallet Clone</b>, a comprehensive <b>MERN</b> project in <b>JavaScript</b>, facilitating secure money transfers. Features intuitive UI with <b>Toastify</b>, robust backend with <b>Node.js</b>, <b>Zod</b> for data validation, <b>MongoDB</b> for storage, and <b>transaction</b> sessions for <b>atomicity</b>. Empowers users with transaction history monitoring and <b>profile updates</b>. Utilizes JWT for <b>authentication</b>, ensuring secure interactions and authorized access.",
            tech: "React, Node, Express, MongoDB",
            caseStudy: "This is a case study",
            src: payTm,
            live: "https://paytm-wallet-app.vercel.app/",
            forntend: "https://github.com/omjeem/paytm-wallet-frontend/",
            backend: "https://github.com/omjeem/paytm-wallet-backend/"
        },
        {
            name: "My Portfolio",
            desc: "Crafted a polished <b>My Portfolio</b> website with <b>React</b>, highlighting skills and projects elegantly on a single page. Boasts <b>dynamic UI</b> elements for an engaging user experience. <b>Responsive design</b> ensures optimal viewing on various devices. Customizable for personal branding and easy content updates.",
            tech: "React, Node, Express, MongoDB",
            caseStudy: "This is a case study",
            src: portfolio,
            live: "https://omjeemishra.vercel.app/",
            forntend: "https://github.com/omjeem/omjeemishra-portfolio",
            backend: ""
        }
    ]
    return <div id="project" className=" flex justify-center  ">

        <div>
            <div className="flex justify-center">
                <div className="font-bold text-4xl text-purple-700">Projects</div>
            </div>

            <div className="flex justify-center my-1" >From Concept to Completion: Unveiling Our Projects.  </div>

            {
                project.map((project) => {
                    return <ProjectDesc live={project.live} backend={project.backend} forntend={project.forntend} src={project.src} name={project.name} desc={project.desc} tech={project.tech} caseStudy={project.caseStudy} />
                })
            }


        </div>


    </div>
}

interface Description {
    name: string;
    desc: string;
    tech: string;
    caseStudy: string;
    src: any;
    live: string;
    forntend: string;
    backend: string;

}
function ProjectDesc(props: any) {
    const createMarkup = () => {
        return { __html: props.desc };
    };

    return (
        <div className="lg:flex justify-center items-center w-full my-8">
            <div className="flex justify-center">
                <img src={props.src} alt="omjee" className="h-44 lg:h-80 " />
            </div>
            <div className="space-y-4 m-12 lg:m-16">
                <div className="font-bold text-2xl">{props.name}</div>
                <div className="max-w-[500px] lg:max-w-[500px] overflow-wrap" dangerouslySetInnerHTML={createMarkup()}></div>
                <div className="flex  ">
                {
                        props.live && (
                            <a href={props.live} target="_blank">
                                <Button label={"Live"} />
                            </a>
                        )
                    }

                    {
                        props.forntend && (
                            <a href={props.forntend} target="_blank">
                                <Button label={"Frontend"} />
                            </a>
                        )
                    }
                    {
                        props.backend && (
                            <a href={props.backend} target="_blank">
                                <Button onClick={()=>{
                                    console.log(props.backend)
                                }} label={"Backend"} />
                            </a>
                        )
                    }



                </div>

            </div>
        </div>
    );
}
