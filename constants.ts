
import { Service, TeamMember, Publication, Client } from './types';

export const COMPANY_INFO = {
  name: "NDNEX",
  tagline: "Evidence and Next Solution",
  description: "Specialized firm providing value assessment, market access, and market analysis services for healthcare technologies.",
  address: "3F, 462, Bongeunsa-ro, Gangnam-gu, Seoul, 06154",
  phone: "02-568-1555",
  email: "info@ndnex.com",
  contactPersonEmail: "hyemin.ku@ndnex.com",
  mission: "Increasing Patient Access to Treatment. We aim to expand healthcare coverage and ultimately increase patient access to treatment.",
  vision: "Customized Integrated Solutions. We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation."
};

export const SERVICES: Service[] = [
  {
    id: 'market-access',
    title: 'Market Access Consulting',
    description: "Expert consulting for effective and efficient market entry of healthcare technologies.",
    iconName: 'Globe',
    features: [
      "Value Identification and Value Story Development",
      "Pricing Feasibility Check",
      "Value Dossier and associated support",
      "Pricing and Market Access Strategy",
      "HTA (Health Technology Assessment)",
      "Reimbursement Policy Insight",
      "Re-evaluation of Benefit Adequacy"
    ]
  },
  {
    id: 'heor',
    title: 'HEOR',
    description: "Scientific, systematic, and comprehensive value assessment of efficacy, safety, and cost-effectiveness.",
    iconName: 'BarChart',
    features: [
      "Cost-Effectiveness Analysis (CEA) & Decision Modeling",
      "Budget Impact Analysis (BIA)",
      "Systematic Literature Review (SLR) & Meta-Analysis",
      "Matching-adjusted Indirect Comparison (MAIC) & Network Meta-Analysis (NMA)",
      "Economic Burden & Uncertainty Analysis",
      "PRO (Patient reported outcome) & Utility Assessment"
    ]
  },
  {
    id: 'rwe',
    title: 'Real World Evidence (RWE)',
    description: "Generating real-world data evidence for regulatory and reimbursement decision-making.",
    iconName: 'Database',
    features: [
      "Epidemiology & Retrospective Database Studies",
      "Administrative and Healthcare Claims Analysis",
      "Medical Chart Review Studies",
      "Patient or Physician Surveys",
      "Publication support based on findings"
    ]
  },
  {
    id: 'big-data',
    title: 'Big Data Analytics',
    description: "Market analysis big data platform providing representative results using national health insurance claims data.",
    iconName: 'Server',
    features: [
      "Rapid analysis turnaround",
      "Representative national data (HIRA, NHIS)",
      "Platform-based diverse data provision",
      "Response to rapidly changing market environments"
    ]
  }
];

export const DIRECTOR: TeamMember = {
  name: "Hyemin Ku, Ph.D.",
  role: "CEO",
  education: [], 
  experience: [
    "Over 21 years of comprehensive healthcare industry expertise.",
    "Successfully led market access strategies for innovative new drugs, including World's First HTA products.",
    "Proven track record of achieving reimbursement in complex therapeutic areas through creative evidence generation.",
    "Author of 12 peer-reviewed articles."
  ]
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Health State Utility Associated with Parenteral Nutrition Requirement in Patients with Short Bowel Syndrome and Intestinal Failure in Korea: A Vignette-Based Approach",
    journal: "Nutrients",
    year: "2025",
    authors: "Hyewon Sim, Jin Soo Moon, Young Suk Park, Eunji Heo, Yoon Soo Chun, Songhwa Choi, Hyemin Ku, Jae Hee Chung",
    link: "https://www.mdpi.com/2072-6643/17/22/3551"
  },
  {
    title: "Cost-effectiveness analysis of dupilumab among patients with uncontrolled severe asthma using LIBERTY ASTHMA QUEST Korean data",
    journal: "Health Economics Review",
    year: "2024",
    authors: "Sung-Hee Oh, Chin Kook Rhee, Eun Jin Bae & Hyemin Ku (Corresponding)",
    link: "https://healtheconomicsreview.biomedcentral.com/articles/10.1186/s13561-024-00532-4"
  },
  {
    title: "Cost-consequence analysis of continuous denosumab therapy for osteoporosis treatment in South Korea",
    journal: "BMC Musculoskeletal Disorders",
    year: "2024",
    authors: "Seungju Cha, Hyemin Ku (Corresponding), et al.",
    link: "https://bmcmusculoskeletdisord.biomedcentral.com/articles/10.1186/s12891-024-07185-8"
  },
  {
    title: "Prevalence and socioeconomic burden of diabetes mellitus in South Korea adults: a population-based study using administrative data",
    journal: "BMC Public Health",
    year: "2021",
    authors: "Sung-Hee Oh, Hyemin Ku & Kang Seo Park",
    link: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10450-3"
  },
  {
    title: "Estimation of Health Utilities Based on the Response to Treatment in Atopic Dermatitis: a Population-based Study",
    journal: "Clinical Therapeutics",
    year: "2019",
    authors: "Hyun Jin Song, Hyemin Park, Sun-Young Park, Eui-Kyung Lee, So-Young Ha, Se-Young Park, Eun-Jin Bae, Hyemin Ku",
    link: "https://www.sciencedirect.com/science/article/pii/S0149291819300670"
  }
];

