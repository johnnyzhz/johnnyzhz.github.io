// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notes",
          title: "Notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "All publications by Johnny Zhang.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-books",
          title: "Books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-new-personal-website",
        
          title: "New Personal Website",
        
        description: "Johnny&#39;s new personal website is now live! Check out the new features and design.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/New-Personal-Website/";
          
        },
      },{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/isdsa/";
            },},{id: "books-machine-learning-for-social-and-behavioral-research",
          title: 'Machine Learning for Social and Behavioral Research',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/machine_learning/";
            },},{id: "books-practical-statistical-power-analysis-using-webpower-and-r",
          title: 'Practical Statistical Power Analysis Using Webpower and R',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/webpower/";
            },},{id: "news-2026-isdsa-meeting-in-beijing",
          title: '2026 ISDSA Meeting in Beijing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-structural-equation-modeling-with-network-data-and-text-data",
          title: 'Structural Equation Modeling with Network Data and Text Data',
          description: "igSEM.org is created to provide information on an IES funded project [R305D210023](https://ies.ed.gov/funding/grantsearch/details.asp?ID=4540) to develop methods and software for network data and text data analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%7A%68%61%6E%67%34@%6E%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0590-2196# your ORCID ID", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CPT7KjUAAAAJ", "_blank");
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
