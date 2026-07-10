# Soyat Digital — Setup Guide

Everything in this project has already been built and wired together:
authentication, a global database so the Manager and Assistant see the same
data from any country, and an Android app project that builds itself.

There are exactly **two things only you can do**, because they require an
account in your name (I can't create accounts on your behalf). Both take
about 2 minutes each, and neither involves writing code.

---

## Step 1 — Create your free Firebase project (2 min)

Firebase is Google's backend service. It gives you login accounts and a
live database, free, with no server to maintain.

1. Go to https://console.firebase.google.com → **Add project** → give it any
   name (e.g. "Soyat Digital") → skip Google Analytics if asked → **Create**.
2. In the left menu: **Build → Authentication → Get started** → click the
   **Email/Password** provider → **Enable** → **Save**.
3. In the left menu: **Build → Firestore Database → Create database** →
   choose **Start in production mode** → pick a location (any nearby region,
   e.g. `europe-west1`) → **Enable**.
4. Click the gear icon (top left) → **Project settings** → scroll to
   "Your apps" → click the **`</>`** (web) icon → nickname it anything →
   **Register app**. Firebase will show you a block of code with 6 values
   (`apiKey`, `authDomain`, etc.).
5. Open **`www/firebase-config.js`** in this project and paste those 6
   values into the placeholders. Save the file.
6. Back in Firebase Console → **Firestore Database → Rules** tab → delete
   everything there → paste in the entire contents of **`firestore.rules`**
   (included in this project) → **Publish**.

That's it — the backend is live and working globally.

## Step 2 — Get the Android app (.apk) built (2 min)

This project already contains a working Android app and a robot (GitHub
Actions) that builds it for you every time you push code — no Android
Studio required.

1. Create a free GitHub account if you don't have one: https://github.com/signup
2. Create a new empty repository (github.com → **New repository**, any
   name, keep it Private or Public, don't add a README).
3. Upload this entire project folder to that repository — either drag-and-drop
   all the files/folders in the GitHub web UI ("uploading an existing file"),
   or if you're comfortable with git:
   ```
   git init
   git add .
   git commit -m "Soyat Digital"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
4. On GitHub, open your repo → **Actions** tab → you'll see "Build Android
   APK" running automatically (takes ~2-3 minutes). When it finishes with a
   green check, click into it → under **Artifacts**, download
   **soyat-digital-app** → unzip it → that's your `app-debug.apk`.
5. Send that `.apk` file to yourself (email, Telegram, Google Drive — any
   way you like) and open it on any Android phone to install. Android will
   warn "unknown source" the first time — that's normal for an app that
   isn't on the Play Store yet; tap **Install anyway**.

Every time you (or I, in a future chat) push an updated `www/index.html`,
this same process rebuilds a fresh APK automatically.

---

## How people sign in

- **You (Manager):** on the login screen, tap **"Set up this shop"** once,
  enter your name/email/password. You're now the manager, on any device you
  sign into with that email.
- **Your Assistant:** in the app, go to **More → Staff Accounts → Invite**
  (as the manager) to generate a one-time code. Send that code to your
  assistant (WhatsApp/Telegram/SMS — anything). They open the app on their
  own phone, tap **"Join as Assistant"**, enter their name/email/password
  and that code. They're now recognized as the assistant everywhere.
- Both of you can sign in from any device, anywhere — the phone doesn't
  need to be the same one you signed up on.

## What stays the same as before

- Works offline: Firestore caches data on-device and syncs the moment
  you're back online.
- Excel export/import, PDF reports, and the Admin Panel (subscription/admin
  password) are unchanged and still work exactly as before — the Admin
  Panel is a separate local feature from the Manager/Assistant accounts.

## A note on scope

This setup is right-sized for a small team (one manager + a few
assistants) using Firebase's free tier, which comfortably covers this kind
of daily use at no cost. If this ever needs to scale to many shops or
tighter compliance requirements, that's a bigger project — happy to help
with that later if it comes up.