export const DISEASE_AREAS = [
  "Acute Lymphoblastic Leukemia",
  "Acute Myeloid Leukemia",
  "AL Amyloidosis",
  "Alopecia Areata",
  "Amyloid Light-chain Amyloidosis",
  "Aplastic Anemia",
  "Asthma",
  "Atopic Dermatitis",
  "Benign Prostatic Hyperplasia (BPH)",
  "Biliary Tract Cancer",
  "Breast Cancer",
  "CAPS/Periodic Fever Syndrome",
  "Cardiomyopathy",
  "Cervical Cancer",
  "Chronic Myeloid Leukemia",
  "Chronic Obstructive Pulmonary Disease (COPD)",
  "Colorectal Cancer",
  "Constipation",
  "Covid-19",
  "Cutaneous T-Cell Lymphoma",
  "Diabetes Mellitus",
  "Diffuse Large B-Cell Lymphoma",
  "Dry Eye",
  "Epilepsy",
  "Esophageal Squamous-Cell Carcinoma",
  "Eye Conjunctivitis",
  "Gastric Cancer",
  "Gastritis",
  "Glaucoma",
  "Glioma",
  "Graft-versus-host Disease (GVHD)",
  "Head and Neck Cancer",
  "Heart Failure",
  "Hepatocellular Carcinoma",
  "Hereditary Angioedema",
  "Hodgkin Lymphoma",
  "Hyperlipidemia",
  "Melanoma",
  "Metastatic Castration-Resistant Prostate Cancer",
  "MRSA",
  "Multiple Myeloma",
  "Multiple Sclerosis",
  "Mycosis Fungoides and Sézary Syndrome",
  "Myeloproliferative Neoplasm",
  "Neuromyelitis Optica Spectrum Disorder",
  "Non-Erosive Reflux Disease",
  "Non-Small Cell Lung Cancer",
  "Osteoarthritis",
  "Osteoporosis",
  "Ovarian Cancer",
  "Parkinson’s Disease",
  "Philadelphia Chromosome-positive Leukemia",
  "Polycythemia Vera",
  "Primary Biliary Cholangitis",
  "Prostate Cancer",
  "Prurigo Nodularis",
  "Psoriasis",
  "Renal Cell Carcinoma",
  "Rheumatoid Arthritis",
  "Short Bowel Syndrome",
  "Small-cell Lung Cancer",
  "Spinal Muscular Atrophy",
  "Tardive Dyskinesia",
  "Tenosynovial Giant Cell Tumor",
  "Transthyretin Amyloid Cardiomyopathy",
  "Urothelial Carcinoma",
  "X-linked Hypophosphatemia (XLH)"
];

export const CLIENTS = [
  "Ahn-Gook",
  "Amgen",
  "Astellas",
  "AstraZeneca",
  "BeOne",
  "Binex",
  "Bio Frontier",
  "Biogen",
  "Boehringer Ingelheim",
  "Bristol Myers Squibb",
  "Bukwang",
  "Chong Kun Dang",
  "CSL Behring",
  "Daewoo",
  "Daewoong",
  "Daewon",
  "Daiichi-Sankyo",
  "Dongkook",
  "GSK",
  "Guerbet",
  "Hana",
  "Handok",
  "Hanlim",
  "Huons",
  "Hyundai",
  "Ipsen",
  "Janssen",
  "Jeil",
  "JW",
  "Kukje",
  "Kyowa Kirin",
  "Lilly",
  "LitePharmTech",
  "Merck",
  "Mitsubishi Tanabe",
  "MSD",
  "Myungin",
  "Myungmoon",
  "Novartis",
  "Novo Nordisk",
  "Ono",
  "Optus",
  "Otsuka",
  "Pfizer",
  "PharmaEssentia",
  "PPD",
  "Roche",
  "Samchundang",
  "Samil",
  "Samjin",
  "Santen",
  "Sanofi",
  "Servier",
  "Shin Poong",
  "Taejoon",
  "Takeda",
  "UCB",
  "WhanIn",
  "Yooyoung",
  "Youngjin"
].sort();
