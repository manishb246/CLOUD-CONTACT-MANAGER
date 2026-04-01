# ☁️ Cloud Contact Manager

A full-stack **Cloud Contact Manager Application** that allows users to securely manage their contacts online. The application provides authentication, CRUD operations, and search functionality with a modern UI and robust backend.

---

## 🚀 Features

* 🔐 Secure Authentication using Clerk
* 👤 User Login & Session Management
* ➕ Add New Contact
* ✏️ Edit / Update Contact
* ❌ Delete Contact
* 🔍 Search Contacts
* 📄 View Contact Details
* 🌐 RESTful API Integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS 

### Backend

* Spring Boot
* Spring Data JPA
* MySQL
* Lombok
* DTO (Data Transfer Object Pattern)

### Authentication

* Clerk Authentication (JWT-based secure auth)

---

## 📁 Project Structure

```
cloud-contact-manager/
│
├── frontend/ (React App)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── api/
│   │   └── App.jsx
│
├── backend/ (Spring Boot App)
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── dto/
│   └── config/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/cloud-contact-manager.git
cd cloud-contact-manager
```

---

### 2️⃣ Backend Setup (Spring Boot)

#### Configure MySQL Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/contact_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

#### Run Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080`

---

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

### 4️⃣ Clerk Authentication Setup

1. Create account on Clerk
2. Get API keys
3. Add environment variables:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```

4. Wrap your app with Clerk Provider

---

## 🔐 Security

* JWT-based authentication using Clerk
* Backend validates tokens for every request
* User-specific data isolation
* Secure API endpoints

---

## 🔄 API Endpoints

| Method | Endpoint                    | Description       |
| ------ | --------------------------- | ----------------- |
| POST   | /api/contacts/add           | Add new contact   |
| GET    | /api/contacts               | Get all contacts  |
| GET    | /api/contacts/{id}          | Get contact by ID |
| PUT    | /api/contacts/{id}          | Update contact    |
| DELETE | /api/contacts/{id}          | Delete contact    |
| GET    | /api/contacts/search?query= | Search contacts   |

---

## 📸 Screenshots (Optional)

*Add your UI screenshots here*

---

## 📌 Future Enhancements

* 📱 Mobile responsive improvements
* 📤 Import/Export contacts
* 📊 Dashboard analytics
* 🔔 Notifications

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Manish Bachhav**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
