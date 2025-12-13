
import { Service, TeamMember, Publication, Client, TherapeuticArea } from './types';

export const COMPANY_INFO = {
  name: "NDNEX",
  tagline: "Evidence and Next Solution",
  description: "Specialized firm providing value assessment, market access, and market analysis services for healthcare technologies.",
  address: "3F, 462, Bongeunsa-ro, Gangnam-gu, Seoul, 06154",
  phone: "02-568-1555",
  email: "info@ndnex.com",
  contactPersonEmail: "hyemin.ku@ndnex.com",
  mission: "Enhancing Patient Access to Treatment. We aim to expand healthcare coverage and ultimately increase patient access to treatment.",
  vision: "Customized Integrated Solutions. We provide tailored solutions that respond to changes in the healthcare paradigm with reliable evidence generation."
};

export const SERVICES: Service[] = [
  {
    id: 'market-access',
    title: 'Market Access Consulting',
    description: "Expert consulting for effective and efficient market entry of healthcare technologies.",
    longDescription: "Navigating the complex reimbursement landscape in Korea requires a strategic approach grounded in deep regulatory knowledge. Our Market Access Consulting service provides end-to-end support, from early-stage feasibility checks to final pricing negotiations. We develop compelling value stories that align with payer priorities, ensuring your innovation is recognized and rewarded. Whether for new drug listings or expanding coverage indications, we provide the strategic insight needed to overcome barriers to entry.",
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
    longDescription: "In an era of value-based healthcare, robust economic evidence is essential. NDNEX specializes in rigorous Health Economics and Outcomes Research (HEOR) that meets the high standards of HIRA and global HTA bodies. We employ advanced methodologies, including Matching-adjusted Indirect Comparisons (MAIC) and Network Meta-Analyses (NMA), to synthesize evidence even when head-to-head trials are unavailable. Our economic models (CEA, BIM) are built to be transparent, adaptable, and persuasive, demonstrating the clear cost-effectiveness of your technology.",
    iconName: 'BarChart',
    features: [
      "Matching-adjusted Indirect Comparison (MAIC) & Network Meta-Analysis (NMA)",
      "Cost-Effectiveness Analysis (CEA) & Decision Modeling",
      "Budget Impact Analysis (BIA)",
      "Systematic Literature Review (SLR) & Meta-Analysis",
      "Economic Burden & Uncertainty Analysis",
      "PRO (Patient reported outcome) & Utility Assessment"
    ]
  },
  {
    id: 'rwe',
    title: 'Real World Evidence (RWE)',
    description: "Generating real-world data evidence for regulatory and reimbursement decision-making.",
    longDescription: "Clinical trials often do not capture the full picture of a treatment's performance in routine practice. Our Real World Evidence (RWE) services bridge this gap by leveraging retrospective data to generate evidence that supports regulatory approvals, reimbursement decisions, and post-market safety monitoring. We design and execute high-quality chart review studies and database analyses that reflect the actual patient journey and treatment patterns in Korea, providing the 'real-world' proof payers demand.",
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
    longDescription: "Speed and representativeness are critical in a rapidly changing market. Our proprietary Big Data Analytics platform utilizes vast datasets from the National Health Insurance Service (NHIS) and Health Insurance Review & Assessment Service (HIRA). We provide rapid, representative insights into disease prevalence, patient demographics, and healthcare resource utilization. This data-driven approach allows clients to anticipate market shifts and tailor their strategies with precision based on the entire Korean population.",
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

export const DISEASE_AREAS: string[] = []; // Deprecated, keeping for compatibility if needed, but we use THERAPEUTIC_AREAS now.

export const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    category: "Oncology: Solid Tumors",
    diseases: [
      "Biliary Tract Cancer",
      "Breast Cancer",
      "Cervical Cancer",
      "Colorectal Cancer",
      "Esophageal Squamous-Cell Carcinoma",
      "Gastric Cancer",
      "Glioma",
      "Head and Neck Cancer",
      "Hepatocellular Carcinoma",
      "Melanoma",
      "Metastatic Castration-Resistant Prostate Cancer",
      "Non-Small Cell Lung Cancer",
      "Ovarian Cancer",
      "Prostate Cancer",
      "Renal Cell Carcinoma",
      "Small-cell Lung Cancer",
      "Tenosynovial Giant Cell Tumor",
      "Urothelial Carcinoma"
    ]
  },
  {
    category: "Oncology: Hematologic Malignancies",
    diseases: [
      "Acute Lymphoblastic Leukemia",
      "Acute Myeloid Leukemia",
      "AL Amyloidosis",
      "Chronic Myeloid Leukemia",
      "Cutaneous T-Cell Lymphoma",
      "Diffuse Large B-Cell Lymphoma",
      "Hodgkin Lymphoma",
      "Multiple Myeloma",
      "Mycosis Fungoides and Sézary Syndrome",
      "Myeloproliferative Neoplasm",
      "Polycythemia Vera"
    ]
  },
  {
    category: "Endocrinology & Metabolism",
    diseases: [
      "Diabetes Mellitus",
      "Hyperlipidemia",
      "Short Bowel Syndrome",
      "X-linked Hypophosphatemia (XLH)"
    ]
  },
  {
    category: "Cardiovascular",
    diseases: [
      "Cardiomyopathy",
      "Heart Failure",
      "Transthyretin Amyloid Cardiomyopathy"
    ]
  },
  {
    category: "Neurology",
    diseases: [
      "Epilepsy",
      "Multiple Sclerosis",
      "Neuromyelitis Optica Spectrum Disorder",
      "Parkinson’s Disease",
      "Spinal Muscular Atrophy",
      "Tardive Dyskinesia"
    ]
  },
  {
    category: "Dermatology & Allergy",
    diseases: [
      "Alopecia Areata",
      "Atopic Dermatitis",
      "Psoriasis",
      "Prurigo Nodularis"
    ]
  },
  {
    category: "Gastroenterology & Hepatology",
    diseases: [
      "Constipation",
      "Gastritis",
      "Non-Erosive Reflux Disease",
      "Primary Biliary Cholangitis"
    ]
  },
  {
    category: "Hematology & Infectious",
    diseases: [
      "Aplastic Anemia",
      "Covid-19",
      "Graft-versus-host Disease (GVHD)",
      "MRSA"
    ]
  },
  {
    category: "Musculoskeletal & Others",
    diseases: [
      "Osteoarthritis",
      "Osteoporosis",
      "Rheumatoid Arthritis",
      "Benign Prostatic Hyperplasia (BPH)",
      "CAPS/Periodic Fever Syndrome",
      "Dry Eye",
      "Eye Conjunctivitis",
      "Glaucoma",
      "Hereditary Angioedema"
    ]
  }
];

