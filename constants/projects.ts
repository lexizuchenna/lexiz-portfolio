const projects: Array<Project> = [
  {
    id: "PRJ-01",
    title: "Solid Living Support",
    category: "Corporate Website",
    description:
      "A professional web platform designed to showcase care and support services with clarity, accessibility, and trust.",
    image: "/images/solidlivingsupport.png",
    client: "Solid Living Support",
    link: "https://solidlivingltd.co.uk/",
    slug: "solid-living-support",
    year: "2025",
    role: "Fullstack Developer",
    stack: ["Next.js", "React"],
    timeline: "1 Month",
    summary:
      "A modern, responsive website built to represent a support service provider, focusing on clear service presentation, accessibility, and a polished user experience.",
    deepDive:
      "This project involved designing and developing a clean, user-friendly web presence tailored for a care and support organization.\n\nThe application was built with Next.js and React to ensure fast load times, SEO friendliness, and smooth navigation across devices.\n\nEmphasis was placed on accessibility, content clarity, and maintainable code structure, resulting in a scalable platform that effectively communicates the organisation’s services and values.",
  },
  {
    id: "PRJ-02",
    title: "Freshview Cleaning Service",
    category: "Business Website",
    description:
      "A sleek business website built to promote professional cleaning services and drive customer engagement.",
    image: "/images/freshview.png",
    client: "",
    link: "https://freshviewltd.co.uk",
    slug: "freshview-services",
    year: "2025",
    role: "Fullstack Developer",
    stack: ["Next.js", "React"],
    timeline: "1 Month",
    summary:
      "A responsive marketing website developed for a cleaning service company, focused on service visibility, brand credibility, and lead generation.",
    deepDive:
      "Freshview Cleaning Service was developed as a modern business website aimed at clearly presenting services and strengthening online presence.\n\nUsing Next.js and React, the project delivers fast performance, responsive layouts, and a smooth browsing experience across all devices.\n\nThe build prioritised clean UI design, simple navigation, and scalable architecture, making it easy to update content and expand features as the business grows.",
  },
  {
    id: "PRJ-03",
    title: "Firebase Auth SDK",
    category: "Mobile SDK",
    description:
      "A react native SDK that allows developers seamlessly integrate Firebase Auth",
    image: "/images/hngauthsdk.png",
    client: "",
    link: "https://www.npmjs.com/package/hng-auth-sdk",
    slug: "hng-auth-sdk",
    year: "2025",
    role: "Mobile Developer",
    stack: ["React Native", "Firebase", "Expo"],
    timeline: "1 week",
    summary:
      "A modular, reusable Authentication SDK for React Native (Expo) powered by Firebase. It supports both Headless Mode (logic only) and Default Mode (Pre-built UI), featuring Google Sign‑In, Email/Password auth, and persistent state management.",
    deepDive:
      "A modular and reusable Authentication SDK designed specifically for React Native (Expo) applications, built on top of Firebase authentication services.\n\nThe SDK was architected to support two flexible integration modes: Headless Mode, which exposes authentication logic and state management for full UI control, and Default Mode, which provides ready-to-use, customizable authentication screens for rapid integration.\n\nIt includes support for Google Sign-In and Email/Password authentication, with persistent session handling to ensure seamless user experiences across app restarts.\n\nEmphasis was placed on clean architecture, reusability, and developer experience, allowing teams to easily integrate secure authentication while maintaining scalability and consistent state management across mobile applications.",
    repo: "https://github.com/lexizuchenna/AuthSdk",
  },
  {
    id: "PRJ-04",
    title: "Crypto Wallet",
    category: "Mobile App",
    description:
      "A react native App that displays list of crypto currencies with a description page",
    image: "/images/cryptowallet.png",
    client: "",
    link: "https://github.com/lexizuchenna/hng-mobile-4/releases/tag/v1.0.0",
    slug: "hng-auth-sdk",
    year: "2025",
    role: "Mobile Developer",
    stack: ["React Native", "Expo"],
    timeline: "1 week",
    summary:
      "A sleek and responsive mobile application built with React Native and Expo for tracking real-time cryptocurrency prices, viewing market trends, and managing a personal list of favorite coins. It fetches live data from the CoinGecko API to provide up-to-the-minute information.",
    deepDive:
      "A sleek and responsive mobile application developed with React Native and Expo, focused on delivering real-time cryptocurrency market insights through an intuitive and user-friendly interface.\n\nThe application integrates with the CoinGecko API to fetch live pricing data, ensuring accurate and up-to-date information on a wide range of cryptocurrencies.\n\nCore features include real-time price tracking, market trend visualization, and the ability to manage a personalized list of favorite coins for quick access.\n\nThe project emphasizes performance, clean UI design, and efficient data handling, resulting in a smooth experience even with frequent data updates and dynamic market changes.",
    repo: "https://github.com/lexizuchenna/hng-mobile-4",
  },
];

export default projects;
