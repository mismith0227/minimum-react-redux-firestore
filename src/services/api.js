import firebase from 'firebase'
import { firebaseConfig } from '../firestore/'

class Api {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
      firebase.firestore().settings({ timestampsInSnapshots: true })
    }
    this.auth = firebase.auth()
    this.database = firebase.database()
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return this.auth.signInWithPopup(provider)
  }

  logout() {
    return this.auth.signOut()
  }

  currentUser() {
    return this.auth.currentUser
  }

  authStateChanged(emit) {
    return this.auth.onAuthStateChanged(emit)
  }

  todo(uid) {
    return firebase
      .firestore()
      .collection('todo')
      .doc(uid)
      .collection('list')
  }

  addTodo(name) {
    const createdAt = Date.now()
    const completed = false
    let uid = this.currentUser().uid
    return this.todo(uid)
      .add({
        name,
        completed,
        createdAt,
      })
      .then(docRef => {
        return docRef.id
      })
  }

  changeCompleted(updateTodo) {
    let uid = this.currentUser().uid
    return this.todo(uid)
      .doc(updateTodo.key)
      .update({
        completed: updateTodo.completed,
      })
  }

  deleteTodo(key) {
    let uid = this.currentUser().uid
    return this.todo(uid)
      .doc(key)
      .delete()
  }

  fetchTodos() {
    let uid = this.currentUser().uid
    return this.todo(uid)
      .orderBy('createdAt')
      .get()
      .then(sanpshot => {
        return sanpshot.docs
      })
  }
}

export default new Api()
