export interface Program {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  beneficiaries: string[];
  approach: string[];
  image: string;
  category: string;
  iconName: string;
  badge?: string;
  awardCaption?: string;
  gallery?: { url: string; caption: string }[];
}

export interface StrategicPhase {
  phase: string;
  title: string;
  badge: string;
  desc: string;
  highlights: string[];
}

export interface ChallengeItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  iconName: string;
}

export interface ApproachPrinciple {
  number: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface AwardItem {
  id: string;
  image: string;
  titleHi: string;
  titleEn: string;
  presentedBy: string;
  category: 'State Award' | 'Union Minister' | 'NABARD & Banking' | 'Media & Civic' | 'Institutional';
  year?: string;
  badge: string;
  featured?: boolean;
}

export const ORG_DETAILS = {
  name: "UNNAYAN JAN VIKAS SAMITI",
  shortName: "Unnayan Samiti",
  tagline: "Women Empowerment • Sustainable Livelihoods • Community Development",
  eyebrow: "COMMUNITY DEVELOPMENT • WOMEN EMPOWERMENT",
  headline: "Empowering Women. Strengthening Communities. Transforming Rural Lives.",
  subheadline: "Unnayan Jan Vikas Samiti works towards inclusive rural development through women's empowerment, sustainable livelihoods, education, community welfare and community-led social development.",
  trustIndicator: "20 Years of Community Development & Social Service",
  location: "Ward No. 23 Panjabi Para, Mahasamund (C.G.) 493445",
  workingOffice: "Ward No. 23 Panjabi Para, Mahasamund (C.G.) 493445",
  workingOfficeLine1: "Ward No. 23 Panjabi Para",
  workingOfficeLine2: "Mahasamund (C.G.) 493445",
  pincode: "493445",
  secretary: "Dr. Premsheela Baghel",
  secretaryTitle: "Secretary — Unnayan Jan Vikas Samiti",
  secretaryQualifications: "M.A. Sociology | Master of Social Work (MSW) | 30 Years Experience",
  contactNumbersText: "9826306475, 8349921973",
  primaryPhone: "9826306475",
  secondaryPhone: "8349921973",
  phones: ["9826306475", "8349921973"],
  formattedPhones: ["+91 9826306475", "+91 8349921973"],
  altPhone: "+91 9827139017",
  email: "unnyan2017@gmail.com",
  establishedClaim: "20 Years of Grassroots Experience",
  regNumber: "Reg. No. 6537",
  motto: "A Committee for People Participatory Development Action",
  officialLogo: "/images/unnayan_official_logo.png",
  emblem: "/images/unnayan_crest.png",
  mission: "To support self-reliant communities through women's empowerment, education, sustainable livelihoods, social inclusion and participatory rural development.",
  vision: "To contribute to inclusive and sustainable rural communities where women, children and disadvantaged families can access meaningful opportunities for social and economic development.",
  visionSlogan: "Aims to significantly improve the lives of women, ensuring that their existence becomes highly fulfilling, free from financial hardship, and that they are able to secure employment right within their own villages and homes.",
};

export const CORE_PROGRAMS: Program[] = [
  {
    id: "women-empowerment",
    number: "01",
    title: "Women Empowerment & Leadership",
    category: "Social Leadership & Rights",
    iconName: "Users",
    image: "/images/awards/award_17_haribhoomi_women_canteen_1.jpg",
    badge: "महिला स्व-सहायता समूह पहल (SHG Leadership)",
    awardCaption: "उन्नयन समिति के महिला स्व-सहायता समूह (SHG) संवर्धन एवं नेतृत्व पहल",
    gallery: [
      { url: "/images/awards/award_17_haribhoomi_women_canteen_1.jpg", caption: "उन्नयन समिति महिला स्व-सहायता समूह संवर्धन" },
      { url: "/images/awards/award_06_womens_day_janpad_gariaband.jpg", caption: "विजय विकास महिला संगठन - अंतर्राष्ट्रीय महिला दिवस सम्मान" },
      { url: "/images/awards/award_01_naika_samman_2024.jpg", caption: "दैनिक समाचार पत्र नई दुनिया द्वारा नायिका सम्मान - 2024" }
    ],
    shortDesc: "Support women's leadership, self-help group formation, financial literacy, women's rights awareness and active community decision-making.",
    fullDesc: "Women are the pillars of family and community resilience. Unnayan Jan Vikas Samiti focuses on mobilizing rural women into active Self-Help Groups (SHGs), nurturing grassroots leadership, imparting rights education, and building institutional self-confidence to enable equal participation in household and village governance.",
    objectives: [
      "Mobilize and strengthen women-led Self-Help Groups (SHGs) across rural habitations",
      "Deliver structured leadership and decision-making workshops for grassroots women",
      "Conduct rights awareness, legal literacy, and gender sensitization sessions",
      "Foster financial autonomy and collective savings habits through self-help networks"
    ],
    beneficiaries: [
      "Rural women and adolescent girls",
      "Women from Dalit, tribal, and economically backward families",
      "Emerging village leaders and SHG federation members"
    ],
    approach: [
      "Village-level mobilization and participatory group meetings",
      "Interactive leadership modules delivered in local dialects",
      "Mentorship from experienced community social workers",
      "Peer-to-peer encouragement and collective solidarity building"
    ]
  },
  {
    id: "skill-development",
    number: "02",
    title: "Skill Development & Sustainable Livelihoods",
    category: "Vocational & Economic Independence",
    iconName: "Briefcase",
    image: "/images/awards/award_18_haribhoomi_jila_samvad_2.jpg",
    badge: "महिला स्वरोजगार एवं कैंटीन उद्यम (Livelihood)",
    awardCaption: "हरिभूमि न्यूज़ एजेंसी द्वारा महिला कैंटीन संचालित कर स्वरोजगार से जोड़ने हेतु सम्मान",
    gallery: [
      { url: "/images/awards/award_18_haribhoomi_jila_samvad_2.jpg", caption: "हरिभूमि न्यूज़ एजेंसी द्वारा महिला कैंटीन स्वरोजगार सम्मान" },
      { url: "/images/awards/award_09_vv_giri_national_labour_institute.jpg", caption: "वी.वी. गिरि राष्ट्रीय श्रम संस्थान नोएडा द्वारा आजीविका व श्रम प्रमाणन" },
      { url: "/images/awards/award_02_tankram_verma_minister.jpg", caption: "मान. कैबिनेट मंत्री टंकराम वर्मा द्वारा युवा एवं कौशल विकास सम्मान" }
    ],
    shortDesc: "Highlight vocational training, candle making, traditional product development, rural entrepreneurship and income-generation opportunities.",
    fullDesc: "Ensuring rural women have sustainable income options within their own villages and homes is central to our work. We offer hands-on livelihood training in crafting indigenous items—such as candle making, traditional crafts, and allied home-based production—that command steady demand and remunerative market value.",
    objectives: [
      "Equip rural women with practical, market-demanded vocational skills",
      "Promote home-based microenterprise production including candle making and local handicrafts",
      "Facilitate market linkages and fair pricing for indigenous handmade products",
      "Enable women to achieve recurring income without migrating away from their families"
    ],
    beneficiaries: [
      "Home-based women producers and young rural aspirants",
      "Unemployed women seeking flexible micro-livelihoods",
      "Self-help group craft collectives"
    ],
    approach: [
      "Hands-on vocational workshops using accessible equipment",
      "Quality control training, raw material sourcing guidance, and packaging skills",
      "Collective marketing support to connect rural artisans with local buyers",
      "Continuous mentoring to sustain microenterprise viability"
    ]
  },
  {
    id: "education-child-welfare",
    number: "03",
    title: "Education & Child Welfare",
    category: "Foundational Community Future",
    iconName: "GraduationCap",
    image: "/images/awards/award_11_republic_day_mp_award.jpg",
    badge: "सशक्तिकरण एवं बालिका कल्याण सम्मान पत्र (MP Citation)",
    awardCaption: "माननीय सांसद महोदया द्वारा बालिका कल्याण एवं महिला सशक्तिकरण सम्मान पत्र",
    gallery: [
      { url: "/images/awards/award_11_republic_day_mp_award.jpg", caption: "गणतंत्र दिवस समारोह में मान. सांसद महोदया द्वारा सम्मान पत्र" },
      { url: "/images/awards/award_03_renuka_singh_union_minister.jpg", caption: "केन्द्रीय मंत्री श्रीमती रेणुका सिंह द्वारा बालिका व महिला खेलकूद/शिक्षा सम्मान" },
      { url: "/images/awards/award_13_sahbhagi_shikshan_kendra_lucknow.jpg", caption: "सहभागी शिक्षण केन्द्र लखनऊ द्वारा बाल विकास व संस्थागत क्षमता निर्माण सम्मान" }
    ],
    shortDesc: "Showcase educational awareness, girls' education, child rights, adolescent awareness, nutrition and child welfare initiatives.",
    fullDesc: "Education is the most transformative lever for generational poverty alleviation. We work closely with rural families and children to eliminate barriers to schooling, champion adolescent girl education, organize awareness on child protection, and promote essential nutrition and wellbeing.",
    objectives: [
      "Encourage regular school enrollment and retention, especially for girl children",
      "Conduct adolescent awareness campaigns on personal development and life skills",
      "Advocate for child rights, child protection, and safe community environments",
      "Disseminate vital nutrition and balanced dietary awareness for growing children"
    ],
    beneficiaries: [
      "Primary and secondary school children in underserved rural villages",
      "Adolescent girls navigating educational and developmental milestones",
      "Parents and caregivers seeking guidance on child growth and schooling"
    ],
    approach: [
      "Parental counseling sessions highlighting the long-term benefits of girls' education",
      "Community awareness camps using interactive discussions and creative learning",
      "Collaboration with local village schools and Anganwadi centers",
      "Distribution of educational motivation and awareness materials"
    ]
  },
  {
    id: "community-health-sanitation",
    number: "04",
    title: "Community Health & Sanitation",
    category: "Preventive Care & Hygiene",
    iconName: "HeartPulse",
    image: "/images/awards/award_08_republic_day_food_minister.jpg",
    badge: "खाद्य, पोषण एवं स्वास्थ्य सम्मान (Govt. Honor)",
    awardCaption: "मान. खाद्य एवं जिला प्रभारी मंत्री द्वारा ग्रामीण पोषण व स्वास्थ्य कल्याण सम्मान",
    gallery: [
      { url: "/images/awards/award_08_republic_day_food_minister.jpg", caption: "खाद्य एवं जिला प्रभारी मंत्री छ.ग. शासन द्वारा सम्मान" },
      { url: "/images/awards/award_14_chief_municipal_officer.jpg", caption: "मुख्य नगर पालिका अधिकारी द्वारा स्वच्छता एवं जनस्वास्थ्य सम्मान पत्र" },
      { url: "/images/awards/award_16_nagar_palika_president.jpg", caption: "नगर पालिका अध्यक्ष द्वारा जनस्वास्थ्य व स्वच्छता सेवा सम्मान" }
    ],
    shortDesc: "Highlight preventive healthcare awareness, hygiene, sanitation, clean village pledges and community wellbeing.",
    fullDesc: "Good health is the foundation of community dignity and productivity. Our health and sanitation initiatives emphasize preventive healthcare, maternal and menstrual hygiene awareness, safe drinking water practices, and collective community action—such as clean village oaths—to prevent infectious diseases.",
    objectives: [
      "Promote preventive health education and early care-seeking behavior",
      "Raise awareness on menstrual hygiene, maternal health, and reproductive wellbeing",
      "Mobilize community cleanliness drives and oaths for village sanitation",
      "Foster safe sanitation habits and clean drinking water awareness"
    ],
    beneficiaries: [
      "Rural mothers, adolescent girls, and infants",
      "Entire village habitations needing improved public hygiene",
      "Marginalized families with limited access to primary healthcare guidance"
    ],
    approach: [
      "Door-to-door and group health education sessions led by female workers",
      "Village-wide cleanliness oaths and participatory sanitation campaigns",
      "Awareness camps on seasonal illnesses and personal hygiene practices",
      "Information dissemination on available public health facilities"
    ]
  },
  {
    id: "agriculture-sustainability",
    number: "05",
    title: "Agriculture & Rural Sustainability",
    category: "Agrarian Resilience & Ecology",
    iconName: "Sprout",
    image: "/images/awards/award_04_nabard_raipur.jpg",
    badge: "नाबार्ड रायपुर द्वारा सम्मानित (NABARD Honor)",
    awardCaption: "राष्ट्रीय कृषि एवं ग्रामीण विकास बैंक (नाबार्ड) रायपुर द्वारा सम्मान",
    gallery: [
      { url: "/images/awards/award_04_nabard_raipur.jpg", caption: "नाबार्ड रायपुर द्वारा कृषि एवं ग्रामीण विकास सम्मान" },
      { url: "/images/awards/award_15_womens_day_nabard.jpg", caption: "अंतर्राष्ट्रीय महिला दिवस पर नाबार्ड द्वारा महिला किसान सम्मान" },
      { url: "/images/awards/award_05_mla_mahasamund.jpg", caption: "माननीय विधायक महासमुंद द्वारा कृषक एवं ग्रामीण कल्याण सम्मान" }
    ],
    shortDesc: "Feature farmer training, recognition of women farmers, organic farming awareness, water conservation and environmental protection.",
    fullDesc: "Rural livelihoods are deeply intertwined with the land. Unnayan Jan Vikas Samiti actively champions the principle that 'the term farmer refers not just to males but also to females.' We deliver farmer training on organic techniques, water conservation, natural soil health, and eco-friendly agrarian practices.",
    objectives: [
      "Formally recognize, train, and support women farmers as equal agricultural leaders",
      "Promote organic farming practices, bio-inputs, and reduced chemical dependency",
      "Encourage water conservation, rainwater harvesting, and mindful resource use",
      "Build awareness around climate adaptation, local biodiversity, and tree planting"
    ],
    beneficiaries: [
      "Small and marginal farmers across Mahasamund",
      "Women agricultural workers and farming households",
      "Village communities facing groundwater and soil depletion challenges"
    ],
    approach: [
      "Field demonstration sessions on organic composting and natural pest deterrents",
      "Farmer discussions on water-efficient crop cycles and conservation techniques",
      "Sensitization on women's equitable role in farming decisions and tool access",
      "Environmental cleanliness and green cover enhancement drives"
    ]
  },
  {
    id: "digital-financial-inclusion",
    number: "06",
    title: "Digital & Financial Inclusion",
    category: "Modern Economic Integration",
    iconName: "Smartphone",
    image: "/images/awards/award_10_mahila_sahkari_bank.jpg",
    badge: "सहकारी बैंक व वित्तीय साक्षरता (Financial Literacy)",
    awardCaption: "महिला नागरिक सहकारी बैंक मर्यादित द्वारा उद्यमिता व वित्तीय साक्षरता शिविर सम्मान",
    gallery: [
      { url: "/images/awards/award_10_mahila_sahkari_bank.jpg", caption: "महिला नागरिक सहकारी बैंक उद्यमिता व वित्तीय साक्षरता शिविर" },
      { url: "/images/awards/award_12_state_award_avanti_bai_lodhi.jpg", caption: "छत्तीसगढ़ शासन राज्य अलंकरण - वीरांगना रानी अवंती बाई लोधी स्मृति सम्मान" },
      { url: "/images/awards/award_07_womens_day_nagar_palika.jpg", caption: "नगर पालिका परिषद महिला सशक्तिकरण एवं वित्तीय स्वावलंबन सम्मान" }
    ],
    shortDesc: "Highlight digital literacy, banking awareness, financial literacy and access to relevant government welfare information.",
    fullDesc: "Access to the digital and formal financial ecosystem is a basic right in modern India. We bridge the digital divide by training rural women and youth in basic smartphone usage, bank account digitization, Aadhaar-enabled services, digital payments, and navigating government welfare entitlements securely.",
    objectives: [
      "Educate rural families on basic banking operations, savings, and passbook management",
      "Train women in mobile literacy and safe digital financial transactions",
      "Prevent cyber frauds and financial scams through community awareness",
      "Connect underserved households with eligible government welfare schemes"
    ],
    beneficiaries: [
      "Rural women opening or digitizing their first formal bank accounts",
      "Elderly and vulnerable persons seeking direct benefit transfer (DBT) guidance",
      "Rural youth interested in fundamental digital skills"
    ],
    approach: [
      "Practical mobile demonstrations in village community centers",
      "Step-by-step guidance on ATM usage, digital verification, and account safety",
      "Assistance in understanding public entitlement criteria and documentation",
      "Periodic financial literacy workshops for SHG group leaders"
    ]
  }
];

export const CHALLENGES_LIST: ChallengeItem[] = [
  {
    id: "livelihoods",
    title: "Limited Livelihood Opportunities",
    problem: "Rural women and disadvantaged families face limited employment avenues, inadequate vocational training, and restricted access to sustainable income-generating activities near their homes.",
    solution: "We provide practical vocational skills like candle making, traditional crafts, and microenterprise training so women can earn dignified livelihoods without leaving their villages.",
    iconName: "TrendingUp"
  },
  {
    id: "inequality",
    title: "Gender Inequality & Social Exclusion",
    problem: "Women, Dalit, and tribal communities often encounter deep-seated barriers to education, financial independence, leadership opportunities, and equal community voice.",
    solution: "We build women-led Self-Help Groups, conduct gender sensitization, and empower marginalized community members to participate actively in decisions.",
    iconName: "ShieldAlert"
  },
  {
    id: "education-health",
    title: "Gaps in Education & Healthcare",
    problem: "Limited awareness, resource constraints, and accessibility hurdles impact girls' education, adolescent wellbeing, preventive healthcare, and village sanitation.",
    solution: "We organize grassroots health camps, clean village oaths, parental awareness on schooling, and adolescent support sessions to bridge accessibility gaps.",
    iconName: "Activity"
  },
  {
    id: "digital-gap",
    title: "Low Digital & Financial Literacy",
    problem: "Limited familiarity with digital tools, banking procedures, and government welfare programs restricts financial inclusion and leaves rural families vulnerable to exclusion.",
    solution: "We facilitate digitization of bank accounts, impart practical mobile literacy, and demystify official welfare schemes for rural households.",
    iconName: "Cpu"
  }
];

export const APPROACH_PRINCIPLES: ApproachPrinciple[] = [
  {
    number: "01",
    title: "Community-Based Skill Development",
    desc: "Delivering practical livelihood training through locally relevant activities, enabling rural women to develop marketable skills and explore income-generating opportunities.",
    iconName: "Wrench"
  },
  {
    number: "02",
    title: "Women-Led Economic Empowerment",
    desc: "Strengthening self-help groups, financial literacy, and leadership skills to encourage women's participation in household and community economic decisions.",
    iconName: "Award"
  },
  {
    number: "03",
    title: "Integrated Social Development",
    desc: "Combining education, healthcare awareness, child protection, and social inclusion initiatives to address interconnected challenges faced by underserved communities.",
    iconName: "Layers"
  },
  {
    number: "04",
    title: "Participatory Rural Development",
    desc: "Engaging local communities in identifying development needs, participating in programs, and strengthening collective responsibility for sustainable outcomes.",
    iconName: "Handshake"
  }
];

export const STRATEGIC_PHASES: StrategicPhase[] = [
  {
    phase: "Phase 1",
    badge: "Foundation & Community Mobilization",
    title: "Community Needs Assessment & Mobilization",
    desc: "Identify underserved rural habitations in Mahasamund, conduct participatory rural appraisals, assess local livelihood requirements, and mobilize women into active Self-Help Groups.",
    highlights: [
      "Underserved village identification and rapport building",
      "Community-level participatory appraisal and baseline studies",
      "Mobilization of women into initial SHG clusters",
      "Establishment of local trust with village elders and panchayats"
    ]
  },
  {
    phase: "Phase 2",
    badge: "Program Consolidation",
    title: "Program Strengthening & Skill Development",
    desc: "Strengthen structured vocational training (candle making, traditional crafts), expand SHG capacity building, introduce digital banking literacy, and deepen healthcare awareness.",
    highlights: [
      "Structured candle making and craft enterprise workshops",
      "Digitization of bank accounts and financial inclusion drives",
      "Sanitation awareness, clean village oaths, and hygiene campaigns",
      "Parental counseling for girls' schooling retention"
    ]
  },
  {
    phase: "Phase 3",
    badge: "Institutional Partnerships",
    title: "Institutional Partnerships & District Expansion",
    desc: "Build collaborative ties with CSR partners, government development departments, and philanthropic grantmakers to expand impact footprint across additional rural blocks of Mahasamund.",
    highlights: [
      "Formal CSR program alignment and co-designed interventions",
      "Cooperation with local administrative and development bodies",
      "Establishment of sustainable community livelihood hubs",
      "Implementation of standardized program tracking"
    ]
  },
  {
    phase: "Phase 4",
    badge: "Scale & Long-Term Resilience",
    title: "Regional Replication & Sustainable Impact",
    desc: "Develop replicable community development models, reinforce third-party monitoring, and scale successful participatory initiatives across suitable districts of Chhattisgarh.",
    highlights: [
      "Replication of proven women-centric empowerment models",
      "Strengthened participatory monitoring and impact documentation",
      "Long-term community-owned self-sustaining rural enterprises",
      "Knowledge sharing with state and regional development networks"
    ]
  }
];

export const FUNDING_ALLOCATION = [
  {
    head: "Women's Livelihood & Skill Development",
    percentage: 30,
    color: "#174D3A", // Forest green
    desc: "Vocational workshops, candle making equipment, artisan material kits, quality training, and rural microenterprise support."
  },
  {
    head: "Education, Health & Child Welfare",
    percentage: 25,
    color: "#D5A94F", // Muted Gold
    desc: "Girls' education drives, adolescent nutrition, school retention support, hygiene awareness, and clean village campaigns."
  },
  {
    head: "Agriculture & Rural Sustainability",
    percentage: 20,
    color: "#236950", // Mid Forest Green
    desc: "Farmer training on organic practices, women-farmer recognition, water conservation, and soil health management."
  },
  {
    head: "Digital & Financial Inclusion",
    percentage: 15,
    color: "#B88D33", // Dark Gold
    desc: "Bank digitization, mobile literacy camps, cyber safety education, and linking beneficiaries to public welfare entitlements."
  },
  {
    head: "Program Management & Impact Monitoring",
    percentage: 10,
    color: "#63706A", // Charcoal Muted
    desc: "Grassroots field coordination, baseline/endline tracking, community reporting, compliance, and institutional auditing."
  }
];

export const CORE_VALUES = [
  {
    title: "Inclusion & Dignity",
    desc: "Respecting the rights, intrinsic dignity, and voice of every individual, particularly Dalit, tribal, and marginalized rural households.",
    iconName: "Heart"
  },
  {
    title: "Women's Empowerment",
    desc: "Placing women at the core of social transformation, economic independence, and household decision-making.",
    iconName: "ShieldCheck"
  },
  {
    title: "Community Participation",
    desc: "Believing that true social change occurs when solutions are shaped, owned, and sustained by the community itself.",
    iconName: "Users"
  },
  {
    title: "Sustainable Development",
    desc: "Balancing immediate economic needs with long-term ecological balance, natural resource conservation, and self-reliance.",
    iconName: "Leaf"
  },
  {
    title: "Education & Opportunity",
    desc: "Unlocking human potential through lifelong learning, girl-child schooling, and accessible vocational skill training.",
    iconName: "BookOpen"
  },
  {
    title: "Social Equality",
    desc: "Actively dismantling historical barriers of caste, gender, and economic disadvantage to foster a fairer society.",
    iconName: "Scale"
  },
  {
    title: "Community Resilience",
    desc: "Cultivating local capacities that endure beyond external aid, fostering self-governing village institutions.",
    iconName: "Sun"
  }
];

export const COMMUNITIES_SERVED = [
  {
    title: "Rural Women & Self-Help Groups",
    desc: "Women striving for financial independence, equal dignity, and a stronger voice in family and village affairs.",
    image: "/images/rural_shg_women.jpg"
  },
  {
    title: "Dalit & Tribal Communities",
    desc: "Historically marginalized rural habitations requiring targeted social inclusion, rights awareness, and livelihood access.",
    image: "/images/community_engagement.jpg"
  },
  {
    title: "Children & Adolescent Girls",
    desc: "Young individuals whose educational continuity, health, and holistic development define the future of the region.",
    image: "/images/education_girls.jpg"
  },
  {
    title: "Small & Marginal Farmers",
    desc: "Cultivators—including vital women farmers—seeking organic techniques, water efficiency, and sustainable farm income.",
    image: "/images/women_agriculture.jpg"
  },
  {
    title: "Economically Disadvantaged Households",
    desc: "Families facing seasonal vulnerability, underemployment, and barriers to formal banking and social welfare services.",
    image: "/images/village_welfare.jpg"
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: "state-award-avanti-bai-lodhi",
    image: "/images/awards/award_12_state_award_avanti_bai_lodhi.jpg",
    titleHi: "छत्तीसगढ़ राज्य अलंकरण - वीरांगना रानी अवंती बाई लोधी स्मृति पुरस्कार",
    titleEn: "Chhattisgarh State Decoration Award — Veerangana Rani Avanti Bai Lodhi Smriti Puraskar",
    presentedBy: "माननीय उपराष्ट्रपति / राज्यपाल श्री सी.पी. राधाकृष्णन जी द्वारा प्रदत्त",
    category: "State Award",
    year: "5 नवंबर",
    badge: "सर्वोच्च राज्य अलंकरण (State Award)",
    featured: true
  },
  {
    id: "renuka-singh-union-minister",
    image: "/images/awards/award_03_renuka_singh_union_minister.jpg",
    titleHi: "केन्द्रीय मंत्री श्रीमती रेणुका सिंह द्वारा सम्मान",
    titleEn: "National Felicitation by Union Minister Smt. Renuka Singh",
    presentedBy: "मान. श्रीमती रेणुका सिंह (केन्द्रीय राज्य मंत्री, भारत सरकार)",
    category: "Union Minister",
    badge: "केन्द्रीय मंत्री सम्मान (Union Ministry)",
    featured: true
  },
  {
    id: "tankram-verma-minister",
    image: "/images/awards/award_02_tankram_verma_minister.jpg",
    titleHi: "खेलकूद, युवा कल्याण, राजस्व एवं आपदा प्रबंधन मंत्री मान. टंकराम वर्मा द्वारा सम्मान पत्र",
    titleEn: "State Honor Certificate by Cabinet Minister Shri Tank Ram Verma",
    presentedBy: "मान. टंकराम वर्मा (मंत्री, छत्तीसगढ़ शासन)",
    category: "State Award",
    badge: "शासन सम्मान पत्र (Cabinet Minister)",
    featured: true
  },
  {
    id: "republic-day-food-minister",
    image: "/images/awards/award_08_republic_day_food_minister.jpg",
    titleHi: "गणतंत्र दिवस पर मान. दयालदास बघेल (खाद्य एवं जिला प्रभारी मंत्री) द्वारा सम्मान",
    titleEn: "Republic Day Honor by Food & District Incharge Minister Shri Dayaldas Baghel",
    presentedBy: "मान. दयालदास बघेल (खाद्य मंत्री, छ.ग. शासन एवं जिला प्रभारी)",
    category: "State Award",
    badge: "गणतंत्र दिवस सम्मान (Republic Day)",
    featured: true
  },
  {
    id: "republic-day-mp-award",
    image: "/images/awards/award_11_republic_day_mp_award.jpg",
    titleHi: "गणतंत्र दिवस समारोह में मान. सांसद महोदया द्वारा महिला सशक्तिकरण के उत्कृष्ट कार्य पर सम्मान पत्र",
    titleEn: "Exemplary Women Empowerment Honor Certificate by Hon. Member of Parliament (MP)",
    presentedBy: "माननीय सांसद महोदया (Member of Parliament)",
    category: "State Award",
    badge: "उत्कृष्ट महिला सशक्तिकरण (MP Honor)",
    featured: true
  },
  {
    id: "nabard-raipur",
    image: "/images/awards/award_04_nabard_raipur.jpg",
    titleHi: "राष्ट्रीय कृषि एवं ग्रामीण विकास बैंक (नाबार्ड) रायपुर (छ.ग.) द्वारा सम्मान",
    titleEn: "Recognition for Rural & Agrarian Development by NABARD Raipur",
    presentedBy: "नाबार्ड (National Bank for Agriculture and Rural Development)",
    category: "NABARD & Banking",
    badge: "नाबार्ड सम्मान (NABARD Raipur)",
    featured: true
  },
  {
    id: "womens-day-nabard",
    image: "/images/awards/award_15_womens_day_nabard.jpg",
    titleHi: "8 मार्च अंतर्राष्ट्रीय महिला दिवस पर नाबार्ड द्वारा सम्मान",
    titleEn: "NABARD International Women's Day Recognition for Grassroots Leadership",
    presentedBy: "नाबार्ड जिला कार्यालय महासमुंद",
    category: "NABARD & Banking",
    badge: "नाबार्ड महिला दिवस सम्मान",
    featured: true
  },
  {
    id: "naika-samman-2024",
    image: "/images/awards/award_01_naika_samman_2024.jpg",
    titleHi: "दैनिक समाचार पत्र नई दुनिया द्वारा नायिका सम्मान - 2024",
    titleEn: "Naika Samman 2024 for Outstanding Women Leadership by NaiDunia National Daily",
    presentedBy: "नई दुनिया समाचार पत्र समूह",
    category: "Media & Civic",
    year: "2024",
    badge: "नायिका सम्मान 2024 (NaiDunia)",
    featured: true
  },
  {
    id: "haribhoomi-women-canteen-1",
    image: "/images/awards/award_17_haribhoomi_women_canteen_1.jpg",
    titleHi: "हरिभूमि न्यूज़ एजेंसी द्वारा महिला कैंटीन संचालित कर स्वरोजगार से जोड़ने हेतु सम्मान",
    titleEn: "Haribhoomi News & INH 24x7 Award for Women's Enterprise & Self-Employment",
    presentedBy: "हरिभूमि मीडिया समूह एवं INH 24x7",
    category: "Media & Civic",
    badge: "महिला स्वरोजगार सम्मान (Haribhoomi)",
    featured: true
  },
  {
    id: "haribhoomi-jila-samvad-2",
    image: "/images/awards/award_18_haribhoomi_jila_samvad_2.jpg",
    titleHi: "हरिभूमि एवं INH 24x7 जिला संवाद सम्मान",
    titleEn: "Haribhoomi & INH 24x7 District Samvad Grassroots Felicitation",
    presentedBy: "हरिभूमि जिला संवाद मंच, महासमुंद",
    category: "Media & Civic",
    badge: "जिला संवाद सम्मान"
  },
  {
    id: "vv-giri-national-labour-institute",
    image: "/images/awards/award_09_vv_giri_national_labour_institute.jpg",
    titleHi: "वी.वी. गिरि राष्ट्रीय श्रम संस्थान नोएडा द्वारा सम्मान एवं प्रमाणन",
    titleEn: "National Labor & Development Certification by V.V. Giri National Labour Institute, Noida",
    presentedBy: "वी.वी. गिरि राष्ट्रीय श्रम संस्थान (श्रम एवं रोजगार मंत्रालय, भारत सरकार)",
    category: "Institutional",
    badge: "राष्ट्रीय संस्थान प्रमाणन (VVGNLI Noida)"
  },
  {
    id: "sahbhagi-shikshan-kendra-lucknow",
    image: "/images/awards/award_13_sahbhagi_shikshan_kendra_lucknow.jpg",
    titleHi: "सहभागी शिक्षण केन्द्र लखनऊ द्वारा सम्मान (प्रोग्राम मैनेजमेंट एवं प्रपोजल राइटिंग)",
    titleEn: "Institutional Training & Recognition by Sahbhagi Shikshan Kendra, Lucknow",
    presentedBy: "सहभागी शिक्षण केन्द्र (SSK Lucknow / Welthungerhilfe)",
    category: "Institutional",
    badge: "प्रोग्राम मैनेजमेंट सम्मान"
  },
  {
    id: "mahila-sahkari-bank",
    image: "/images/awards/award_10_mahila_sahkari_bank.jpg",
    titleHi: "महिला नागरिक सहकारी बैंक मर्यादित महासमुंद द्वारा सम्मान",
    titleEn: "Felicitation by Mahila Nagrik Sahkari Bank Maryadit, Mahasamund",
    presentedBy: "महिला नागरिक सहकारी बैंक मर्यादित",
    category: "NABARD & Banking",
    badge: "सहकारी बैंक सम्मान"
  },
  {
    id: "mla-mahasamund",
    image: "/images/awards/award_05_mla_mahasamund.jpg",
    titleHi: "माननीय विधायक महासमुंद द्वारा सम्मान",
    titleEn: "Legislative Recognition by Hon. Member of Legislative Assembly (MLA), Mahasamund",
    presentedBy: "मान. विधायक, विधानसभा क्षेत्र महासमुंद",
    category: "Media & Civic",
    badge: "विधायक सम्मान"
  },
  {
    id: "womens-day-janpad-gariaband",
    image: "/images/awards/award_06_womens_day_janpad_gariaband.jpg",
    titleHi: "8 मार्च अंतर्राष्ट्रीय महिला दिवस पर जनपद अध्यक्ष श्रीमती पुष्पा साहू (फिंगेश्वर, गरियाबंद) द्वारा सम्मान",
    titleEn: "International Women’s Day Honor by Janpad Panchayat President Smt. Pushpa Sahu, Gariaband",
    presentedBy: "जनपद पंचायत फिंगेश्वर, जिला गरियाबंद",
    category: "State Award",
    badge: "महिला दिवस सम्मान"
  },
  {
    id: "womens-day-nagar-palika",
    image: "/images/awards/award_07_womens_day_nagar_palika.jpg",
    titleHi: "8 मार्च अंतर्राष्ट्रीय महिला दिवस के अवसर पर नगर पालिका अध्यक्ष महासमुंद द्वारा सम्मान",
    titleEn: "International Women’s Day Civic Honor by Municipal Council President, Mahasamund",
    presentedBy: "नगर पालिका परिषद महासमुंद",
    category: "Media & Civic",
    badge: "नगर पालिका सम्मान"
  },
  {
    id: "chief-municipal-officer",
    image: "/images/awards/award_14_chief_municipal_officer.jpg",
    titleHi: "मुख्य नगर पालिका अधिकारी द्वारा सम्मान पत्र",
    titleEn: "Civic Appreciation Certificate by Chief Municipal Officer (CMO), Mahasamund",
    presentedBy: "कार्यालय मुख्य नगर पालिका अधिकारी महासमुंद",
    category: "Media & Civic",
    badge: "मुख्य नगर पालिका अधिकारी सम्मान"
  },
  {
    id: "nagar-palika-president",
    image: "/images/awards/award_16_nagar_palika_president.jpg",
    titleHi: "नगर पालिका अध्यक्ष द्वारा सम्मान पत्र",
    titleEn: "Appreciation Certificate by President, Municipal Council Mahasamund",
    presentedBy: "नगर पालिका अध्यक्ष, महासमुंद",
    category: "Media & Civic",
    badge: "नगर पालिका परिषद सम्मान पत्र"
  }
];
