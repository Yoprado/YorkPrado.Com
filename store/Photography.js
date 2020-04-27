export const state = () => ({
  photographyContent: [
    {
      id: 0,
      title: 'Amsterdam, Netherlands',
      description: '',
      image: '/Photography/Amsterdam.JPG',
    },
    {
      id: 1,
      title: 'Basel, Swizterland',
      description: '',
      image: '/Photography/Basel.JPG',
    },
    {
      id: 2,
      title: 'Berlin, Germany',
      description: '',
      image: '/Photography/Berlin.JPG',
    },
    {
      id: 3,
      title: 'Brussels, Belgium',
      description: '',
      image: '/Photography/Brussels.JPG',
    },
    {
      id: 4,
      title: 'Interlaken, Switzerland',
      description: '',
      image: '/Photography/Interlaken.JPG',
    },
    {
      id: 5,
      title: 'Budapest, Hungary',
      description: '',
      image: '/Photography/Budapest.JPG',
    },
    {
      id: 6,
      title: 'London, England',
      description: '',
      image: '/Photography/London.JPG',
    },
    {
      id: 7,
      title: 'Paris, France',
      description: '',
      image: '/Photography/Paris.JPG',
    },
    {
      id: 8,
      title: 'Prague, Czech Republic',
      description: '',
      image: '/Photography/Prague.JPG',
    },
    {
      id: 9,
      title: 'Vienna, Austria',
      description: '',
      image: '/Photography/Vienna.JPG',
    },
  ],
});
export const getters = {
  getRandomFour: state => {
    // eslint-disable-next-line no-var
    var arr = [];
    const photoarr = [];
    while (arr.length < 4) {
      // eslint-disable-next-line no-var
      var r = Math.floor(Math.random() * state.photographyContent.length);
      if (!arr.includes(r)) {
        arr.push(r);
        photoarr.push(state.photographyContent[r]);
      }
    }
    return photoarr;
  },
};
export const mutations = () => ({});
export const actions = () => ({});
