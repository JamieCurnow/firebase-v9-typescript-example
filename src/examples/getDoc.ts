import { doc, getDoc } from '@firebase/firestore'
import { usersCol } from 'src/composables/useDb'

export const getUser = async () => {
  const userDocRef = doc(usersCol, 'user_12345')
  const userDoc = await getDoc(userDocRef)
  const userData = userDoc.data()
  if (userData) console.log(userData.firstName)
}