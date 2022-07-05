export const state = () => ({
  token: '',
  accessToken: '',
  expiresIn: -1,
  tokenType: '',
  userLogged: false,
  albums: [],
})

export const mutations = {
  setToken: (state: any, token: string) => {
    state.token = token
  },
  setAccessToken: (state: any, accessToken: string) => {
    state.accessToken = accessToken
  },
  setExpiresIn: (state: any, expiresIn: number) => {
    state.expiresIn = expiresIn
  },
  setTokenType: (state: any, tokenType: string) => {
    state.tokenType = tokenType
  },
  setUserLogged: (state: any, userLogged: boolean) => {
    state.userLogged = userLogged
  },
  addAlbum: (state: any, album: any) => {
    state.albums = [...state.albums.filter((a: string) => a !== album), album]
  },
  removeAlbum: (state: any, album: any) => {
    state.albums = [...state.albums.filter((a: string) => a !== album)]
  },
}

export const actions = {
  login(
    { commit }: any,
    { accessToken, expiresIn, tokenType, userLogged = false }: any
  ) {
    commit('setAccessToken', accessToken)
    commit('setExpiresIn', expiresIn)
    commit('setTokenType', tokenType)
    commit('setUserLogged', userLogged)
  },
  addAlbum({ commit }: any, albumId: string) {
    commit('addAlbum', albumId)
  },
  removeAlbum({ commit }: any, albumId: string) {
    commit('removeAlbum', albumId)
  },
}
