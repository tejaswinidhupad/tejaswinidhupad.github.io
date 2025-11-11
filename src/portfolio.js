/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Tejaswini",
  logo_name: "tejaswini.d()",
  // nickname: "harry / picleric",
  full_name: "Tejaswini Dhupad",
  subTitle: "Analytics Engineer & Data-Driven Creator 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1ThjCisD-FnEPQcYAYU2XBsulYWcyCGF2/view?usp=drivesdk",
  mail: "mailto:tejaswinipdhupad@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/tejaswinidhupad",
  linkedin: "https://www.linkedin.com/in/tejaswinidhupad/",
  gmail: "tejaswinipdhupad@gmail.com",
};

const skills = {
  data: [
    {
      title: "Data Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed and optimized high-volume ETL/ELT pipelines",
        "⚡ Designed and managed robust data warehouse/lake solutions",
        "⚡ Optimized schema design, partitioning, and indexing to support complex queries",
        "⚡ Implemented comprehensive data quality, validation, and monitoring frameworks to ensure data reliability and accuracy",
        "⚡ Automated and scheduled end-to-end workflows",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Azure Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        /*         {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ElectronJS",
          fontAwesomeClassname: "simple-icons:electron",
          style: {
            color: "#47848F",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        }, */
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            color: "#f89820",
          },
        },
        /*  {
           skillName: "Power BI",
           fontAwesomeClassname: "logos:powerbi",
           style: {
             color: "#02569B",
           },
         },
         {
           skillName: "Tableau",
           fontAwesomeClassname: "logos:tableau",
           style: {
             color: "#29B0EE",
           },
         }, */
        /* {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        }, */
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Analysis",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Conducted deep-dive analysis on product funnel and user journey analysis",
        "⚡ Developed and maintained interactive dashboards and reports",
        "⚡ Collaborated cross-functionally with product and business teams to define data requirements, translate business questions into analytical frameworks, and presented data-driven recommendations",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Advanced Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Mixpanel",
          fontAwesomeClassname: "simple-icons:mixpanel",
          style: {
            color: "#336791",
          },
        },
        /* {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        }, */
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Eindhoven University of Technology",
      subtitle:
        "Erasmus Mundus Joint Master's Degree, Big Data Management and Analytics",
      logo_path: "tue.png",
      alt_name: "SSEC",
      duration: "Sept' 2022 - Sept' 2023",
      descriptions: [
        "⚡ This specialisation track equips students with Advanced Data Science methods and strengthens their background in Process Analytics.",
        "⚡ Courses taken: Longitudinal Data Analytics, Fundamentals of Process Mining, Data Challenge 3, Empirical Methods of Software Engineering, Advanced Process Mining & Seminar Process Analytics",
        "⚡ Worked as a Research Intern at the University and completed the Master's thesis on 'Healthcare Analytics : Uncovering patient patterns and operational similarities in Emergency Room traces to enhance Hospital efficiency' with Prof. Renata Medeiros de Carvalho.",
      ],
      website_link: "https://www.tue.nl/en/",
    },
    {
      title: "Universitat Politècnica de Catalunya",
      subtitle:
        "Erasmus Mundus Joint Master's Degree, Big Data Management and Analytics",
      logo_path: "upc.png",
      alt_name: "SSGC",
      duration: "Feb' 2022 - Jun' 2022",
      descriptions: [
        "⚡ This semester focuses on fundamental concepts of Big Data. How data management can scale to large volumes while potentially also dealing with velocity and variety; fundamental concepts to conduct rigorous data analysis with Machine Learning techniques and basic knowledge to assess the viability of a business idea. Finally, we learn the core concepts of Semantic Data Management applying Knowledge Graphs and Semantic Web technologies.",
        "⚡ Courses taken: Big Data Management, Semantic Data Management, Machine Learning, Viability of Data related Business Projects & Debates on Ethics of Big Data",
        /* "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        "⚡ I have secured 9.82 CGPA.", */
      ],
      website_link: "https://www.upc.edu/en",
    },
    {
      title: "Université Libre de Bruxelles",
      subtitle:
        "Erasmus Mundus Joint Master's Degree, Big Data Management and Analytics",
      logo_path: "ulb.png",
      alt_name: "SSGC",
      duration: "Sept' 2021 - Jan' 2022",
      descriptions: [
        "⚡ This semester introduces essential topics in BI, covering data warehouses, data mining, and business processes, as well as essential aspects of data management, covering traditional relational technology and new emerging paradigms.",
        "⚡ Courses taken: Data Warehouses, Data Mining, Business Process Management, Database Systems Architecture & Advanced Databases",
        "⚡ Data Mining project, conducted in collaboration with STIB-MIVB, directly led to securing a three-month paid internship at the company.",
        /*  "⚡ I have secured 9.82 CGPA.", */
      ],
      website_link: "https://www.ulb.be/en",
    },
    {
      title: "Savitribai Phule Pune University",
      subtitle: "Bachelor of Engineering - Information Technology",
      logo_path: "pu.png",
      alt_name: "SSGC",
      duration: "Jun' 2013 - May' 2017",
      descriptions: [
        "⚡ Completed the Bachelor of Engineering in Information Technology, building a robust foundation in Data Structures, Database Management Systems, Software Engineering, and Python/Java programming critical for subsequent industry roles.",
        "⚡ Consistently recognized as the Class Topper in every semester (8/8 semesters) over the four-year program and demonstrating superior technical aptitude.",
        "⚡ Represented the college at the national level by participating in 'Smart India Hackathon 2017' at the Allahabad Nodal Center, securing a position among the top-8 teams specifically tackling challenges for the Ministry of Civil Aviation. ",
        "⚡ Presented a technical solution during the hackathon for restricting unauthorized airport entry by implementing a system using a QR code scanner on the ticket, showcasing rapid prototyping and problem-solving skills.",
      ],
      website_link: "https://www.unipune.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Databricks Fundamentals",
      subtitle: "Databricks",
      logo_path: "databricks.png",
      certificate_link:
        "https://drive.google.com/file/d/1k6xV5TWkmaukj1zuh3dt8u611Fjs6HSY/view",
      alt_name: "Databricks",
      // color_code: "#2AAFED",
      color_code: "#FF3621",
    },
    {
      title: "Managing Big Data with MySQL",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1yyHwllQu4FyLhfAO22Xhlf6BdL61rhyb/view",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Basic Statistics",
      subtitle: "DataCamp",
      logo_path: "datacamp.png",
      certificate_link:
        "https://drive.google.com/file/d/1urrp28VmkRvJ_2oCUg-BG0fYQ9aDZBDX/view",
      alt_name: "Datacamp",
      // color_code: "#F6B808",
      color_code: "#03EF62",
    },
    {
      title: "Process Mining: Data science in Action",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1sqsWgsbwfXTL4t6_FrFj8vaPvjUpoPk7/view",
      alt_name: "",
      color_code: "#2AAFED", //2AAFED
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "Google",
      logo_path: "google.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#EDE15B",
    },
    {
      title: "Advanced NoSQL for Data Science",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/1wPmnhN-VcOXhnbzQhJgXOSdM8hE3gZDR/view",
      alt_name: "LinkedIn",
      color_code: "#EA4335",
    },
    /*  {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    }, */
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Possess robust experience spanning the entire data lifecycle, successfully transitioning from internship projects to taking ownership of complex engineering and analytical solutions that drive business impact.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Consultant - Artificial Intelligence & Data",
          company: "Deloitte ",
          company_url: "https://www.deloitte.com/in/en.html",
          logo_path: "deloitte.png",
          duration: "Jan 2025 - Present",
          location: "Pune, Maharashtra | Hybrid",
          description: `Engineered robust PySpark pipelines to connect to diverse source systems (in Parquet/Delta format), performing necessary transformations and creating compliant Contextual Data Assets (CDA) specifically for a Bank of England regulatory project.

Validated and extracted data using Starburst, ensuring data quality and accuracy against strict regulatory requirements for core banking sections, demonstrating strong proficiency with industry terminology and data standards.

Contributed significantly to production readiness by developing the initial PySpark code, which was subsequently optimized and converted into Scala for high-performance production implementation.

Led the documentation effort by creating detailed design documents outlining the architecture, ETL logic, and validation procedures for the CDA implementation, ensuring maintainability and compliance.`,
          color: "#0071C5",
        },
        // {
        //   title: "Node.js Backend Developer",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Dec 2022",
        //   location: "Surat, Gujarat",
        //   description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
        //   Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Node.js Backend Developer (Intern)",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Mar 2021",
        //   location: "Surat, Gujarat",
        //   description: `Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        {
          title: "Analytics Engineer",
          company: "Miko.ai",
          company_url: "https://miko.ai/",
          logo_path: "miko.png",
          duration: "Aug 2023 - Dec 2024",
          location: "Mumbai, Maharashtra | Remote",
          description: [
            "Developed a data pipeline using Airflow to automate data ingestion, transformation, and loading processes.",
            "Built a data lake on Azure Data Lake Storage (ADLS Gen2) to centralize and analyze large datasets. Implemented data transformations and ETL/ELT processes using PySpark to improve data quality and consistency.",
            "Implemented advanced data cleaning, transformation, and pre-processing techniques using Python and deploy solutions and integrate them within CI/CD pipelines, ensuring continuous integration and deployment of data solutions.",
            "Proficient in SQL for writing complex queries to extract and manipulate data from various sources including Google Cloud Platform, Amazon servers, and Chargebee and developed complex stored procedures.",
            "Created visually appealing dashboards and interactive reports in PowerBI to communicate key performance indicators and trends effectively.",
            "Applied data modeling principles to optimize data structures for scalability and performance in PowerBI.",
            "Collaborated closely with product teams from inception to implementation, identifying product gaps and proposing data-driven solutions.",
          ],
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Quality Assurance Automation Engineer",
          company: "Finastra",
          company_url: "https://www.finastra.com/",
          logo_path: "finastra.png",
          duration: "Sep 2019 - Aug 2021",
          location: "Pune, Maharashtra | On-site",
          description: `Successfully implemented machine learning models that enhanced financial forecasting
 accuracy and identified market trends, contributing to informed decision-making processes.
 Designed and implemented efficient data pipelines using Python, streamlining data extraction,
 transformation, and loading (ETL) processes for improved operational efficiency.
 Integrated Python scripts with CI/CD pipelines, collaborating with DevOps teams to automate
 data workflows and ensure continuous integration of data solutions.
 Worked collaboratively with quality testing teams to validate data integrity, perform data
 validation, and ensure compliance with regulatory standards.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Quality Assurance Engineer",
          company: "Cybage",
          company_url: "https://www.cybage.com/",
          logo_path: "cybage.png",
          duration: "Jun 2017 - Sep 2019",
          location: "Pune, Maharashtra | On-site",
          description: `Designed and executed comprehensive test plans for enterprise applications using Selenium
 WebDriver.
 Performed manual and automated testing, ensuring thorough coverage of functional and non
