export const state = () => ({
  photographyContent: [
    {
      id: 0,
      title: 'Amsterdam, Netherlands',
      description: '',
      image: '/Photography/Amsterdam.JPG',
      tinyimg: '/Photography/Tiny/Amsterdam.png',
    },
    {
      id: 1,
      title: 'Basel, Swizterland',
      description: '',
      image: '/Photography/Basel.JPG',
      tinyimg: '/Photography/Tiny/Basel.png',
    },
    {
      id: 2,
      title: 'Berlin, Germany',
      description: '',
      image: '/Photography/Berlin.JPG',
      tinyimg: '/Photography/Tiny/Berlin.png',
    },
    {
      id: 3,
      title: 'Brussels, Belgium',
      description: '',
      image: '/Photography/Brussels.JPG',
      tinyimg: '/Photography/Tiny/Brussels.png',
    },
    {
      id: 4,
      title: 'Interlaken, Switzerland',
      description: '',
      image: '/Photography/Interlaken.JPG',
      tinyimg: '/Photography/Tiny/Interlaken.png',
    },
    {
      id: 5,
      title: 'Budapest, Hungary',
      description: '',
      image: '/Photography/Budapest.JPG',
      tinyimg: '/Photography/Tiny/Budapest.png',
    },
    {
      id: 6,
      title: 'London, England',
      description: '',
      image: '/Photography/London.JPG',
      tinyimg: '/Photography/Tiny/London.png',
    },
    {
      id: 7,
      title: 'Paris, France',
      description: '',
      image: '/Photography/Paris.JPG',
      tinyimg: '/Photography/Tiny/Paris.png',
    },
    {
      id: 8,
      title: 'Prague, Czech Republic',
      description: '',
      image: '/Photography/Prague.JPG',
      tinyimg: '/Photography/Tiny/Prague.png',
    },
    {
      id: 9,
      title: 'Vienna, Austria',
      description: '',
      image: '/Photography/Vienna.JPG',
      tinyimg: '/Photography/Tiny/Vienna.png',
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
