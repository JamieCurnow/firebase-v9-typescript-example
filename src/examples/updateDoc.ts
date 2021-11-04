import { doc, updateDoc } from '@firebase/firestore'
import { booksCol } from '../composables/useDb'

export const updateBook = async () => {
  const bookDocRef = doc(booksCol, 'book_12345')
  await updateDoc(bookDocRef, {
    'meta.created': new Date().toISOString()
  })
}