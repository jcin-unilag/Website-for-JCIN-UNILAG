/* =====================================================================
   JCIN UNILAG WEBSITE: EDITABLE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file most people need to edit to keep the site
   up to date. You do not need to touch any other file.

   HOW TO EDIT
   1. Change the text between the quote marks "like this".
   2. Keep every comma at the end of a line. A missing comma breaks the site.
   3. Leave a value as "" (empty quotes) if you don't have it yet.
      The site will show a yellow "TBC" tag there instead of a gap.
   4. Images go in the /assets/photos folder. Write the file name,
      e.g. image: "assets/photos/induction-2026.jpg"
   5. Save, then check the page in your browser before publishing.

   Owner: Media & Communications II   ·   Oversight: EVP Office
   ===================================================================== */

window.SITE = {

  /* ---------- CONTACT & LINKS ---------- */
  contact: {
    email: "jciuniversityoflagos@gmail.com",     // official LO email
    projectsEmail: "jcinunilagprojects@gmail.com", // Programs & Projects
    phone: "",                                   // optional
    address: "University of Lagos, Akoka, Lagos"
  },

  socials: [
    { name: "Instagram", url: "https://www.instagram.com/jcin_unilag/" },
    { name: "LinkedIn",  url: "" },
    { name: "X (Twitter)", url: "https://x.com/jcin_unilag" },
    { name: "WhatsApp Channel", url: "" }
  ],

  links: {
    jci: "https://jci.cc/",
    jciNigeria: "",                              // JCI Nigeria website
    impactReport: "",                            // link to the 2025/26 Impact Report (PDF or Drive)
    application: ""                              // Google Form for membership applications
  },

  /* ---------- MENU PHOTOS (the pictures in the hover menus) ----------
     Landscape photos, roughly 4:3, e.g. "assets/photos/menu-leadership.jpg".
     Leave "" to show a branded placeholder. */
  menuPhotos: {
    whoWeAre: "assets/photos/menu-who-we-are.jpg", legacy: "assets/photos/menu-legacy.jpg",
    leadership: "assets/photos/menu-leadership.jpg", impact: "assets/photos/menu-impact.jpg",
    individual: "", business: "", community: "", international: "", events: ""
  },

  /* ---------- FORMS ----------
     Paste the Formspree (or similar) endpoint for each form.
     Until these are filled in, the forms show a "not connected yet" note. */
  forms: {
    partner: "",                                 // goes to Sponsorship & Partnership
    contact: ""                                  // goes to the Secretariat
  },

  /* ---------- RECRUITMENT (Join page) ---------- */
  recruitment: {
    isOpen: true,                                // true = show "Apply now"; false = show "Opens soon"
    window: "",                                  // e.g. "1 – 20 December 2026"
    inductionDate: "",                           // e.g. "Saturday, 13 December 2026"
    dues: ""                                     // membership dues, e.g. "₦5,000 per year"
  },

  /* ---------- HEADLINE NUMBERS (Home page) ----------
     Only use figures we can defend. Use a range if a number isn't confirmed. */
  statsYear: "2025/26",
  stats: [
    { value: "11",  label: "projects planned and delivered by members" },
    { value: "15",  label: "external engagements with partners, chapters and programmes" },
    { value: "1st", label: "place at the LASU Quiz competition", highlight: true },
    { value: "2nd", label: "place at the IHOC competition" }
  ],

  /* ---------- EVENTS (Home page) ----------
     Put the soonest event first. Remove events once they've passed. */
  events: [
    {
      title: "Induction of New Members",
      date: "December 2026",
      dateConfirmed: false,
      description: "New members take the oath and officially join JCIN UNILAG.",
      image: "",
      button: { label: "Join to attend", url: "join.html" },
      tone: "teal"
    },
    {
      title: "39th Convention & 40th Investiture",
      date: "",
      dateConfirmed: false,
      description: "Our anniversary convention and the investiture of the board.",
      image: "",
      button: { label: "Register", url: "" },
      tone: "dark"
    },
    {
      title: "IMPACT Summit",
      date: "January 2027",
      dateConfirmed: false,
      description: "Our flagship gathering for students, speakers and partners.",
      image: "",
      button: { label: "Register interest", url: "" },
      tone: "blue"
    }
  ],

  /* ---------- TESTIMONIALS (Home & Join pages) ----------
     Get written consent from each person before adding them. */
  testimonials: [
    // { quote: "…", name: "Ada Okafor", detail: "Systems Engineering · Joined 2025", photo: "assets/photos/ada.jpg" },
  ],

  /* ---------- PARTNERS (Home & Partner pages) ----------
     Only list organisations Sponsorship & Partnership has cleared for public use. */
  partners: [
    { name: "Women Advocates Research & Documentation Centre (WARDC)", logo: "assets/partners/wardc.png", url: "" },
    { name: "Centre for Women's Health and Information (CEWHIN)", logo: "assets/partners/cewhin.png", url: "" },
    { name: "Flo Haven Initiative", logo: "assets/partners/flo-haven.png", url: "" },
    { name: "Cysters", logo: "assets/partners/cysters.png", url: "" },
    { name: "The Cardio Health", logo: "assets/partners/cardio-health.png", url: "" },
    { name: "ICHAD UNILAG", logo: "assets/partners/ichad.png", url: "" }
  ],

  /* ---------- LEADERSHIP (Leadership page) ----------
     Modelled on jci.cc's Board of Directors page (year tabs) and its
     HQ Organisational Structure page (offices > directorates > teams).

     HOW TO UPDATE
     - Each board year lives under boards["YYYY/YY"]. Add a new year at the
       TOP and set currentBoard to it. Old years stay online as an archive.
     - people: everyone on that board. id must be unique (no spaces).
     - photo: portrait headshot, same background for everyone, ideally
       600x800px, e.g. "assets/board/2026/atiku.jpg". Leave "" for initials.
     - structure: who reports to whom. "lead" and "director" use people ids.
       team: names of members in that directorate (optional).          */
  currentBoard: "2026/27",
  boards: {
    "2026/27": {
      theme: "IMPACT",
      themeLine: "Inclusion · Mentorship · Practical Skills · Accountability · Community · Transformation",
      people: [
        // Executive
        { id: "president", name: "Abdulbasit Oluwatobi Bello", title: "President", photo: "assets/board/2026/president.jpg", linkedin: "" },
        { id: "ipp", name: "Ibukunoluwa David-Oluwole", title: "Immediate Past President", photo: "", linkedin: "" },
        { id: "evp", name: "AbdulMalik Omodolapo Atiku", title: "Executive Vice President", photo: "assets/board/2026/evp.jpg", linkedin: "" },
        { id: "vp-ib", name: "Oluwatoyin Esther Adewale", title: "Vice President (Individual and Business)", photo: "assets/board/2026/vp-ib.jpg", linkedin: "" },
        { id: "vp-ic", name: "Simisola Naomi Babatunde", title: "Vice President (International and Community)", photo: "", linkedin: "" },
        { id: "glc", name: "Jesujuwon Gabriel Fasina", title: "General Legal Counsel", photo: "assets/board/2026/glc.jpg", linkedin: "" },
        { id: "gs", name: "Blessing Alere", title: "General Secretary", photo: "assets/board/2026/gs.jpg", linkedin: "" },
        { id: "treasurer", name: "Hadeezah Munirudeen", title: "Treasurer", photo: "assets/board/2026/treasurer.jpg", linkedin: "" },
        // Directors, chairs and officers
        { id: "special-duties", name: "Elizabeth Molade", title: "Director of Special Duties", photo: "assets/board/2026/special-duties.jpg", linkedin: "" },
        { id: "alumni", name: "Fatimah Aderinale", title: "Director of Alumni Affairs", photo: "assets/board/2026/alumni.jpg", linkedin: "" },
        { id: "anniv", name: "Felicia Kofoworola Arogundade", title: "Chairman, Anniversary and Convention Committee", photo: "", linkedin: "" },
        { id: "ags", name: "Glory Ajao", title: "Assistant General Secretary", photo: "assets/board/2026/ags.jpg", linkedin: "" },
        { id: "ea", name: "Oluwadamilola Farinde", title: "Executive Assistant to the President", photo: "assets/board/2026/ea.jpg", linkedin: "" },
        { id: "ad", name: "Precious Adeeyo", title: "Director of Awards and Documentation", photo: "assets/board/2026/ad.jpg", linkedin: "" },
        { id: "pp1", name: "Emmanuella Emordi", title: "Director of Programs and Projects 1", photo: "assets/board/2026/pp1.jpg", linkedin: "" },
        { id: "pp2", name: "Roheematulah Hamzah", title: "Director of Programs and Projects 2", photo: "assets/board/2026/pp2.jpg", linkedin: "" },
        { id: "sp", name: "Ibraheem Adejumo", title: "Director of Sponsorship and Partnership", photo: "assets/board/2026/sp.jpg", linkedin: "" },
        { id: "sports", name: "Jonathan Odunlade", title: "Chairman, Sport Committee", photo: "", linkedin: "" },
        { id: "mc1", name: "Fathia Ayinde", title: "Director of Media and Communications 1", photo: "assets/board/2026/mc1.jpg", linkedin: "" },
        { id: "mc2", name: "Joshua Simeon-Popoola", title: "Director of Media and Communications 2", photo: "assets/board/2026/mc2.jpg", linkedin: "" },
        { id: "eic", name: "Temiloluwa Ogunrinbokun", title: "Editor-In-Chief", photo: "assets/board/2026/eic.jpg", linkedin: "" },
        { id: "welfare", name: "Victoria Bassey", title: "Director of Welfare", photo: "assets/board/2026/welfare.jpg", linkedin: "" },
        { id: "mg1", name: "Munachi Ezeani", title: "Director of Membership and Growth 1", photo: "assets/board/2026/mg1.jpg", linkedin: "" },
        { id: "mg2", name: "Fred Ezeji", title: "Director of Membership and Growth 2", photo: "assets/board/2026/mg2.jpg", linkedin: "" },
        { id: "skills", name: "Ameerat Shifatu", title: "Director of Skills and Development", photo: "assets/board/2026/skills.jpg", linkedin: "" },
        { id: "ctt", name: "Robinson Goodness", title: "Director of Conference, Travels and Tours", photo: "assets/board/2026/ctt.jpg", linkedin: "" }
      ],

      /* Leadership tier: shown as a row, first person highlighted. */
      leadershipTier: {
        intro: "The President leads the board. The Executive Committee works alongside them to run the LO and supervise the directorates below.",
        lead: "president",
        others: ["ipp", "evp", "vp-ib", "vp-ic", "glc", "gs", "treasurer"]
      },

      /* Offices: each is a numbered panel, following the 2026/27 Directors' JD.
         Each unit is a directorate, committee or office; the text in
         description is the portfolio in brackets from the JD. */
      offices: [
        {
          name: "Office of the President",
          description: "The President controls and supervises the LO, presides at General Assembly and Board meetings, and represents JCIN UNILAG in all instances.",
          lead: "president",
          units: [
            { name: "Secretariat", description: "Notices, agendas, minutes, annual report and LO property.", director: "gs", team: [{ name: "Glory Ajao", role: "Assistant General Secretary" }] },
            { name: "General Legal Counsel", description: "Parliamentarian to the Board and General Assembly; guardian of the constitution.", director: "glc", team: [], solo: true },
            { name: "Treasury", description: "Books of account, dues, disbursements and financial reports.", director: "treasurer", team: [], solo: true },
            { name: "Special Duties", description: "Protocol, Contingencies, Ad Hoc, Venues, General Assembly.", director: "special-duties", team: [] },
            { name: "Anniversary and Convention Committee", description: "Plans and delivers the Anniversary and Convention, marking the 40th Anniversary this year.", director: "anniv", team: [] },
            { name: "Executive Assistant", description: "Administrative support to the President, and liaison with directors, members and stakeholders.", director: "ea", team: [], solo: true }
          ]
        },
        {
          name: "Office of the Executive Vice President",
          description: "The EVP oversees general operations and membership growth, monitors and coordinates the LO's programmes, supervises the other Vice Presidents, and stands in for the President when needed.",
          lead: "evp",
          units: [
            { name: "Programs and Projects 1", description: "Internal Projects, Planning and Execution.", director: "pp1", team: [] },
            { name: "Programs and Projects 2", description: "External Invitations, Trainings, Non-LO Events.", director: "pp2", team: [] },
            { name: "Sponsorship and Partnership", description: "Sponsorship, Partnership, Funds.", director: "sp", team: [] },
            { name: "Awards and Documentation", description: "Issuing Awards, Award Filing, Documentation.", director: "ad", team: [] },
            { name: "Alumni Affairs", description: "Inform, Interaction, Database, Engage.", director: "alumni", team: [] },
            { name: "Sport Committee", description: "Sporting activities, inter-LO fixtures, equipment and venues.", director: "sports", team: [] },
            { name: "Vice Presidents", description: "The EVP supervises the activities of the other Vice Presidents. Their directorates are listed in offices 03 and 04.", director: "vp-ib", leadLabel: "Vice President", team: [{ name: "Simisola Naomi Babatunde", role: "Vice President (International and Community)", label: "Vice President" }], solo: true }
          ]
        },
        {
          name: "Office of the Vice President (Individual and Business)",
          description: "Responsible for the general branding, reputation and publicity of the LO, and for promoting activities in the JCI Areas of Opportunity assigned by the President.",
          lead: "vp-ib",
          units: [
            { name: "Media and Communications 1", description: "Publicity, Community Management, Audience Engagement, PR, Content Creation.", director: "mc1", team: [] },
            { name: "Media and Communications 2", description: "Branding, Content Creation, Graphics Design, Design Identity.", director: "mc2", team: [] },
            { name: "Editorial", description: "Newsletter, Article Writing/Blog Content, Magazine.", director: "eic", team: [] },
            { name: "Welfare", description: "General Welfare, Feeding, Member Checkups.", director: "welfare", team: [] }
          ]
        },
        {
          name: "Office of the Vice President (International and Community)",
          description: "Plans and coordinates all training, development and skill-up activities, and promotes activities in the JCI Areas of Opportunity assigned by the President.",
          lead: "vp-ic",
          units: [
            { name: "Membership and Growth 1", description: "Publicity, Awareness, Training, Recruitment.", director: "mg1", team: [] },
            { name: "Membership and Growth 2", description: "Database, Engagement, Retention.", director: "mg2", team: [] },
            { name: "Skills and Development", description: "Training, Development, Members Upskilling.", director: "skills", team: [] },
            { name: "Conference, Travels and Tours", description: "Conference, Travels, Tours, Transportation.", director: "ctt", team: [] }
          ]
        }
      ]
    },

    "2025/26": {
      theme: "",
      archived: true,      // shows "Board list coming soon" until people are added
      people: [],
      offices: []
    }
  },

  /* ---------- PROJECTS (Projects page) ----------
     One entry per project, newest year first. Only use figures from the
     official project reports. Leave out money amounts and partner names
     unless they have been cleared for public use.
     category: "Education" | "Health" | "Community" | "Membership & Experience"
     photo: landscape photo, e.g. "assets/projects/educate-a-child.jpg"   */
  projects: [
    { year: "2025/26", date: "Nov 2025 – Feb 2026", name: "Educate A Child", category: "Education",
      summary: "Five weeks of free tutoring in 22 subjects at Bright Achievers Academy, Bariga, an outreach day with mentorship sessions, and a bookshelf of 300+ books left at the school. The team also trained the students for a debate competition, which they went on to win.",
      stat: "516+", statLabel: "students reached",
      chairs: "Temiloluwa Oluwatimilehin and Princess Ellis (Outreach); Shulamite Tohabru and Jessica Ezeoke (Tutoring)", photo: "" },
    { year: "2025/26", date: "May 2026", name: "Clean the Community", category: "Community",
      summary: "Our first environmental project, themed Zero Waste. Environmental talks for students at CMS Grammar School, Bariga, 15 waste and recycling bins donated, and a clean-up of Bariga Marketplace.",
      stat: "500+", statLabel: "students · 15 bins donated",
      chairs: "Akinremi Oluwajuwonlo Daniel and Molade Elizabeth Omolara", photo: "" },
    { year: "2025/26", date: "June 2026", name: "Her Cycle, Her Health", category: "Health",
      summary: "Menstrual health education for girls and boys at Akoka Junior Secondary School. Over 300 girls received sanitary pads and flow trackers, and the school now has a Pad Bank stocked with 200 pads.",
      stat: "335", statLabel: "students reached",
      chairs: "Olayele Rachael and Dada Oretoluwafunmi", photo: "" },
    { year: "2025/26", date: "June 2026", name: "Blood and Wellness Drive", category: "Health",
      summary: "Redesigned from a blood drive into a wellness day: free health screenings, talks on youth health and stress, blood donation awareness, and first aid and hands-only CPR training.",
      stat: "135", statLabel: "participants · 95 screened",
      chairs: "Korede Favour, Samuel Okoh and Olayanju Oluwabusayo", photo: "" },
    { year: "2025/26", date: "June 2026", name: "Mental Health Awareness", category: "Health",
      summary: "A webinar on Prioritising Mental Wellbeing in Academic Spaces, covering academic pressure, burnout and coping, with an anonymous question box so students could ask freely.",
      stat: "2", statLabel: "expert speakers",
      chairs: "Mercy Ajayi", photo: "" },
    { year: "2025/26", date: "June 2026", name: "Public Speaking & Spelling Bee", category: "Education",
      summary: "We wrote the rules, scoring, topics and word list, sourced the judges and ran scoring and timekeeping for a campus public speaking competition and spelling bee.",
      stat: "25", statLabel: "competitors · 100+ audience",
      chairs: "", photo: "" },
    { year: "2025/26", date: "Dec 2025", name: "Matriculation Awareness", category: "Community",
      summary: "Members and volunteers welcomed new students across campus during matriculation, introducing them to JCIN UNILAG one conversation at a time.",
      stat: "", statLabel: "",
      chairs: "Umoinyang Ekopema and Olaleye Phoebe", photo: "" },
    { year: "2025/26", date: "Nov 2025", name: "Back-to-School Hangout", category: "Membership & Experience",
      summary: "The first project of the year: a team-based day of games and fun at UBA Park, themed Sun, Snacks and Fun, open to members and friends.",
      stat: "90", statLabel: "attendees",
      chairs: "Dada Oretoluwafunmi Praise and Akinremi Oluwajuwonlo Daniel", photo: "" },
    { year: "2025/26", date: "Feb 2026", name: "Valentine Project", category: "Membership & Experience",
      summary: "Celebrating community love through kindness, connection and service: acts of kindness on campus, letters of love, a gift exchange, and a movie and karaoke night.",
      stat: "6", statLabel: "activities in one week",
      chairs: "Ajao Glory and Emordi Emmanuella", photo: "" },
    { year: "2025/26", date: "June 2026", name: "Sports Day", category: "Membership & Experience",
      summary: "An inter-organisation sports day with three invited student organisations: football, basketball, track races and indoor games. Our teams won male football, female football and basketball.",
      stat: "3/3", statLabel: "team titles won",
      chairs: "Bisi and Isaac", photo: "" },
    { year: "2025/26", date: "Feb 2026", name: "Programs & Projects Team Hangout", category: "Membership & Experience",
      summary: "Gather and Groove: a day of games and bonding at Lagoon Front for the Programs & Projects team.",
      stat: "26", statLabel: "members",
      chairs: "Giwa Taiwo Hameedah and Simisola Maymunah", photo: "" }
  ],

  /* This year's planned projects (from the 2026/27 plans of action). */
  upcomingProjects: [
    { category: "Education", names: ["Educate A Child", "Back-to-School Hangout", "Public Speaking & Spelling Bee"] },
    { category: "Health", names: ["Blood & Wellness Drive", "Her Cycle, Her Health", "Mental Health Awareness", "Cardio Health Partnership"] },
    { category: "Community", names: ["Clean the Community", "Matriculation Awareness"] },
    { category: "Membership & Experience", names: ["Valentine Project", "Sports Day", "JCIN UNILAG Week"] },
    { category: "Legacy", names: ["40th Anniversary & Convention", "Alumni engagement"] }
  ],

  /* ---------- PAST PRESIDENTS (Leadership page) ----------
     Newest first. Alumni Affairs to complete the full list. */
  pastPresidents: [
    { name: "Ibukunoluwa David-Oluwole", year: "2025/26", theme: "" },
    { name: "Isaac Temitope Ajenifuja", year: "2024/25", theme: "" },
    { name: "Baiyewunmi Olalekan", year: "2014", theme: "" }
  ],

  /* ---------- HISTORY (About page) ----------
     From Alumni Affairs / Anniversary & Convention Committee. */
  foundedYear: "",
  milestones: [
    // { year: "1987", text: "JCIN UNILAG chartered as a local organisation of JCI Nigeria." },
  ]
};
