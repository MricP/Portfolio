export default {
  nav: {
    home: "HOME",
    projects: "PROJECTS",
    experiences: "EXPERIENCES",
    technologies: "TECHNOLOGIES"
  },
  home: {
    subtitle: "Software Developer",
    quote: "Anything you can imagine probably is doable, you just have to imagine it and work on it. (Larry Page)",
    contact: "Contact",
    cv: "Learn more",
    projects_title: "PROJECTS",
    experiences_title: "EXPERIENCES",
    technologies_title: "TECHNOLOGIES"
  },
  projects: {
    airconcess: {
      sub: "Online aircraft dealership.",
      brief: "Airconcess is a web platform dedicated to aircraft dealership, allowing users to consult an aircraft catalog and manage their profile. The site aims to modernize the online management of air rentals through a simple and responsive interface, designed for enthusiasts and professionals alike.",
      contrib: "I was responsible for creating the catalog page, which presents all available aircraft with dynamic filters, and the user profile page with information editing. My work also consisted in ensuring good general ergonomics and visual consistency on these sections.",
      prob: "The first challenge was to efficiently structure the catalog, especially in terms of performance and sorting. I also encountered difficulties related to the hosting and deployment of the project, especially on responsive rendering."
    },
    tvshelf: {
      sub: "Mobile application to track TV shows you have watched",
      brief: "TVShelf is a mobile application developed in Kotlin that allows the user to track the series they watch. It offers a search engine, the ability to rate watched series, and an intuitive visual organization of series seen, to see or in progress. Perfect for preparing a good evening on the couch.",
      contrib: "I took care of the home page, with a clear display of the latest series seen, and the search page connected to an external API. My goal was to make the user experience smooth while respecting the constraints of a mobile application.",
      prob: "The search system posed several problems. I also encountered complications with the integration of the TV API and the optimization of the different requests (data format, image management)."
    },
    finanzen: {
      sub: "Web application to manage your finances peacefully",
      brief: "Finanzen is a well-being-oriented budget tracking website. The goal is to allow the user to manage their finances without stress thanks to a clean interface, simple graphics and a categorization visualization system.",
      contrib: "I developed the statistics page which groups all the user's financial data into clear graphs. It allows a synthetic view of income, expenses and personal goals over a defined period.",
      prob: "The integration of Symfony with Twig represented a challenge, especially regarding the connection between business logic and display. It took me some time to fully understand the framework."
    },
    flightcheck: {
      sub: "Software to manage and regulate air traffic",
      brief: "FlightCheck is a Java application designed for air traffic regulation. It allows real-time visualization of flights, potential conflict detection and proposes solutions via graph algorithms. It is aimed at semi-real or educational use cases.",
      contrib: "My main contribution focused on the testing part of the graphical interfaces and the integration of flight management features. I also worked on the modeling of some traffic data.",
      prob: "One of the major problems was to understand and implement complex graph algorithms, especially for conflict detection. The implementation of a coloring system for visual conflict resolution also proved tricky."
    }
  },
  experience: {
    diag_group_sub: "3rd Year BUT Informatique",
    diag_group_tag: "Software Developer",
    diag_info_sub: "2nd Year BUT Informatique Internship",
    diag_info_tag: "Software developer"
  },
  alternance: {
    title: "Apprenticeship",
    subtitle: "Professional immersion within Groupe Diagram (3rd Year)",
    company_desc: "Company specialized in the development of custom software solutions, supporting its clients in the design and deployment of applications adapted to their business needs.",
    tag_alt: "Software Developer",
    tag_date: "Sept 2025 - Aug 2026",
    missions_title: "Major Missions & Projects",
    skill_assoc: "Associated skills",
    proofs_title: "Traces and Proofs",
    bilan_title: "Apprenticeship Review",
    bilan_desc: "A year of complete immersion at the heart of enterprise management software development, combining technical rigor, regulatory compliance, and innovation.",
    m1_title: "Mission 1: POS Software Evolution (Diagmag) & NF525 Compliance",
    m1_desc: "Design and development of advanced features for the point-of-sale software, while ensuring strict compliance with the French NF525 standard (securing, signing transaction data, ensuring traceability and inalterability). Worked on the authentication system, cash drawer initialization, daily closure, credit notes/refunds, ticket lists, and customer loyalty program.",
    m2_title: "Mission 2: ERP Modernization & Development",
    m2_desc: "Optimization and expansion of the ERP business management platform. Developed custom modules for order tracking, product catalog list management, invoicing, and creation of advanced promotional campaigns (promotional items and custom discount rules).",
    m3_title: "Mission 3: Mobile Inventory Application & Synchronization",
    m3_desc: "Design and development of an offline-first mobile inventory app to facilitate barcode scanning and stock validation in warehouses. Built a robust bidirectional synchronization mechanism to keep data consistent between mobile terminals and the central HFSQL database.",
    m4_title: "Mission 4: Mastery of the WinDev & HFSQL Ecosystem",
    m4_desc: "Modeling, administration, and optimization of HFSQL relational databases. Wrote complex, high-performance SQL queries for operational reporting, and created custom print templates and reports using the WinDev IDE.",
    skills: {
      s1: "Design, develop and test a complex application",
      s2: "Improve application performance and quality",
      s3: "Deploy services in a network architecture",
      s4: "Design and manage large databases",
      s5: "Organize work in an IT team",
      l2: "Level 2",
      l3: "Level 3"
    },
    proofs: {
      caisse: "Main POS/Cash Register Interface (Diagmag)",
      caisse_connexion: "Secure Login Screen for POS",
      caisse_fond: "Cash Drawer Float Management Screen",
      caisse_cloture: "POS Daily Closure Window",
      caisse_avoir: "Credit Notes and Refunds POS Interface",
      caisse_tickets: "Registered POS Ticket List",
      caisse_commandes: "Sales Orders and Payments Tracking",
      caisse_fidelite: "Customer Loyalty Management Module",
      erp_dashboard: "ERP Main Dashboard Overview",
      erp_produits: "ERP Product Catalog and List",
      erp_commande: "ERP Purchase Order Creation Screen",
      erp_tickets: "ERP Historic Sales Ticket List",
      erp_promo: "Promotions Configuration Panel",
      erp_promo_art: "Promotional Articles Eligibility Setup",
      mobile_inventaire: "Mobile Inventory App (Home Screen)",
      mobile_saisie: "Direct Inventory Item Input Interface",
      schema_sync: "Bidirectional Sync Architecture Diagram",
      windev_ide: "WinDev IDE Development Environment",
      hfsql_control: "HFSQL Control Center Database Tool",
      windev_query: "WinDev Built-in SQL Query Editor",
      windev_report: "Custom Print Layout Design Editor",
      ticket_layout: "POS Receipt Layout Design and Mockup"
    },
    bilan: {
      tech_title: "Technical Skills & Development",
      tech: {
        item1: "Deep mastery of the WinDev / WLanguage ecosystem and HFSQL databases.",
        item2: "Design of offline-first mobile solutions with bidirectional data sync.",
        item3: "Implementation of strict regulatory standards (NF525 POS Certification).",
        item4: "Creation of ergonomic user interfaces and automated reporting tools (WinDev Reports)."
      },
      meth_title: "Methodology & Quality Assurance",
      meth: {
        item1: "Integration into an agile workflow with extensive regression testing.",
        item2: "Collaboration using professional version control and issue tracking tools.",
        item3: "Writing technical specifications and comprehensive developer guides.",
        item4: "Optimization of SQL queries and regular refactoring of legacy codebases."
      },
      prof_title: "Professional & Personal Growth",
      prof: {
        item1: "Developed high autonomy on national-scale enterprise projects.",
        item2: "Strengthened team collaboration and inter-departmental communications.",
        item3: "Gained deep understanding of user needs in POS and ERP environments.",
        item4: "Increased rigor and stress management during compliance and audit reviews."
      },
      evol_title: "Summary & Career Outlook",
      evol: {
        item1: "Successful transition from a student status to an autonomous developer.",
        item2: "Validated core BUT Informatique skills in a real industrial workspace.",
        item3: "Made significant contributions to the modernization of Groupe Diagram products.",
        item4: "Confirmed strong career interest in database design and software architecture."
      }
    }
  },
  stage: {
    title: "Internship",
    subtitle: "First immersion within Diagram Informatique (2nd Year)",
    company_desc: "Diagram Informatique is a company specialized in the development of custom software solutions, which supports its clients in the design, creation and deployment of applications adapted to their business needs.",
    tag_stage: "Internship: Software developer",
    duration: "8 weeks",
    comp_title: "Technical Skills Acquired",
    comp_ref: "Reference",
    comp_char: "Characteristic (Framework)",
    bilan_title: "Internship Reviews",
    bilan_w_title: "Work performed",
    bilan_t_title: "Technical learnings",
    bilan_o_title: "Organizational & human review",
    bilan_p_title: "Professional & cultural review",
    bilan_w: {
      l1: "Development on software projects",
      l2: "Use of WinDev (Design, Development, Improvement)",
      l3: "Bug fixing and adding features",
      l4: "Database manipulation"
    },
    bilan_t: {
      l1: "Rigorous code structuring",
      l2: "Event-driven logic",
      l3: "Object-oriented programming",
      l4: "Creating graphical user interfaces (UI)"
    },
    bilan_o: {
      l1: "Management of deadlines and changing priorities",
      l2: "Project tracking methods & meetings",
      l3: "Stimulating work environment",
      l4: "Integration into the professional hierarchy"
    },
    bilan_p: {
      l1: "Discovery of different methodologies",
      l2: "Immersion in the corporate world",
      l3: "Essential professional soft skills",
      l4: "Software, web and mobile development"
    },
    skills: {
      ac2101: "Develop and implement functional and non-functional specifications from requirements",
      ac2102: "Apply principles of accessibility and ergonomics",
      ac2103: "Adopt good design and programming practices",
      ac2104: "Verify and validate application quality through testing",
      ac2201: "Choose complex data structures adapted to the problem",
      ac2202: "Use algorithmic techniques adapted for complex problems",
      ac2203: "Understand the challenges and means of securing data and code",
      ac2301: "Design and develop communicating applications",
      ac2302: "Use virtualized servers and network services",
      ac2303: "Secure system services and data",
      ac2401: "Optimize enterprise data models",
      ac2403: "Organize data restitution through programming and visualization",
      ac2404: "Manipulate heterogeneous data",
      ac2501: "Identify processes present in an organization to improve information systems",
      ac2502: "Formalize client and user needs",
      ac2503: "Identify feasibility criteria of an IT project",
      ac2601: "Understand the diversity, structure and dimension of IT in an organization",
      ac2602: "Apply a process to integrate an IT team within an organization"
    }
  },
  project_view: {
    video_unsupported: "Your browser does not support the video tag.",
    brief: "BRIEF",
    contribution: "MY CONTRIBUTION",
    problems: "PROBLEMS"
  }
}
