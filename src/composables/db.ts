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

// and maintain this obj which will type everything downstream
export const db = {
  // put firestore in here so we can access it directly if needed
  firestore,
  // And then list all of your collections with their types
  users: createCollection<User>('users'),
  authors: createCollection<Author>('authors'),
  books: createCollection<Book>('books')
}