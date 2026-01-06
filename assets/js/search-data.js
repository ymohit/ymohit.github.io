// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "For detailed publications and projects, please visit the respective sections.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-do-llms-truly-understand-the-world-more-importantly-do-they-need-to",
        
          title: "Do LLMs truly understand the world? More importantly, do they need to?",
        
        description: "Compression and imitation ≠ understanding. Understanding ≠ usefulness.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/llm_understanding/";
          
        },
      },{id: "post-is-doing-science-all-about-precise-thinking",
        
          title: "Is doing science all about precise thinking?",
        
        description: "Exploring why rigorous thinking alone often kills breakthroughs before they start.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/science-thinking/";
          
        },
      },{id: "news-successfully-defended-my-phd-thesis-excited-to-join-pythia-labs-to-work-on-generative-ai-for-protein-design",
          title: 'Successfully defended my PhD thesis! 🎓 Excited to join Pythia Labs to work...',
          description: "",
          section: "News",},{id: "news-phd-thesis-available-look-at-this-beauty-fast-linear-algebra-for-gaussian-processes",
          title: 'PhD thesis available! Look at this beauty 🎓 — Fast Linear Algebra for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-neurips-2024-gaussian-process-bandits-for-top-k-recommendations-excited-to-share-this-work-on-scalable-bandit-algorithms-for-ranking-problems",
          title: 'Paper accepted to NeurIPS 2024! 🎉 “Gaussian process bandits for top-k recommendations” —...',
          description: "",
          section: "News",},{id: "news-de-novo-antibody-design-using-generative-ai-and-discrete-flow-matching-patent-published",
          title: 'De Novo antibody design using Generative AI and (discrete) flow matching — Patent...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_pythia_patent/";
            },},{id: "news-joined-optum-ai-as-lead-ai-scientist-building-ai-systems-that-simplify-healthcare-complexity",
          title: 'Joined Optum AI as Lead AI Scientist 🎉! Building AI systems that simplify...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%6E%65%63%74%32%6D%6F%68%69%74%79%61%64%61%76@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ymohit", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ymohit", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tPoZrDMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
