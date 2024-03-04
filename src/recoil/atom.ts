
interface Info {
    name: string,
    firstName: string,
    lastName: string
    email: string,
    phoneNumber: string,
    linkedIn: string,
    twitter: string,
    photo: string,
    about: string
}

interface Project {
    title: string,
    description: string[],
    frameWork: string[],
    languages: string[],
    live: string,
    github: string,
    screenshots: string[]
}

interface Eduvation {
    degree: string,
    institute: string,
    gradYear: number,
    stream: string
}

interface Certificate {
    title: string,
    organization: string,
    date: string,
    description: string
}

interface References {

}
interface Skills {
    Languages: string[],
    Development: string[],
    Database: string[],
    Tools: string[],
    Frameworks: string[],
    VersionControl: string[],
    OtherSkills: string[]
}

const project: Project[] = [
    {
        title: "Taskmaster",
        description: [
            "A full-stack MERN (MongoDB, Express.js, React, Node.js) application engineered in TypeScript, serving as a robust task management solution.",
            "Implemented responsive UI components leveraging the Toastify library, enriching user experience with dynamic toast notifications triggered by diverse user actions and backend feedback.",
            "Orchestrated state management using Recoil, ensuring seamless data flow and efficient application performance.",
            "Engineered the backend infrastructure with Node.js and TypeScript, fortifying security with JWT token-based middleware for stringent user authentication on each request.",
            "Employed advanced validation techniques using the Zod library for parsing and validating incoming frontend data streams.",
            "Leveraged Prisma as an ORM (Object-Relational Mapping) tool to interact with the MongoDB database, optimizing data retrieval and manipulation processes.",
            "Utilized Mongoose for schema-based modeling, ensuring data integrity and consistency.",
            "Devised a comprehensive routing structure to accommodate various user requests, fostering modularity and scalability within the application architecture.",
            "Implemented persistent user sessions using local storage, enhancing user convenience and streamlining authentication workflows."
        ],
        frameWork: ["MongoDB", "Express.js", "React", "Node.js"],
        languages: ["TypeScript", "JavaScript"],
        live: "https://taskmaster-todo-app.vercel.app/",
        github: "https://github.com/omjeem/taskmaster-frontend",
        screenshots: ["https://drive.google.com/file/d/1VaEIgQFpTL8XEc7UuErFmTyvio4KSa4r/view?usp=drive_link",
            "https://drive.google.com/file/d/1b0EvCpFexGZOe81UaSAtMy3fGRZpseT9/view?usp=drive_link",
            "https://drive.google.com/file/d/1HBpafg2jQkHmX9_IPdYodqnv42UlUtk4/view?usp=drive_link"]
    }
]