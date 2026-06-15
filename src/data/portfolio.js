
export const profile = {
  name: 'Sasheen Sri Widanagamage',
  initials: 'SW',
  role: 'Data Science Undergraduate',
  headline: 'BSc (Hons) in Information Technology specialising in Data Science',
  status: 'Actively seeking data-focused internship opportunities',
  summary:
    'I am an undergraduate at SLIIT with a strong interest in data analytics, business intelligence, data warehousing, machine learning and AI. I build structured academic and personal projects that turn raw data into clear insights, dashboards, models and technical documentation.',
  location: 'Sri Lanka',
  email: 'sasheenwidanagamage@gmail.com',
  github: 'https://github.com/sasheen-widanagamage',
  linkedin: 'https://lk.linkedin.com/in/sasheen-widanagamage-6809a3341',
  resume: '/resume.pdf'
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export const heroBadges = ['Python', 'R', 'SQL', 'Power BI', 'BI', 'ML', 'AI'];

export const stats = [
  { value: 9, suffix: '+', label: 'Public GitHub repositories' },
  { value: 12, suffix: '', label: 'LinkedIn certifications' },
  { value: 5, suffix: '', label: 'LinkedIn project case studies' },
  { value: 6, suffix: '+', label: 'Data and BI skill areas' }
];

export const aboutCards = [
  {
    title: 'Analytical problem solving',
    text: 'Breaking business questions into measurable variables, repeatable workflows and evidence-based conclusions.'
  },
  {
    title: 'Business communication',
    text: 'Presenting results through dashboards, charts, reports and concise explanations that support decisions.'
  },
  {
    title: 'Project ownership',
    text: 'Organising code, data preparation, documentation and GitHub repositories for recruiter-ready presentation.'
  }
];

export const education = [
  {
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    qualification: 'BSc (Hons) in Information Technology specialising in Data Science',
    period: 'Reading',
    details:
      'Academic focus includes data science, statistics, databases, software engineering, artificial intelligence, machine learning, business intelligence and data warehousing.',
    tags: ['Data Science', 'BI', 'ML', 'Statistics', 'Databases']
  },
  {
    institution: 'Mahinda Rajapaksha College, Homagama',
    qualification: 'School education',
    period: '2013 - 2021',
    details: 'Activities and societies include Baseball and Kabaddi.',
    tags: ['Leadership', 'Teamwork', 'Sports']
  }
];

export const skillGroups = [
  {
    title: 'Data analysis',
    level: 'Core focus',
    description: 'Cleaning, transforming, exploring and interpreting structured datasets.',
    skills: ['Python', 'R', 'RStudio', 'Pandas', 'NumPy', 'Excel', 'Data Cleaning', 'EDA', 'Statistical Analysis']
  },
  {
    title: 'Business intelligence',
    level: 'Applied projects',
    description: 'Turning business data into dashboards, reports and decision-support insights.',
    skills: ['Power BI', 'Power BI Service', 'DAX', 'Power Query', 'Excel PivotTables', 'OLAP', 'Dashboard Design', 'Data Visualization']
  },
  {
    title: 'Data engineering and SQL',
    level: 'DWBI foundation',
    description: 'Designing reliable analytical data flows using warehouse and ETL concepts.',
    skills: ['SQL', 'SQL Server', 'SSMS', 'SSIS', 'SSAS', 'ETL', 'Star Schema', 'SCD Type 2', 'Dimensional Modelling']
  },
  {
    title: 'Machine learning and AI',
    level: 'Growing skill',
    description: 'Applying introductory predictive modelling and AI concepts to practical problems.',
    skills: ['Machine Learning', 'Artificial Intelligence', 'Regression', 'Classification', 'Model Evaluation', 'Predictive Modelling']
  },
  {
    title: 'Databases',
    level: 'Relational and NoSQL',
    description: 'Working with relational databases and MongoDB Atlas concepts.',
    skills: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'Database Design', 'RBAC', 'Replication', 'SQL Server']
  },
  {
    title: 'Software and professional tools',
    level: 'Supporting toolkit',
    description: 'Building maintainable technical projects and documenting work clearly.',
    skills: ['Git', 'GitHub', 'React.js', 'Java', 'Kotlin', 'Android Studio', 'Spring Boot', 'PHP', 'Docker', 'Flask']
  }
];

