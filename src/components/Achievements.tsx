import baoiam from "../certificates/baoiam.png";
import hacerRankJava from "../certificates/hacerRank-java.png";
import hackerRankProblemSolving from "../certificates/hackerRank-problemSolving.png";
import mangtas from "../certificates/mangtas.png";
import scalerJava from "../certificates/scaler-java.png";




export function Achievements() {
    const list = [
        { course: "Certificate Of Internship", organization: "Baoiam", image: baoiam },
        { course: "Full Stack Engineer Certificate", organization: "MANGTAS", image: mangtas },
        { course: "Java Course", organization: "Scaler", image: scalerJava },
        { course: "Problem Solving (Basic) Certificate", organization: "Hacker Rank", image: hackerRankProblemSolving },
        { course: "Java (Basic) Certificate", organization: "Hacker Rank", image: hacerRankJava }

    ]
    return <div id="achievements" className=" flex justify-center">
        <div >
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center text-4xl font-bold ">
                        <span >My </span>
                        <span className="text-purple-700 mx-1"> Certificates</span>
                    </div>
                    <div className="text-center my-1">
                        Building Credibility, One Achievement at a Time.
                    </div>
                </div>
            </div>

            <div className="my-10">
                {
                    list.map((edu) => {
                        return <AchievementsDetail course={edu.course} organization={edu.organization} image={edu.image} />
                    })
                }
            </div>


        </div>
    </div>
}



function AchievementsDetail(props: any) {
    return <div className="mx-5 p-4 space-y-4 bg-gray-100 lg:flex items-center my-10 bg-white border border-gray-100 rounded-lg shadow hover:shadow-2xl  ">
        <div className="flex justify-center ">
            <img src={props.image} alt="gl bajaj" className="w-56 h-44 " />
        </div>
        <div className="mx-5  items-center space-y-1">
            <div className="text-2xl font-semibold text-blue-700">{props.course}</div>
            <div className="text-xl">{props.organization}</div>
        </div>

    </div>
}


