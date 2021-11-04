import { getDocs } from '@firebase/firestore'
import { booksCol } from '../composables/useDb'

export const logBookTitles = async () => {
  const bookDocs = await getDocs(booksCol)
  bookDocs.docs.forEach((bookDoc) => {
    const book = bookDoc.data()
    console.log(book.title)
  })
}