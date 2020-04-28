export const state = () => ({
  recipeContent: [
    {
      id: 0,
      title: 'Papa A La Huancaina',
      description: '',
      image: '/Recipes/PapaALaHuancaina.JPG',
      tinyimg: '/Recipes/Tiny/PapaALaHuancaina.png',
    },
    {
      id: 1,
      title: 'Tallarin Saltado',
      description: '',
      image: '/Recipes/TallarinSaltado.JPG',
      tinyimg: '/Recipes/Tiny/TallarinSaltado.png',
    },
    {
      id: 2,
      title: 'Tallarin Verde',
      description: '',
      image: '/Recipes/TallarinVerde.JPG',
      tinyimg: '/Recipes/Tiny/TallarinVerde.png',
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
