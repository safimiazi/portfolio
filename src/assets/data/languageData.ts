export type Language = {
    name: string;
    description: string;
    projects: {
        title: string;
        summary: string;
        githubLink: string | null;
        liveLink?: string | null;
    }[];
};

export const languages: Language[] = [
    {
        name: "JavaScript",
        description:
            "Experienced JavaScript developer with a year of hands-on expertise in crafting dynamic and interactive web applications. Proficient in leveraging the power of JavaScript to create responsive and user-friendly interfaces. Well-versed in client-side scripting, asynchronous programming, and utilizing the latest technologies to enhance the overall user experience. Adept at combining object-oriented and functional programming paradigms to deliver robust and scalable solutions. Passionate about staying current with industry trends and continuously refining skills to contribute effectively to innovative projects.",
        projects: [
            {
                title: "Hotel Booking",
                summary: "A full-stack website for Hotel Management",
                githubLink: "https://github.com/safimiazi/hotel-management-application",
            },
            {
                title: "Safi Chat",
                summary: "A full-stack website for Messaging",
                githubLink: "https://github.com/safimiazi/safi-chat-app-client",
            },
            {
                title: "Restaurant Management",
                summary:
                    "A complete website for a Restaurant",
                githubLink:
                    "https://github.com/safimiazi/restaurant-managment-client",
            },
        ],
    },
    {
        name: "TypeScript",
        description:
            "Seasoned TypeScript developer with a year of dedicated experience in building robust and scalable web applications. Proficient in harnessing TypeScript's strong typing and advanced features to enhance code quality and maintainability. Skilled in seamlessly integrating TypeScript into modern development workflows, promoting cleaner code architecture and better collaboration within teams. Extensive knowledge of leveraging TypeScript for both front-end and back-end development, ensuring a consistent and reliable development experience. Committed to staying at the forefront of TypeScript advancements to deliver cutting-edge solutions.",
        projects: [
            {
                title: "B2B LOI Management System (Astha Trip)",
                summary: "A full-stack web application for Travel Agency",
                githubLink: "https://github.com/safimiazi/sin_front-end",
            },
            {
                title: "B2B LOI Management System (Astha Trip)",
                summary: "A full-stack web application for Travel Agency",
                githubLink: "https://github.com/safimiazi/talk",
            },
            {
                title: "Video Conferencing Website",
                summary: "Video Conferencing Application [Full-Stack]",
                githubLink: "https://github.com/safimiazi/talk",
            },
         
        ],
    },
];
