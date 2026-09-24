import './theme.css';

const tejaCollegeData = {
  id: "teja",
  seo: {
    title: "Teja Junior College | The Secret Behind Every Successful Student | Anantapur",
    metaDescription: "Teja Junior College in Anantapur offers Intermediate MPC, BiPC, MEC, CEC education alongside focused preparation for IIT-JEE, NEET, EAPCET, CPT, and Civils."
  },
  college: {
    name: "Teja Junior College",
    shortName: "Teja",
    tagline: "The Secret Behind Every Successful Student",
    logo: "/teja-logo.png",
    location: "Anantapur, Andhra Pradesh",
    contact: {
      phone: "9948567527, 9490859421, 9966334236",
      email: "info@tejajuniorcollege.edu.in",
      address: "Corporate Office: Raghuveera Towers, 4th Floor, Subhash Road, Kamalanagar, Anantapur – 515001, Andhra Pradesh",
      mapUrl: "https://maps.google.com/maps?q=Teja+Junior+College+Kamalanagar+Anantapur&t=m&z=15&ie=UTF8&iwloc=B&output=embed"
    },
    campuses: [
      {
        id: "boys-campus",
        name: "Boys Campus",
        displayName: "👨‍🎓 Boys Campus",
        category: "Dedicated Academic & Hostel Campus",
        type: "Private Unaided (Recognized)",
        address: "Beside CRIT Engineering College, Bellary–Uravakonda–Anantapur Road, Rachanapalle, Anantapur – 515006",
        phone: "9948567527",
        description: "A dedicated academic and residential environment for boys with modern classrooms, 5 advanced laboratories, a 3-acre playground, and structured study hours.",
        image: "/teja/gallery/teja_main_building.png",
        facilities: [
          "6-Acre Spacious Campus",
          "5 Specialized Laboratories",
          "3-Acre Sports Playground",
          "Dedicated Boys Hostel"
        ]
      },
      {
        id: "girls-campus",
        name: "Girls Campus",
        displayName: "👩‍🎓 Girls Campus",
        category: "Dedicated Academic & Hostel Campus",
        type: "Private Unaided (Recognized)",
        address: "Rachanapalle / Kodimi Area (Location Code: PG7P+F5V), Anantapur, Andhra Pradesh",
        phone: "9490859421",
        description: "A secure, dedicated campus environment for female students supporting focused academic learning, practical laboratories, and safe residential hostel facilities.",
        image: "/teja/gallery/teja_science_lab.png",
        facilities: [
          "Dedicated Girls Learning Campus",
          "Full-fledged Science Laboratories",
          "Secure Girls Hostel Campus",
          "24/7 Security & Individual Care"
        ]
      },
      {
        id: "day-scholar",
        name: "Day Scholar Campus",
        displayName: "🏙️ Day Scholar Campus",
        category: "Urban Academic Campus",
        type: "Private Unaided (Recognized)",
        address: "Opposite HDFC Bank, Andhra Bank Colony, Ram Nagar / Srinagar Colony, Anantapur – 515004",
        phone: "9966334236",
        description: "Located in the heart of Anantapur's city center for convenient daily commuting, equipped with a 50-Computer Digital Online Examination Lab.",
        image: "/teja/gallery/teja_entrance_toppers.png",
        facilities: [
          "50-Computer Digital Exam Lab",
          "30 & 60-Seater Smart Classrooms",
          "Central City Commuting Access",
          "Daily Testing & Evaluation"
        ]
      },
      {
        id: "kamalanagar",
        name: "Kamalanagar Corporate Office",
        displayName: "🏢 Corporate Office",
        category: "Admissions & Counseling Centre",
        type: "Private Unaided (Recognized)",
        address: "Raghuveera Towers, 4th Floor, Subhash Road, Kamalanagar, Anantapur – 515001",
        phone: "9948567527",
        description: "Centrally located corporate office providing students and parents with academic counseling, course selection, and admissions guidance.",
        image: "/teja/gallery/teja_freshers_day.png",
        facilities: [
          "Admissions & Counseling Desk",
          "Parent Interaction Lounge",
          "Career Guidance Cell",
          "Enrollment Assistance"
        ]
      }
    ]
  },
  navigation: {
    brand: {
      name: "TEJA JUNIOR COLLEGE",
      subtext: "The Secret Behind Every Successful Student",
      hideText: false,
      fullLogo: false
    },
    links: [
      { label: "Home", target: "", action: "navigate_to_route" },
      { label: "About", target: "about", action: "navigate_to_route" },
      { label: "Academics", target: "academics", action: "navigate_to_route" },
      { label: "Courses", target: "programmes", action: "navigate_to_route" },
      { label: "Campuses", target: "campus", action: "navigate_to_route" },
      { label: "Facilities", target: "facilities", action: "navigate_to_route" },
      { label: "Achievements", target: "results", action: "navigate_to_route" },
      { label: "Student Life", target: "student-life", action: "navigate_to_route" },
      { label: "Admissions", target: "admissions", action: "navigate_to_route" },
      { label: "Contact", target: "contact", action: "navigate_to_route" }
    ],
    cta: {
      label: "Admissions",
      action: "open_admissions_modal"
    }
  },
  pages: {
    home: {
      sections: [
        {
          id: "teja-hero",
          type: "sg-hero",
          enabled: true,
          eyebrow: "TEJA JUNIOR COLLEGE",
          title: "The Secret Behind\nEvery Successful Student.",
          subtitle: "Building strong academic foundations for higher education, competitive examinations and future careers.\n\nFocus Areas: IIT-JEE • NEET • EAPCET • CPT • Civils",
          heroImage: "/teja/gallery/teja_main_building.png",
          primaryCta: { label: "Explore Programs", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Admissions", action: "navigate_to", target: "admissions" },
          highlights: [
            { icon: "BookOpen", label: "6+ Acres Campus & 5 Labs" },
            { icon: "Target", label: "IIT-JEE • NEET • EAPCET • CPT" },
            { icon: "Users", label: "Separate Boys & Girls Campuses" },
            { icon: "Compass", label: "50-Computer Digital Exam Lab" }
          ]
        },
        {
          id: "teja-stats-strip",
          type: "sg-achievements",
          enabled: true,
          eyebrow: "CAMPUS AT A GLANCE",
          title: "Key Institutional Infrastructure",
          subtitle: "World-class facilities built to support academics, digital assessments, sports, and holistic development.",
          image: "/teja/gallery/teja_seminar_hall_assembly.jpg",
          badgeText: "Teja Campus & Learning Hubs",
          stats: [
            { label: "Spacious Campus", value: "6+", suffix: " Acres" },
            { label: "Science & Language Labs", value: "5", suffix: " Labs" },
            { label: "Online Exam Computers", value: "50", suffix: " Systems" },
            { label: "Library Books Collection", value: "5,000+", suffix: " Books" }
          ],
          cta: { label: "Explore Campus Facilities →", action: "navigate_to", target: "facilities" }
        },
        {
          id: "teja-why",
          type: "sg-why",
          enabled: true,
          eyebrow: "WHY CHOOSE TEJA?",
          title: "Why Choose Teja Junior College?",
          subtitle: "Six core pillars powering student success, curiosity, and competitive excellence.",
          pillars: [
            { title: "01 Think Beyond Textbooks", desc: "Encouraging curiosity, critical thinking, and real subject understanding." },
            { title: "02 Prepare Beyond the Syllabus", desc: "Advanced learning, real-world application, and analytical problem-solving." },
            { title: "03 Compete With Confidence", desc: "Focused preparation for NEET, JEE, EAPCET, and competitive exams with a winning mindset." },
            { title: "04 Learn From Experienced Faculty", desc: "Expert mentors and senior faculty who guide, support, and inspire every step." },
            { title: "05 Smart & Digital Learning", desc: "Technology-enabled classrooms and a 50-computer online exam lab for better learning outcomes." },
            { title: "06 Build a Strong Future", desc: "Strong foundation today, successful higher education and career tomorrow." }
          ],
          cta: { label: "Explore Why Teja →", action: "navigate_to", target: "why-teja" }
        },
        {
          id: "teja-courses-home",
          type: "sg-programmes",
          enabled: true,
          title: "Programs Designed for Every Career Path",
          subtitle: "Integrated curriculum combining Intermediate Public Examinations (IPE) with premier competitive entrance coaching.",
          programs: [
            {
              id: "mpc",
              name: "M.P.C.",
              subjects: "IPE + EAPCET + IIT-JEE",
              description: "Build strong foundations in Mathematics, Physics and Chemistry while preparing for board and engineering entrance examinations.\n\nCareer Pathways: IITs, NITs, BITS, Engineering, Physical Sciences, Architecture, Technology.",
              bgColor: "var(--color-sg-peach)",
              icon: "Atom"
            },
            {
              id: "bipc",
              name: "Bi.P.C.",
              subjects: "IPE + EAPCET + NEET",
              description: "Focused academic preparation for students aspiring toward medicine, life sciences, pharmacy, and healthcare fields.\n\nCareer Pathways: MBBS, BDS, AYUSH, Pharmacy, Biotechnology, Agricultural & Veterinary Sciences.",
              bgColor: "var(--color-sg-sage)",
              icon: "Dna"
            },
            {
              id: "mec-cec",
              name: "M.E.C / C.E.C",
              subjects: "IPE + CPT + CLAT",
              description: "Develop a strong foundation for commerce, law, professional courses, and competitive examinations.\n\nCareer Pathways: Chartered Accountancy (CA/CPT), Corporate Law (CLAT), Economics, Business Management, Civil Services.",
              bgColor: "var(--color-sg-sand)",
              icon: "BarChart2"
            }
          ],
          cta: { label: "Explore All Courses →", action: "navigate_to", target: "programmes" }
        },
        {
          id: "teja-academy-home",
          type: "sg-about",
          enabled: true,
          eyebrow: "TEJA ACADEMY",
          title: "Prepare. Compete. Succeed.",
          headline: "Your Path to Competitive Success",
          content: "Teja Academy is our dedicated competitive-examination coaching division for government recruitment examinations in Telugu & English Medium.\n\n• APPSC Groups: Group I, II, III & IV\n• Police Recruitment: SI & Constable\n• Teaching Careers: TET I & II, DSC\n• General Competitive Exams: NRA CET\n\nLed by Director G. Tejeswara Reddy with 500+ Government Job Selections*.",
          features: [
            { icon: "Target", label: "APPSC Group I, II, III & IV Comprehensive Coaching" },
            { icon: "ShieldCheck", label: "Police Recruitment: SI & Constable Physical & Written Prep" },
            { icon: "BookOpen", label: "Teacher Eligibility & Recruitment: TET I & II and DSC" },
            { icon: "Award", label: "Telugu & English Medium instruction with rigorous test series" }
          ],
          image: "/teja/gallery/teja_event_celebration.png",
          cta: { label: "Explore Teja Academy →", action: "navigate_to", target: "academics" }
        },
        {
          id: "teja-campuses-home",
          type: "campuses-preview",
          enabled: true,
          eyebrow: "CAMPUS EXPERIENCE",
          title: "Separate Boys & Girls Campuses",
          subtitle: "Spacious 6-acre learning spaces, dedicated hostel facilities, and urban commuting centers.",
          campuses: [
            {
              id: "boys-campus",
              name: "Boys Campus",
              displayName: "👨‍🎓 Boys Campus",
              address: "Beside CRIT Engineering College, Bellary Road, Rachanapalle, Anantapur",
              description: "A dedicated academic environment for boys with classrooms, residential hostels, 5 labs, and a 3-acre playground.",
              image: "/teja/gallery/teja_main_building.png"
            },
            {
              id: "girls-campus",
              name: "Girls Campus",
              displayName: "👩‍🎓 Girls Campus",
              address: "Rachanapalle / Kodimi Area, Anantapur",
              description: "A dedicated campus environment for girls supporting focused academics, advanced science labs, and safe residential hostels.",
              image: "/teja/gallery/teja_science_lab.png"
            },
            {
              id: "day-scholar",
              name: "Day Scholar Campus",
              displayName: "🏙️ Day Scholar Campus",
              address: "Opposite HDFC Bank, Ram Nagar / Srinagar Colony, Anantapur",
              description: "Central city campus with a 50-computer digital testing lab for urban day-scholars.",
              image: "/teja/gallery/teja_entrance_toppers.png"
            },
            {
              id: "kamalanagar",
              name: "Corporate Office",
              displayName: "🏢 Kamalanagar Corporate Office",
              address: "Raghuveera Towers, 4th Floor, Subhash Road, Kamalanagar, Anantapur",
              description: "Central admissions, career counseling, and parent guidance desk.",
              image: "/teja/gallery/teja_freshers_day.png"
            }
          ]
        },
        {
          id: "teja-achievements-2023",
          type: "sg-achievements",
          enabled: true,
          eyebrow: "HISTORIC ACHIEVEMENTS",
          title: "2023 Achievements & Milestone Results",
          subtitle: "A record of outstanding student performance across premier entrance examinations and engineering admissions (550+ Engineering Admissions within 10 years).",
          image: "/teja/gallery/teja_toppers_celebration_cake.jpg",
          badgeText: "Our Mentors & Achievers",
          stats: [
            { label: "EAPCET Qualifiers (2023)", value: "450+", suffix: " Students" },
            { label: "NEET Medical Qualifiers (2023)", value: "100+", suffix: " Students" },
            { label: "JEE Engineering Ranks (2023)", value: "65+", suffix: " Students" },
            { label: "Engineering Admissions", value: "550+", suffix: " in 10 Yrs" }
          ],
          cta: { label: "View Complete Results & Achievers →", action: "navigate_to", target: "results" }
        },
        {
          id: "teja-about-home",
          type: "sg-about",
          enabled: true,
          eyebrow: "OUR PHILOSOPHY",
          title: "College Philosophy",
          headline: "Dream Big. Learn Deep. Prepare with Purpose.",
          content: "At Teja Junior College, we strive to create an environment where academic learning, competitive preparation, mentorship and student development come together to help students move confidently toward their future goals.\n\n\"The Secret Behind Every Successful Student\" is our promise to foster deep subject mastery, hands-on scientific experimentation, and a disciplined winning mindset.",
          features: [
            { icon: "Compass", label: "5 Dedicated Laboratories (Physics, Chemistry, Botany, Zoology & English)" },
            { icon: "Target", label: "50-Computer Digital Online Examination Lab for CBT simulation" },
            { icon: "BookOpen", label: "5,000+ Library Books for comprehensive academic reference" },
            { icon: "Users", label: "30 & 60-Seater structured classrooms for focused attention" }
          ],
          image: "/teja/gallery/teja_campus_corridor.png",
          cta: { label: "Learn More About Teja →", action: "navigate_to", target: "about" }
        },
        {
          id: "teja-admissions-cta",
          type: "sg-admissions-cta",
          enabled: true,
          eyebrow: "YOUR FUTURE STARTS HERE",
          title: "Take the Next Step Toward Your Academic and Career Goals",
          subtitle: "Admissions open for MPC, BiPC, MEC & CEC integrated with IIT-JEE, NEET, EAPCET, CPT & Civils coaching.",
          primaryCta: { label: "Explore Courses", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Talk to Admissions", action: "navigate_to", target: "contact" },
          image: "/teja/gallery/teja_entrance_toppers.png"
        }
      ]
    },
    about: {
      sections: [
        {
          id: "about-hero",
          type: "about-hero",
          eyebrow: "ABOUT TEJA JUNIOR COLLEGE",
          title: "The Secret Behind Every Successful Student",
          subtitle: "We Make Your Dreams Come True. Developing strong academic foundations, competitive excellence, and future career readiness.",
          image: "/teja/gallery/teja_main_building.png"
        },
        {
          id: "about-intro",
          type: "about-content",
          eyebrow: "OUR PHILOSOPHY",
          title: "Dream Big. Learn Deep. Prepare with Purpose.",
          content: "At Teja Junior College, education goes far beyond completing syllabus lessons. We believe student development extends beyond textbooks and examinations.\n\n• Academic Excellence: Strong conceptual foundations in MPC, BiPC, MEC & CEC.\n• Competitive Preparation: Focused preparation for IIT-JEE, NEET, EAPCET, CPT & Civils.\n• Practical Learning: 5 specialized laboratories and a 50-computer online examination facility.\n• Sports & Activities: 3-acre playground and facilities for 10+ sports and games.\n• Mentorship: Senior faculty providing one-to-one mentoring throughout the intermediate journey."
        },
        {
          id: "about-leadership",
          type: "chairperson-message",
          eyebrow: "LEADERSHIP & VISION",
          title: "Director's Message",
          name: "G. Tejeswar Reddy",
          designation: "Director, Teja Junior College",
          quote: "Your Hard Work. Our Guidance. A Perfect Result!",
          content: "At Teja Junior College, we are dedicated to providing our students with the highest standards of conceptual clarity, moral discipline, and competitive examination coaching. Our campuses, experienced faculty, and rigorous testing framework ensure every student achieves their highest potential in board exams and premier national entrance tests.",
          image: "/teja/gallery/teja_director_portrait.jpg"
        }
      ]
    },
    academics: {
      sections: [
        {
          id: "academics-hero",
          type: "about-hero",
          eyebrow: "ACADEMICS & COMPETITIVE PREP",
          title: "Prepare Beyond the Classroom",
          subtitle: "Teja Junior College focuses on helping students prepare for major competitive examinations alongside their Intermediate education.",
          image: "/teja/gallery/teja_campus_corridor.png"
        },
        {
          id: "academics-intro",
          type: "academic-intro",
          eyebrow: "COMPETITIVE PREPARATION AREAS",
          title: "Comprehensive Competitive Examination Coaching",
          content: "• IIT-JEE: High-level engineering entrance coaching with advanced problem-solving.\n• NEET: Comprehensive medical entrance coaching with extensive biology, physics & chemistry drills.\n• EAPCET: Rigorous state-level engineering and medical entrance coaching.\n• CPT: Foundational preparation for professional chartered accountancy and commerce tracks.\n• Civils: Foundation-oriented analytical preparation for civil services pathways."
        },
        {
          id: "academics-journey",
          type: "winning-process",
          eyebrow: "ACADEMIC PROGRESSION",
          title: "Structured Learning Framework",
          description: "A continuous progression from core concept clarity to national exam mastery.",
          steps: [
            { n: "01", h: "Think Beyond Textbooks", label: "Step 01", p: "Encouraging curiosity, critical thinking, and fundamental concept understanding." },
            { n: "02", h: "Prepare Beyond Syllabus", label: "Step 02", p: "Advanced problem-solving sessions and real-world scientific applications." },
            { n: "03", h: "5 Specialized Labs", label: "Step 03", p: "Practical lab experiments across Physics, Chemistry, Botany, Zoology & English." },
            { n: "04", h: "Digital CBT Testing", label: "Step 04", p: "Weekly online mock tests in our 50-Computer Digital Examination Lab." },
            { n: "05", h: "Senior Mentorship", label: "Step 05", p: "Individual guidance, diagnostic reviews, and personalized performance feedback." }
          ]
        },
        {
          id: "academics-pathways",
          type: "programs",
          eyebrow: "COURSES OFFERED",
          title: "Integrated Intermediate Streams",
          description: "Select the integrated intermediate pathway tailored for your career ambitions.",
          programs: [
            { id: "mpc", name: "M.P.C.", subjects: "IPE + EAPCET + IIT-JEE", bgColor: "var(--color-sg-peach)", icon: "Atom" },
            { id: "bipc", name: "Bi.P.C.", subjects: "IPE + EAPCET + NEET", bgColor: "var(--color-sg-sage)", icon: "Dna" },
            { id: "mec-cec", name: "M.E.C / C.E.C", subjects: "IPE + CPT + CLAT", bgColor: "var(--color-sg-sand)", icon: "BarChart2" }
          ]
        },
        {
          id: "academics-focus",
          type: "academic-focus",
          eyebrow: "INFRASTRUCTURE FOCUS",
          title: "Classrooms & Digital Capabilities",
          features: [
            { icon: "Brain", h: "30 & 60-Seater Classrooms", p: "Structured classroom capacity designed for attentive teaching and interactive learning." },
            { icon: "Target", h: "50-Computer Digital Lab", p: "High-speed computerized lab supporting online entrance tests and digital assessments." },
            { icon: "TrendingUp", h: "5,000+ Library Books", p: "Extensive book collection for board studies, competitive reference, and independent reading." },
            { icon: "Compass", h: "5 Practical Laboratories", p: "Dedicated Physics, Chemistry, Botany, Zoology, and English communication labs." }
          ]
        },
        {
          id: "academics-cta",
          type: "cta-banner",
          title: "Build a Strong Academic Future With Teja",
          desc: "Connect with our admissions desk to learn more about course enrollment and competitive coaching tracks.",
          primaryLabel: "Admissions Journey",
          primaryTarget: "admissions"
        }
      ]
    },
    programmes: {
      sections: [
        {
          id: "prog-hero",
          type: "about-hero",
          title: "Programs Designed for Every Career Path",
          subtitle: "Explore our integrated Intermediate programs: MPC, BiPC, and MEC / CEC.",
          image: "/teja/gallery/teja_science_lab.png"
        },
        {
          id: "prog-list",
          type: "programs",
          title: "Courses Offered",
          programs: [
            {
              name: "M.P.C.",
              code: "mpc",
              title: "M.P.C. (Mathematics • Physics • Chemistry)",
              subtitle: "IPE + EAPCET + IIT-JEE",
              description: "Build strong foundations in Mathematics, Physics, and Chemistry while preparing for board and engineering entrance examinations.\n\nFuture Pathways: IIT-JEE, EAPCET, BITSAT, KCET, LPU, PES, VIIT, NITs, Architecture, Pure Sciences.",
              bgColor: "#FFF0F7",
              icon: "Atom"
            },
            {
              name: "Bi.P.C.",
              code: "bipc",
              title: "Bi.P.C. (Biology • Physics • Chemistry)",
              subtitle: "IPE + EAPCET + NEET",
              description: "Focused academic preparation for students aspiring toward medicine, life sciences, pharmacy, and healthcare fields.\n\nFuture Pathways: NEET (MBBS/BDS), AIIMS, JIPMER, EAPCET Agriculture & Pharmacy, Biotechnology, Veterinary Sciences.",
              bgColor: "#F6F0FF",
              icon: "Dna"
            },
            {
              name: "M.E.C / C.E.C",
              code: "mec-cec",
              title: "M.E.C / C.E.C (Commerce • Economics • Civils)",
              subtitle: "IPE + CPT + CLAT",
              description: "Develop a strong foundation for commerce, law, professional courses, and civil services competitive examinations.\n\nFuture Pathways: CA Foundation (CPT), Corporate Law (CLAT), Economics, Business Management (BBA/IPM), Civil Services Foundation.",
              bgColor: "#FFFBE6",
              icon: "BarChart2"
            }
          ]
        }
      ]
    },
    'why-us': {
      sections: [
        {
          id: "why-hero",
          type: "about-hero",
          eyebrow: "WHY CHOOSE TEJA",
          title: "Why Choose Teja Junior College?",
          subtitle: "An environment designed for curiosity, academic excellence, competitive success, and career foundations.",
          image: "/teja/gallery/teja_main_building.png"
        },
        {
          id: "why-pillars",
          type: "why-us",
          title: "Six Pillars of Student Excellence",
          pillars: [
            { id: "w1", title: "01. Strong Academic Foundation", desc: "Structured Intermediate education with focused subject learning in MPC, BiPC, MEC & CEC.", icon: "BookOpen" },
            { id: "w2", title: "02. Competitive Exam Preparation", desc: "Proven preparation for IIT-JEE, NEET, EAPCET, CPT, and Civils competitive pathways.", icon: "Atom" },
            { id: "w3", title: "03. Senior Faculty & Mentors", desc: "Learn from experienced subject experts and mentors who guide and inspire every step.", icon: "Users" },
            { id: "w4", title: "04. Modern Learning Facilities", desc: "5 laboratories, a 50-computer online examination lab, and 5,000+ library books.", icon: "Briefcase" },
            { id: "w5", title: "05. Sports & Activities", desc: "3-acre dedicated playground and opportunities for 10+ sports and physical games.", icon: "Target" },
            { id: "w6", title: "06. Residential Hostel Support", desc: "2 separate dedicated hostel campuses for boys and girls with safe residential care.", icon: "Compass" }
          ]
        },
        {
          id: "why-closing",
          type: "about-content",
          title: "Our Commitment",
          content: "Dream Big. Learn Deep. Prepare with Purpose."
        }
      ]
    },
    facilities: {
      sections: [
        {
          id: "facilities-hero",
          type: "about-hero",
          eyebrow: "CAMPUS HIGHLIGHTS & FACILITIES",
          title: "World-Class Infrastructure & Learning Environment",
          subtitle: "6-Acre campus, 5 laboratories, 50-computer CBT lab, 5,000+ library books, and 3-acre playground.",
          image: "/teja/gallery/teja_seminar_hall_assembly.jpg"
        },
        {
          id: "facilities-list",
          type: "philosophy",
          title: "Campus Facilities Grid",
          pillars: [
            { title: "6-Acre Campus", desc: "Spacious and peaceful institutional environment designed for focused academic learning.", icon: "Map" },
            { title: "5 Laboratories", desc: "Physics Lab, Chemistry Lab, Botany Lab, Zoology Lab, and dedicated English Communication Lab.", icon: "FlaskConical" },
            { title: "50-Computer Digital Exam Lab", desc: "Dedicated computer facility supporting online examinations, digital assessments, and CBT testing.", icon: "FlaskConical" },
            { title: "5,000+ Library Books", desc: "Extensive book collection to support academic learning, reference work, and competitive preparation.", icon: "BookMarked" },
            { title: "30 & 60-Seater Classrooms", desc: "Structured classroom environments designed for focused teaching, active discussion, and personal attention.", icon: "BookOpen" },
            { title: "3-Acre Playground & 10 Sports", desc: "Dedicated sports ground providing facilities for cricket, volleyball, athletics, and recreational games.", icon: "Layers" },
            { title: "2 Separate Hostel Campuses", desc: "Dedicated residential hostel facilities for boys and girls providing disciplined study hours and healthy food.", icon: "Users" },
            { title: "Senior Faculty & Mentors", desc: "Experienced faculty members providing one-to-one mentoring and continuous academic progress tracking.", icon: "ShieldCheck" }
          ]
        }
      ]
    },
    campus: {
      sections: [
        {
          id: "campus-hero",
          type: "about-hero",
          eyebrow: "OUR CAMPUSES",
          title: "Boys Campus, Girls Campus & Urban Centres",
          subtitle: "Dedicated campus environments across Anantapur providing accessible, focused intermediate education.",
          image: "/teja/gallery/teja_main_building.png"
        }
      ]
    },
    'student-life': {
      sections: [
        {
          id: "sl-hero",
          type: "about-hero",
          eyebrow: "STUDENT LIFE",
          title: "Beyond Academics",
          subtitle: "We believe student development extends beyond textbooks: practical science labs, 10+ sports, freshers celebrations, and mentorship.",
          image: "/teja/gallery/teja_freshers_day.png"
        },
        {
          id: "sl-activities",
          type: "why-us",
          title: "Elements of Student Life",
          pillars: [
            { id: "sl1", title: "Academic Excellence", desc: "Strong conceptual foundations in intermediate subjects with disciplined study routines.", image: "/teja/gallery/teja_main_building.png" },
            { id: "sl2", title: "Competitive Preparation", desc: "Intensive drills and weekly tests for IIT-JEE, NEET, EAPCET, CPT, and Civils.", image: "/teja/gallery/teja_state_toppers_2025.jpg" },
            { id: "sl3", title: "Practical Lab Learning", desc: "Hands-on experiments in Physics, Chemistry, Botany, Zoology, and English communication.", image: "/teja/gallery/teja_science_lab.png" },
            { id: "sl4", title: "Sports & 3-Acre Playground", desc: "Physical wellness and team camaraderie across 10+ sports and games.", image: "/teja/gallery/teja_campus_corridor.png" },
            { id: "sl5", title: "Freshers Day & Cultural Events", desc: "Vibrant annual celebrations, batch welcomes, and stage events inspiring confidence.", image: "/teja/gallery/teja_freshers_day.png" },
            { id: "sl6", title: "Victory Celebrations & Mentorship", desc: "Felicitating toppers and celebrating student triumphs with faculty and peers.", image: "/teja/gallery/teja_toppers_celebration_cake.jpg" }
          ]
        }
      ]
    },
    results: {
      sections: [
        {
          id: "results-hero",
          type: "about-hero",
          eyebrow: "RESULTS & 2023 ACHIEVEMENTS",
          title: "Proven Excellence Across State & National Exams",
          subtitle: "2023 Achievements: 450+ EAPCET, 100+ NEET, 65+ JEE, 20 KCET, 18 LPU, 11 PES, 23 VIIT, and 550+ Engineering Admissions in 10 Years.",
          image: "/teja/gallery/teja_state_toppers_2025.jpg"
        }
      ],
      achievers: [
        { name: "Dandeti Ramyasree", rank: "State 1st Rank", score: "991 / 1000", exam: "Intermediate Board 2025", image: "/teja/gallery/teja_student_topper_portrait.jpg" },
        { name: "Navaneetha", rank: "AIR 1039", score: "NEET Top Ranker", exam: "All India NEET", image: "/teja/gallery/teja_neet_topper_1039.png" },
        { name: "M.C. Paramesh", rank: "AIR 525", score: "Top Ranker", exam: "JEE Main 2024", image: "/teja/gallery/teja_jee_mains_results_2024.jpg" },
        { name: "K. Neeraja", rank: "AIR 5370", score: "Top Ranker", exam: "JEE Main 2024", image: "/teja/gallery/teja_jee_mains_results_2024.jpg" },
        { name: "2023 EAPCET Batch", rank: "450+ Qualifiers", score: "State Ranks", exam: "EAPCET 2023", image: "/teja/gallery/teja_toppers_celebration_cake.jpg" },
        { name: "2023 NEET Batch", rank: "100+ Qualifiers", score: "Medical Seats", exam: "NEET 2023", image: "/teja/gallery/teja_entrance_toppers.png" }
      ]
    },
    admissions: {
      sections: [
        {
          id: "admissions-hero",
          type: "about-hero",
          eyebrow: "ADMISSIONS OPEN",
          title: "Your Future Starts Here",
          subtitle: "Take the next step toward your academic and career goals. Explore courses or talk to our admissions team.",
          image: "/teja/gallery/teja_entrance_toppers.png"
        },
        {
          id: "admissions-process",
          type: "winning-process",
          eyebrow: "ADMISSION JOURNEY",
          title: "Five-Step Admission Journey",
          description: "A transparent and guided admission process for prospective students and parents.",
          steps: [
            { n: "01", h: "Enquiry", label: "Step 01", p: "Connect with our admissions desk: 9948567527 / 9490859421 / 9966334236." },
            { n: "02", h: "Counseling", label: "Step 02", p: "Discuss career interests: Engineering (MPC), Medical (BiPC), or Commerce & Law (MEC/CEC)." },
            { n: "03", h: "Course Selection", label: "Step 03", p: "Choose integrated coaching: IPE + IIT-JEE, NEET, EAPCET, CPT or Civils." },
            { n: "04", h: "Application & Documents", label: "Step 04", p: "Submit 10th/SSC records, transfer certificate, photos, and student details." },
            { n: "05", h: "Admission Confirmation", label: "Step 05", p: "Complete formal admission formalities and receive your campus & hostel batch schedule." }
          ]
        }
      ]
    },
    contact: {
      sections: [
        {
          id: "contact-hero",
          type: "about-hero",
          eyebrow: "CONTACT & CORPORATE OFFICE",
          title: "Get in Touch With Teja Junior College",
          subtitle: "Corporate Office: Raghuveera Towers, Anantapuramu. Call Admissions: 9948567527 / 9490859421.",
          image: "/teja/gallery/teja_main_building.png"
        }
      ]
    }
  },
  gallery: {
    images: [
      { src: "/teja/gallery/teja_main_building.png", category: "Campus", title: "Teja Junior College — 6-Acre Main Academic Campus" },
      { src: "/teja/gallery/teja_toppers_celebration_cake.jpg", category: "Achievements", title: "State Toppers & Faculty Victory Celebration" },
      { src: "/teja/gallery/teja_student_topper_portrait.jpg", category: "Achievements", title: "State Topper — Dandeti Ramyasree (991/1000)" },
      { src: "/teja/gallery/teja_state_toppers_2025.jpg", category: "Achievements", title: "State Rankers 2025 — 54 Top 10 Ranks & 263 Top Marks" },
      { src: "/teja/gallery/teja_jee_mains_results_2024.jpg", category: "Achievements", title: "JEE Main 2024 Top Ranks — AIR 525, 5370 & 14653" },
      { src: "/teja/gallery/teja_neet_topper_1039.png", category: "Achievements", title: "NEET All India Rank 1039 — Outstanding Achievement" },
      { src: "/teja/gallery/teja_seminar_hall_assembly.jpg", category: "Campus", title: "Grand Seminar Hall & Student Orientation Assembly" },
      { src: "/teja/gallery/teja_science_lab.png", category: "Academics", title: "Science Practical Laboratory Sessions" },
      { src: "/teja/gallery/teja_campus_corridor.png", category: "Campus", title: "Campus Entrance & Academic Corridors" },
      { src: "/teja/gallery/teja_freshers_day.png", category: "Student Life", title: "Freshers Day Celebration & Batch Welcome" },
      { src: "/teja/gallery/teja_event_celebration.png", category: "Student Life", title: "Institutional Events & Leadership Address" }
    ]
  },
  footer: {
    brand: {
      description: "The Secret Behind Every Successful Student. Building strong academic foundations for higher education, competitive examinations, and future careers."
    },
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", target: "" },
          { label: "About", target: "about" },
          { label: "Academics", target: "academics" },
          { label: "Courses", target: "programmes" },
          { label: "Campuses", target: "campus" },
          { label: "Facilities", target: "facilities" },
          { label: "Achievements", target: "results" },
          { label: "Student Life", target: "student-life" },
          { label: "Admissions", target: "admissions" },
          { label: "Contact", target: "contact" }
        ]
      },
      {
        title: "Courses Offered",
        links: [
          { label: "M.P.C. (IIT-JEE / EAPCET)", target: "programmes" },
          { label: "Bi.P.C. (NEET / EAPCET)", target: "programmes" },
          { label: "M.E.C / C.E.C (CPT / CLAT)", target: "programmes" },
          { label: "Civils Foundation", target: "academics" }
        ]
      },
      {
        title: "Campuses & Facilities",
        links: [
          { label: "👨‍🎓 Boys Campus & Hostel", target: "campus" },
          { label: "👩‍🎓 Girls Campus & Hostel", target: "campus" },
          { label: "50-Computer Digital Lab", target: "facilities" },
          { label: "5 Specialized Laboratories", target: "facilities" },
          { label: "Corporate Office (Kamalanagar)", target: "contact" }
        ]
      }
    ],
    contact: {
      address: "Corporate Office: Raghuveera Towers, 4th Floor, Subhash Road, Kamalanagar, Anantapuramu, Andhra Pradesh – 515001",
      phone: "9948567527, 9490859421",
      email: "info@tejajuniorcollege.edu.in"
    },
    bottom: {
      copyright: "© Teja Junior College. All Rights Reserved. Anantapuramu, Andhra Pradesh."
    }
  },
  tejaAcademy: {
    title: "TEJA ACADEMY",
    tagline: "Your Path to Competitive Success",
    subtitle: "Focused coaching and preparation for government recruitment and competitive examinations in Telugu & English Medium.",
    medium: "Telugu & English Medium",
    director: {
      name: "G. Tejeswara Reddy",
      title: "Director, Teja Academy",
      desc: "Leading competitive-examination coaching and guidance for government-job aspirants."
    },
    highlight: "500+ Government Job Selections*",
    highlightNote: "*As stated in Teja Academy's promotional material.",
    contact: {
      address: "Raghuveera Towers, 4th Floor, Anantapuramu",
      phone: "99485 67527"
    },
    categories: [
      {
        name: "APPSC Groups",
        target: "Group I, II, III & IV",
        tag: "CIVIL & STATE SERVICES",
        description: "Comprehensive syllabus coverage, standard study material, current affairs analysis, and preliminary & mains test series."
      },
      {
        name: "Police Recruitment",
        target: "SI & Constable",
        tag: "DEFENCE & POLICE",
        description: "Intensive training for written examinations and physical fitness guidance for SI & Police Constable aspirants."
      },
      {
        name: "Teaching Careers",
        target: "TET – I & II and DSC",
        tag: "EDUCATION & TEACHING",
        description: "Expert pedagogy and methodology coaching for Teacher Eligibility Tests (TET) and District Selection Committee (DSC)."
      },
      {
        name: "General Competitive Exams",
        target: "NRA CET & Banking",
        tag: "CENTRAL & STATE RECRUITMENT",
        description: "Aptitude, reasoning, general awareness, and English preparation for National Recruitment Agency Common Eligibility Test."
      }
    ]
  },
  faq: [
    {
      q: "What courses and combinations are offered at Teja Junior College?",
      a: "Teja Junior College offers M.P.C. (IPE + EAPCET + IIT-JEE), Bi.P.C. (IPE + EAPCET + NEET), and M.E.C / C.E.C (IPE + CPT + CLAT), alongside Civils foundation coaching."
    },
    {
      q: "What are Teja Junior College's key competitive exam achievements?",
      a: "In 2023 achievements: 450+ EAPCET qualifiers, 100+ NEET medical qualifiers, 65+ JEE qualifiers, 20 KCET, 18 LPU, 11 PES, 23 VIIT, and over 550+ engineering admissions secured within 10 years."
    },
    {
      q: "Are there separate campuses and hostels for boys and girls?",
      a: "Yes. Teja Junior College provides separate dedicated campuses and 2 separate hostel campuses for Boys and Girls with structured study hours, safety, and faculty supervision."
    },
    {
      q: "What infrastructure and laboratory facilities are available?",
      a: "The college features a 6-acre campus, 5 specialized laboratories (Physics, Chemistry, Botany, Zoology, and English), a 50-computer online examination lab, 5,000+ library books, and a 3-acre playground with facilities for 10+ sports and games."
    },
    {
      q: "What are the classroom capacities?",
      a: "Classrooms are structured with 30-seater and 60-seater capacities to ensure focused teaching, active student interaction, and individual attention."
    },
    {
      q: "How can I contact the corporate admissions desk?",
      a: "You can visit our Corporate Office at Raghuveera Towers, Anantapuramu, or call our admissions numbers at 9948567527 / 9490859421 / 9966334236."
    }
  ]
};

export default tejaCollegeData;
