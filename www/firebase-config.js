// =====================================================================
// FIREBASE CONFIG — the ONLY file you need to edit.
//
// 1. Go to https://console.firebase.google.com → "Add project" (free).
// 2. Inside your project: Build → Authentication → Get started →
//    enable "Email/Password" sign-in method.
// 3. Build → Firestore Database → Create database → start in
//    "production mode" → pick any location close to Ethiopia
//    (e.g. europe-west1).
// 4. Project settings (gear icon) → General → "Your apps" → click the
//    </> (web) icon → register an app (nickname anything) →
//    it will show you a firebaseConfig object. Copy those 6 values
//    into the object below, replacing the placeholders.
// 5. In Firestore → Rules tab, paste the contents of firestore.rules
//    (included alongside this file) and click "Publish".
//
// That's it — no coding. Save this file and reload the app.
// =====================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDQvYUaflgiQ5ILNbQ1blW40WN5TuzF25A",
  authDomain: "soyati-digital-shop.firebaseapp.com",
  projectId: "soyati-digital-shop",
  storageBucket: "soyati-digital-shop.firebasestorage.app",
  messagingSenderId: "878574867041",
  appId: "1:878574867041:web:469f1dc210209e72d81020"
};

// Every manager + assistant sharing one shop use the same SHOP_ID.
// Leave this as "soyat" unless you want to run more than one shop
// off the same Firebase project — in that case give each shop a
// unique short id (letters/numbers only, no spaces).
const SHOP_ID = "soyat";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
db.enablePersistence({ synchronizeTabs: true }).catch(()=>{ /* offline cache unavailable in this browser context — app still works online */ });
