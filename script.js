const SITE = {
  name: "Activities",
  tagline: "Discovery for families, aligned to real calendars",
  email: "hello@activitieshub.in",
  partnerEmail: "partners@activitieshub.in",
  phone: "+91 98765 43210",
  founderLine: "Built by a parent-first team focused on discovery, calendar alignment, and reminders.",
};

const CATEGORY_META = {
  extracurricular: {
    title: "Extra-curricular classes",
    short: "Music, dance and performance",
    description: "Creative, confidence-building classes across music, movement, rhythm and stage presence.",
  },
  sports: {
    title: "Sports",
    short: "Movement and team play",
    description: "From racquet sports to team drills, discover nearby options that fit school schedules.",
  },
  academic: {
    title: "Academic classes",
    short: "Language, maths and science support",
    description: "Structured academic classes for concept building, confidence and exam readiness.",
  },
  extraAcademy: {
    title: "Extra-academy classes",
    short: "Competitive edge programs",
    description: "Enrichment programs such as mental maths, olympiad prep and specialist learning tracks.",
  },
  camps: {
    title: "Summer camps",
    short: "Holiday programs and intensives",
    description: "Vacation-friendly camps blending learning, play and social experiences.",
  },
  workshops: {
    title: "Weekend workshops",
    short: "Short-format discovery experiences",
    description: "Low-commitment weekend workshops from creative and experiential brands.",
  },
  trends: {
    title: "Kids Trending",
    short: "Parenting reads and signals",
    description: "Curated reads inspired by what modern parents are searching, sharing and planning around.",
  },
};

const CATEGORY_VISUALS = {
  extracurricular: { icon: "♫", start: "#6d5ef9", end: "#a855f7", glow: "#f9a8d4" },
  sports: { icon: "◉", start: "#18b7a1", end: "#0ea5e9", glow: "#86efac" },
  academic: { icon: "✦", start: "#2563eb", end: "#7c3aed", glow: "#93c5fd" },
  extraAcademy: { icon: "∞", start: "#0f766e", end: "#14b8a6", glow: "#99f6e4" },
  camps: { icon: "☼", start: "#ff9e5e", end: "#f97316", glow: "#fde68a" },
  workshops: { icon: "✎", start: "#ec4899", end: "#8b5cf6", glow: "#f9a8d4" },
  trends: { icon: "✷", start: "#14233f", end: "#475569", glow: "#cbd5e1" },
};

