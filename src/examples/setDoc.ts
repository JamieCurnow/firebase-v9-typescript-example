import { doc, setDoc } from '@firebase/firestore'
import { usersCol } from '../composables/useDb'

export const setJamiesUser = async () => {
  const userRef = doc(usersCol, 'user_12345')
  await setDoc(userRef, {
    age: 30,
    firstName: 'Jamie',
    lastName: 'Curnow'
  })
}