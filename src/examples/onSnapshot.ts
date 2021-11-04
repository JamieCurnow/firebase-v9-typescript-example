import { onSnapshot } from '@firebase/firestore'
import { authorsCol } from 'src/composables/useDb'

export const logAllAuthorNamesWhenAnyAuthorChanges = () => {
  return onSnapshot(authorsCol, (snap) => {
    const authors = snap.docs.map(x => x.data())
    const authorNames = authors.map(x => `${x.firstName} ${x.lastName}`)
    console.log(authorNames)
  })
}