const CATALOG = [
  {
    id: "piano-foundations",
    category: "extracurricular",
    title: "Piano Foundations",
    provider: "Melody Lane Studio",
    area: "South Delhi",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-18T16:00:00+05:30",
    end: "2026-04-18T17:00:00+05:30",
    price: "₹1,800 / month",
    blurb: "Keyboard basics, rhythm games and first performance pieces for young beginners.",
    tags: ["Music", "Beginner"],
    type: "class",
  },
  {
    id: "western-dance-lab",
    category: "extracurricular",
    title: "Western Dance Lab",
    provider: "Spin Studio Kids",
    area: "Gurugram",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-19T17:00:00+05:30",
    end: "2026-04-19T18:00:00+05:30",
    price: "₹2,200 / month",
    blurb: "High-energy choreography with freestyle foundations, posture work and performance confidence.",
    tags: ["Dance", "Performance"],
    type: "class",
  },
  {
    id: "bollywood-dance-beats",
    category: "extracurricular",
    title: "Bollywood Dance Beats",
    provider: "StepOut Collective",
    area: "Noida",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-02T17:30:00+05:30",
    end: "2026-05-02T18:30:00+05:30",
    price: "₹2,100 / month",
    blurb: "Popular Bollywood routines, expression training and festival-ready group practice.",
    tags: ["Dance", "Popular"],
    type: "class",
  },
  {
    id: "classical-dance-gurukul",
    category: "extracurricular",
    title: "Classical Dance Gurukul",
    provider: "Nritya Roots",
    area: "Central Delhi",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-22T16:30:00+05:30",
    end: "2026-04-22T17:30:00+05:30",
    price: "₹2,400 / month",
    blurb: "Technique-focused classical dance training with mudras, rhythm counting and discipline.",
    tags: ["Dance", "Classical"],
    type: "class",
  },
  {
    id: "ballet-basics",
    category: "extracurricular",
    title: "Ballet Basics",
    provider: "Tiny Toes Academy",
    area: "South Delhi",
    age: "3-5",
    month: "May 2026",
    start: "2026-05-10T10:30:00+05:30",
    end: "2026-05-10T11:15:00+05:30",
    price: "₹2,300 / month",
    blurb: "Grace, balance and movement for little learners in a soft-introduction ballet format.",
    tags: ["Dance", "Early Years"],
    type: "class",
  },
  {
    id: "folk-dance-circle",
    category: "extracurricular",
    title: "Folk Dance Circle",
    provider: "Rangmanch Juniors",
    area: "West Delhi",
    age: "6-8",
    month: "June 2026",
    start: "2026-06-07T11:00:00+05:30",
    end: "2026-06-07T12:00:00+05:30",
    price: "₹1,900 / month",
    blurb: "Regional folk forms taught through movement stories, costumes and rhythm circles.",
    tags: ["Dance", "Culture"],
    type: "class",
  },
  {
    id: "vocal-performance-club",
    category: "extracurricular",
    title: "Vocal Performance Club",
    provider: "Sur Studio",
    area: "Gurugram",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-09T16:30:00+05:30",
    end: "2026-05-09T17:30:00+05:30",
    price: "₹2,000 / month",
    blurb: "Breathing, pitch, mic confidence and ensemble practice for expressive young singers.",
    tags: ["Music", "Singing"],
    type: "class",
  },
  {
    id: "guitar-jam-starters",
    category: "extracurricular",
    title: "Guitar Jam Starters",
    provider: "String Theory Kids",
    area: "Online",
    age: "9-12",
    month: "April 2026",
    start: "2026-04-06T17:00:00+05:30",
    end: "2026-04-06T18:00:00+05:30",
    price: "₹1,700 / month",
    blurb: "Chord progressions, strumming patterns and easy song practice from home.",
    tags: ["Music", "Online"],
    type: "class",
  },
  {
    id: "drum-rhythm-builders",
    category: "extracurricular",
    title: "Drum Rhythm Builders",
    provider: "Beat Garage",
    area: "Noida",
    age: "13+",
    month: "June 2026",
    start: "2026-06-12T18:00:00+05:30",
    end: "2026-06-12T19:00:00+05:30",
    price: "₹2,600 / month",
    blurb: "Foundational drumming, timing, fills and collaborative rhythm sessions for older learners.",
    tags: ["Music", "Advanced Beginner"],
    type: "class",
  },
  {
    id: "basketball-league-prep",
    category: "sports",
    title: "Basketball League Prep",
    provider: "Half Court Academy",
    area: "Gurugram",
    age: "9-12",
    month: "April 2026",
    start: "2026-04-21T17:15:00+05:30",
    end: "2026-04-21T18:15:00+05:30",
    price: "₹2,400 / month",
    blurb: "Footwork, dribbling, passing and scrimmage time for team-oriented learners.",
    tags: ["Team Sport", "After School"],
    type: "class",
  },
  {
    id: "badminton-smash-basics",
    category: "sports",
    title: "Badminton Smash Basics",
    provider: "ShuttleUp",
    area: "Noida",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-23T17:00:00+05:30",
    end: "2026-04-23T18:00:00+05:30",
    price: "₹2,000 / month",
    blurb: "Grip, stance, serves and fast-reaction drills in beginner-friendly groups.",
    tags: ["Racquet", "Beginner"],
    type: "class",
  },
  {
    id: "table-tennis-reflex-lab",
    category: "sports",
    title: "Table-tennis Reflex Lab",
    provider: "SpinServe",
    area: "Central Delhi",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-06T18:00:00+05:30",
    end: "2026-05-06T19:00:00+05:30",
    price: "₹2,100 / month",
    blurb: "Reflex-based drills, rally technique and match-play basics for fast learners.",
    tags: ["Indoor Sport", "Precision"],
    type: "class",
  },
  {
    id: "cricket-nets-pro",
    category: "sports",
    title: "Cricket Nets Pro",
    provider: "BoundaryBox",
    area: "West Delhi",
    age: "9-12",
    month: "April 2026",
    start: "2026-04-25T08:30:00+05:30",
    end: "2026-04-25T10:00:00+05:30",
    price: "₹2,800 / month",
    blurb: "Batting, bowling and fielding practice with weekend net sessions and fitness work.",
    tags: ["Outdoor", "Weekend"],
    type: "class",
  },
  {
    id: "football-skills-club",
    category: "sports",
    title: "Football Skills Club",
    provider: "GoalLine Juniors",
    area: "South Delhi",
    age: "6-8",
    month: "June 2026",
    start: "2026-06-14T08:00:00+05:30",
    end: "2026-06-14T09:15:00+05:30",
    price: "₹2,500 / month",
    blurb: "Ball control, agility ladders, mini-games and confidence for young players.",
    tags: ["Outdoor", "Energy"],
    type: "class",
  },
  {
    id: "athletics-sprint-club",
    category: "sports",
    title: "Athletics Sprint Club",
    provider: "TrackNest",
    area: "Noida",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-16T07:30:00+05:30",
    end: "2026-05-16T08:30:00+05:30",
    price: "₹2,200 / month",
    blurb: "Running mechanics, jumps, relays and conditioning for multi-event exploration.",
    tags: ["Track", "Fitness"],
    type: "class",
  },
  {
    id: "handball-team-lab",
    category: "sports",
    title: "Handball Team Lab",
    provider: "PlayForward",
    area: "Gurugram",
    age: "9-12",
    month: "July 2026",
    start: "2026-07-04T17:30:00+05:30",
    end: "2026-07-04T18:30:00+05:30",
    price: "₹2,300 / month",
    blurb: "Passing patterns, court awareness and team coordination for first-time handball players.",
    tags: ["Team Sport", "Coordination"],
    type: "class",
  },
  {
    id: "throwball-champs",
    category: "sports",
    title: "Throwball Champs",
    provider: "SkyArc School of Sport",
    area: "Central Delhi",
    age: "9-12",
    month: "June 2026",
    start: "2026-06-20T17:00:00+05:30",
    end: "2026-06-20T18:00:00+05:30",
    price: "₹1,950 / month",
    blurb: "Serve, catch, throw and team communication drills in a fun social setting.",
    tags: ["Team Sport", "Social"],
    type: "class",
  },
  {
    id: "pickleball-starters",
    category: "sports",
    title: "Pickleball Starters",
    provider: "RallySquare",
    area: "South Delhi",
    age: "13+",
    month: "May 2026",
    start: "2026-05-24T09:30:00+05:30",
    end: "2026-05-24T10:30:00+05:30",
    price: "₹2,100 / month",
    blurb: "Fast-growing court sport with easy entry, skill ladders and mixed-age community play.",
    tags: ["Racquet", "Trending"],
    type: "class",
  },
  {
    id: "paddle-social",
    category: "sports",
    title: "Paddle Social",
    provider: "CourtSide Kids",
    area: "Dwarka",
    age: "13+",
    month: "July 2026",
    start: "2026-07-11T08:00:00+05:30",
    end: "2026-07-11T09:00:00+05:30",
    price: "₹2,900 / month",
    blurb: "Social paddle sessions for older kids who want tactical play and court confidence.",
    tags: ["Racquet", "Advanced Beginner"],
    type: "class",
  },
  {
    id: "english-enrichment",
    category: "academic",
    title: "English Enrichment",
    provider: "Wordcraft Studio",
    area: "Online",
    age: "9-12",
    month: "April 2026",
    start: "2026-04-20T18:00:00+05:30",
    end: "2026-04-20T19:00:00+05:30",
    price: "₹1,900 / month",
    blurb: "Reading comprehension, writing confidence and speaking exercises in small online cohorts.",
    tags: ["Language", "Online"],
    type: "class",
  },
  {
    id: "hindi-reading-lab",
    category: "academic",
    title: "Hindi Reading Lab",
    provider: "Vaani Circle",
    area: "Central Delhi",
    age: "6-8",
    month: "May 2026",
    start: "2026-05-12T16:30:00+05:30",
    end: "2026-05-12T17:30:00+05:30",
    price: "₹1,600 / month",
    blurb: "Vocabulary building, reading fluency and storytelling for early Hindi learners.",
    tags: ["Language", "Foundation"],
    type: "class",
  },
  {
    id: "sanskrit-basics",
    category: "academic",
    title: "Sanskrit Basics",
    provider: "Vedic Steps",
    area: "South Delhi",
    age: "9-12",
    month: "June 2026",
    start: "2026-06-09T17:00:00+05:30",
    end: "2026-06-09T18:00:00+05:30",
    price: "₹1,700 / month",
    blurb: "Introductory Sanskrit through chants, word roots and guided language practice.",
    tags: ["Language", "Culture"],
    type: "class",
  },
  {
    id: "spanish-conversation-club",
    category: "academic",
    title: "Spanish Conversation Club",
    provider: "Hola Kids",
    area: "Gurugram",
    age: "9-12",
    month: "April 2026",
    start: "2026-04-28T18:15:00+05:30",
    end: "2026-04-28T19:00:00+05:30",
    price: "₹2,000 / month",
    blurb: "Fun conversational Spanish with vocabulary games, songs and practical role-play.",
    tags: ["Language", "Global Exposure"],
    type: "class",
  },
  {
    id: "maths-confidence-builder",
    category: "academic",
    title: "Maths Confidence Builder",
    provider: "Number Nook",
    area: "Noida",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-24T17:00:00+05:30",
    end: "2026-04-24T18:00:00+05:30",
    price: "₹1,750 / month",
    blurb: "Hands-on maths reasoning using games, patterns and school-aligned concept reinforcement.",
    tags: ["Maths", "Foundation"],
    type: "class",
  },
  {
    id: "abacus-maths-sprint",
    category: "academic",
    title: "Abacus Maths Sprint",
    provider: "BrainBeads",
    area: "West Delhi",
    age: "6-8",
    month: "May 2026",
    start: "2026-05-18T17:15:00+05:30",
    end: "2026-05-18T18:00:00+05:30",
    price: "₹1,900 / month",
    blurb: "Mental calculation speed-building using bead structures, visualisation and weekly drills.",
    tags: ["Maths", "Speed"],
    type: "class",
  },
  {
    id: "science-explorers",
    category: "academic",
    title: "Science Explorers",
    provider: "Lab Lantern",
    area: "South Delhi",
    age: "9-12",
    month: "June 2026",
    start: "2026-06-17T17:00:00+05:30",
    end: "2026-06-17T18:15:00+05:30",
    price: "₹2,200 / month",
    blurb: "Inquiry-led science with simple experiments, observation journals and concept maps.",
    tags: ["STEM", "Hands-On"],
    type: "class",
  },
  {
    id: "chemistry-concept-lab",
    category: "academic",
    title: "Chemistry Concept Lab",
    provider: "Atom House",
    area: "Online",
    age: "13+",
    month: "July 2026",
    start: "2026-07-06T18:30:00+05:30",
    end: "2026-07-06T19:30:00+05:30",
    price: "₹2,400 / month",
    blurb: "Structured chemistry revision, reaction logic and concept simplification for senior students.",
    tags: ["STEM", "Senior"],
    type: "class",
  },
  {
    id: "physics-foundation",
    category: "academic",
    title: "Physics Foundation",
    provider: "Motion Mind",
    area: "Gurugram",
    age: "13+",
    month: "June 2026",
    start: "2026-06-22T18:00:00+05:30",
    end: "2026-06-22T19:15:00+05:30",
    price: "₹2,500 / month",
    blurb: "Concept-led mechanics and problem solving that bridges school curriculum with intuition.",
    tags: ["STEM", "Problem Solving"],
    type: "class",
  },
  {
    id: "biology-discovery",
    category: "academic",
    title: "Biology Discovery",
    provider: "GreenCell Academy",
    area: "Noida",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-26T17:30:00+05:30",
    end: "2026-05-26T18:30:00+05:30",
    price: "₹2,050 / month",
    blurb: "Nature systems, life science basics and visual learning for biology-curious kids.",
    tags: ["STEM", "Life Science"],
    type: "class",
  },
  {
    id: "singapore-mental-maths",
    category: "extraAcademy",
    title: "Singapore Mental Maths",
    provider: "Numerica Edge",
    area: "Online",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-27T17:30:00+05:30",
    end: "2026-04-27T18:15:00+05:30",
    price: "₹2,100 / month",
    blurb: "Visual reasoning, number bonds and fast-thinking strategies using Singapore methods.",
    tags: ["Maths", "Enrichment"],
    type: "class",
  },
  {
    id: "iipm-entrance-explorer",
    category: "extraAcademy",
    title: "IIPM Entrance Explorer",
    provider: "Scholar Track",
    area: "South Delhi",
    age: "13+",
    month: "June 2026",
    start: "2026-06-25T18:00:00+05:30",
    end: "2026-06-25T19:15:00+05:30",
    price: "₹2,700 / month",
    blurb: "Structured preparation track for older learners exploring specialist entrance-style programs.",
    tags: ["Exam Prep", "Senior"],
    type: "class",
  },
  {
    id: "olympiad-prep-circle",
    category: "extraAcademy",
    title: "Olympiad Prep Circle",
    provider: "Bright Medal",
    area: "Gurugram",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-14T18:00:00+05:30",
    end: "2026-05-14T19:00:00+05:30",
    price: "₹2,450 / month",
    blurb: "Weekly olympiad-focused reasoning, maths puzzles and timed practice rounds.",
    tags: ["Competition", "Reasoning"],
    type: "class",
  },
  {
    id: "coding-logic-sprint",
    category: "extraAcademy",
    title: "Coding Logic Sprint",
    provider: "ByteBloom",
    area: "Noida",
    age: "9-12",
    month: "July 2026",
    start: "2026-07-08T17:30:00+05:30",
    end: "2026-07-08T18:30:00+05:30",
    price: "₹2,300 / month",
    blurb: "Algorithmic thinking and beginner coding logic through visual, project-led lessons.",
    tags: ["STEM", "Future Skills"],
    type: "class",
  },
  {
    id: "steam-explorer-camp",
    category: "camps",
    title: "STEAM Explorer Camp",
    provider: "Maker Wharf",
    area: "Gurugram",
    age: "6-8",
    month: "June 2026",
    start: "2026-06-01T10:00:00+05:30",
    end: "2026-06-01T13:00:00+05:30",
    price: "₹5,800 / week",
    blurb: "Robotics, crafts, science demos and maker challenges packed into a holiday camp format.",
    tags: ["Camp", "STEM"],
    type: "class",
  },
  {
    id: "multisport-summer-camp",
    category: "camps",
    title: "Multi-sport Summer Camp",
    provider: "PlayField Co.",
    area: "South Delhi",
    age: "6-8",
    month: "June 2026",
    start: "2026-06-08T08:30:00+05:30",
    end: "2026-06-08T11:30:00+05:30",
    price: "₹6,400 / week",
    blurb: "Rotate through football, athletics, basketball and fun fitness in one flexible camp.",
    tags: ["Camp", "Sports"],
    type: "class",
  },
  {
    id: "art-theatre-camp",
    category: "camps",
    title: "Art & Theatre Camp",
    provider: "Canvas Stage",
    area: "Central Delhi",
    age: "9-12",
    month: "June 2026",
    start: "2026-06-15T10:00:00+05:30",
    end: "2026-06-15T13:00:00+05:30",
    price: "₹6,100 / week",
    blurb: "Painting, costume-making, improv and mini stage performances for creative campers.",
    tags: ["Camp", "Arts"],
    type: "class",
  },
  {
    id: "nature-adventure-camp",
    category: "camps",
    title: "Nature Adventure Camp",
    provider: "Wild Trails",
    area: "Noida",
    age: "9-12",
    month: "July 2026",
    start: "2026-07-01T09:30:00+05:30",
    end: "2026-07-01T12:30:00+05:30",
    price: "₹6,800 / week",
    blurb: "Outdoor exploration, eco-games and guided activity circuits for curious adventurers.",
    tags: ["Camp", "Outdoor"],
    type: "class",
  },
  {
    id: "muso-music-jam",
    category: "workshops",
    title: "Muso Music Jam",
    provider: "Muso",
    area: "South Delhi",
    age: "3-5",
    month: "April 2026",
    start: "2026-04-26T11:00:00+05:30",
    end: "2026-04-26T12:00:00+05:30",
    price: "₹850 / workshop",
    blurb: "Short-format rhythm and sound discovery for little learners and first-time explorers.",
    tags: ["Workshop", "Music"],
    type: "class",
  },
  {
    id: "mishka-story-lab",
    category: "workshops",
    title: "Mishka Story Lab",
    provider: "Mishka",
    area: "Gurugram",
    age: "6-8",
    month: "May 2026",
    start: "2026-05-03T11:30:00+05:30",
    end: "2026-05-03T12:30:00+05:30",
    price: "₹950 / workshop",
    blurb: "Storytelling, imagination prompts and creative response activities in a weekend format.",
    tags: ["Workshop", "Storytelling"],
    type: "class",
  },
  {
    id: "playseum-builder-day",
    category: "workshops",
    title: "Playseum Builder Day",
    provider: "Playseum",
    area: "Noida",
    age: "6-8",
    month: "April 2026",
    start: "2026-04-12T10:30:00+05:30",
    end: "2026-04-12T12:30:00+05:30",
    price: "₹1,100 / workshop",
    blurb: "Hands-on building, sensory stations and collaborative play in an activity museum setting.",
    tags: ["Workshop", "Maker"],
    type: "class",
  },
  {
    id: "purple-panda-art-popup",
    category: "workshops",
    title: "Purple Panda Art Pop-up",
    provider: "Purple Panda",
    area: "Central Delhi",
    age: "3-5",
    month: "June 2026",
    start: "2026-06-06T11:00:00+05:30",
    end: "2026-06-06T12:00:00+05:30",
    price: "₹900 / workshop",
    blurb: "Mess-friendly art play, colours, texture work and parent-child participation.",
    tags: ["Workshop", "Art"],
    type: "class",
  },
  {
    id: "tic-tac-toe-strategy-lab",
    category: "workshops",
    title: "Tic-Tac Toe Strategy Lab",
    provider: "Tic-Tac Toe",
    area: "Online",
    age: "9-12",
    month: "May 2026",
    start: "2026-05-23T16:00:00+05:30",
    end: "2026-05-23T17:00:00+05:30",
    price: "₹700 / workshop",
    blurb: "Short tactical games, reasoning patterns and puzzle-based decision making online.",
    tags: ["Workshop", "Logic"],
    type: "class",
  },
  {
    id: "slower-weekends-article",
    category: "trends",
    title: "Why kids need slower weekends",
    provider: "Parenting Desk",
    area: "Online",
    age: "Parents",
    month: "April 2026",
    start: "2026-04-18T10:00:00+05:30",
    end: "2026-04-18T10:20:00+05:30",
    price: "Free read",
    blurb: "A quick read on avoiding overscheduling and building space for boredom, play and reset.",
    tags: ["Article", "Family Rhythm"],
    type: "article",
  },
  {
    id: "structured-sports-readiness",
    category: "trends",
    title: "5 signs your child is ready for structured sports",
    provider: "Parenting Desk",
    area: "Online",
    age: "Parents",
    month: "April 2026",
    start: "2026-04-25T10:00:00+05:30",
    end: "2026-04-25T10:20:00+05:30",
    price: "Free read",
    blurb: "Look for interest, attention span, social cues and recovery rhythms before committing long-term.",
    tags: ["Article", "Sports Planning"],
    type: "article",
  },
  {
    id: "summer-camp-checklist",
    category: "trends",
    title: "Summer camp checklist for working families",
    provider: "Parenting Desk",
    area: "Online",
    age: "Parents",
    month: "May 2026",
    start: "2026-05-09T09:30:00+05:30",
    end: "2026-05-09T09:50:00+05:30",
    price: "Free read",
    blurb: "A planning checklist covering commute, meals, screen-free time, trial days and backup options.",
    tags: ["Article", "Summer Planning"],
    type: "article",
  },
  {
    id: "music-builds-focus-article",
    category: "trends",
    title: "How music classes build focus beyond the stage",
    provider: "Parenting Desk",
    area: "Online",
    age: "Parents",
    month: "June 2026",
    start: "2026-06-13T10:30:00+05:30",
    end: "2026-06-13T10:50:00+05:30",
    price: "Free read",
    blurb: "Why rhythm, repetition and performance routines often spill over into better study habits.",
    tags: ["Article", "Music Learning"],
    type: "article",
  },
];