functional requirements.
 Collaborated effectively with developers to resolve bugs and achieve timely project deadlines.
 Contributed to the successful launch of a new e-commerce platform, resulting in a 15%
 increase in user conversions.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "Data Analyst - Research Intern",
          company: "Eindhoven University of Technology",
          company_url: "https://www.tue.nl/en/",
          logo_path: "tue.png",
          duration: "Mar 2023 - Aug 2023",
          location: "Eindhoven, North Brabant, Netherlands | On-site",
          description: `Process Mining for Emergency Room (ER) Operational Efficiency:
Engineered and executed a comprehensive Process Mining study on 1.75 years of comprehensive ER patient visit data (Jan 2019 - Sep 2020) to identify operational bottlenecks and enhance healthcare efficiency.

Developed a novel similarity algorithm to efficiently reduce trace variants in patient journeys, significantly enhancing the understanding of patient pathways compared to baseline algorithms (e.g., Alpha Miner).

Validated the analytical approach and algorithm performance using two distinct datasets (including BPI Challenge 2017 & 2018), providing robust numeric analysis and evaluation metrics.

Delivered actionable recommendations to hospital management focused on optimizing processes, validating clinical guidelines, and exploring infrequent behaviors to improve ER operational efficiency and patient outcomes.`,
          color: "#FBBD18",
        },
        {
          title: "Data Analyst - Intern",
          company: "STIB-MIVB",
          company_url: "https://www.stib-mivb.be/home",
          logo_path: "stib.png",
          duration: "Jul 2022 - Sep 2022",
          location: "Brussels, Brussels Region, Belgium | On-site",
          description: `Argos Management Reporting: Designed and delivered a harmonized management reporting system in Power BI, leveraging Power Tools (Power Query/M & DAX) to consolidate complex data and provide critical, unified insights to the Top 50 management team.

Demonstrated strong analytical thinking and customer focus by translating core business needs into clear, effective reporting and visualization tools, successfully completing the high-visibility project on time and exceeding executive expectations.`,
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        /* {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        }, */
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Project collection reflects a comprehensive background spanning Data Engineering, Advanced Analytics, and Research. Projects range from building high-performance ETL/ELT data pipelines (using PySpark and Delta Lake) and solving real-world operational issues through Process Mining techniques, to developing data analysis and visualization solutions for strategic product and marketing intelligence. This portfolio demonstrates proficiency across Python, SQL, and core data platforms, showcasing a commitment to translating complex data into actionable technical and business outcomes.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactme.png",
    description:
      "I’d love to connect! Whether you have a question, want to discuss a potential collaboration, or just want to say hi — feel free to reach out through any of the platforms below. I’ll get back to you as soon as possible.",
    resumeLink:
      "https://drive.google.com/file/d/1Peh-nkHfRSV7ieoiYkW_pX2lSNCgRjH3/view",
  },
  /*   blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg", 
  }, */
};

