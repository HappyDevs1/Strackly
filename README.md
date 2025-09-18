# Strackly - Mobile Inventory Management & Point of Sale System

Strackly is a **dynamic mobile and web-based inventory management and point of sale (POS) system** designed to streamline business operations for small to medium-sized businesses. It empowers store owners and managers with the tools they need to efficiently track inventory, process sales, and maintain control over their operations in real time.  

This project is built with **React Native (Expo)** for mobile, **React** for web, and a **MERN-powered backend**, ensuring a unified and scalable solution.

---

## 🚀 Features

- **📦 Inventory Management**
  - Add, update, and delete products
  - Track stock levels in real time
  - Automatic updates when sales are made  

- **📲 Barcode Scanning**
  - Fast and accurate product lookup using mobile camera  
  - Reduces manual entry errors  

- **🔔 Push Notifications**
  - Stock level alerts (e.g., low inventory warnings)  
  - Order status updates in real time  

- **🔑 Identity & Access Management (IAM)**
  - Secure authentication using JWT  
  - Role-based access control (e.g., admin, cashier, staff)  

- **💳 Point of Sale (POS)**
  - Intuitive checkout flow  
  - Tracks sales history and revenue reports  

- **🌐 Unified Platform**
  - Both mobile and web versions consume the same backend API  
  - Ensures consistent data and functionality across platforms  

---

## 🛠️ Tech Stack

### **Frontend**
- **Mobile**: React Native (Expo), Nativewind (Tailwind for React Native)
- **Web**: React  

### **Backend**
- Node.js  
- Express.js  
- MongoDB Atlas (cloud database)  

### **Authentication & Security**
- JWT (JSON Web Tokens) for secure authentication  
- bcrypt for password hashing  

### **Other Integrations**
- Firebase (Push Notifications)  
- Multer (File Uploads, e.g., product images)  

---

## 📱 Mobile App Highlights
- Built with **React Native + Expo** for cross-platform compatibility (Android & iOS).  
- Barcode scanning with camera integration.  
- Smooth, responsive UI styled with **Nativewind**.  

---

## 💻 Web App Highlights
- React-based dashboard for admins and managers.  
- Manage inventory, view reports, and configure user access.  
- Real-time synchronization with mobile app via shared API.  

---

## 📂 Project Structure (High-Level)
Strackly/
├── mobile/ # React Native (Expo) mobile app
├── web/ # React web app
├── server/ # Node.js + Express backend
│ ├── routes/ # API endpoints
│ ├── models/ # MongoDB schemas
│ ├── controllers/ # Business logic
│ └── middleware/ # Auth & role management
└── README.md


---

## 🔒 Security
- JWT tokens for user sessions.  
- Role-based access ensures only authorized users can perform critical operations.  
- All passwords stored securely using **bcrypt hashing**.  

---

## 📈 Future Improvements
- Advanced reporting & analytics dashboards.  
- Offline-first support for mobile (sync when back online).  
- Integration with payment gateways.  
- Multi-language support.  

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.  

---

## 📜 License
This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author
**Happy Mahlangu**  
*Dec 2024 – Present*  
Strackly: Mobile Inventory Management & Point of Sale System  
