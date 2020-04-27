export const state = () => ({
  projectContent: [
    {
      id: 0,
      title: 'Building My Personal Website with Vuejs',
      description:
        'My last project had my developers work on Vue.js, so I took it upon myself to learn the framework as well and create my personal webiste from it.',
      keywords: [
        'JavaScript',
        'Vuejs',
        'Nuxtjs',
        'CSS',
        'HTML',
        'Bootstrap-Vue',
      ],
      image: '/Project/PersonalWebsite.png',
    },
    {
      id: 1,
      title: 'Exploring and Visualizing IoT hardware from Samsara',
      description:
        "I got the chance to explore Samsara's SaaS based Rest API as well as their fleet tracking hardware. In order to visualize the data, I decided to also explore the DC.js library.",
      keywords: [
        'Boostrap',
        'JQuery',
        'DCjs',
        'Nodejs',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      image: '/Project/Samsara.png',
    },
    {
      id: 2,
      title: 'Exploring Enron Dataset with Network Science',
      description:
        'Developing a web app that analyzes Enron emails through network science and analytics visualizations.',
      keywords: [
        'Sigmajs',
        'JavaScript',
        'Chartjs',
        'JQuery',
        'Neo4j',
        'Nodejs',
      ],
      image: '/Project/Enron.png',
    },
  ],
});
export const getters = {
  getProjectPicInfo: (state, getters) => id => {
    const project = {};
    let keywordStr = '';
    project.id = state.projectContent[id].id;
    project.image = state.projectContent[id].image;
    project.title = state.projectContent[id].title;
    for (let i = 0; i < state.projectContent[id].keywords.length; i++) {
      keywordStr += state.projectContent[id].keywords[i] + ' ';
    }
    project.description = keywordStr;
    return project;
  },
  getProjectLength: state => {
    return state.projectContent.length;
  },
  keywordsToString: (state, getters) => id => {
    let keywordStr = '';
    for (let i = 0; i < state.projectContent[id].keywords.length; i++) {
      keywordStr += state.projectContent[id].keywords[i] + ' ';
    }
    return keywordStr;
  },
};
export const mutations = () => ({});
export const actions = () => ({});
