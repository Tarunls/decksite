// app/data/workData.ts

export interface WorkItem {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    // The "Front" image of the card (logo or relevant image)
    frontImage: string;
}

export const workItems: WorkItem[] = [
    {
        id: 1,
        company: "TechCorp Solutions",
        role: "Senior Full Stack Engineer",
        period: "2022 - Present",
        description: "Led development of a high-traffic fintech platform. Migrated legacy monolith to microservices, improving deployment velocity by 40%.",
        technologies: ["Next.js", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
        // Replace with your actual images
        frontImage: "/cards/time702-copy_51164800263_l.jpg"
    },
    {
        id: 2,
        company: "Innovate Dallas",
        role: "Frontend Developer",
        period: "2020 - 2022",
        description: "Built highly interactive dashboards for real-time data visualization. Collaborated with design teams to implement complex animations.",
        technologies: ["React", "Redux", "D3.js", "Framer Motion", "Tailwind CSS"],
        frontImage: "/cards/time703-copy-4_51165341824_l.jpg"
    },
    {
        id: 3,
        company: "UTD Startup Forge",
        role: "Junior Developer (Intern)",
        period: "2019 - 2020",
        description: "Developed MVP for a student-led startup incubator. Implemented authentication and database schema design.",
        technologies: ["Python", "Django", "JavaScript", "HTML/CSS"],
        frontImage: "/cards/time704-copy-3_51165659575_l.jpg"
    },
];