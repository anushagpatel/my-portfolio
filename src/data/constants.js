import ProfileImage from "../images/myimage.png";
import NortheasternLogo from "../images/NortheasternLogo.png";
import IBMLogo from "../images/IBMLogo.jpg";
import TCSLogo from "../images/TCSLogo.jpg";
import DobleLogo from "../images/DobleLogo.png";
import JNNCELogo from "../images/JNNCELogo.jpeg";

export const Bio = {
    name: "Anusha G Patel",
    image: ProfileImage,
    roles: ["Full-Stack Developer.", "Software Engineer.", "AI Engineer."],
    description: "AI Software Engineer and Master’s student at Northeastern University with over 5 years of experience developing and deploying production-grade AI solutions, as well as building cloud-native applications and microservices",
    github: "https://github.com/anushagpatel",
    // resume: "ADD_YOUR_RESUME_LINK_HERE",
    linkedin: "https://www.linkedin.com/in/anusha-gpatel/",
    X: "https://x.com/anusha_gpatel",
};

export const skills = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
            { name: "C#", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
            { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
            { name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
            { name: "SQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azuresqldatabase/azuresqldatabase-original.svg" },
            { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
            { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
        ],
    },
    {
        title: "Cloud & Backend Tools",
        skills: [
            { name: "Azure", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "AWS Lambda", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
            { name: "Azure SQL Database", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azuresqldatabase/azuresqldatabase-original.svg" },
            { name: "PostgreSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
            { name: "Git", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        ],
    },
    {
        title: "Machine Learning / AI",
        skills: [
            { name: "Optical Character Recognition (OCR)", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "Retrieval-Augmented Generation (RAG)", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "Copilot Studio", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
            { name: "Azure AI Foundry", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "Azure OpenAI Service", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "Azure AI Search", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "Azure AI Vision", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "Azure AI Language", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
            { name: "PyTorch", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
            { name: "Hugging Face", image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
            { name: "Scikit-learn", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg" },
            { name: "Fine-Tuning", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
            { name: "Prompt Engineering", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
        ],
    },
    {
        title: "Frameworks & Frontend",
        skills: [
            { name: ".NET Core", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg" },
            { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Angular", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
            { name: "Bootstrap", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
            { name: "Figma", image: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format" },
        ],
    },
];

export const experiences = [
    {
        id: 4,
        img: DobleLogo,
        role: "Software Engineer Intern — AI & SDE Team",
        company: "Doble Engineering",
        date: "Jan 2026 - Sep 2026",
        location: "Boston, USA",
        desc: "Supported a document intelligence pipeline to process 100s of DGA reports in minutes using Mistral OCR, structured JSON extraction, parallel processing, and CI/CD automation. Built a transformer oil analysis tool to process DGA and oil quality data, generating graphs and customer-ready reports to support asset assessment and decision-making. Enhanced branding standards across the Protection Suite by implementing consistent UI using C# and .NET. Contributed across multiple projects, building agentic AI solutions and ML/DevOps infrastructure for scalable deployment.",
        skills: ["Mistral OCR", "Python", "C#", ".NET", "CI/CD", "Agentic AI"],
    },
    {
        id: 3,
        img: NortheasternLogo,
        role: "Research Assistant",
        company: "Northeastern University",
        date: "June 2025 - August 2025",
        location: "Boston, USA",
        desc: "Fine-tuned a RoBERTa model to classify English vs. non-English ICLR publications, boosting F1-score by 85% through preprocessing, tokenization, and hyperparameter tuning. Automated data preprocessing workflows with Pandas and NumPy, reducing model training cycles by 25%. Documented evaluation metrics including accuracy, precision, recall, and F1-score.",
        skills: ["Python", "PyTorch", "Hugging Face", "Pandas", "NumPy"],
    },
    {
        id: 2,
        img: IBMLogo,
        role: "Application Developer",
        company: "IBM",
        date: "October 2022 - January 2024",
        location: "Bangalore, India",
        desc: "Built responsive dashboards using .NET, RESTful APIs, and React for Chubb's legacy policy, admin, and claims platforms. Implemented two-factor authentication (2FA) using Spring Security, reducing 'Forgot Password' clicks by 60%. Implemented CI/CD pipelines using Azure DevOps, leading to a 25% reduction in post-deployment defects. Reduced HTTP response time by 70% (1000ms → 300ms) by integrating Redis caching. Maintained project documentation in Confluence, improving onboarding time by 15%.",
        skills: [".NET", "React", "Spring Security", "Azure DevOps", "Redis", "Confluence"],
    },
    {
        id: 1,
        img: TCSLogo,
        role: "System Engineer",
        company: "Tata Consultancy Services",
        date: "January 2020 - October 2022",
        location: "Bangalore, India",
        desc: "Revamped applications from ASP.NET MVC to .NET 5 for KPMG Web Services, offloading 20% of incoming customer requests. Designed and integrated RESTful APIs with JWT-based authentication and role-based access control. Optimized SQL queries and developed views, functions, and triggers for high-efficiency data handling. Implemented Azure PaaS DB and SQL Database solutions for high availability. Coordinated 2 technical reviews/week and delivered monthly demos.",
        skills: ["ASP.NET MVC", ".NET 5", "REST APIs", "JWT", "SQL", "Azure PaaS"],
    },
];

export const education = [
    {
        id: 0,
        img: NortheasternLogo,
        school: "Northeastern University, Boston",
        date: "",
        desc: "MS in Computer Systems Engineering.",
        degree: "Master of Science in Computer Systems Engineering",
    },
    {
        id: 1,
        img: JNNCELogo,
        school: "Jawaharlal Nehru National College of Engineering",
        date: "",
        desc: "Bachelor's degree in Engineering.",
        degree: "Bachelor of Engineering",
    },
];

export const projects = [
    {
        id: 8,
        title: "ClinicAI",
        date: "AWS Hackathon",
        description: "A voice-first workspace for doctors. It records a consultation, transcribes it with speaker labels using Amazon Transcribe, and uses Amazon Nova Micro on Bedrock through a LangGraph workflow (extract, validate, look up) to draft a structured note with symptoms, medications and follow-ups. The doctor reviews every field before saving. Records are stored in DynamoDB through MCP tools, with transactions that prevent double bookings, and audio is deleted from S3 as soon as transcription finishes.",
        tags: ["Python", "Amazon Bedrock", "Amazon Transcribe", "DynamoDB", "S3", "LangGraph", "MCP", "Streamlit"],
        category: "machine learning",
        github: "https://github.com/anushagpatel/ClinicAI",
        webapp: "",
    },
    {
        id: 7,
        title: "RiskRadar AI",
        date: "",
        description: "A research dashboard that tracks 20 market and credit risk indicators across 9 areas, including volatility, credit spreads, interest rates, AI-company financing, hedge fund leverage and lending to non-bank financial institutions. It pulls data from FRED, SEC EDGAR, the OFR and the Federal Reserve, flags indicators that cross configurable thresholds, and includes an AI assistant that explains the signals with citations. All calculations are unit-tested Python, every AI answer is checked against the underlying data, and what-if stress tests are built in.",
        tags: ["Python", "Streamlit", "OpenAI API", "Pandas", "NumPy", "Plotly", "SQLite", "pytest"],
        category: "machine learning",
        github: "https://github.com/anushagpatel/riskradar",
        webapp: "",
    },
    {
        id: 5,
        title: "NuMoves",
        date: "",
        description: "A web-based chat application built with Spring Boot, supporting user authentication, a SQL database, and real-time messaging using WebSockets. Features JWT-based authentication, BCrypt password handling, and a RESTful API for authentication and messaging.",
        tags: ["Java", "Spring Boot", "Web Sockets", "MySQL", "React"],
        category: "web app",
        github: "https://github.com/anushagpatel/NuMoves",
        webapp: "",
    },
    {
        id: 4,
        title: "HealthQ",
        date: "",
        description: "Designed an AI-powered Health Queue Management System to streamline patient wait times and optimize hospital flow, intelligently prioritizing patients based on urgency.",
        tags: ["Figma", "Moqups", "Loveable", "User Research"],
        category: "web app",
        github: "",
        webapp: "https://app.moqups.com/dMOOp2T5Ki2gcI4cvL8HlBQmg9qu3LCm/edit/page/ae0fbea44",
    },
    {
        id: 6,
        title: "ICLR Review Bias Model",
        date: "",
        description: "Fine-tuned RoBERTa, XGBoost, and BERT models to classify English vs. non-English ICLR publications, boosting F1-score by 85% through preprocessing, tokenization, and hyperparameter tuning.",
        tags: ["Python", "PyTorch", "Transformers", "Pandas", "NumPy", "CUDA", "Scikit-learn"],
        category: "machine learning",
        github: "https://github.com/anushagpatel/BERT_Finetuning",
        webapp: "",
    },
    {
        id: 3,
        title: "OpenReview API Review Fetcher",
        date: "",
        description: "Fetches papers and reviews from ICLR conferences using the OpenReview API. Supports both a CLI-based script and a REST API built with FastAPI.",
        tags: ["LLM", "Python", "OpenReview API", "PyTorch", "Pandas", "Transformers"],
        category: "machine learning",
        github: "https://github.com/anusha-gpatel/ai_review_fetcher",
        webapp: "",
    },
    {
        id: 2,
        title: "Codeforces Rating Watcher",
        date: "",
        description: "A tool that tracks Codeforces contest ratings, built with Firebase and Azure Functions for automated updates.",
        tags: ["Python", "Firebase", "Azure Functions", "HTML", "CSS", "JavaScript"],
        category: "web app",
        github: "https://github.com/anushagpatel/codeforces_rating_watcher",
        webapp: "",
    },
    {
        id: 1,
        title: "Decentralized Voting System",
        date: "",
        description: "An application to allow users to vote on proposals securely and transparently, with use cases including student body elections and community DAO proposals.",
        tags: ["Smart Contracts", "Blockchain", "Cryptography", "Web Development"],
        category: "blockchain",
        github: "",
        webapp: "https://app.moqups.com/dMOOp2T5Ki2gcI4cvL8HlBQmg9qu3LCm/edit/page/ae0fbea44",
    },
    {
        id: 0,
        title: "3D Printing of Sustainable Buildings using BIM",
        date: "",
        description: "Engineered a BIM-driven 3D printing workflow to automate sustainable building design and structural simulation, enabling rapid digital-to-physical construction.",
        tags: ["Autodesk Revit", "AutoCAD", "BIM", "3D Printing"],
        category: "other",
        github: "",
        webapp: "",
    },
];

export const certifications = [
    {
        id: 2,
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        code: "Exam AIF-C01",
        link: "",
    },
    {
        id: 1,
        title: "Microsoft Azure Fundamentals",
        issuer: "Microsoft",
        code: "Exam AZ-900",
        link: "https://www.credly.com/badges/62075e98-6492-4c80-9d1e-6da338ffc549/public_url",
    },
    {
        id: 0,
        title: "AI in the Workplace",
        issuer: "Northeastern University",
        code: "",
        link: "",
    },
];

export const leadership = [
    {
        id: 1,
        role: "President",
        organization: "AWS Student Builder & AWS Cloud Club, Northeastern University",
        date: "Sept 2025 - Present",
        desc: "Leading the AWS Cloud Club at Northeastern, organizing cloud-computing workshops, speaker sessions, and hands-on AWS build events for students.",
        link: "https://www.khoury.northeastern.edu/clubs_and_orgs/aws-cloud-club/",
        linkLabel: "Visit Club Page",
    },
    {
        id: 0,
        role: "Covid Relief Ambassador",
        organization: "MedsForMore",
        date: "Mar 2022 - May 2022",
        desc: "Organized a medicines (unused) collection drive within my locality and encouraged my peers and neighbours to donate unused/unexpired medicines available at their homes and submit them to the nearest Meds For More (MFM) collection centre.",
        link: "",
        linkLabel: "",
    },
];

export const recommendations = [
    {
        id: 2,
        name: "Stanley M. Katz",
        initials: "SK",
        title: "Senior Manager, Software Engineering, Doble Engineering",
        text: "Anusha made a significant impact building a document-intelligence project that used OCR and cloud-based AI to digitize and analyze historical transformer oil condition reports. She also contributed to Doble’s Protection Relay testing software — diagnosing operational issues, building enhancements, and proactively improving product documentation. Beyond her technical work, she was recognized as a highly motivated, collaborative professional who consistently exceeded expectations.",
        // Opens the full letter in Google Drive (must be shared as "Anyone with the link").
        letter: "https://drive.google.com/file/d/1e5S0HQO61yRqtSy2c1K7Zypjt9tWINzs/view?usp=sharing",
    },
    {
        id: 1,
        name: "Sunil Kumar Reddy",
        initials: "SKR",
        title: "Advisory Consultant, IBM",
        text: "I had the opportunity to work with Anusha on one of IBM’s Projects. Since the first day, she has shown herself to be an optimistic professional, fast learner and open to the cultural challenges posed by different teams. Anusha’s ability to command a room and her technical skills generate great value for our team. I’m sure she will be a great asset to any team she joins.",
        letter: "",
    },
    {
        id: 0,
        name: "Siljo PJ",
        initials: "SP",
        title: "Senior Software Engineer, TCS",
        text: "Anusha is a talented full-stack developer with an exemplary work ethic. She is a valued member of our team. Anusha seamlessly integrates third-party APIs into our products, consistently delivering quick and positive results in terms of user interaction and retention. She manages the full software development lifecycle, from idea generation to building new and engaging features, conducting QA testing, and managing releases while also tracking performance metrics to evaluate the impact of her work.",
        letter: "",
    },
];
