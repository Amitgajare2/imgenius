
# IMGenius

Welcome to **IMGenius** — your ultimate library for ChatGPT image generation prompts!  
This platform makes AI image creation accessible, simple, and fun for everyone, whether you're a designer, artist, developer, content creator, or just curious about AI-generated art.

---

## 📘 About Us

We created IMGenius to empower users to easily find and copy high-quality prompts for generating stunning visuals using ChatGPT or other AI image tools.  
Our goal is to enhance creativity and make AI art accessible to all.

---

## 🎯 What We Offer

- 📚 A vast collection of curated prompts for various themes and styles  
- 🔍 Easy search and filter options to find the perfect prompt  
- ✨ User-friendly interface to copy prompts with one click  
- 🌟 Regular updates with new prompts and features  
- ✅ Free access for all users — no sign-up required  

---

## 💡 Why We Built This

We believe AI can boost creativity and democratize art. IMGenius provides a platform where anyone can find inspiration and generate unique images, empowering creators of all backgrounds to explore AI-generated art.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or later recommended).
- **npm**: Comes with Node.js, used for package management.
- **Appwrite**: Backend service for data storage and authentication. Sign up at [Appwrite](https://appwrite.io) and create a project.

### Installation

#### Clone the Repository

```bash
git clone https://github.com/Amitgajare2/imgenius
cd imgenius
````

#### Install Dependencies

```bash
npm install
```

#### Set Up Appwrite

1. Create a project in Appwrite (e.g., Project ID: `Your project ID`).
2. Set up a database (e.g., Database ID: `Your Database ID`).
3. Create a collection for image details (e.g., Collection ID: `Your Collection ID`) with the following fields:

   * `imgUrl` (string)
   * `title` (string)
   * `name` (string)
   * `prompt` (string)
   * `category` (string)
4. Configure permissions for the collection to allow read/write access as needed.
5. Enable user authentication in Appwrite for email/password sessions.
6. Update the Appwrite endpoint and project ID in `UploadDetails.js`, `Gallery.js`, and `AdminLogin.js`:

```javascript
const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your endpoint
  .setProject('Your project ID'); // Your project ID
```

### Run the App

```bash
npm start
```

The app will be available at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🛠️ Key Features

### Gallery Page

* **Masonry Grid**: Responsive grid layout for images
* **Filtering**: Filter by category or search by title
* **Infinite Scroll**: Load more images on scroll using `IntersectionObserver`
* **Popup**: Click to view full image details and copy prompt
* **Animations**: Smooth page and image transitions with `Framer Motion`

### Upload Details Page

* **Admin Access**: Only accessible to a specific user ID (`Your User ID`)
* **Form**: Uploads image details like URL, title, prompt, etc.
* **Submission**: Data saved to Appwrite and form reset on success

### Admin Login Page

* **Authentication**: Email/password session via Appwrite
* **Navigation**: Redirects to `/upload` on successful login
* **Styling**: Uses `App.css` for consistent UI

---

## 🧰 Technologies Used

* **React**: Frontend framework
* **React Router**: Page routing
* **Framer Motion**: Animations and transitions
* **Appwrite**: Backend for DB and authentication
* **CSS**: Custom styling (no CSS frameworks)

---

## 📝 Usage

* **Browse Prompts**: Head to the Gallery, search or filter, and copy prompts.
* **Admin Login**: Go to `/admin-login`, log in, and access upload form.
* **Upload Prompts**: Fill and submit the upload form at `/upload`.
* **Navigation**: Use Navbar to explore different pages.

---

## ⚠️ Notes

* **Admin Access**: Update the specific admin user ID in `UploadDetails.js` to match your Appwrite user.
* **Security**: Configure Appwrite collection and user permissions properly.
* **Footer**: Currently commented out — implement if needed.
* **Error Handling**: Alerts for login/upload failures; check console for detailed logs.

---

## 🤝 Contributing

We welcome feedback and contributions!

1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-idea`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-idea`
5. Submit a pull request.

---

## 📬 Contact

Have feedback or questions? Reach out to us via \[your contact method].

