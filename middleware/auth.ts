export default function ({ store, redirect }: any) {
  if (process.client && !store.state.userLogged) return redirect('/')
}
