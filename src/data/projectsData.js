import Genetix from "../images/genetix.png";
import PathCraft from "../images/pathCraft.png";
import Bubble from "../images/bubble.png";
import Weather from "../images/weather.png";
import Shop from "../images/shop.png";
import Mega from "../images/mega.png";
import Portfolio from "../images/portfolio.png";
import Wanderlust from "../images/wanderlust.png";
import EduAccess from "../images/EduAccess.png";
import Address from "../images/Address.png";
import Ipl from "../images/ipl.png";

export const projectsData = [
  {
    id: 1,
    slug: "genetix",
    img: Genetix,
    topic: "Genetix",
    category: "Full Stack & AI",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Socket.io", "Gemini AI", "Tailwind CSS"],
    achievement:
      "Architected multi-model AI website builder with live multi-device sandboxed previews, version snapshots, real-time WebSocket chat, and 1-click clean ZIP exports.",
    summary:
      "Full-stack AI platform turning natural language prompts into production-ready responsive websites with real-time preview and export.",
    coldStartNote: "Free tier server may take ~30s on initial cold start.",
    whyBuilt:
      "I built Genetix to bridge the gap between prompt ideas and production-grade websites without vendor lock-in, integrating multi-model LLMs with real-time browser previewing.",
    problemSolved:
      "Eliminates repetitive boilerplate and frontend coding by generating clean semantic HTML/CSS/JS with instant preview across desktop, tablet, and mobile viewports.",
    keyFeatures: [
      "Natural language prompt-to-website generation powered by Gemini, Groq, and OpenAI with automated fallback routing",
      "Live sandboxed responsive preview with instant Desktop, Tablet, and Mobile viewport switching",
      "In-browser code editor and file tree explorer with syntax highlighting and direct editing",
      "Conversational iterative refinements with full version snapshot history and 1-click rollbacks",
      "1-click clean ZIP source code export with zero vendor lock-in",
      "Real-time support and collaboration via Socket.io with media file attachments",
      "Authentication with Email verification and 1-click Google OAuth"
    ],
    impactStats: [
      "3-provider AI fallback engine (Gemini, Groq, OpenAI) for high availability generations",
      "3 responsive viewport modes (Desktop, Tablet, Mobile) in secure sandboxed iframe",
      "100% clean ZIP code export with zero proprietary runtime lock-in"
    ],
    learned: [
      "How to orchestrate multiple LLM providers with resilient fallback routing",
      "How to build secure, sandboxed code execution environments in the browser",
      "How real-time WebSockets and version snapshot systems work at scale"
    ],
    link: "https://genetix-anx.netlify.app",
    github: "https://github.com/asad-as1/website-builder",
    delay: 0.1
  },
  {
    id: 2,
    slug: "pathcraft",
    img: PathCraft,
    topic: "PathCraft",
    category: "Algorithms & Core",
    techStack: ["JavaScript", "HTML5", "CSS3", "Algorithms", "DOM APIs"],
    achievement:
      "Engineered interactive pathfinding visualizer implementing Dijkstra, A*, BFS, and DFS with custom wall drawing, dynamic speed tuning, and recursive maze generation.",
    summary:
      "Interactive grid visualizer showcasing graph traversal and shortest-path algorithms in real-time.",
    whyBuilt:
      "I built PathCraft to deeply understand graph theory and pathfinding algorithms by engineering a visual and interactive simulation from scratch.",
    problemSolved:
      "Makes abstract graph search algorithms intuitive by visualizing node explorations, frontiers, and shortest paths step-by-step.",
    keyFeatures: [
      "Visualization of Dijkstra, A* (A-Star), BFS, and DFS algorithms",
      "Interactive grid drawing: click and drag to place walls and obstacles",
      "Draggable start and target nodes for dynamic rerouting",
      "Automated recursive division maze generator",
      "Speed controls and instant clear path / clear board options",
      "Pure vanilla JavaScript engine with zero external rendering dependencies"
    ],
    impactStats: [
      "4 foundational graph algorithms implemented from scratch",
      "60 FPS smooth grid DOM rendering during real-time animation",
      "Zero third-party library dependencies (100% pure vanilla JS)"
    ],
    learned: [
      "How heuristics in A* compare against greedy and uninformed searches like BFS/Dijkstra",
      "How to manage high-frequency DOM manipulation without performance throttling",
      "How to implement graph data structures and priority queues in pure JavaScript"
    ],
    link: "https://asad-as1.github.io/PathFinder/",
    github: "https://github.com/asad-as1/PathFinder",
    delay: 0.2
  },
  {
    id: 3,
    slug: "eduaccess",
    img: EduAccess,
    topic: "EduAccess",
    category: "Full Stack & AI",
    techStack: ["MongoDB", "Express", "Node.js", "React", "Firebase", "Gemini AI"],
    achievement:
      "Built AI-assisted revision platform with 9 protected study modules, including a two-panel similarity test that returns score %, analysis, and reason-wise feedback.",
    summary:
      "AI-powered study platform for semantic recall checking, notes, and revision support.",
    coldStartNote: "Free tier server may take ~30s on initial cold start.",
    whyBuilt:
      "I built EduAccess to solve a real revision issue: students often remember concepts correctly but in different words than their notes.",
    problemSolved:
      "It solves wording mismatch in exam prep by checking semantic similarity between notes and recalled answers, instead of exact word matching.",
    keyFeatures: [
      "Two-input recall checker: notes text vs student recall text",
      "Semantic similarity accuracy percentage for remembered content",
      "Backend-generated feedback on relevance and missing meaning",
      "Hide/show original notes panel while attempting recall",
      "Study Notes sharing with search and file upload",
      "MyNotes and single-note detail workflow",
      "Text Reader with PDF/image/text extraction",
      "Summarization module for large content",
      "Q&A and question-detail discussion flow",
      "Schedule/Event module for learning planning",
      "My Activities dashboard with chart insights"
    ],
    impactStats: [
      "9 protected study routes in product flow (test, summary, text reader, notes, Q&A, schedule, activity)",
      "2-panel memory validation design (source panel + recall panel)",
      "3-level result output after check: Similarity Score %, Analysis, Reasons"
    ],
    learned: [
      "How to build meaning-based text comparison workflows",
      "How to convert subjective revision quality into measurable signals",
      "How AI feedback can improve learning outcomes beyond static notes"
    ],
    link: "https://eduaccess-as2.netlify.app/",
    github: "https://github.com/asad-as1/EduAccess",
    delay: 0.3
  },
  {
    id: 4,
    slug: "blogbuddy",
    img: Mega,
    topic: "BlogBuddy",
    category: "Full Stack & AI",
    techStack: ["MongoDB", "Express", "Node.js", "React", "Tailwind", "TinyMCE", "Firebase"],
    achievement:
      "Built social blogging platform with 11 app routes, 7 protected flows, and post-level interactions including likes, comments, favorites, and sharing.",
    summary: "Social blogging platform with publishing, interaction, and profile flows.",
    coldStartNote: "Free tier server may take ~30s on initial cold start.",
    whyBuilt:
      "I wanted to go beyond basic CRUD and build a content platform with real social engagement behavior.",
    problemSolved:
      "It helps creators publish and manage content while allowing readers to discover, like, and discuss posts in one place.",
    keyFeatures: [
      "Authenticated post creation and management",
      "Like/unlike interactions with live count updates",
      "Comment add and comment delete flows",
      "User profile and content ownership flow",
      "Rich-text editing with TinyMCE",
      "Public/private visibility handling in profile",
      "Favorites add/remove/check workflow",
      "User and post search modes",
      "Single post page with media support (image/video)",
      "Web share + copy-link fallback for posts"
    ],
    impactStats: [
      "11 frontend routes wired in router (including profile, search, favourites, post detail)",
      "7 authenticated routes behind ProtectedRoute",
      "5+ post interaction capabilities on detail page (like, comment, favorite, share, edit/delete)"
    ],
    learned: [
      "How engagement features change app architecture",
      "How to enforce ownership and auth checks in social apps",
      "How to handle richer user-generated content flows"
    ],
    link: "https://blogbuddy-as2.netlify.app/",
    github: "https://github.com/asad-as1/MegaBlog",
    delay: 0.1
  },
  {
    id: 5,
    slug: "iplcrux",
    img: Ipl,
    topic: "IplCrux",
    category: "Full Stack & AI",
    techStack: ["MongoDB", "Express", "Node.js", "React", "Chart.js", "Kaggle Dataset"],
    achievement:
      "Built IPL analytics portal with 11 routed views and comparison-oriented stats across teams, players, venues, and battle analysis.",
    summary: "IPL analytics portal for player, team, and match comparison.",
    coldStartNote: "Free tier server may take ~30s on initial cold start.",
    whyBuilt:
      "I built IplCrux to transform static IPL records into a queryable and visual analysis experience.",
    problemSolved:
      "It solves the difficulty of extracting insights from raw sports data by enabling structured comparison and exploration.",
    keyFeatures: [
      "Dedicated routes for venues, teams, players, and search",
      "Player profile with batting, bowling, and ground-performance tabs",
      "Venue year stats and batter year stats drill-down",
      "Battle page for head-to-head style analysis",
      "Team and match-level browsing screens",
      "Data-driven charts for quick interpretation",
      "Organized backend routes for sports entities"
    ],
    impactStats: [
      "11 client routes defined in IPL router setup",
      "3 major analysis axes in player deep-dive (batting, bowling, ground)",
      "5+ data domains surfaced: players, teams, venues, matches, battle views"
    ],
    learned: [
      "How to model data-heavy domains",
      "How to design APIs for analytical use-cases",
      "How to present complex data in user-friendly form"
    ],
    link: "https://iplcrux-as2.netlify.app/",
    github: "https://github.com/asad-as1/IPL",
    delay: 0.2
  },
  {
    id: 6,
    slug: "stayease",
    img: Wanderlust,
    topic: "StayEase",
    category: "Full Stack & AI",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Passport"],
    achievement:
      "Built accommodation platform with full listing lifecycle, review system, user auth, and image uploads via Cloudinary-backed storage.",
    summary: "Accommodation platform for listing, discovery, and review workflows.",
    coldStartNote: "Free tier server may take ~30s on initial cold start.",
    whyBuilt:
      "I built StayEase to understand how marketplace-style applications combine users, listings, media, and trust layers.",
    problemSolved:
      "It helps users discover and review stays while giving hosts a structured listing workflow with secure access.",
    keyFeatures: [
      "Listing index, create, show, edit, update, and delete lifecycle",
      "Cloudinary image upload pipeline",
      "Session and Passport-based authentication",
      "Signup/login/logout flow with flash messaging",
      "Review create and delete tied to listing",
      "Joi-based validation for listings/reviews",
      "REST-style forms using method-override"
    ],
    impactStats: [
      "3 core route groups in app: listings, reviews, users",
      "7 listing operations wired through listing router",
      "7-day session cookie policy configured for persistent login"
    ],
    learned: [
      "How to build multi-model full-stack systems",
      "How session auth differs from token-only flows",
      "How media handling affects product architecture"
    ],
    link: "https://stayease-m6ed.onrender.com/listings",
    github: "https://github.com/asad-as1/WanderLust",
    delay: 0.3
  },
  {
    id: 7,
    slug: "addressbook",
    img: Address,
    topic: "AddressBook",
    category: "Full Stack & AI",
    techStack: ["React", "Context API", "Node.js", "Express", "MongoDB"],
    achievement:
      "Implemented contact manager with auth-gated CRUD, table-based search/sort, and edit-in-place flow for user-owned records.",
    summary: "Authenticated contact manager for user-owned contact data.",
    coldStartNote: "Free tier server may take ~30s on initial cold start.",
    whyBuilt:
      "I built AddressBook to strengthen fundamentals of authenticated CRUD applications.",
    problemSolved:
      "It solves unstructured contact handling by centralizing contact create, edit, search, and delete flows.",
    keyFeatures: [
      "Signup/login and protected routes",
      "User-specific contact CRUD",
      "New Contact and Edit Contact reusable form flow",
      "Search across contact fields in table view",
      "Sorted and filtered contact listing",
      "Phone validation before save",
      "Delete confirmation with success/error feedback"
    ],
    impactStats: [
      "6 app routes total, with 3 protected contact-management routes",
      "5 primary contact fields managed per record (first, last, phone, address, email)",
      "2-step contact lifecycle supported from one form (create and update)"
    ],
    learned: [
      "How to connect auth with resource ownership",
      "How to design and consume clean CRUD APIs",
      "How to keep UX simple for frequent data operations"
    ],
    link: "https://address-book-as2.netlify.app/",
    github: "https://github.com/asad-as1/AddressBook",
    delay: 0.1
  },
  {
    id: 8,
    slug: "portfolio",
    img: Portfolio,
    topic: "Portfolio",
    category: "Frontend & Web",
    techStack: ["React", "Vite", "Framer Motion", "Spline", "CSS"],
    achievement:
      "Built developer portfolio with 7 routes, 11 project showcases, motion-enhanced UI, and structured project storytelling.",
    summary: "Interactive personal portfolio with polished UI and structured project presentation.",
    whyBuilt:
      "I built this portfolio to present projects with clearer story, impact, and engineering intent.",
    problemSolved:
      "It solves static self-presentation by giving recruiters a structured, interactive project discovery experience.",
    keyFeatures: [
      "Multi-route portfolio architecture",
      "Animated sections and visual hierarchy",
      "Responsive design for mobile and desktop",
      "Dedicated project details pages with Why/Problem/Learning"
    ],
    impactStats: [
      "7 public routes in portfolio router",
      "11 projects presented with structured detail data",
      "1 dedicated detail page flow for every showcased project"
    ],
    learned: [
      "How to combine design and engineering storytelling",
      "How to structure content for scanability",
      "How analytics can guide portfolio improvements"
    ],
    delay: 0.2
  },
  {
    id: 9,
    slug: "shopping-cart",
    img: Shop,
    topic: "Shopping Cart",
    category: "Frontend & Web",
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    achievement:
      "Built 2-page cart workflow with persistent local storage, quantity controls, item removal, clear-cart, and live bill calculation.",
    summary: "Vanilla JavaScript cart system with persistent item state.",
    whyBuilt:
      "I built this to understand e-commerce cart logic without depending on frameworks.",
    problemSolved:
      "It solves cart state loss and manual total calculation by automating quantity, pricing, and persistence.",
    keyFeatures: [
      "Product listing and add-to-cart flow",
      "Increment/decrement quantity controls",
      "Automatic total updates",
      "Item-wise subtotal in cart",
      "Remove single item and clear full cart",
      "Cart badge synchronization across pages",
      "LocalStorage-based persistence"
    ],
    impactStats: [
      "2 synchronized pages in user flow: shop and cart",
      "4 core cart actions: add, decrement, remove item, clear cart",
      "100% cart state persistence across refresh using localStorage"
    ],
    learned: [
      "How to manage state with plain JavaScript",
      "How event handling drives interactive UI",
      "How to keep data and DOM in sync"
    ],
    link: "https://shopcart-as2.netlify.app/",
    github: "https://github.com/asad-as1/JavaScript-Projects/tree/main/Shopping%20Cart",
    delay: 0.3
  },
  {
    id: 10,
    slug: "weather-app",
    img: Weather,
    topic: "Weather App",
    category: "Frontend & Web",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    achievement:
      "Integrated OpenWeather API with live city lookup, metric units, condition-based icon mapping, and invalid-city handling.",
    summary: "City weather lookup app using live API data.",
    whyBuilt:
      "I built it to practice real API integration and dynamic UI updates from external data.",
    problemSolved:
      "It gives quick weather access without requiring heavy apps or manual browsing.",
    keyFeatures: [
      "City search with API fetch",
      "Temperature, humidity, and wind display",
      "Weather-state visual handling",
      "Invalid city error feedback",
      "Conditional icon mapping for major weather types",
      "Show/hide weather result panel based on API response"
    ],
    impactStats: [
      "1 API endpoint integrated for live city weather data",
      "6 condition mappings handled in UI (Clouds, Clear, Rain, Drizzle, Haze, Snow)",
      "3 core weather indicators surfaced: temperature, humidity, wind"
    ],
    learned: [
      "How to work with async data in frontend",
      "How to handle API errors gracefully",
      "How to map response data to clear UI"
    ],
    link: "https://weather-as2.netlify.app/",
    github: "https://github.com/asad-as1/JavaScript-Projects/tree/main/Weather",
    delay: 0.1
  },
  {
    id: 11,
    slug: "bubble-changer",
    img: Bubble,
    topic: "Bubble Changer",
    category: "Frontend & Web",
    techStack: ["HTML", "CSS", "JavaScript", "DOM APIs"],
    achievement:
      "Created timer-based bubble game with 120-second rounds, 10-point scoring, random hit targets, and replay support.",
    summary: "Fast-paced number matching game built with JavaScript.",
    whyBuilt:
      "I built this game to practice event-driven UI and timer-based interaction patterns.",
    problemSolved:
      "It provides a simple interactive gameplay experience while demonstrating real-time frontend logic.",
    keyFeatures: [
      "Countdown timer flow",
      "Random target and bubble generation",
      "Score update on correct/incorrect match",
      "Game-over and replay behavior",
      "Click-event delegation on dynamic bubble grid",
      "Penalty logic for wrong clicks",
      "Instant HUD updates for hit, score, and timer"
    ],
    impactStats: [
      "120-second fixed game loop per round",
      "10-point reward/penalty scoring system",
      "10 random values used for targets and bubbles (0 to 9)"
    ],
    learned: [
      "How to design game loops in frontend",
      "How to manage state under time constraints",
      "How to optimize frequent UI updates"
    ],
    link: "https://bubble-changer.netlify.app/",
    github: "https://github.com/asad-as1/JavaScript-Projects/tree/main/Bubble%20Game",
    delay: 0.2
  }
];

export const getProjectBySlug = (slug) => projectsData.find((project) => project.slug === slug);