const STORAGE_KEY = "activities-reminders-v1";
const MONTH_ORDER = ["April 2026", "May 2026", "June 2026", "July 2026"];
const AGE_ORDER = ["3-5", "6-8", "9-12", "13+", "Parents"];

function currentPage() {
  return document.body?.dataset.page || "home";
}

function getCurrentFile() {
  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
}

function injectChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const page = currentPage();

  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="site-shell">
        <a class="brand" href="index.html" aria-label="Activities home">
          <img class="brand-logo" src="assets/logo.svg" alt="Activities logo" />
          <span class="brand-copy">
            <span class="brand-name">${SITE.name}</span>
            <span class="brand-tagline">${SITE.tagline}</span>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" data-nav-toggle><span></span></button>
        <nav class="site-nav" data-site-nav>
          <a class="nav-link ${page === "home" ? "active" : ""}" href="index.html">Home</a>
          <a class="nav-link ${page === "about" ? "active" : ""}" href="about.html">About us</a>
          <details class="nav-details">
            <summary class="nav-pill">Recommended classes</summary>
            <div class="nav-menu">
              <a href="classes.html#extracurricular">Extra-curricular classes</a>
              <a href="classes.html#sports">Sports</a>
              <a href="classes.html#academic">Academic classes</a>
              <a href="classes.html#extraAcademy">Extra-academy classes</a>
              <a href="classes.html#camps">Summer camps</a>
              <a href="classes.html#workshops">Weekend workshops</a>
              <a href="classes.html#trends">Kids Trending</a>
            </div>
          </details>
          <a class="nav-link ${page === "classes" ? "active" : ""}" href="classes.html">Featured classes</a>
          <a class="nav-link ${page === "activities" ? "active" : ""}" href="activities.html">All activities</a>
          <a class="nav-link ${page === "partners" ? "active" : ""}" href="partners.html">List a class</a>
          <a class="nav-link ${page === "contact" ? "active" : ""}" href="contact.html">Reach us</a>
          <span class="reminder-chip">Saved reminders <strong data-reminder-count>0</strong></span>
        </nav>
      </div>
    `;
  }

  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="footer-shell">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="index.html">
              <img class="brand-logo" src="assets/logo.svg" alt="Activities logo" />
              <span class="brand-copy">
                <span class="brand-name">${SITE.name}</span>
                <span class="brand-tagline">Find, plan and remember better</span>
              </span>
            </a>
            <p>${SITE.founderLine}</p>
            <p><strong>Email:</strong> <a href="mailto:${SITE.email}">${SITE.email}</a><br /><strong>Phone:</strong> <a href="tel:${SITE.phone.replace(/\s+/g, "")}">${SITE.phone}</a></p>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul class="footer-list">
              <li><a href="about.html">About us</a></li>
              <li><a href="classes.html">Featured classes & activities</a></li>
              <li><a href="activities.html">All activities grid</a></li>
              <li><a href="partners.html">List a class</a></li>
              <li><a href="contact.html">Reach us</a></li>
            </ul>
          </div>
          <div>
            <h3>Policies</h3>
            <ul class="footer-list">
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms-users.html">T&C for users</a></li>
              <li><a href="terms-partners.html">T&C for partners</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 ${SITE.name}. MVP website for discovery, calendar alignment and reminders.</span>
          <span>Inspired by the family activity subscription model and the need for better local discovery.</span>
        </div>
      </div>
    `;
  }
}

function setupNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function getSavedReminders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveReminders(next) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  updateReminderBadge();
  renderSavedReminderPanels();
  updateReminderButtons();
}

function updateReminderBadge() {
  const count = getSavedReminders().length;
  document.querySelectorAll("[data-reminder-count]").forEach((node) => {
    node.textContent = String(count);
  });
}

function findItem(id) {
  return CATALOG.find((item) => item.id === id);
}

function isReminderSaved(id) {
  return getSavedReminders().some((item) => item.id === id);
}

function toggleReminder(id) {
  const item = findItem(id);
  if (!item) return;

  const reminders = getSavedReminders();
  const exists = reminders.some((entry) => entry.id === id);

  if (exists) {
    const next = reminders.filter((entry) => entry.id !== id);
    saveReminders(next);
    showToast(`${item.title} removed from reminders.`);
    return;
  }

  const entry = {
    id: item.id,
    title: item.title,
    provider: item.provider,
    area: item.area,
    start: item.start,
    end: item.end,
    category: item.category,
    type: item.type,
  };

  const next = [...reminders, entry].sort((a, b) => new Date(a.start) - new Date(b.start));
  saveReminders(next);
  showToast(`${item.title} saved. Your family planner has been updated.`);
}

function formatDateTime(iso) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

function formatShortDate(iso) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(iso));
}

