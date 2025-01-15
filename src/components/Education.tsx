import glBajaj from "../images/gl Bajaj.jpg";
import crb from "../images/crbSchool.jpeg";
import paradise from "../images/paradiseSchool.jpg";


interface EducationInfo {
    course: string,
    institute: string,
    duration: string,
    schoolImage: any
}

export function Education() {
    const list: EducationInfo[] = [
        { course: "B.Tech in Computer Science and Engineering", institute: "GL Bajaj Group of Institutions, Mathura", duration: "2020-2024 | Pursuing | 80.1%", schoolImage: glBajaj },
        { course: "Intermediate in PCM", institute: "Paradise Public School, Mainpuri", duration: "2019-2020 | Completed | 88.1%", schoolImage: paradise },
        { course: "High School", institute: "CRB Public School, Mainpuri", duration: "2017-2018 | Completed | 83.1%", schoolImage: crb },
    ]
    return <div id="education" className=" mx-5 mt-16 flex justify-center">
        <div >
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center text-4xl font-bold ">
                        <span >My </span>
                        <span className="text-purple-700 mx-1"> Education</span>
                    </div>
                    <div className="text-center my-1">
                        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think .
                    </div>
                </div>
            </div>

            <div className="my-10">
                {
                    list.map((edu) => {
                        return <EducationDetail course={edu.course} institute={edu.institute} duration={edu.duration} schoolImage={edu.schoolImage} />
                    })
                }
            </div>


        </div>
    </div>
}



function EducationDetail(props: EducationInfo) {
    return <div className="p-4  lg:flex space-y-2 lg:space-x-4 items-center my-10 bg-white border border-gray-100 rounded-lg shadow hover:shadow-2xl  ">
        <div className="flex justify-center">
            <img src={props.schoolImage} alt="gl bajaj" className="w-40 h-40 " />
        </div>
        <div className="mx-5  items-center space-y-1">
            <div className="text-2xl font-semibold text-blue-700">{props.course}</div>
            <div className="">{props.institute}</div>
            <div className=" text-green-700">{props.duration}</div>
        </div>

    </div>
}



