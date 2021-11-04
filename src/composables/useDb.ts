// Get the imports
import { initializeApp } from 'firebase/app'
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore'

// Init the firebase app
export const firebaseApp = initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
})

// Export firestore incase we need to access it directly
export const firestore = getFirestore()

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

// Import all your model types
import { User } from 'src/types/User'
import { Author } from 'src/types/Author'
import { Book } from 'src/types/Book'

// export all your collections
export const usersCol = createCollection<User>('users')
export const authorsCol = createCollection<Author>('authors')
export const booksCol = createCollection<Book>('books')