export const projects = [
  {
    title: 'Customer Service Process Analytics Using R',
    category: 'Data Science',
    featured: true,
    tech: ['R', 'RStudio', 'Data Cleaning', 'Statistics', 'Predictive Modelling', 'Data Visualization'],
    problem: 'Airline service teams need to understand whether smoother customer-service processes are linked with better overall experience.',
    solution:
      'Analysed customer satisfaction data in R, focusing on service factors such as online booking, online boarding, check-in service, baggage handling, gate location and time convenience.',
    features: ['Data cleaning workflow', 'Exploratory analysis', 'Service-factor comparison', 'Visual reporting', 'Professional documentation'],
    github: 'https://github.com/sasheen-widanagamage/customer-service-process-analytics',
  },
  {
    title: 'Retail Business Intelligence Analytics and Reporting',
    category: 'Business Intelligence',
    featured: true,
    tech: ['Power BI', 'SSAS', 'Excel PivotTable', 'OLAP', 'SQL Server', 'Power BI Service'],
    problem: 'Retail decision-makers need interactive reporting to analyse sales patterns across dates, products and business dimensions.',
    solution:
      'Extended a retail data warehouse with an SSAS multidimensional cube, hierarchies, Excel OLAP analysis and Power BI reports with drill-down and drill-through navigation.',
    features: ['Multidimensional cube', 'Date and product hierarchies', 'Cascading slicers', 'Matrix reporting', 'Power BI publishing'],
    github: 'https://github.com/sasheen-widanagamage/dwbi-retail-bi-analytics-reports',
  },
  {
    title: 'Retail Data Warehouse and ETL Solution',
    category: 'Data Engineering',
    featured: true,
    tech: ['SQL Server', 'SSIS', 'SSMS', 'ETL', 'Star Schema', 'SCD Type 2'],
    problem: 'Retail data from SQL Server, CSV and Excel sources needs a reliable analytical structure for reporting and historical tracking.',
    solution:
      'Designed and implemented a data warehouse with staging, fact and dimension tables, ETL workflows, slowly changing dimension logic and data-quality handling.',
    features: ['Star schema design', 'Staging environment', 'Fact and dimension loading', 'SCD Type 2 logic', 'Accumulating fact updates'],
    github: 'https://github.com/sasheen-widanagamage/dwbi-retail-data-warehouse-etl',
  },
  {
    title: 'Smart Campus Operations Hub',
    category: 'Full Stack',
    featured: true,
    tech: ['React', 'Vite', 'Spring Boot', 'Java', 'MySQL', 'OAuth2', 'JWT', 'Recharts'],
    problem: 'Universities need a centralised system to manage facilities, resource bookings, incidents, notifications and user access.',
    solution:
      'Built as a group web-based operations management system for the IT3030 Programming Applications and Frameworks module, with admin analytics and secure access workflows.',
    features: ['Facility management', 'Conflict-aware booking', 'Incident ticketing', 'Google OAuth login', 'PDF report generation', 'Admin dashboards'],
    github: 'https://github.com/TheekshanaMayadunna/it3030-paf-2026-smart-campus-group-Y3S1-WE-121',
  },
  {
    title: 'DailyFlow - Personal Wellness & Habit Companion',
    category: 'Mobile App',
    featured: true,
    tech: ['Kotlin', 'Android Studio', 'Android Jetpack', 'Material Components', 'SharedPreferences'],
    problem: 'Users need a simple offline-friendly tool to track healthy habits, reminders, study routines and moods in one place.',
    solution:
      'Designed a minimalist Android app with daily habit tracking, hydration and sleep reminders, timers, mood journaling and persistent local storage.',
    features: ['Bottom-tab navigation', 'Local storage', 'Habit tracking', 'Study timers', 'Mood journal'],
    github: 'https://github.com/sasheen-widanagamage/Daily-Flow',
  },
  {
    title: 'Knowledge Education System KEC',
    category: 'Web App',
    featured: false,
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    problem: 'Students need an online platform to practise model papers and face exams through a structured learning workflow.',
    solution: 'Created a web-based educational platform supporting online assessments and practice activities.',
    features: ['Online assessments', 'Student practice flow', 'Database-backed content', 'Web interface'],
    github: 'https://github.com/sasheen-widanagamage/Knowledge-Education-System-KEC',
  },
  {
    title: 'Vista Cinema',
    category: 'Web App',
    featured: false,
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    problem: 'Cinema customers need a simple way to view shows, select seats and complete online ticket booking.',
    solution: 'Developed a web-based movie-ticket booking system with seat booking and payment flow concepts.',
    features: ['Show browsing', 'Seat booking', 'Online payment flow', 'Responsive pages'],
    github: 'https://github.com/sasheen-widanagamage/Vista-Cinema',
  },
  {
    title: 'EventBloom',
    category: 'Web App',
    featured: false,
    tech: ['Java', 'Web Development', 'Database Design'],
    problem: 'Event customers need a platform to book, customise and manage event planning services.',
    solution: 'Built an online event-planning web platform with user profile, admin and payment-system concepts.',
    features: ['Event booking', 'Customisation flow', 'User profile', 'Admin features'],
    github: 'https://github.com/sasheen-widanagamage/EventBloom',
  },
  {
    title: "Daddy's Burgers Android Prototype",
    category: 'Mobile App',
    featured: false,
    tech: ['Kotlin', 'Android Studio', 'Mobile UI', 'Prototype'],
    problem: 'Food-ordering users need a clear mobile journey from onboarding to checkout and order tracking.',
    solution: 'Created a Kotlin-based Android prototype covering menu browsing, checkout, order tracking and profile management.',
    features: ['Onboarding', 'Menu browsing', 'Checkout flow', 'Order tracking'],
    github: 'https://github.com/sasheen-widanagamage/DaddysBurgers',
  }
];

