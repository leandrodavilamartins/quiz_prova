import './app.css'
import App from './App.svelte'
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {firebaseConfig} from '../public/credentials'

const myApp = initializeApp(firebaseConfig);

export const db = getFirestore(myApp);

const app = new App({
  target: document.getElementById('app')
})

export default app
