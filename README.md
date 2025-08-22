# ✅ React ToDo App

A modern, feature-rich and responsive **ToDo application** built with **React** and **Vite**.  
This project allows users to **add, edit, delete, and manage tasks** with **deadlines and priority levels**, using **MockAPI** for backend data storage.

---

## 💡 Focus
The app is mainly designed to **manage daily tasks efficiently** with a clean UI,  
demonstrating **React state management, CRUD operations, and API integration** using **MockAPI**.

---

## 🚀 Features

### ✍️ Task Management
- **Create, Read, Update, Delete (CRUD)** operations for todos
- **Add new tasks** with name, description, deadline, and priority
- **Edit existing tasks** with inline editing capability
- **Delete tasks** with confirmation
- **Mark tasks as completed** with checkbox toggle

### 🔎 Task Organisation
- **Filter tasks by completion status**: All, Active, Completed
- **Filter tasks by priority**: All, Low, Medium, High
- **Real-time filtering** with immediate UI updates
- **View upcoming tasks by deadlines**

### 🎨 User Experience
- **Responsive design** with CSS modules
- **Form validation** using Yup schema validation
- **Loading states** and error handling
- **Collapsible form fields** for quick or detailed todo creation
- **Visual priority indicators** with color coding
- **Dismissible error alerts**

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **HTTP Client**: Axios 1.11.0
- **Form Management**: React Hook Form 7.61.1
- **Validation**: Yup 1.6.1
- **Styling**: CSS Modules
- **Linting**: ESLint 9.30.1
- **Backend**: MockAPI
- **Version Control**: Git & GitHub

---

## 📁 Project Structure

```
react-todo-list/
├── public/
│   └── to-do.png              # Application logo
├── src/
│   ├── components/
│   │   ├── Alert/             # Error alert component
│   │   ├── Loader/            # Loading spinner component
│   │   ├── schemas/           # Yup validation schemas
│   │   ├── TodoFilters/       # Filter controls component
│   │   ├── ToDoForm/          # Todo creation form
│   │   ├── ToDoFormFields/    # Reusable form fields
│   │   ├── ToDoList/          # Todo list container
│   │   └── TodoListItem/      # Individual todo item
│   ├── constants/
│   │   ├── filters.js         # Filter options
│   │   └── priority.js        # Priority definitions
│   ├── hooks/
│   │   └── todo.js            # Custom todo management hook
│   ├── api.js                 # API service layer
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-todo-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_MOCKAPI_BASE_URL=your_mockapi_base_url_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

---

## 📖 Usage Guide

### Creating a Todo
1. Fill in the required **Name** field (3-50 characters)
2. Optionally add a **Description** (max 200 characters)
3. Set a **Deadline** (future dates only for new todos)
4. Choose a **Priority** level (None, Low, Medium, High)
5. Click "Add" to create the todo

### Managing Todos
- **Toggle completion**: Click the checkbox next to any todo
- **Edit todo**: Click the 📝 button to edit inline
- **Delete todo**: Click the 🗑️ button to remove
- **Filter todos**: Use the filter dropdowns to view specific todos

### Form Features
- **Quick mode**: Hide additional fields for simple todo creation
- **Detailed mode**: Show all fields for comprehensive todo management
- **Validation**: Real-time form validation with helpful error messages

---

## 🔧 API Integration

The application integrates with a MockAPI backend for data persistence. The API service (`src/api.js`) provides:

- `GET /todos` - Fetch all todos with optional filtering
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update an existing todo
- `DELETE /todos/:id` - Delete a todo

### API Configuration
Set the `VITE_MOCKAPI_BASE_URL` environment variable to point to your MockAPI instance.

---

## 🎨 Styling

The application uses CSS Modules for component-scoped styling, ensuring:
- **No style conflicts** between components
- **Maintainable and modular** CSS architecture
- **Responsive design** that works on all devices
- **Consistent visual hierarchy** and spacing

---

## 🧪 Development

### Code Quality
- **ESLint** configuration for code linting
- **React Hooks** linting rules enabled
- **Consistent code formatting** and best practices

### Component Architecture
- **Functional components** with React hooks
- **Custom hooks** for business logic separation
- **Reusable components** for maintainability
- **Props validation** and error boundaries

---

## 📌 Author
- **Absar Anwer**  
- https://github.com/absar-1

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Bundled with [Vite](https://vitejs.dev/)
- Styled with [CSS Modules](https://github.com/css-modules/css-modules)
- Validated with [Yup](https://github.com/jquense/yup)
- Forms managed with [React Hook Form](https://react-hook-form.com/)
