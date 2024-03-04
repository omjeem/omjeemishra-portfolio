import paradise from "../images/baoiam.png";

// export function Experience(){
//     return <div id="experience" className="py-4">
//         <div className="flex justify-center text-3xl font-semibold py-4">Experience</div>
//         <div className="my-3 bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center justify-center m-4">
//             <div className="">
//                 <ExperienceBox title="Full Stack Developer" company="Omjee Mishra" duration="Jan 2021 - Present" description="I am a Full Stack Developer. I bring ideas to life, crafting captivating web experiences with every line of code." />
//                 <ExperienceBox title="Software Developer" company="TCS" duration="July 2019 - Dec 2020" description="I worked as a Software Developer at TCS. I developed and maintained software applications." />
//             </div>
//         </div>
//     </div>
// }

// function ExperienceBox(props: any) {
//     return <div className="cursor-pointer bg-white	 hover:shadow-2xl my-3  shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
//         <div className="text-xl font-semibold">{props.title}</div>
//         <div className="text-lg font-semibold">{props.company}</div>
//         <div className="text-lg text-green-700">{props.duration}</div>
//         <div className="text-lg">{props.description}</div>
//     </div>
// }

export function Experience() {
    const list = [
        {
            title: "Application Developer Intern",
            company: "Baoiam Innovations Private Limited",
            duration: "Nov 2023 - Feb-2024",
            description: "At Baoiam Innovations Pvt Ltd, I developed backend systems in Node.js and MongoDB for course content management in the MERN stack. Responsibilities included implementing user authentication APIs, collaborating on frontend integration, and designing MongoDB schemas for tailored data management.",
            image: paradise
        }
    ]
    return <div id="experience" className="mx-5 my-16 flex justify-center">
        <div >
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center text-4xl font-bold ">
                        <span className="text-purple-700 mx-1 text-4xl"> Experience</span>
                    </div>
                    <div className="text-center my-1 text-lg">
                        Career Timeline: Unveiling My Professional Journey.
                    </div>
                </div>
            </div>
            <div className="my-10">
                {
                    list.map((experience) => {
                        return <ExperienceBox title={experience.title} company={experience.company} duration={experience.duration} description={experience.description} image={experience.image} />
                    })
                }
            </div>


        </div>
    </div>
}



function ExperienceBox(props: any) {
    return <div className="bg-gray-100 p-4 lg:flex lg:space-x-4 space-y-4 items-center my-10 bg-white border border-gray-100 rounded-lg shadow hover:shadow-2xl  ">
        <div className="flex justify-center">
            <img src={paradise} alt="gl bajaj" />
        </div>
        <div className="mx-5  items-center space-y-1">
            <div className="text-3xl font-semibold text-blue-700">{props.title}</div>
            <div className="text-lg">{props.company}</div>
            <div className="text-lg text-green-700">{props.duration}</div>
            <div className="text-base max-w-[700px] mt-4">{props.description}</div>

        </div>

    </div>
}

