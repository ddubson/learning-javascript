import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBQELN_9nnXb0uvkRCD14tMhs7iDs-l4FM",
    authDomain: "goalcoach-ac135.firebaseapp.com",
    databaseURL: "https://goalcoach-ac135.firebaseio.com",
    storageBucket: "goalcoach-ac135.appspot.com",
    messagingSenderId: "940235063018"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