function formatRange(start, end) {
  return `${formatDateTime(start)} – ${new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(new Date(end))}`;
}

function parsePriceValue(price) {
  const match = price.match(/[\d,]+/);
  return match ? Number(match[0].replace(/,/g, "")) : 0;
}

function clampText(text, max = 118) {
  return text.length <= max ? text : `${text.slice(0, max).trimEnd()}…`;
}

function getCategoryVisual(category) {
  return CATEGORY_VISUALS[category] || CATEGORY_VISUALS.extracurricular;
}

function escapeSvgText(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapSvgText(value, lineLength = 18, maxLines = 2) {
  const words = value.split(/\s+/);
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > lineLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines.slice(0, maxLines);
}

function getActivityImage(item) {
  const meta = CATEGORY_META[item.category];
  const visual = getCategoryVisual(item.category);
  const lines = wrapSvgText(item.title, 17, 2);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
          <stop stop-color="${visual.start}" />
          <stop offset="1" stop-color="${visual.end}" />
        </linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="44" /></filter>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#g)" />
      <circle cx="990" cy="160" r="220" fill="${visual.glow}" opacity="0.28" filter="url(#blur)" />
      <circle cx="240" cy="760" r="240" fill="white" opacity="0.08" />
      <rect x="68" y="68" width="320" height="58" rx="29" fill="rgba(255,255,255,0.18)" />
      <text x="104" y="106" fill="white" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700">${escapeSvgText(meta.title)}</text>
      <text x="74" y="266" fill="rgba(255,255,255,0.96)" font-family="Inter, Arial, sans-serif" font-size="150" font-weight="800">${escapeSvgText(visual.icon)}</text>
      <text x="74" y="540" fill="white" font-family="Inter, Arial, sans-serif" font-size="74" font-weight="800">${escapeSvgText(lines[0] || item.title)}</text>
      ${lines[1] ? `<text x="74" y="626" fill="white" font-family="Inter, Arial, sans-serif" font-size="74" font-weight="800">${escapeSvgText(lines[1])}</text>` : ""}
      <text x="74" y="718" fill="rgba(255,255,255,0.82)" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="600">${escapeSvgText(item.provider)} · ${escapeSvgText(item.area)}</text>
      <text x="74" y="782" fill="rgba(255,255,255,0.92)" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="700">${escapeSvgText(item.price)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function toICSDate(iso) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function downloadICS(id) {
  const item = findItem(id);
  if (!item) return;

  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Activities//Family Planner//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${item.id}@activitieshub.in`,
    `DTSTAMP:${toICSDate(new Date().toISOString())}`,
    `DTSTART:${toICSDate(item.start)}`,
    `DTEND:${toICSDate(item.end)}`,
    `SUMMARY:${item.title}`,
    `DESCRIPTION:${item.blurb} | Provider: ${item.provider}`,
    `LOCATION:${item.area}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const file = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${item.id}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`${item.title} downloaded as a calendar event.`);
}

function showToast(message) {
  const root = document.getElementById("toast-root");
  if (!root) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  root.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function reminderMarkup(reminder) {
  const meta = CATEGORY_META[reminder.category];
  return `
    <div class="reminder-item">
      <strong>${reminder.title}</strong>
      <span>${meta ? meta.title : "Saved item"} · ${reminder.provider}</span>
      <span>${formatDateTime(reminder.start)} · ${reminder.area}</span>
      <div class="reminder-actions">
        <button class="button button-sm button-secondary" type="button" data-calendar-id="${reminder.id}">Add to calendar</button>
        <button class="button button-sm button-danger" type="button" data-remove-reminder="${reminder.id}">Remove</button>
      </div>
    </div>
  `;
}

function renderSavedReminderPanels() {
  const reminders = getSavedReminders();

  const sidebar = document.getElementById("saved-reminders");
  if (sidebar) {
    sidebar.innerHTML = reminders.length
      ? `<div class="reminder-list">${reminders.map(reminderMarkup).join("")}</div>`
      : `
        <div class="empty-state">
          <strong>No reminders saved yet.</strong>
          <p>Use the classes page to shortlist activities and keep your family calendar aligned.</p>
        </div>
      `;
  }

  const homePlanner = document.getElementById("home-planner");
  if (homePlanner) {
    homePlanner.innerHTML = reminders.length
      ? `<div class="planner-list">${reminders
          .slice(0, 4)
          .map(
            (entry) => `
            <div class="planner-item">
              <strong>${entry.title}</strong>
              <span>${formatShortDate(entry.start)} · ${entry.area}</span>
              <span>${entry.provider}</span>
            </div>
          `,
          )
          .join("")}</div>`
      : `
        <div class="empty-state">
          <strong>Your planner is empty.</strong>
          <p>Explore classes, save reminders and build a realistic weekly schedule without losing track.</p>
        </div>
      `;
  }

  bindReminderPanelActions();
}

function bindReminderPanelActions() {
  document.querySelectorAll("[data-remove-reminder]").forEach((button) => {
    button.onclick = () => {
      const id = button.getAttribute("data-remove-reminder");
      toggleReminder(id);
    };
  });

  document.querySelectorAll("[data-calendar-id]").forEach((button) => {
    button.onclick = () => {
      const id = button.getAttribute("data-calendar-id");
      downloadICS(id);
    };
  });
}

function classCardMarkup(item) {
  const saved = isReminderSaved(item.id);
  const isArticle = item.type === "article";
  const meta = CATEGORY_META[item.category];

  return `
    <article class="class-card">
      <div class="class-card-media">
        <img class="activity-image" src="${getActivityImage(item)}" alt="${item.title}" loading="lazy" />
        <div class="media-chrome">
          <span class="media-badge">${meta.title}</span>
          <span class="media-tag ${saved ? "is-saved" : ""}">${saved ? "Saved" : isArticle ? "Read later" : item.tags[0]}</span>
        </div>
      </div>
      <div class="class-card-body">
        <div class="card-top">
          <span class="pill">${item.area}</span>
          <span class="pill">${item.age}</span>
          <span class="pill">${item.month}</span>
        </div>
        <div class="card-copy">
          <h3>${item.title}</h3>
          <p class="caption">${item.provider}</p>
          <p>${clampText(item.blurb)}</p>
        </div>
        <div class="meta-grid">
          <span class="pill">${item.price}</span>
          ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
        </div>
        <ul class="meta-list">
          <li><strong>${isArticle ? "Suggested slot" : "Schedule"}:</strong> ${formatRange(item.start, item.end)}</li>
          <li><strong>Best for:</strong> ${item.age === "Parents" ? "Family planning and discovery" : `Age group ${item.age}`}</li>
        </ul>
        <div class="card-actions">
          <button class="button button-sm button-secondary" type="button" data-detail-id="${item.id}">View details</button>
          ${
            isArticle
              ? ""
              : `<button class="button button-sm button-secondary" type="button" data-calendar-id="${item.id}">Add to calendar</button>`
          }
          <button class="button button-sm ${saved ? "button-tertiary" : "button-primary"}" type="button" data-reminder-id="${item.id}">
            ${saved ? "Reminder saved" : isArticle ? "Save reading reminder" : "Set reminder"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function productCardMarkup(item) {
  const saved = isReminderSaved(item.id);
  const isArticle = item.type === "article";
  const meta = CATEGORY_META[item.category];

  return `
    <article class="product-card">
      <button class="product-card-media" type="button" data-detail-id="${item.id}" aria-label="View details for ${item.title}">
        <img class="activity-image" src="${getActivityImage(item)}" alt="${item.title}" loading="lazy" />
        <span class="product-category">${meta.title}</span>
      </button>
      <div class="product-card-body">
        <div class="card-inline">
          <span class="caption">${item.provider}</span>
          <span class="card-price">${item.price}</span>
        </div>
        <div>
          <h3>${item.title}</h3>
          <p>${clampText(item.blurb, 108)}</p>
        </div>
        <div class="meta-grid">
          <span class="pill">${item.area}</span>
          <span class="pill">${item.age}</span>
          <span class="pill">${item.month}</span>
        </div>
        <ul class="meta-list compact-list">
          <li><strong>${isArticle ? "Suggested slot" : "Schedule"}:</strong> ${formatShortDate(item.start)}</li>
          <li><strong>${isArticle ? "Format" : "Provider type"}:</strong> ${isArticle ? "Editorial / guide" : item.area === "Online" ? "Online" : "In person"}</li>
        </ul>
        <div class="card-actions">
          <button class="button button-sm button-secondary" type="button" data-detail-id="${item.id}">Quick view</button>
          ${
            isArticle
              ? ""
              : `<button class="button button-sm button-secondary" type="button" data-calendar-id="${item.id}">Calendar</button>`
          }
          <button class="button button-sm ${saved ? "button-tertiary" : "button-primary"}" type="button" data-reminder-id="${item.id}">
            ${saved ? "Saved" : isArticle ? "Save read" : "Save"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function activityDetailMarkup(item) {
  const saved = isReminderSaved(item.id);
  const isArticle = item.type === "article";
  const meta = CATEGORY_META[item.category];

  return `
    <div class="dialog-grid">
      <div class="dialog-media">
        <img class="activity-image" src="${getActivityImage(item)}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="dialog-copy">
        <span class="eyebrow accent">${meta.title}</span>
        <h2>${item.title}</h2>
        <p class="lead">${item.blurb}</p>
        <div class="badge-row">
          <span class="badge">${item.provider}</span>
          <span class="badge">${item.area}</span>
          <span class="badge">${item.age}</span>
          <span class="badge">${item.month}</span>
        </div>
        <div class="detail-meta-grid">
          <div class="detail-item">
            <span>Price</span>
            <strong>${item.price}</strong>
          </div>
          <div class="detail-item">
            <span>${isArticle ? "Suggested slot" : "Schedule"}</span>
            <strong>${formatRange(item.start, item.end)}</strong>
          </div>
          <div class="detail-item">
            <span>Category</span>
            <strong>${meta.title}</strong>
          </div>
          <div class="detail-item">
            <span>Best for</span>
            <strong>${item.age === "Parents" ? "Parents and family planning" : `Age group ${item.age}`}</strong>
          </div>
        </div>
        <div class="meta-grid">
          ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
        </div>
        <div class="inline-note">
          ${
            isArticle
              ? "Save this read for later if you want a planning reminder in your family shortlist."
              : "Use quick reminder saving for shortlisting, then add the event to your real calendar when it becomes a likely fit."
          }
        </div>
        <div class="hero-actions">
          <button class="button button-primary" type="button" data-detail-reminder="${item.id}">
            ${saved ? "Reminder saved" : isArticle ? "Save reading reminder" : "Set reminder"}
          </button>
          ${
            isArticle
              ? ""
              : `<button class="button button-secondary" type="button" data-detail-calendar="${item.id}">Add to calendar</button>`
          }
        </div>
      </div>
    </div>
  `;
}

function ensureActivityDialog() {
  if (document.getElementById("activity-dialog")) return;

  const dialog = document.createElement("dialog");
  dialog.id = "activity-dialog";
  dialog.className = "activity-dialog";
  dialog.innerHTML = `
    <div class="dialog-panel">
      <button class="dialog-close" type="button" aria-label="Close details" data-dialog-close>×</button>
      <div id="activity-dialog-content"></div>
    </div>
  `;

  document.body.appendChild(dialog);

  dialog.addEventListener("click", (event) => {
    const panel = dialog.querySelector(".dialog-panel");
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const inside = rect.left <= event.clientX && event.clientX <= rect.right && rect.top <= event.clientY && event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });

  dialog.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
}

function openActivityDetail(id) {
  const item = findItem(id);
  if (!item) return;

  ensureActivityDialog();

  const dialog = document.getElementById("activity-dialog");
  const content = document.getElementById("activity-dialog-content");
  if (!dialog || !content) return;

  const wasOpen = dialog.open;
  content.innerHTML = activityDetailMarkup(item);

  content.querySelectorAll("[data-detail-reminder]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleReminder(id);
      openActivityDetail(id);
    });
  });

  content.querySelectorAll("[data-detail-calendar]").forEach((button) => {
    button.addEventListener("click", () => downloadICS(id));
  });

  if (!wasOpen && typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function optionsForCategory(items, key) {
  const values = [...new Set(items.map((item) => item[key]))];

  if (key === "month") {
    return values.sort((a, b) => MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b));
  }

  if (key === "age") {
    return values.sort((a, b) => AGE_ORDER.indexOf(a) - AGE_ORDER.indexOf(b));
  }

  return values.sort((a, b) => a.localeCompare(b, "en"));
}

function categorySectionMarkup(category, items) {
  const meta = CATEGORY_META[category];
  const areas = optionsForCategory(items, "area");
  const ages = optionsForCategory(items, "age");
  const months = optionsForCategory(items, "month");

  return `
    <section class="catalog-section" id="${category}" data-category-section="${category}">
      <header>
        <div>
          <span class="eyebrow accent">${meta.title}</span>
          <h2>${meta.short}</h2>
        </div>
        <p>${meta.description}</p>
      </header>
      <div class="filter-row">
        <label>
          Select area
          <select data-filter-select data-category="${category}" data-filter-key="area">
            <option value="all">All areas</option>
            ${areas.map((value) => `<option value="${value}">${value}</option>`).join("")}
          </select>
        </label>
        <label>
          Select age-group
          <select data-filter-select data-category="${category}" data-filter-key="age">
            <option value="all">All age-groups</option>
            ${ages.map((value) => `<option value="${value}">${value}</option>`).join("")}
          </select>
        </label>
        <label>
          Select month
          <select data-filter-select data-category="${category}" data-filter-key="month">
            <option value="all">All months</option>
            ${months.map((value) => `<option value="${value}">${value}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="cards-grid" data-category-cards="${category}"></div>
    </section>
  `;
}

function renderCategoryCards(category) {
  const section = document.querySelector(`[data-category-section="${category}"]`);
  const cardsRoot = document.querySelector(`[data-category-cards="${category}"]`);
  if (!section || !cardsRoot) return;

  const items = CATALOG.filter((item) => item.category === category);
  const filters = {};
  section.querySelectorAll("[data-filter-select]").forEach((select) => {
    filters[select.dataset.filterKey] = select.value;
  });

  const filtered = items.filter((item) => {
    return ["area", "age", "month"].every((key) => filters[key] === "all" || item[key] === filters[key]);
  });

  cardsRoot.innerHTML = filtered.length
    ? filtered.map(classCardMarkup).join("")
    : `
      <div class="empty-state">
        <strong>No matches yet.</strong>
        <p>Try another area, age-group or month to widen the discovery set.</p>
      </div>
    `;

  bindCardActions();
}

function renderClassesPage() {
  const root = document.getElementById("catalog-root");
  if (!root) return;

  const orderedCategories = Object.keys(CATEGORY_META);
  root.innerHTML = orderedCategories
    .map((category) => categorySectionMarkup(category, CATALOG.filter((item) => item.category === category)))
    .join("");

  document.querySelectorAll("[data-filter-select]").forEach((select) => {
    select.addEventListener("change", () => {
      renderCategoryCards(select.dataset.category);
    });
  });

  orderedCategories.forEach(renderCategoryCards);
}

function bindCardActions() {
  document.querySelectorAll("[data-reminder-id]").forEach((button) => {
    button.onclick = () => {
      const id = button.getAttribute("data-reminder-id");
      toggleReminder(id);
    };
  });

  document.querySelectorAll("[data-calendar-id]").forEach((button) => {
    button.onclick = () => {
      const id = button.getAttribute("data-calendar-id");
      downloadICS(id);
    };
  });

  document.querySelectorAll("[data-detail-id]").forEach((button) => {
    button.onclick = () => {
      const id = button.getAttribute("data-detail-id");
      openActivityDetail(id);
    };
  });
}

function updateReminderButtons() {
  document.querySelectorAll("[data-reminder-id]").forEach((button) => {
    const id = button.getAttribute("data-reminder-id");
    const saved = isReminderSaved(id);
    const item = findItem(id);
    button.className = `button button-sm ${saved ? "button-tertiary" : "button-primary"}`;
    button.textContent = saved
      ? "Reminder saved"
      : item?.type === "article"
        ? "Save reading reminder"
        : "Set reminder";
  });
}

function renderHomeFeatured() {
  const root = document.getElementById("home-featured-grid");
  if (!root) return;

  const featured = [
    "piano-foundations",
    "basketball-league-prep",
    "maths-confidence-builder",
    "singapore-mental-maths",
    "steam-explorer-camp",
    "muso-music-jam",
  ]
    .map(findItem)
    .filter(Boolean);

  root.innerHTML = featured.map(classCardMarkup).join("");
  bindCardActions();
}

function setupActivityMarketplace() {
  const grid = document.getElementById("activity-market-grid");
  if (!grid) return;

  const categorySelect = document.querySelector("[data-market-category]");
  const areaSelect = document.querySelector("[data-market-area]");
  const ageSelect = document.querySelector("[data-market-age]");
  const monthSelect = document.querySelector("[data-market-month]");

  const setOptions = (select, values, label) => {
    if (!select || select.dataset.optionsLoaded === "true") return;
    select.innerHTML = [`<option value="all">${label}</option>`, ...values.map((value) => `<option value="${value}">${value}</option>`)].join("");
    select.dataset.optionsLoaded = "true";
  };

  setOptions(categorySelect, Object.keys(CATEGORY_META).map((key) => CATEGORY_META[key].title), "All categories");
  setOptions(areaSelect, optionsForCategory(CATALOG, "area"), "All areas");
  setOptions(ageSelect, optionsForCategory(CATALOG, "age"), "All age-groups");
  setOptions(monthSelect, optionsForCategory(CATALOG, "month"), "All months");

  document.querySelectorAll("[data-market-control]").forEach((control) => {
    if (control.dataset.bound === "true") return;
    control.addEventListener(control.tagName === "INPUT" ? "input" : "change", renderActivityMarketplace);
    control.dataset.bound = "true";
  });

  const reset = document.querySelector("[data-market-reset]");
  if (reset && reset.dataset.bound !== "true") {
    reset.addEventListener("click", () => {
      document.querySelectorAll("[data-market-control]").forEach((control) => {
        if (control.tagName === "INPUT") {
          control.value = "";
        } else {
          control.value = control.querySelector("option")?.value || "all";
        }
      });
      renderActivityMarketplace();
    });
    reset.dataset.bound = "true";
  }

  renderActivityMarketplace();
}

function renderActivityMarketplace() {
  const grid = document.getElementById("activity-market-grid");
  if (!grid) return;

  const search = document.querySelector("[data-market-search]")?.value.trim().toLowerCase() || "";
  const category = document.querySelector("[data-market-category]")?.value || "all";
  const area = document.querySelector("[data-market-area]")?.value || "all";
  const age = document.querySelector("[data-market-age]")?.value || "all";
  const month = document.querySelector("[data-market-month]")?.value || "all";
  const sort = document.querySelector("[data-market-sort]")?.value || "soonest";

  const filtered = CATALOG.filter((item) => {
    const haystack = [item.title, item.provider, item.area, item.age, item.month, item.blurb, CATEGORY_META[item.category].title, ...item.tags]
      .join(" ")
      .toLowerCase();

    return (
      (!search || haystack.includes(search)) &&
      (category === "all" || CATEGORY_META[item.category].title === category) &&
      (area === "all" || item.area === area) &&
      (age === "all" || item.age === age) &&
      (month === "all" || item.month === month)
    );
  }).sort((a, b) => {
    if (sort === "price-low") return parsePriceValue(a.price) - parsePriceValue(b.price);
    if (sort === "price-high") return parsePriceValue(b.price) - parsePriceValue(a.price);
    if (sort === "title") return a.title.localeCompare(b.title, "en");
    return new Date(a.start) - new Date(b.start);
  });

  const count = document.querySelector("[data-market-count]");
  if (count) count.textContent = String(filtered.length);

  grid.innerHTML = filtered.length
    ? filtered.map(productCardMarkup).join("")
    : `
      <div class="empty-state market-empty">
        <strong>No activities match these filters.</strong>
        <p>Reset the filters or search more broadly to reopen the full catalog.</p>
      </div>
    `;

  bindCardActions();
}

function renderCounts() {
  const totalClasses = CATALOG.filter((item) => item.type === "class").length;
  const totalCategories = Object.keys(CATEGORY_META).length;
  const totalProviders = new Set(CATALOG.map((item) => item.provider)).size;
  const totalItems = CATALOG.length;

  document.querySelectorAll("[data-total-classes]").forEach((node) => {
    node.textContent = String(totalClasses);
  });

  document.querySelectorAll("[data-total-categories]").forEach((node) => {
    node.textContent = String(totalCategories);
  });

  document.querySelectorAll("[data-total-providers]").forEach((node) => {
    node.textContent = String(totalProviders);
  });

  document.querySelectorAll("[data-total-items]").forEach((node) => {
    node.textContent = String(totalItems);
  });
}

function setupDemoForms() {
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      showToast("Thanks! This MVP captures the front-end experience — connect the form to your CRM or inbox next.");
    });
  });
}

function renderLastUpdated() {
  document.querySelectorAll("[data-last-updated]").forEach((node) => {
    node.textContent = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "long",
    }).format(new Date());
  });
}

function init() {
  injectChrome();
  setupNavigation();
  ensureActivityDialog();
  updateReminderBadge();
  renderSavedReminderPanels();
  renderHomeFeatured();
  renderClassesPage();
  setupActivityMarketplace();
  renderCounts();
  setupDemoForms();
  renderLastUpdated();
}

window.addEventListener("DOMContentLoaded", init);
