# cobbe4cb3bc9ff04467e56205

Warning: Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)

Quick start:

```
$ npm install
$ npm start
```

Head over to https://vitejs.dev/ to learn more about using vite

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

# FIREBASE Setup details :

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAFfHoAJ1FqYSa-njTOJq7U7ccqNmhaOtY",
authDomain: "react-notes-vite.firebaseapp.com",
projectId: "react-notes-vite",
storageBucket: "react-notes-vite.appspot.com",
messagingSenderId: "682516206116",
appId: "1:682516206116:web:58bd6a413cacac3b54feb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
