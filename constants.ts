
import { Service, TeamMember, Publication, Client, TherapeuticArea } from './types';

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

export const DISEASE_AREAS: string[] = []; // Deprecated, keeping for compatibility if needed, but we use THERAPEUTIC_AREAS now.

export const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    category: "Oncology",
    diseases: [
      "Acute Lymphoblastic Leukemia",
      "Acute Myeloid Leukemia",
      "Biliary Tract Cancer",
      "Breast Cancer",
      "Cervical Cancer",
      "Chronic Myeloid Leukemia",
      "Colorectal Cancer",
      "Cutaneous T-Cell Lymphoma",
      "Diffuse Large B-Cell Lymphoma",
      "Esophageal Squamous-Cell Carcinoma",
      "Gastric Cancer",
      "Glioma",
      "Head and Neck Cancer",
      "Hepatocellular Carcinoma",
      "Hodgkin Lymphoma",
      "Melanoma",
      "Metastatic Castration-Resistant Prostate Cancer",
      "Multiple Myeloma",
      "Mycosis Fungoides and Sézary Syndrome",
      "Myeloproliferative Neoplasm",
      "Non-Small Cell Lung Cancer",
      "Ovarian Cancer",
      "Philadelphia Chromosome-positive Leukemia",
      "Polycythemia Vera",
      "Prostate Cancer",
      "Renal Cell Carcinoma",
      "Small-cell Lung Cancer",
      "Tenosynovial Giant Cell Tumor",
      "Urothelial Carcinoma"
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
      "AL Amyloidosis",
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
    name: "Ahn-Gook", 
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Cg transform='translate(10,10) scale(0.8)'%3E%3Cpath d='M20,70 Q10,40 40,20 Q70,10 90,30 Q100,50 80,80 Q50,90 20,70 Z' fill='%23E60012' /%3E%3Cpath d='M20,70 L45,45 M25,75 L50,50 M30,80 L55,55 M35,85 L60,60 M40,90 L65,65 M45,95 L70,70 M50,100 L75,75 M55,105 L80,80 M60,110 L85,85' stroke='white' stroke-width='3' /%3E%3C/g%3E%3Ctext x='90' y='60' font-family='sans-serif' font-weight='bold' font-size='40' fill='%23333'%3E안국약품(주)%3C/text%3E%3C/svg%3E",
    link: "https://www.ahn-gook.com/" 
  },
  { name: "Amgen", logo: "https://logos-world.net/wp-content/uploads/2023/06/Amgen-Logo.jpg", link: "https://www.amgen.co.kr/" },
  { name: "Astellas", logo: getLogo("astellas.com"), link: "https://www.astellas.com/kr/" },
  { name: "AstraZeneca", logo: getLogo("astrazeneca.com"), link: "https://www.astrazeneca.co.kr/" },
  { 
    name: "BeOne", 
    logo: "https://cdn.cookielaw.org/logos/51fa3978-59cb-4e5a-8700-81a96d2641f1/01959608-9da4-7326-803e-18390b0b228b/e8c3961c-efcf-4274-bdc6-c0749adc1e27/Beone.png", 
    link: "https://beonemedicines.kr/" 
  }, 
  { 
    name: "Binex", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKUe7AGF4_5o92a1W5wNK98oZze9Q9xyVFQ&s", 
    link: "http://www.bi-nex.com/" 
  },
  { 
    name: "Biogen", 
    logo: "https://kr.biogen.com/content/dam/corporate/international/global/en-US/global/OG-images/og_biogen_logo.jpg", 
    link: "https://www.biogen.com/home.html" 
  },
  { name: "Boehringer Ingelheim", logo: getLogo("boehringer-ingelheim.com"), link: "https://www.bikr.co.kr/" },
  { name: "Bristol Myers Squibb", logo: "https://www.bms.com/media/media-library/corporate-resources/bms-logo/_jcr_content/par/subject_copy_copy_co_969178463.respimg.jpg/1731506928883/bms-logo-rgb-pos-with-border.jpg", link: "https://www.bms.com/kr" },
  { name: "Chong Kun Dang", logo: getLogo("ckdpharm.com"), link: "http://www.ckdpharm.com/" },
  { 
    name: "CSL Behring", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY3huhMI5wFlSO_IDyh3c5atkxl7cb9CVng&s", 
    link: "https://www.cslbehring.co.kr/" 
  },
  { 
    name: "Daewoo", 
    logo: "https://i.ytimg.com/vi/an1DMelQsAk/maxresdefault.jpg", 
    link: "http://www.dwpharm.co.kr/" 
  },
  { name: "Daewoong", logo: getLogo("daewoong.co.kr"), link: "https://www.daewoong.co.kr/" },
  { name: "Daewon", logo: getLogo("daewonpharm.com"), link: "https://www.daewonpharm.com/" },
  { name: "Daiichi-Sankyo", logo: getLogo("daiichisankyo.com"), link: "http://www.daiichisankyo.co.kr/" },
  { name: "Dongkook", logo: getLogo("dkpharm.co.kr"), link: "https://www.dkpharm.co.kr/" },
  { 
    name: "GSK", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSh8MPJ3g3BQc9iv2V6AZ5kckB5LOA0L5D8Q&s", 
    link: "https://kr.gsk.com/" 
  },
  { name: "Guerbet", logo: getLogo("guerbet.com"), link: "https://www.guerbet.com/ko-kr/" },
  { 
    name: "Hana", 
    logo: "https://cdn.pharmnews.com/news/photo/200807/img_38694_6537_36618.jpg", 
    link: "http://www.hanaph.co.kr/index.do" 
  },
  { name: "Handok", logo: getLogo("handok.co.kr"), link: "https://www.handok.co.kr/" },
  { name: "Hanlim", logo: getLogo("hanlim.com"), link: "http://www.hanlim.com/" },
  { name: "Huons", logo: getLogo("huons.com"), link: "http://www.huons.com/" },
  { name: "Hyundai", logo: getLogo("hyundaipharm.co.kr"), link: "http://www.hyundaipharm.co.kr/" },
  { name: "Ipsen", logo: getLogo("ipsen.com"), link: "https://www.ipsen.com/" },
  { name: "Janssen", logo: getLogo("janssen.com"), link: "https://www.janssen.com/korea/" },
  { name: "Jeil", logo: getLogo("jeilpharm.co.kr"), link: "https://www.jeilpharm.co.kr/" },
  { name: "JW", logo: getLogo("jw-pharma.co.kr"), link: "https://www.jw-pharma.co.kr/" },
  { name: "Kukje", logo: getLogo("kukjepharm.co.kr"), link: "http://www.kukjepharm.co.kr/" },
  { 
    name: "Kyowa Kirin", 
    logo: "https://www.kyowakirin.com/media_center/news_releases/2019/images/e20190205_01.png", 
    link: "https://www.kyowakirin.com/kr/" 
  },
  { 
    name: "Lilly", 
    logo: "https://images.seeklogo.com/logo-png/8/3/lilly-logo-png_seeklogo-84218.png", 
    link: "https://www.lilly.co.kr/" 
  },
  { 
    name: "LitePharmTech", 
    logo: "https://logo-resources.thevc.kr/organizations/200x200/153903dd1c2daac632e660e27ad7061f3c9516a6cbcd3cb174f5a5530cdf15ee_1674195948833225.jpg", 
    link: "http://www.litepharm.com/" 
  },
  { name: "Merck", logo: getLogo("merckgroup.com"), link: "https://www.merckgroup.com/kr-ko" }, 
  { 
    name: "Mitsubishi Tanabe", 
    logo: "https://lh4.googleusercontent.com/proxy/ApyTbjXCwmDyUkIxf35xp664fejbNw8B3vUF4Cs_umk_XXjqj5m5ItdYto2g_82CFSdRap-GYXfo6K2zOzhUnab3eA", 
    link: "http://www.mt-pharma-korea.com/" 
  },
  { name: "MSD", logo: getLogo("msd.com"), link: "https://www.msd-korea.com/" },
  { 
    name: "Myungin", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuU8v1hmqs_kqGeI56SHIGga-gnusVg88SA&s", 
    link: "http://myunginph.co.kr/main/ko/index.html" 
  },
  { name: "Myungmoon", logo: getLogo("mmpharm.co.kr"), link: "http://www.mmpharm.co.kr/" },
  { name: "Novartis", logo: getLogo("novartis.com"), link: "https://www.novartis.co.kr/" },
  { name: "Novo Nordisk", logo: getLogo("novonordisk.com"), link: "https://www.novonordisk.co.kr/" },
  { name: "Ono", logo: getLogo("ono-pharma.com"), link: "https://kr.ono-pharma.com/" },
  { 
    name: "Optus", 
    logo: "https://cdn-pro-web-217-134.cdn-nhncommerce.com/optuspharm76_godomall_com/data/commonimg/ico_kr.png", 
    link: "http://optuspharm.com/" 
  },
  { 
    name: "Otsuka", 
    logo: "https://www.otsuka.co.kr/img/user/company/ci_intro.png", 
    link: "http://www.otsuka.co.kr/" 
  },
  { name: "Pfizer", logo: getLogo("pfizer.com"), link: "https://www.pfizer.co.kr/" },
  { name: "PharmaEssentia", logo: getLogo("pharmaessentia.com"), link: "https://kr.pharmaessentia.com/modules/catalogue_history2/cg_index.html" },
  { name: "PPD", logo: getLogo("ppd.com"), link: "https://www.ppd.com/" },
  { name: "Roche", logo: getLogo("roche.com"), link: "https://www.roche.co.kr/" },
  { name: "Samchundang", logo: getLogo("scd.co.kr"), link: "http://www.scd.co.kr/" },
  { 
    name: "Samil", 
    logo: "https://www.docdocdoc.co.kr/news/photo/201704/1041167_1102755_213.jpg", 
    link: "http://www.samil-pharm.com/" 
  },
  { name: "Samjin", logo: getLogo("samjinpharm.co.kr"), link: "https://www.samjinpharm.co.kr/" },
  { name: "Santen", logo: getLogo("santen.com"), link: "http://www.santen.co.kr/" },
  { name: "Sanofi", logo: "https://cdn.worldvectorlogo.com/logos/sanofi-logo-2022.svg", link: "https://www.sanofi.co.kr/" },
  { name: "Servier", logo: getLogo("servier.com"), link: "https://www.servier.co.kr/" },
  { name: "Shin Poong", logo: getLogo("shinpoong.co.kr"), link: "https://shinpoong.co.kr/" },
  { name: "Taejoon", logo: getLogo("taejoon.co.kr"), link: "https://www.taejoon.co.kr/" },
  { 
    name: "Takeda", 
    logo: "https://assets-dam.takeda.com/image/upload/f_auto/q_auto/legacy-dotcom/siteassets/sk-sk/home/who-we-are/company-information/history/symbols/ChangestotheCorporateLogo_block_004", 
    link: "https://www.takeda.com/ko-kr" 
  },
  { name: "UCB", logo: getLogo("ucb.com"), link: "https://www.ucbkorea.co.kr/" },
  { 
    name: "WhanIn", 
    logo: "https://file.alphasquare.co.kr/media/images/stock_logo/kr/016580.png", 
    link: "https://www.whanin.com/" 
  },
  { 
    name: "Yooyoung", 
    logo: "https://www.khanews.com/news/photo/201010/20992_3891.jpg", 
    link: "https://www.yypharm.co.kr/" 
  },
  { 
    name: "Youngjin", 
    logo: "https://i.namu.wiki/i/zwOhRUjCJYlBSDnzdjys5RV2DisTcDHT96Lc6pgt38D_Qn9Aa9j2-7JI5iEC4kI2IP9Uz8ZHUjcsD5NPJJLO4g.svg", 
    link: "https://www.yungjin.co.kr/" 
  }
].sort((a, b) => a.name.localeCompare(b.name));
