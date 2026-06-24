/* ============================================================
   Magnet Clinical Solutions — EN / RO i18n
   Translates DOM text nodes + input placeholders + <title>.
   No HTML data-attributes needed: matches by source English text.
   ============================================================ */
(function () {
  'use strict';

  /* Romanian dictionary, keyed by exact (trimmed) English source text. */
  var RO = {
    /* ---- Nav ---- */
    "Home": "Acasă",
    "About": "Despre",
    "Services": "Servicii",
    "Gallery": "Galerie",
    "Contact Us": "Contactați-ne",
    "Contact": "Contact",

    /* ---- Home hero ---- */
    "🌿 Clinical Research · Republic of Moldova": "🌿 Cercetare clinică · Republica Moldova",
    "Advancing Clinical Research,": "Promovăm cercetarea clinică,",
    "Rooted in Moldova": "cu rădăcini în Moldova",
    "World-class auditing, certified training, contract research, and patient recruitment — bringing international pharmaceutical standards to an emerging market.":
      "Audit de clasă mondială, instruire certificată, cercetare prin contract și recrutare de pacienți — aducem standardele farmaceutice internaționale pe o piață emergentă.",
    "Explore Our Services": "Descoperă serviciile noastre",
    "Our Story": "Povestea noastră",
    "Clinical research imagery": "Imagine cercetare clinică",
    "Service Directions": "Direcții de servicii",
    "Certified Expertise": "Expertiză certificată",
    "Country, Endless Potential": "Țară, potențial nelimitat",

    /* ---- Home services ---- */
    "What We Offer": "Ce oferim",
    "Four Pillars of Clinical Excellence": "Patru piloni ai excelenței clinice",
    "From rigorous auditing to pioneering patient recruitment — we cover every dimension of clinical research.":
      "De la audit riguros la recrutare inovatoare de pacienți — acoperim fiecare dimensiune a cercetării clinice.",
    "Clinical Study Auditing": "Audit al studiilor clinice",
    "Internationally certified audit services delivered under contract, with a comprehensive official audit report.":
      "Servicii de audit certificate internațional, livrate prin contract, cu un raport de audit oficial complet.",
    "Training Platform": "Platformă de instruire",
    "Ministry of Education certified courses across five pharmaceutical and clinical domains.":
      "Cursuri certificate de Ministerul Educației în cinci domenii farmaceutice și clinice.",
    "CRO Services": "Servicii CRO",
    "Full-service contract research bringing international studies to Moldova — authorization to execution.":
      "Cercetare prin contract full-service, care aduce studii internaționale în Moldova — de la autorizare la execuție.",
    "Patient Recruitment": "Recrutarea pacienților",
    "Connecting sponsors with Moldova's diverse and largely untapped regional patient populations.":
      "Conectăm sponsorii cu populațiile regionale de pacienți din Moldova, diverse și în mare parte nevalorificate.",
    "Learn More →": "Află mai multe →",

    /* ---- Recognised standards ---- */
    "Built on recognised standards": "Construit pe standarde recunoscute",
    "International Clinical Audit Certification": "Certificare internațională în audit clinic",
    "Ministry of Education · Moldova": "Ministerul Educației · Moldova",
    "Good Pharmacovigilance Practice": "Bună practică de farmacovigilență",

    /* ---- Process timeline (home) ---- */
    "How We Work": "Cum lucrăm",
    "Our Process": "Procesul nostru",
    "A clear, structured approach to every clinical research engagement.":
      "O abordare clară și structurată pentru fiecare colaborare de cercetare clinică.",
    "Step 01": "Pasul 01",
    "Step 02": "Pasul 02",
    "Step 03": "Pasul 03",
    "Step 04": "Pasul 04",
    "Initial Consultation": "Consultație inițială",
    "We discuss your research needs, goals, and constraints to identify the right service and scope.":
      "Discutăm nevoile, obiectivele și constrângerile dvs. de cercetare pentru a identifica serviciul și domeniul potrivit.",
    "Proposal & Contract": "Propunere și contract",
    "A detailed proposal is prepared and a clear service contract is established for full transparency.":
      "Se pregătește o propunere detaliată și se stabilește un contract de servicii clar, pentru transparență deplină.",
    "Execution": "Execuție",
    "Our team delivers the service — audit, training, study conduct, or recruitment — to the agreed scope.":
      "Echipa noastră livrează serviciul — audit, instruire, desfășurarea studiului sau recrutare — conform domeniului convenit.",
    "Reporting & Follow-Up": "Raportare și monitorizare",
    "Deliverables are presented, findings reviewed, and ongoing support is provided as needed.":
      "Livrabilele sunt prezentate, concluziile sunt analizate și se oferă sprijin continuu, după caz.",

    /* ---- Statement ---- */
    "Clinical research deserves the same rigour": "Cercetarea clinică merită aceeași rigoare",
    "wherever": "oriunde",
    "it happens. Magnet exists to bring that standard home — to Moldova's patients, its doctors, and the sponsors who trust them.":
      "s-ar desfășura. Magnet există pentru a aduce acel standard acasă — pacienților din Moldova, medicilor săi și sponsorilor care au încredere în ei.",
    "A note from our founder": "Un cuvânt din partea fondatoarei noastre",

    /* ---- Why us ---- */
    "Why Magnet Clinical Solutions": "De ce Magnet Clinical Solutions",
    "Internationally Certified Expertise": "Expertiză certificată internațional",
    "Our founder holds international certification in clinical study auditing, bringing global standards to Moldovan healthcare and research.":
      "Fondatoarea noastră deține certificare internațională în auditul studiilor clinice, aducând standarde globale în sănătatea și cercetarea din Moldova.",
    "Leading clinical research forward": "Promovăm cercetarea clinică",
    "Your Trusted Partner in Clinical Research": "Partenerul tău de încredere în cercetarea clinică",
    "We combine international certification standards with deep local knowledge to deliver results that meet regulatory requirements and drive real outcomes.":
      "Combinăm standardele de certificare internațională cu o cunoaștere locală profundă pentru a livra rezultate care îndeplinesc cerințele de reglementare și generează rezultate reale.",
    "Precision Auditing": "Audit de precizie",
    "Every audit is conducted to international GCP standards, producing reports that satisfy regulatory bodies across jurisdictions.":
      "Fiecare audit este realizat conform standardelor GCP internaționale, producând rapoarte care satisfac organismele de reglementare din diferite jurisdicții.",
    "Ministry-Accredited Training": "Instruire acreditată de minister",
    "Our courses carry official certification from the Republic of Moldova's Ministry of Education, giving participants recognized credentials.":
      "Cursurile noastre poartă certificarea oficială a Ministerului Educației al Republicii Moldova, oferind participanților acreditări recunoscute.",
    "Untapped Patient Pools": "Bazine de pacienți nevalorificate",
    "Access diverse patient populations from across Moldova — north, south, and Gagauzia — for studies requiring varied demographics.":
      "Accesați populații diverse de pacienți din întreaga Moldovă — nord, sud și Găgăuzia — pentru studii care necesită demografii variate.",

    /* ---- About strip (home) ---- */
    "About the Company": "Despre companie",
    "Clinical Excellence, Rooted in Moldova": "Excelență clinică, cu rădăcini în Moldova",
    "Magnet Clinical Solutions was founded by an internationally certified clinical research professional with a mission to elevate pharmaceutical standards in the Republic of Moldova and connect the country's vast potential with global clinical research.":
      "Magnet Clinical Solutions a fost fondată de o profesionistă în cercetare clinică certificată internațional, cu misiunea de a ridica standardele farmaceutice în Republica Moldova și de a conecta potențialul vast al țării cu cercetarea clinică globală.",
    "International Certification": "Certificare internațională",
    "Certified auditor in clinical studies with global recognition": "Auditor certificat în studii clinice, cu recunoaștere globală",
    "Ministry-Accredited Courses": "Cursuri acreditate de minister",
    "Official certifications recognized in the Republic of Moldova": "Certificări oficiale recunoscute în Republica Moldova",
    "B2B Partnerships": "Parteneriate B2B",
    "Serving pharmaceutical companies, sponsors, and research institutions": "Deservim companii farmaceutice, sponsori și instituții de cercetare",

    /* ---- Testimonials ---- */
    "Client Feedback": "Părerile clienților",
    "Trusted by Industry Professionals": "Apreciați de profesioniștii din industrie",
    "The audit report delivered by Magnet Clinical Solutions was thorough, professionally structured, and met all our regulatory requirements without a single revision needed.":
      "Raportul de audit livrat de Magnet Clinical Solutions a fost minuțios, structurat profesional și a îndeplinit toate cerințele noastre de reglementare fără a fi nevoie de nicio revizuire.",
    "Clinical Operations Director": "Director operațiuni clinice",
    "The pharmacovigilance training was outstanding. Our team received Ministry-accredited certification and immediately applied the knowledge in our compliance workflows.":
      "Instruirea în farmacovigilență a fost excepțională. Echipa noastră a primit certificare acreditată de minister și a aplicat imediat cunoștințele în fluxurile noastre de conformitate.",
    "Regulatory Affairs Manager": "Manager afaceri de reglementare",
    "Recruiting patients in Moldova seemed impossible until we partnered with Magnet. Their access to regional patient populations accelerated our trial timelines significantly.":
      "Recrutarea pacienților în Moldova părea imposibilă până când am colaborat cu Magnet. Accesul lor la populațiile regionale de pacienți a accelerat semnificativ termenele studiilor noastre.",
    "Clinical Trial Sponsor, EU-based": "Sponsor studiu clinic, din UE",

    /* ---- CTA (home) ---- */
    "Ready to Begin?": "Pregătit să începem?",
    "Partner with Magnet Clinical Solutions": "Colaborați cu Magnet Clinical Solutions",
    "Whether you need an audit, specialized training, a CRO, or patient recruitment — we're ready to support your clinical research goals.":
      "Fie că aveți nevoie de un audit, instruire specializată, un CRO sau recrutare de pacienți — suntem pregătiți să vă sprijinim obiectivele de cercetare clinică.",
    "Start a Conversation": "Începeți o conversație",

    /* ---- Footer ---- */
    "Advancing clinical research standards in the Republic of Moldova through expertise, certification, and innovation.":
      "Promovăm standardele cercetării clinice în Republica Moldova prin expertiză, certificare și inovație.",
    "Clinical Auditing": "Audit clinic",
    "Company": "Companie",
    "About Us": "Despre noi",
    "Republic of Moldova": "Republica Moldova",
    "© 2026 Magnet Clinical Solutions. All rights reserved.": "© 2026 Magnet Clinical Solutions. Toate drepturile rezervate.",
    "Rooted in Moldova.": "Cu rădăcini în Moldova.",

    /* ---- About page ---- */
    "About Magnet Clinical Solutions": "Despre Magnet Clinical Solutions",
    "Driven by a mission to bring international clinical research standards to the heart of Moldova.":
      "Animați de misiunea de a aduce standardele internaționale de cercetare clinică în inima Moldovei.",
    "Our Founder": "Fondatoarea noastră",
    "A Vision for Clinical Excellence": "O viziune pentru excelența clinică",
    "Founder portrait": "Portret fondatoare",
    "Magnet Clinical Solutions was founded by a passionate and internationally certified clinical research professional with years of experience in pharmaceutical auditing, regulatory compliance, and clinical trial management.":
      "Magnet Clinical Solutions a fost fondată de o profesionistă pasionată și certificată internațional în cercetare clinică, cu ani de experiență în audit farmaceutic, conformitate de reglementare și managementul studiilor clinice.",
    "Recognizing the untapped potential of Moldova's healthcare landscape and its diverse patient populations, our founder set out to create a company that bridges the gap between international pharmaceutical standards and local clinical research capacity.":
      "Recunoscând potențialul nevalorificat al sistemului de sănătate din Moldova și populațiile sale diverse de pacienți, fondatoarea noastră și-a propus să creeze o companie care face legătura între standardele farmaceutice internaționale și capacitatea locală de cercetare clinică.",
    "The result is Magnet Clinical Solutions — a full-spectrum clinical research partner that brings credibility, certification, and innovation to every engagement.":
      "Rezultatul este Magnet Clinical Solutions — un partener complet în cercetarea clinică, care aduce credibilitate, certificare și inovație în fiecare colaborare.",
    "Certified clinical study auditor with international recognition": "Auditor de studii clinice certificat, cu recunoaștere internațională",
    "Ministry Accreditation": "Acreditare ministerială",
    "Training courses certified by Moldova's Ministry of Education": "Cursuri de instruire certificate de Ministerul Educației din Moldova",
    "Multi-sector Expertise": "Expertiză multisectorială",
    "Audit, training, CRO, and patient recruitment under one roof": "Audit, instruire, CRO și recrutare de pacienți sub același acoperiș",
    "B2B Focus": "Orientare B2B",
    "What Drives Us": "Ce ne motivează",
    "Our Mission & Values": "Misiunea și valorile noastre",
    "Everything we do is guided by a commitment to scientific integrity, patient welfare, and regulatory excellence.":
      "Tot ceea ce facem este ghidat de angajamentul față de integritatea științifică, bunăstarea pacienților și excelența în reglementare.",
    "Integrity": "Integritate",
    "Every audit, course, and clinical study is conducted with absolute adherence to international standards and ethical principles.":
      "Fiecare audit, curs și studiu clinic este realizat cu respectarea absolută a standardelor internaționale și a principiilor etice.",
    "Scientific Rigor": "Rigoare științifică",
    "Our CRO and auditing services are grounded in evidence-based methodology and GCP compliance at every stage.":
      "Serviciile noastre de CRO și audit se bazează pe o metodologie fundamentată pe dovezi și pe conformitatea GCP în fiecare etapă.",
    "Local Impact": "Impact local",
    "We are committed to growing Moldova's clinical research ecosystem — for doctors, researchers, and patients alike.":
      "Ne angajăm să dezvoltăm ecosistemul de cercetare clinică al Moldovei — deopotrivă pentru medici, cercetători și pacienți.",
    "Partnership": "Parteneriat",
    "We work as an extension of our clients' teams — transparent, responsive, and fully aligned with their research goals.":
      "Lucrăm ca o extensie a echipelor clienților noștri — transparenți, receptivi și pe deplin aliniați obiectivelor lor de cercetare.",
    "Our People": "Echipa noastră",
    "The Team Behind the Mission": "Echipa din spatele misiunii",
    "A growing team of clinical research professionals dedicated to excellence.":
      "O echipă în creștere de profesioniști în cercetare clinică, dedicați excelenței.",
    "Founder & Director": "Fondatoare și director",
    "Clinical Auditor & CEO": "Auditor clinic și CEO",
    "Internationally certified clinical study auditor with expertise spanning audit, pharmacovigilance, and CRO management.":
      "Auditor de studii clinice certificat internațional, cu expertiză în audit, farmacovigilență și management CRO.",
    "Training Lead": "Responsabil instruire",
    "Head of Education": "Director educație",
    "Specialist in clinical research education, responsible for developing and delivering Ministry-accredited training programs.":
      "Specialist în educație pentru cercetare clinică, responsabil de dezvoltarea și livrarea programelor de instruire acreditate de minister.",
    "CRO Coordinator": "Coordonator CRO",
    "Clinical Operations": "Operațiuni clinice",
    "Manages clinical trial logistics, doctor contracting, and protocol execution for sponsored studies in Moldova.":
      "Gestionează logistica studiilor clinice, contractarea medicilor și execuția protocoalelor pentru studiile sponsorizate în Moldova.",
    "Why Moldova?": "De ce Moldova?",
    "An Emerging Hub for Clinical Research": "Un centru emergent pentru cercetarea clinică",
    "The Republic of Moldova offers pharmaceutical sponsors access to diverse patient populations across its regions — from the north to the south and Gagauzia — many of which remain largely untapped for clinical research.":
      "Republica Moldova oferă sponsorilor farmaceutici acces la populații diverse de pacienți din regiunile sale — de la nord la sud și Găgăuzia — multe rămânând în mare parte nevalorificate pentru cercetarea clinică.",
    "With Magnet Clinical Solutions as your local partner, you gain the regulatory expertise, certified personnel, and established networks needed to conduct compliant, efficient clinical studies in this emerging market.":
      "Cu Magnet Clinical Solutions ca partener local, obțineți expertiza de reglementare, personalul certificat și rețelele consacrate necesare pentru a desfășura studii clinice conforme și eficiente pe această piață emergentă.",
    "Diverse Regional Access": "Acces regional divers",
    "North, South, and Gagauzia patient populations available": "Populații de pacienți disponibile din Nord, Sud și Găgăuzia",
    "Regulatory Navigation": "Navigare în reglementări",
    "Full support for study authorization in Moldova": "Sprijin complet pentru autorizarea studiilor în Moldova",
    "Emerging Market Advantage": "Avantajul pieței emergente",
    "Lower competition for patients, faster recruitment timelines": "Concurență redusă pentru pacienți, termene de recrutare mai rapide",
    "Let's Collaborate": "Să colaborăm",
    "Ready to Work Together?": "Pregătit să lucrăm împreună?",
    "Reach out to learn how Magnet Clinical Solutions can support your next clinical research initiative.":
      "Contactați-ne pentru a afla cum Magnet Clinical Solutions vă poate sprijini următoarea inițiativă de cercetare clinică.",
    "Get in Touch": "Luați legătura",

    /* ---- Services page ---- */
    "What We Do": "Ce facem",
    "Our Services": "Serviciile noastre",
    "Four strategic directions designed to cover every aspect of clinical research — from compliance to capacity building.":
      "Patru direcții strategice concepute pentru a acoperi fiecare aspect al cercetării clinice — de la conformitate la consolidarea capacităților.",
    "Direction 01": "Direcția 01",
    "Direction 02": "Direcția 02",
    "Direction 03": "Direcția 03",
    "Direction 04": "Direcția 04",
    "Our founder holds international certification in clinical study auditing, ensuring every engagement meets the highest global standards. We offer independent, contract-based audit services to pharmaceutical companies and sponsors conducting clinical studies.":
      "Fondatoarea noastră deține certificare internațională în auditul studiilor clinice, asigurând că fiecare colaborare îndeplinește cele mai înalte standarde globale. Oferim servicii de audit independente, bazate pe contract, companiilor farmaceutice și sponsorilor care desfășoară studii clinice.",
    "Each audit culminates in a professionally structured audit report that satisfies regulatory requirements across jurisdictions and provides actionable insights for continuous improvement.":
      "Fiecare audit se finalizează cu un raport de audit structurat profesional, care satisface cerințele de reglementare din diferite jurisdicții și oferă concluzii practice pentru îmbunătățire continuă.",
    "GCP-compliant audit methodology": "Metodologie de audit conformă GCP",
    "Independent, contract-based engagements": "Colaborări independente, bazate pe contract",
    "Comprehensive official audit report delivery": "Livrarea unui raport de audit oficial complet",
    "Regulatory gap analysis and recommendations": "Analiza lacunelor de reglementare și recomandări",
    "Applicable to ongoing and completed studies": "Aplicabil studiilor în desfășurare și finalizate",
    "Internationally certified auditor": "Auditor certificat internațional",
    "Request an Audit": "Solicitați un audit",
    "Our Ministry of Education certified training platform provides pharmaceutical and healthcare professionals with the knowledge and credentials they need to operate at the highest level.":
      "Platforma noastră de instruire certificată de Ministerul Educației oferă profesioniștilor din domeniul farmaceutic și medical cunoștințele și acreditările de care au nevoie pentru a opera la cel mai înalt nivel.",
    "Courses are designed to be practical, rigorous, and officially recognized — giving participants career-relevant qualifications within the Republic of Moldova's regulatory framework.":
      "Cursurile sunt concepute să fie practice, riguroase și recunoscute oficial — oferind participanților calificări relevante pentru carieră în cadrul de reglementare al Republicii Moldova.",
    "Clinical Studies": "Studii clinice",
    "— comprehensive GCP and protocol training": "— instruire completă în GCP și protocoale",
    "Doctor Authorization": "Autorizarea medicilor",
    "— pathways for physician involvement in trials": "— căi de implicare a medicilor în studii",
    "Pharmacovigilance": "Farmacovigilență",
    "— safety monitoring and adverse event reporting": "— monitorizarea siguranței și raportarea evenimentelor adverse",
    "Medical Availability": "Disponibilitate medicală",
    "— regulatory and access frameworks": "— cadre de reglementare și acces",
    "GVP Certification": "Certificare GVP",
    "— Good Pharmacovigilance Practices (coming soon)": "— Bune practici de farmacovigilență (în curând)",
    "All courses certified by the Ministry of Education": "Toate cursurile certificate de Ministerul Educației",
    "Explore Training": "Descoperiți instruirea",
    "Contract Research Organization": "Organizație de cercetare prin contract",
    "Magnet Clinical Solutions operates as a full-service CRO, enabling international pharmaceutical sponsors to conduct clinical studies in the Republic of Moldova with full regulatory compliance and local operational support.":
      "Magnet Clinical Solutions funcționează ca un CRO full-service, permițând sponsorilor farmaceutici internaționali să desfășoare studii clinice în Republica Moldova cu conformitate deplină de reglementare și sprijin operațional local.",
    "We manage the entire process — from regulatory authorization to patient recruitment and protocol execution — under a single contract with your organization.":
      "Gestionăm întregul proces — de la autorizarea de reglementare la recrutarea pacienților și execuția protocolului — printr-un singur contract cu organizația dumneavoastră.",
    "Study importation and Moldovan regulatory authorization": "Importul studiului și autorizarea de reglementare în Moldova",
    "Investigator and site contracting": "Contractarea investigatorilor și a centrelor",
    "Patient recruitment and screening": "Recrutarea și screeningul pacienților",
    "Protocol execution per sponsor specifications": "Execuția protocolului conform specificațiilor sponsorului",
    "Data collection and monitoring support": "Sprijin pentru colectarea și monitorizarea datelor",
    "Single-contract, full-service model": "Model full-service, cu un singur contract",
    "Discuss Your Study": "Discutați despre studiul dvs.",
    "Patient Recruitment Platform": "Platformă de recrutare a pacienților",
    "Moldova's patient populations — spread across the north, south, and Gagauzia — represent a largely untapped resource for clinical research. Many patients meet criteria for studies that struggle to recruit in saturated Western European markets.":
      "Populațiile de pacienți din Moldova — răspândite în nord, sud și Găgăuzia — reprezintă o resursă în mare parte nevalorificată pentru cercetarea clinică. Mulți pacienți îndeplinesc criteriile pentru studii care întâmpină dificultăți de recrutare pe piețele saturate din Europa de Vest.",
    "Our recruitment platform connects pharmaceutical sponsors with this diverse patient base, reducing timelines and expanding the geographic and demographic reach of clinical trials.":
      "Platforma noastră de recrutare conectează sponsorii farmaceutici cu această bază diversă de pacienți, reducând termenele și extinzând acoperirea geografică și demografică a studiilor clinice.",
    "Access to north, south, and Gagauzia patient pools": "Acces la bazinele de pacienți din nord, sud și Găgăuzia",
    "Diverse demographic profiles for varied study needs": "Profiluri demografice diverse pentru nevoi variate de studiu",
    "Contract-based, sponsor-driven recruitment": "Recrutare bazată pe contract, condusă de sponsor",
    "Pre-screened patient matching to protocol criteria": "Potrivirea pacienților pre-evaluați cu criteriile protocolului",
    "Faster recruitment vs. saturated Western markets": "Recrutare mai rapidă față de piețele occidentale saturate",
    "Platform currently in development — inquire for early access": "Platformă în dezvoltare — întrebați pentru acces timpuriu",
    "Inquire About Recruitment": "Întrebați despre recrutare",
    "Work With Us": "Lucrați cu noi",
    "Not Sure Which Service You Need?": "Nu sunteți sigur de ce serviciu aveți nevoie?",
    "Contact us and we'll help you identify the right solution for your clinical research goals.":
      "Contactați-ne și vă vom ajuta să identificați soluția potrivită pentru obiectivele dvs. de cercetare clinică.",
    "Talk to Our Team": "Vorbiți cu echipa noastră",

    /* ---- Gallery page ---- */
    "Visual Story": "Poveste vizuală",
    "A look at our team, training sessions, clinical research events, and the people behind Magnet Clinical Solutions.":
      "O privire asupra echipei noastre, sesiunilor de instruire, evenimentelor de cercetare clinică și a oamenilor din spatele Magnet Clinical Solutions.",
    "All": "Toate",
    "Team": "Echipă",
    "Training": "Instruire",
    "Events": "Evenimente",
    "Clinical Work": "Activitate clinică",
    "Clinical research facility": "Centru de cercetare clinică",
    "Training session": "Sesiune de instruire",
    "Team photo": "Fotografie de echipă",
    "Audit documentation": "Documentație de audit",
    "Award ceremony": "Ceremonie de premiere",
    "Research lab": "Laborator de cercetare",
    "Data analysis": "Analiza datelor",
    "Conference talk": "Prezentare la conferință",
    "Partner meeting": "Întâlnire cu parteneri",
    "Photos coming soon — we're building our gallery. Check back regularly.":
      "Fotografii în curând — ne construim galeria. Reveniți cu regularitate.",
    "Connect With Us": "Conectați-vă cu noi",
    "Want to See More?": "Doriți să vedeți mai mult?",
    "Follow our work and reach out to learn how Magnet Clinical Solutions can support your research goals.":
      "Urmăriți activitatea noastră și contactați-ne pentru a afla cum Magnet Clinical Solutions vă poate sprijini obiectivele de cercetare.",

    /* ---- Contact page ---- */
    "Reach Out": "Luați legătura",
    "We'd love to hear from you. Tell us about your project and we'll get back to you promptly.":
      "Ne-ar plăcea să auzim de la dumneavoastră. Spuneți-ne despre proiectul dvs. și vă vom răspunde prompt.",
    "Let's Start a Conversation": "Să începem o conversație",
    "Whether you need an audit, want to enroll in a training course, are looking for a CRO partner, or want to discuss patient recruitment — we're here to help.":
      "Fie că aveți nevoie de un audit, doriți să vă înscrieți la un curs, căutați un partener CRO sau doriți să discutați despre recrutarea pacienților — suntem aici să vă ajutăm.",
    "Email": "Email",
    "Location": "Locație",
    "Response Time": "Timp de răspuns",
    "Within 24 business hours": "În 24 de ore lucrătoare",
    "Services Enquiry": "Solicitare servicii",
    "→ Clinical Study Auditing": "→ Audit al studiilor clinice",
    "→ Training Platform": "→ Platformă de instruire",
    "→ CRO Services": "→ Servicii CRO",
    "→ Patient Recruitment": "→ Recrutarea pacienților",
    "Send Us a Message": "Trimiteți-ne un mesaj",
    "First Name": "Prenume",
    "Last Name": "Nume",
    "Email Address": "Adresă de email",
    "Company / Organization": "Companie / Organizație",
    "Service of Interest": "Serviciul de interes",
    "Message": "Mesaj",
    "Send Message": "Trimiteți mesajul",
    "Message Sent ✓": "Mesaj trimis ✓",
    "Common Questions": "Întrebări uzuale",
    "Frequently Asked Questions": "Întrebări frecvente",
    "What types of clinical studies can you audit?": "Ce tipuri de studii clinice puteți audita?",
    "We audit Phase I–IV clinical studies, observational studies, and post-marketing surveillance studies. Our audits comply with ICH GCP E6(R2) and applicable regulatory frameworks.":
      "Realizăm audituri pentru studii clinice de Faza I–IV, studii observaționale și studii de supraveghere post-autorizare. Auditurile noastre respectă ICH GCP E6(R2) și cadrele de reglementare aplicabile.",
    "Are your training certificates officially recognized?": "Certificatele dvs. de instruire sunt recunoscute oficial?",
    "Yes. All our courses are certified by the Ministry of Education of the Republic of Moldova, granting them official status for professional development and regulatory compliance purposes.":
      "Da. Toate cursurile noastre sunt certificate de Ministerul Educației al Republicii Moldova, conferindu-le statut oficial pentru dezvoltare profesională și conformitate de reglementare.",
    "How long does it take to authorize a study in Moldova?": "Cât durează autorizarea unui studiu în Moldova?",
    "Authorization timelines depend on the study type and regulatory pathway. We guide sponsors through the full process and provide realistic timeline estimates during initial consultations.":
      "Termenele de autorizare depind de tipul studiului și de calea de reglementare. Ghidăm sponsorii pe parcursul întregului proces și oferim estimări realiste de termene în cadrul consultărilor inițiale.",
    "Do you work with international sponsors?": "Lucrați cu sponsori internaționali?",
    "Absolutely. Our CRO and patient recruitment services are specifically designed for international pharmaceutical companies and sponsors seeking to conduct studies in Moldova.":
      "Absolut. Serviciile noastre de CRO și recrutare a pacienților sunt concepute special pentru companiile farmaceutice și sponsorii internaționali care doresc să desfășoare studii în Moldova.",

    /* ---- Form placeholders ---- */
    "Your company name": "Numele companiei dvs.",
    "Tell us about your project, requirements, or questions...": "Spuneți-ne despre proiectul, cerințele sau întrebările dvs...",
    "Select a service...": "Selectați un serviciu...",
    "Other / General Enquiry": "Altele / Solicitare generală",

    /* ---- <title> ---- */
    "Magnet Clinical Solutions — Clinical Research Excellence": "Magnet Clinical Solutions — Excelență în cercetarea clinică",
    "About — Magnet Clinical Solutions": "Despre — Magnet Clinical Solutions",
    "Services — Magnet Clinical Solutions": "Servicii — Magnet Clinical Solutions",
    "Gallery — Magnet Clinical Solutions": "Galerie — Magnet Clinical Solutions",
    "Contact — Magnet Clinical Solutions": "Contact — Magnet Clinical Solutions"
  };

  var STORAGE_KEY = 'mcs_lang';
  var textSnap = null;   // [{node, en}]
  var phSnap = null;     // [{el, en}]
  var titleEN = null;

  function collect() {
    textSnap = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('.lang-switch')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) textSnap.push({ node: n, en: n.nodeValue });

    phSnap = [];
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      phSnap.push({ el: el, en: el.getAttribute('placeholder') });
    });
    titleEN = document.title;
  }

  function applyLang(lang) {
    if (!textSnap) collect();
    var ro = lang === 'ro';

    textSnap.forEach(function (it) {
      var raw = it.en, key = raw.trim();
      if (ro && RO[key] !== undefined) {
        var i = raw.indexOf(key);
        it.node.nodeValue = raw.slice(0, i) + RO[key] + raw.slice(i + key.length);
      } else if (it.node.nodeValue !== raw) {
        it.node.nodeValue = raw;
      }
    });

    phSnap.forEach(function (it) {
      it.el.setAttribute('placeholder', (ro && RO[it.en] !== undefined) ? RO[it.en] : it.en);
    });

    document.title = (ro && RO[titleEN] !== undefined) ? RO[titleEN] : titleEN;
    document.documentElement.lang = ro ? 'ro' : 'en';

    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    window.__mcsLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  /* Public helper for scripts (e.g. form success message) */
  window.mcsTranslate = function (str) {
    return (window.__mcsLang === 'ro' && RO[str] !== undefined) ? RO[str] : str;
  };

  function init() {
    collect();
    var saved = 'en';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });
    applyLang(saved === 'ro' ? 'ro' : 'en');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