// Helper to get logo URL.
const getLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

export const CLIENTS: Client[] = [
  { name: "Ahn-Gook", logo: "/logos/ahn-gook.jpg" },
  { name: "Amgen", logo: "/logos/amgen.jpg" },
  { name: "Astellas", logo: "/logos/astellas.jpg" },
  { name: "AstraZeneca", logo: "/logos/astrazeneca.jpg" },
  { name: "BeOne", logo: "/logos/beone.jpg" },
  { name: "Binex", logo: "/logos/bines.jpg" },
  { name: "Biogen", logo: "/logos/biogen.jpg" },
  { name: "Boehringer Ingelheim", logo: "/logos/boehringer-ingelheim.jpg" },
  { name: "Bristol Myers Squibb", logo: "/logos/bms.jpg" },
  { name: "Chong Kun Dang", logo: "/logos/chong-keundang.jpg" },
  { name: "CSL Behring", logo: "/logos/csl-behring.jpg" },
  { name: "Daewoo", logo: "/logos/daewoo.jpg" },
  { name: "Daewoong", logo: "/logos/daewoong.jpg" },
  { name: "Daewon", logo: "/logos/daewon.jpg" },
  { name: "Daiichi-Sankyo", logo: "/logos/daiichi-sankyo.jpg" },
  { name: "Dongkook", logo: "/logos/dongkook.jpg" },
  { name: "GSK", logo: "/logos/gsk.jpg" },
  { name: "Guerbet", logo: "/logos/guerbet.jpg" },
  { name: "Handok", logo: "/logos/handok.jpg" },
  { name: "Hanlim", logo: "/logos/hanlim.jpg" },
  { name: "Huons", logo: "/logos/huons.jpg" },
  { name: "Hyundai", logo: "/logos/hyundai.jpg" },
  { name: "Ipsen", logo: "/logos/ipsen.jpg" },
  { name: "Janssen", logo: "/logos/janssen.jpg" },
  { name: "Jeil", logo: "/logos/jeil.jpg" },
  { name: "JW", logo: "/logos/jw.jpg" },
  { name: "Kukje", logo: "/logos/kukje.jpg" },
  { name: "Kyowa Kirin", logo: "/logos/kyowa-kirin.jpg" },
  { name: "Lilly", logo: "/logos/lilly.jpg" },
  { name: "LitePharmTech", logo: "/logos/litepharmtech.jpg" },
  { name: "Merck", logo: "/logos/merck.jpg" },
  { name: "MSD", logo: "/logos/msd.jpg" },
  { name: "Myungin", logo: "/logos/myungin.jpg" },
  { name: "Myungmoon", logo: "/logos/myungmoon.jpg" },
  { name: "Novartis", logo: "/logos/novartis.jpg" },
  { name: "Novo Nordisk", logo: "/logos/novo-nordisk.jpg" },
  { name: "Ono", logo: "/logos/ono.jpg" },
  { name: "Optus", logo: "/logos/optus.jpg" },
  { name: "Otsuka", logo: "/logos/otsuka.jpg" },
  { name: "Pfizer", logo: "/logos/pfizer.jpg" },
  { name: "PharmaEssentia", logo: "/logos/pharmaessentia.jpg" },
  { name: "PPD", logo: "/logos/ppd.jpg" },
  { name: "Roche", logo: "/logos/roche.jpg" },
  { name: "Samchundang", logo: "/logos/samchungdang.jpg" },
  { name: "Samil", logo: "/logos/samil.jpg" },
  { name: "Samjin", logo: "/logos/samjin.jpg" },
  { name: "Sanofi", logo: "/logos/sanofi.jpg" },
  { name: "Santen", logo: "/logos/santen.jpg" },
  { name: "Servier", logo: "/logos/servier.jpg" },
  { name: "Shin Poong", logo: "/logos/shinpoong.jpg" },
  { name: "Taejoon", logo: "/logos/taejoon.jpg" },
  { name: "Takeda", logo: "/logos/takeda.jpg" },
  { name: "UCB", logo: "/logos/ucb.jpg" },
  { name: "WhanIn", logo: "/logos/whanin.jpg" },
  { name: "Yooyoung", logo: "/logos/yooyoung.jpg" },
  { name: "Youngjin", logo: "/logos/youngjin.jpg" },
].sort((a, b) => a.name.localeCompare(b.name));
