📦 Strackly
===========
_A Cross-Platform Inventory & Point of Sale System_

📖 Project Description
---------------------
Strackly is a cross-platform, modern inventory management and point of sale (POS) solution for businesses. Featuring real-time barcode scanning, push notifications, robust reporting, and role-based access, it enables efficient operations for both small and medium enterprises. Powered by a unified MERN backend and React Native/React web frontends, Strackly delivers seamless and consistent experiences across mobile and web.

✨ Key Features
--------------
- 📦 **Inventory Management** – Add, update, delete products; track live stock levels
- 💳 **Point of Sale (POS)** – Intuitive checkout, sales history, revenue analysis
- 📲 **Barcode Scanning** – Instant lookup using any mobile camera
- 🔔 **Push Notifications** – Stock alerts and order status updates in real time
- 👥 **Role-Based Access** – Admin, Cashier, Staff level controls
- 🔐 **Secure Authentication** – JWT and bcrypt-secured sessions
- 🌐 **Unified Platform** – Both mobile and web use the same backend API

🛠️ Tech Stack
-------------
| Section    | Tech                            | Purpose                                        |
| --------   | ------------------------------- | ---------------------------------------------- |
| **Mobile** | React Native (Expo), Nativewind | iOS/Android app, Tailwind-style UI             |
| **Web**    | React, Vite, TailwindCSS        | Web dashboard, admin features                  |
| **Backend**| Node.js, Express.js, MongoDB    | REST API, business logic, cloud database       |
| **Other**  | Firebase (Notifications), Multer| Push alerts, file uploads (e.g. images)        |
| **Auth**   | JWT, bcrypt                     | Secure user auth, role management              |


🚀 Setup Instructions
--------------------
### Prerequisites
- Node.js (v18+)
- Yarn or npm
- MongoDB Atlas account

### Installation
1. **Clone the repository**
    ```
    git clone https://github.com/HappyDevs1/Strackly.git
    cd Strackly
    ```
2. **Install dependencies**
    ```
    cd server
    npm install
    # In another terminal/tab (for client):
    cd ../client/mobile
    yarn install
    cd ../web
    yarn install
    ```

3. **Setup environment variables**
    - Copy `.env.example` in `server/` to `.env` and fill values.
    - Repeat for mobile/web as needed.

4. **Start the backend**
    ```
    cd server
    npm run dev
    ```

5. **Run the mobile app**
    ```
    cd client/mobile
    yarn start
    # Then scan the QR code with Expo Go or run on emulator
    ```

6. **Run the web app**
    ```
    cd client/web
    yarn dev
    ```

🤝 Contributing
----------------
We welcome contributions!

**How to contribute:**
- Fork the repo
- Create a feature branch (`git checkout -b feature/your-feature`)
- Commit and push your work (`git commit -m "feat: ✨ add cool feature"`)
- Open a pull request

**Guidelines:**
- Use Conventional Commits
- Follow ESLint & Prettier style
- Add tests where possible
- Update documentation for big changes

📝 License
----------
MIT License – see the LICENSE file.

🌟 Acknowledgments
-----------------
- Mobile icons: Expo/React Native Community
- Web icons: Lucide/React
- Deployment powered by Netlify and Vercel

📞 Contact & Support
--------------------
- Issues: [GitHub Issues](https://github.com/HappyDevs1/Strackly/issues)
- Discussions: [GitHub Discussions](https://github.com/HappyDevs1/Strackly/discussions)

**Built with ❤️ by HappyDevs1**

⭐ _Star this repository if you found it helpful!_