export const certifications = [
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: 'Dec 2024',
    focus: 'Data analytics foundations, analytical thinking and data-driven reporting.'
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    date: 'Dec 2024',
    focus: 'Core data science concepts, workflow understanding and introductory analytics.'
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'Dec 2024',
    focus: 'Python programming fundamentals for problem solving and technical workflows.'
  },
  {
    title: 'Python Essentials 2',
    issuer: 'Cisco',
    date: 'Jan 2025',
    focus: 'Intermediate Python programming concepts for practical development.'
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco',
    date: 'Jan 2025',
    focus: 'Modern artificial intelligence concepts and responsible technology awareness.'
  },
  {
    title: 'AI/ML Engineer - Stage 1',
    issuer: 'SLIIT',
    date: 'Dec 2024',
    focus: 'Artificial intelligence and machine learning foundations.'
  },
  {
    title: 'AI/ML Engineer - Stage 2',
    issuer: 'SLIIT',
    date: 'Dec 2024',
    focus: 'Expanded AI/ML learning with practical machine-learning concepts.'
  },
  {
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB',
    date: 'Apr 2026',
    focus: 'MongoDB Atlas basics, database design and cloud database concepts.'
  },
  {
    title: 'MongoDB Atlas Security',
    issuer: 'MongoDB',
    date: 'Apr 2026',
    focus: 'MongoDB Atlas administration, role-based access control and security fundamentals.'
  },
  {
    title: 'Replication in MongoDB',
    issuer: 'MongoDB',
    date: 'Apr 2026',
    focus: 'MongoDB replication concepts and database reliability foundations.'
  },
  {
    title: 'Python Flask Development with Docker',
    issuer: 'Alison',
    date: 'Nov 2025',
    focus: 'Flask application development concepts with Docker-based deployment awareness.'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    date: 'Dec 2024',
    focus: 'Internet of Things foundations and connected technology concepts.'
  }
];

export const journey = [
  {
    label: 'Currently studying',
    title: 'BSc (Hons) Information Technology - Data Science',
    organisation: 'Sri Lanka Institute of Information Technology',
    period: 'Reading',
    details: 'Building academic knowledge in data science, machine learning, business intelligence, databases and software engineering.',
    tags: ['SLIIT', 'Data Science', 'Information Technology']
  },
  {
    label: 'Project-based practice',
    title: 'Data Science, BI and Data Engineering Projects',
    organisation: 'GitHub and LinkedIn portfolio',
    period: '2024 - Present',
    details: 'Developing projects using R, SQL Server, Power BI, SSIS, SSAS, MongoDB, Python concepts and professional documentation.',
    tags: ['R', 'Power BI', 'SQL Server', 'DWBI']
  },
  {
    label: 'Current objective',
    title: 'Data-focused internship opportunity',
    organisation: 'Open to industry opportunities',
    period: 'Now',
    details: 'Seeking practical exposure as a Data Analyst, BI, Data Science, Machine Learning, AI or Big Data Analytics intern.',
    tags: ['Internship', 'Analytics', 'BI', 'ML']
  }
];

export const achievements = [
  'Built a LinkedIn project portfolio covering data analytics, BI, ETL, full-stack and mobile-development work.',
  'Created retail DWBI projects using SQL Server, SSIS, SSAS, Power BI and Excel OLAP reporting.',
  'Completed 12 professional certificates across data analytics, Python, AI/ML, MongoDB, IoT and Docker-based Flask learning.',
  'Maintains public GitHub repositories with project documentation and technology-focused learning outcomes.'
];

export const githubHighlights = [
  {
    title: 'Main profile',
    value: '9 public repositories',
    text: 'A public GitHub profile with data, BI, mobile and web projects.'
  },
  {
    title: 'Data focus',
    value: 'R + DWBI projects',
    text: 'Projects include customer-service analytics, ETL and retail BI reporting.'
  },
  {
    title: 'Professional visibility',
    value: 'LinkedIn + GitHub',
    text: 'Project work is documented across both platforms for recruiter review.'
  }
];

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github }
];

