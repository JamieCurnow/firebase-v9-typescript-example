// Import firestore helpers
import { doc, getDoc, getDocs, setDoc, updateDoc } from '@firebase/firestore'

// Import our db object
import { db } from './composables/db'

// Make a ref to a single user's doc
const singleUserDocRef = doc(db.users, 'user_12345')

// Set some data on that doc
await setDoc(singleUserDocRef, {
  // we have types in here!
  age: 30,
  firstName: 'James',
  lastName: 'Curnow'
})

// Update that doc
await updateDoc(singleUserDocRef, {
  // we have types in here too!
  firstName: 'Jamie'
})

// Get that doc from the db
const singleUserDoc = await getDoc(singleUserDocRef)

// See that it is typed! (Hover over singleUser)
const singleUser = singleUserDoc.data()
if (singleUser) console.log(singleUser.firstName)


// Get all the book docs from the db
const bookDocs = await getDocs(db.books)

// Hover over books and see it's typed!
const books = bookDocs.docs.map(x => x.data())
books.forEach((book) => console.log(book.title))