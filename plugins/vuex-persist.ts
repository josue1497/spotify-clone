import VuexPersistence from 'vuex-persist'

export default ({ store }: any) => {
  new VuexPersistence({
    key: 'spotify-clone',
    storage: window.localStorage,
  }).plugin(store)
}
