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
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
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
