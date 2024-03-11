import git from "../icons/git.png";
import gitHub from "../icons/github.png";
import java from "../icons/java.png";
import javascript from "../icons/javascript--v1.png";
import materialUI from "../icons/material-ui.png";
import mongoDb from "../icons/mongodb.png";
import mySql from "../icons/mysql-logo.png";
import nodeJs from "../icons/node-js.png";
import postgress from "../icons/postgreesql.png";
import react from "../icons/react.png";
import tailwind from "../icons/Tailwind_CSS_Logo.svg.png";
import typescript from "../icons/typescript.png";
import firebase from "../icons/firebase.png";
import express from "../icons/express.png";
import recoil from "../icons/recoil.png";
// import nextJs from "../icons/nextJs.png";
// import docker from "../icons/docker.png";
import css from "../icons/css.png";
import prisma from "../icons/prisma.png";
import cloudflare from "../icons/cloudflare.png";











export function Skills() {
    return <div id="skill" className="mx-5" >
        <div className="flex justify-center text-4xl font-bold mt-4 text-purple-700 ">My Skills</div>
        <div className="flex justify-center  my-1 text-lg" >
            Skills Overview: A Comprehensive Catalog of My Abilities.
        </div>

        <div className="my-3 bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center justify-center m-4">
            <div className="  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
                {skills.map((item, index) => (
                    <SkillBox key={index} name={item.name} icon={item.icon} />
                ))}
            </div>
        </div>
    </div>
}

function SkillBox(props: Skill) {
    return <div className="cursor-pointer bg-white	 hover:shadow-2xl my-3  shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
        <img src={props.icon} alt={props.name} className="w-10 h-10" />
        <div className="text-lg font-semibold">{props.name}</div>
    </div>
}
interface Skill {
    name: string,
    icon: any

}
const skills: Skill[] = [
    {
        "name": "TypeScript",
        "icon": typescript
    },
    {
        "name": "JavaScript",
        "icon": javascript
    },
    {
        "name": "Java",
        "icon": java
    },

    // {
    //     "name": "NextJs",
    //     "icon": nextJs
    // },
    {
        "name": "NodeJS",
        "icon": nodeJs
    },
    {
        "name": "Express Js",
        "icon": express
    },
    {
        "name": "ReactJs",
        "icon": react
    },
    {
        "name": "Cloudflare",
        "icon": cloudflare
    },

    {
        "name": "MongoDB",
        "icon": mongoDb
    },

    {
        "name": "Firebase",
        "icon": firebase
    },
    {
        "name": "MySql",
        "icon": mySql
    },
    {
        "name": "Postgres",
        "icon": postgress
    },
    {
        "name": "Prisma",
        "icon": prisma
    },
    {
        "name": "TailwindCSS",
        "icon": tailwind
    },
    {
        "name": "MaterialUI",
        "icon": materialUI
    },
    {
        "name": "CSS",
        "icon": css
    },
    {
        "name": "Git",
        "icon": git
    },
    {
        "name": "GitHub",
        "icon": gitHub
    },
    {
        "name": "Recoil",
        "icon": recoil
    }
]