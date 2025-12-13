
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
  { 
    name: "Ahn-Gook", logo: "/logos/Ahn-Gook.JPG",link: "https://www.ahn-gook.com/" },
  { name: "Amgen", logo: "/logos/amgen.JPG", link: "https://www.amgen.co.kr/" },
  { name: "Astellas", logo: "/logos/astellas.JPG", link: "https://www.astellas.com/kr/" },
  { name: "AstraZeneca", logo: "/logos/astrazeneca.JPG", link: "https://www.astrazeneca.co.kr/" },


  { 
    name: "BeOne", 
    logo: "/logos/beone.JPG", 
    link: "https://beonemedicines.kr/" 
  }, 
  { 
    name: "Binex", 
    logo: "/logos/bines.JPG", 
    link: "http://www.bi-nex.com/" 
  },
  { 
    name: "Biogen", 
    logo: "/logos/biogen.JPG", 
    link: "https://www.biogen.com/home.html" 
  },
  { name: "Boehringer Ingelheim", logo: "/logos/Boehringer ingelheim.JPG" , link: "https://www.bikr.co.kr/" },
  { name: "Bristol Myers Squibb", logo: "/logos/BMS.JPG", link: "https://www.bms.com/kr" },
  { name: "Chong Kun Dang", logo: "/logos/Chong keundang.JPG" , link: "http://www.ckdpharm.com/" },
  { 
    name: "CSL Behring", 
    logo: "/logos/CSL behring.JPG", 
    link: "https://www.cslbehring.co.kr/" 
  },
  { 
    name: "Daewoo", 
    logo: "/logos/Daewoo.JPG", 
    link: "http://www.dwpharm.co.kr/" 
  },
  { name: "Daewoong", logo: "/logos/daewoong.JPG", link: "https://www.daewoong.co.kr/" },
  { name: "Daewon", logo: "/logos/daewon.JPG", link: "https://www.daewonpharm.com/" },
  { name: "Daiichi-Sankyo", logo: "/logos/Daiichi sankyo.JPG", link: "http://www.daiichisankyo.co.kr/" },
  { name: "Dongkook", logo: "/logos/dongkook.JPG", link: "https://www.dkpharm.co.kr/" },
  { 
    name: "GSK", 
    logo: "/logos/GSK.JPG", 
    link: "https://kr.gsk.com/" 
  },
  { name: "Guerbet", logo: "/logos/Guerbet.JPG", link: "https://www.guerbet.com/ko-kr/" },
  { 
    name: "Hana", 
    logo: "/logos/hana.JPG", 
    link: "http://www.hanaph.co.kr/index.do" 
  },
  { name: "Handok", logo: "/logos/handok.JPG", link: "https://www.handok.co.kr/" },
  { name: "Hanlim", logo: "/logos/Hanlim.JPG", link: "http://www.hanlim.com/" },
  { name: "Huons", logo: "/logos/huons.JPG", link: "http://www.huons.com/" },
  { name: "Hyundai", logo:"/logos/Hyundai.JPG", link: "http://www.hyundaipharm.co.kr/" },
  { name: "Ipsen", logo: "/logos/ipsen.JPG", link: "https://www.ipsen.com/" },
  { name: "Janssen", logo: "/logos/Janssen.JPG", link: "https://www.janssen.com/korea/" },
  { name: "Jeil", logo: "/logos/jeil.JPG", link: "https://www.jeilpharm.co.kr/" },
  { name: "JW", logo: "/logos/JW.JPG", link: "https://www.jw-pharma.co.kr/" },
  { name: "Kukje", logo: "/logos/kukje.JPG", link: "http://www.kukjepharm.co.kr/" },
  { 
    name: "Kyowa Kirin", 
    logo: "/logos/kyowa kirin.JPG", 
    link: "https://www.kyowakirin.com/kr/" 
  },
  { 
    name: "Lilly", 
    logo: "/logos/Lilly.JPG", 
    link: "https://www.lilly.co.kr/" 
  },
  { 
    name: "LitePharmTech", 
    logo: "/logos/LitePharmtech.JPG", 
    link: "http://www.litepharm.com/" 
  },
  { name: "Merck", logo: "/logos/merck.JPG", link: "https://www.merckgroup.com/kr-ko" }, 
  { 
    name: "Mitsubishi Tanabe", 
    logo: "/logos/mitsubishi tanabe pharma.JPG", 
    link: "http://www.mt-pharma-korea.com/" 
  },
  { name: "MSD", "/logos/MSD.JPG", link: "https://www.msd-korea.com/" },
  { 
    name: "Myungin", 
    logo: "/logos/Myungin.JPG", 
    link: "http://myunginph.co.kr/main/ko/index.html" 
  },
  { name: "Myungmoon", logo: "/logos/Myungmoon.JPG", link: "http://www.mmpharm.co.kr/" },
  { name: "Novartis", logo: "/logos/novartis.JPG", link: "https://www.novartis.co.kr/" },
  { name: "Novo Nordisk", logo:"/logos/novo nordisk.JPG", link: "https://www.novonordisk.co.kr/" },
  { name: "Ono", logo: "/logos/ono.JPG", link: "https://kr.ono-pharma.com/" },
  { 
    name: "Optus", 
    logo: "/logos/optus.JPG", 
    link: "http://optuspharm.com/" 
  },
  { 
    name: "Otsuka", 
    logo: "/logos/otsuka.JPG", 
    link: "http://www.otsuka.co.kr/" 
  },
  { name: "Pfizer", logo: "/logos/pfizer.JPG", link: "https://www.pfizer.co.kr/" },
  { name: "PharmaEssentia", logo: "/logos/pharmaessentia.JPG", link: "https://kr.pharmaessentia.com/modules/catalogue_history2/cg_index.html" },
  { name: "PPD", logo: "/logos/PPD.JPG", link: "https://www.ppd.com/" },
  { name: "Roche", logo: "/logos/roche.JPG", link: "https://www.roche.co.kr/" },
  { name: "Samchundang", logo: "/logos/samchungdang.JPG", link: "http://www.scd.co.kr/" },
  { 
    name: "Samil", 
    logo: "/logos/samil.JPG", 
    link: "http://www.samil-pharm.com/" 
  },
  { name: "Samjin", logo: "/logos/samjin.JPG", link: "https://www.samjinpharm.co.kr/" },
  { name: "Santen", logo: "/logos/santen.JPG", link: "http://www.santen.co.kr/" },
  { name: "Sanofi", logo: "/logos/sanofi.JPG", link: "https://www.sanofi.co.kr/" },
  { name: "Servier", logo: "/logos/servier.JPG", link: "https://www.servier.co.kr/" },
  { name: "Shin Poong", logo: "/logos/Shinpoong.JPG", link: "https://shinpoong.co.kr/" },
  { name: "Taejoon", logo: "/logos/taejoon.JPG", link: "https://www.taejoon.co.kr/" },
  { name: "Takeda", logo: "/logos/takeda.JPG", link: "https://www.takeda.com/ko-kr" },
  { name: "UCB", logo: "/logos/ucb.JPG", link: "https://www.ucbkorea.co.kr/" },
  { 
    name: "WhanIn", 
    logo: "/logos/whanin.JPG", 
    link: "https://www.whanin.com/" 
  },
  { 
    name: "Yooyoung", 
    logo: "/logos/yooyoung.JPG", 
    link: "https://www.yypharm.co.kr/" 
  },
  { 
    name: "Youngjin", 
    logo: "/logos/youngjin.JPG", 
    link: "https://www.yungjin.co.kr/" 
  }
].sort((a, b) => a.name.localeCompare(b.name));