const projects = {
  data: [
    {
      id: "0",
      name: "Azure Databricks-Formula1 Project",
      url:
        "https://github.com/tejaswinidhupad/Azure-Databricks-Formula1-Project",
      description:
        "Real World Project on Formula1 Racing using Azure Databricks, Delta Lake, Unity Catalog, Azure Data Factory.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Azure Databricks",
          iconifyClass: "simple-icons:databricks",
        },
        /* {
          name: "Delta Lake",
          iconifyClass: "simple-icons:deltalake",
        }, */
        {
          name: "Unity Catalog",
          iconifyClass: "simple-icons:unity",
        },
        /* {
          name: "Azure Data Factory",
          iconifyClass: "simple-icons:azuredatafactory",
        }, */
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Azure-Databricks-Formula1-Project",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        }, */
      ],
    },
    {
      id: "1",
      name: "Data Engineering Pipeline ETL - Apple Data",
      url:
        "https://github.com/tejaswinidhupad/Data-Engineering-Pipeline-ETL--Apple-Data-",
      description:
        "Extract, Transform, Load (ETL) data pipeline designed to process and analyze Apple-related data. The goal of this project is to build a reliable and scalable data foundation for downstream analytical and BI applications.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Apache Airflow",
          iconifyClass: "simple-icons:apacheairflow",
        },
        /*         {
          name: "Apache Spark",
          iconifyClass: "logos:apachespark",
        }, */
        {
          name: "Microsoft Azure",
          iconifyClass: "logos:microsoft-azure",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Data-Engineering-Pipeline-ETL--Apple-Data-",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        }, */
      ],
    },
    {
      id: "2",
      name: "Application Tracking System(ATS) using Google-Gemini",
      url:
        "https://github.com/tejaswinidhupad/Application-Tracking-System-ATS-Using-Google-Gemini",
      description:
        "This project introduces a cutting-edge Applicant Tracking System (ATS) leveraging the power of Google Gemini to significantly enhance the resume evaluation process.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Streamlit",
          iconifyClass: "logos:streamlit",
        },
        {
          name: "Gemini API",
          iconifyClass: "logos:google",
        },
        {
          name: "PyPDF2",
          iconifyClass: "mdi:file-pdf-box",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Application-Tracking-System-ATS-Using-Google-Gemini",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        }, */
      ],
    },
    {
      id: "3",
      name: "Gemini-Chatbot",
      url: "https://github.com/tejaswinidhupad/Gemini-Chatbot",
      description:
        "An end-to-end LLM (Large Language Model) system leveraging Google Gemini and LangChain to translate natural language questions into executable SQL queries against a MySQL database.",
      languages: [
        {
          name: "Google Gemini LLM",
          iconifyClass: "logos:google",
        },
        /*  {
          name: "Hugging Face Embeddings",
          iconifyClass: "logos:huggingface-icon",
        }, */
        {
          name: "Streamlit for UI",
          iconifyClass: "logos:streamlit",
        },
        {
          name: "LangChain Framework",
          iconifyClass: "simple-icons:langchain",
        },
        /* {
          name: "ChromaDB (Vector Store)",
          iconifyClass: "simple-icons:chromadb",
        }, */
        {
          name: "Few-Shot Learning",
          iconifyClass: "mdi:lightbulb-on-outline",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/tejaswinidhupad/Gemini-Chatbot",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        }, */
      ],
    },
    {
      id: "4",
      name: "Child Wasting Prediction",
      url: "https://github.com/tejaswinidhupad/Child-Wasting-Prediction",
      description:
        "Built data analytics model to explore whether a better (more accurate or more generally applicable) forecasting model for predicting child wastage.",
      languages: [
        {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos:matplotlib-icon",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/tejaswinidhupad/Child-Wasting-Prediction",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        }, */
      ],
    },
    {
      id: "5",
      name: "Healthcare Analytics",
      url:
        "https://github.com/tejaswinidhupad/Master-Thesis-Healthcare-Analytics",
      description:
        "Engineered and executed a comprehensive Process Mining study on ER patient visit data to identify operational bottlenecks and enhance healthcare efficiency.",
      languages: [
        {
          name: "Process Mining",
          iconifyClass: "mdi:chart-timeline-variant", // represents workflow/process analytics
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Master-Thesis-Healthcare-Analytics",
          iconifyClass: "ri:github-fill",
        },
        /*   {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        }, */
      ],
    },
    {
      id: "6",
      name: "Process Mining over Unordered Stream",
      url:
        "https://github.com/tejaswinidhupad/Process-Mining-over-Unordered-Stream---Replication",
      description:
        "Replicated a novel Process Mining approach designed to handle out-of-order event streams using buffering and speculative processing.",
      languages: [
        {
          name: "Process Mining",
          iconifyClass: "mdi:chart-timeline-variant", // represents workflow/process analytics
        },
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "Shell Scripting",
          iconifyClass: "mdi:console",
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Apache Flink",
          iconifyClass: "simple-icons:apacheflink",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Process-Mining-over-Unordered-Stream---Replication",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        }, */
      ],
    },
    {
      id: "7",
      name: "BPI Data Challenge 2020",
      url: "https://github.com/tejaswinidhupad/APM_BPI_2020",
      description:
        "This project contains the technical part of Predicting Rejected Declarations in the Travel Management System: BPI Data Challenge 2020.",
      languages: [
        {
          name: "Process Mining",
          iconifyClass: "mdi:chart-timeline-variant", // represents workflow/process analytics
        },
        {
          name: "Python 3.9",
          iconifyClass: "logos:python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        /*         {
          name: "Matplotlib",
          iconifyClass: "logos:matplotlib",
        }, */
        /*  {
          name: "Plotly",
          iconifyClass: "logos:plotly",
        }, */
        /* {
          name: "PM4Py",
          iconifyClass: "mdi:process",
        },
        {
          name: "Seaborn",
          iconifyClass: "simple-icons:seaborn",
        }, */
        {
          name: "Tabulate",
          iconifyClass: "mdi:table",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/tejaswinidhupad/APM_BPI_2020",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Analyzing HIV Treatment Trial",
      url: "https://github.com/tejaswinidhupad/Analyzing-HIV-Treatment-Trial",
      description: "Analyzing HIV Treatment trial using SAS Studio.",
      languages: [
        {
          name: "SAS",
          iconifyClass: "mdi:chart-box-outline",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Analyzing-HIV-Treatment-Trial",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "Selectivity & Join estimations for Range Types in PostgreSQL",
      url:
        "https://github.com/tejaswinidhupad/database-system-architecture-project",
      description:
        "To improve the overall scheme of statistics collection and cardinality estimation for range types in PostgreSQL.",
      languages: [
        {
          name: "PL/pgSQL",
          iconifyClass: "simple-icons:postgresql",
        },
        {
          name: "Shell",
          iconifyClass: "vscode-icons:file-type-shell",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/database-system-architecture-project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Idle Compute",
      url:
        "https://github.com/tejaswinidhupad/Big-Data-Management-Project-Idle-Compute",
      description:
        "Implementation of a big data management and analysis backbone architecture using PySpark for distributed and scalable data ingestion and MLlib for machine learning analysis.",
      languages: [
        /* {
          name: "Big Data",
          iconifyClass: "simple-icons:apachehadoop",
        }, */
        {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "Parquet",
          iconifyClass: "simple-icons:apacheparquet",
        },
        {
          name: "Hadoop - HDFS",
          iconifyClass: "simple-icons:apachehadoop",
        },
        {
          name: "PySpark - MLlib",
          iconifyClass: "simple-icons:apachespark",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Big-Data-Management-Project-Idle-Compute",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Optimizing Retail Inventory",
      url: "https://github.com/tejaswinidhupad/Machine-Learning-Project",
      description:
        "Forecasting Retail Unit Sales for Favorita Stores using Time Series Analysis.",
      languages: [
        {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/tejaswinidhupad/Machine-Learning-Project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "HackMyRide",
      url: "https://github.com/tejaswinidhupad/Data-Mining---HackMyRide",
      description:
        "Analyzed STIB-MIVB public transit data to model vehicle speed and delay, forecast arrival times, and infer modes of transport from GPS tracking data.",
      languages: [
        {
          name: "Data Mining",
          iconifyClass: "mdi:database-search",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Kepler.gl",
          iconifyClass: "mdi:map",
        },
        {
          name: "Tableau",
          iconifyClass: "logos:tableau",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/tejaswinidhupad/Data-Mining---HackMyRide",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "13",
      name: "Knowledge Graph",
      url: "https://github.com/tejaswinidhupad/SDM-Lab-3",
      description:
        "Designed and implemented a data ontology (TBOX/ABOX) on a Knowledge Graph to define concepts, model relationships, and enable advanced semantic querying of data instances.",
      languages: [
        {
          name: "Apache Jena API",
          iconifyClass: "simple-icons:apache",
        },
        {
          name: "SPARQL",
          iconifyClass: "mdi:graphql",
        },
        {
          name: "GraphDB",
          iconifyClass: "mdi:graph-outline",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/tejaswinidhupad/SDM-Lab-3",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Live Demo",
          url: "https://harikanani.github.io/",
          iconifyClass: "mdi:web",
        }, */
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    {
      id: "14",
      name: "Realtime Database with Firebase",
      url: "https://github.com/tejaswinidhupad/Realtime-Database-with-Firebase",
      description:
        "Comparative study of real time databases with Firebase and PostgreSQL.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos:postgresql",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Realtime-Database-with-Firebase",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
