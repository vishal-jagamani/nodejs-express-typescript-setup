# 🚀 Node.js Backend Setup with Express, TypeScript, and ESLint

A minimal and scalable **Node.js backend starter** built with **Express**, **TypeScript**, **ESLint**, and **Prettier**. Perfect for kickstarting RESTful API projects with **best practices**, **clean code**, and **developer productivity** in mind.


## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Prerequisites](#️-prerequisites)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👤 Author](#-author)


## ✨ Features

✅ **Node.js** (v18+)  
✅ **Express.js** web framework  
✅ **TypeScript** for static typing  
✅ **ESLint** & **Prettier** for code quality and formatting  
✅ **dotenv** for environment variable management  
✅ **CORS** support  
✅ **Axios** included for HTTP requests  
✅ Minimal and scalable project structure


## 🛠️ Prerequisites

Make sure you have the following installed before you begin:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [Git](https://git-scm.com/)


## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/vishal-jagamani/nodejs-express-typescript-setup.git
```

### 2️⃣ Navigate into the project directory
```bash
cd nodejs-express-typescript-setup
```
### 3️⃣ Install dependencies
```bash
npm install

```
### 4️⃣ Build the project (compile TypeScript)
```bash
npm run build

```


## 🚀 Usage
Start the server after building
```bash
npm start

```
Or run in development mode (build first):
```bash
npm run dev

```


## 📂 Project Structure
```bash
/project
│── /src
│   ├── app.ts                # Main Express app file
│   ├── /routes               # All micro routes
│   │   ├── user.routes.ts    # Routes for users
│   │   ├── auth.routes.ts    # Routes for authentication
│   │   ├── index.ts          # Centralized router export
│   │
│   ├── /controllers          # Controllers handling HTTP requests
│   │   ├── user.controller.ts
│   │   ├── auth.controller.ts
│   │
│   ├── /services             # Business logic and data handling
│   │   ├── user.service.ts
│   │   ├── auth.service.ts
│   │
│   ├── /middlewares          # Middleware functions
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── validate.middleware.ts
│   │
│   ├── /utils                # Utility functions
│   │   ├── logger.ts         # Logging utility (e.g., Winston)
│   │   ├── response.ts       # Standardized API responses
│   │   ├── hash.ts           # Password hashing utilities
│   │
│   ├── /config               # Configuration files
│   │   ├── db.ts             # MongoDB connection setup
│   │   ├── env.ts            # Environment variable handler
│   │   ├── config.ts         # General app config
│   │
│   ├── /types                # TypeScript type definitions
│   │   ├── post.types.ts
│   │   ├── user.types.ts
│   │   ├── index.d.ts
│
│── .env                      # Environment variables
│── eslint.config.mjs         # ESLint configuration
│── .prettierrc               # Prettier configuration
│── .pretterignore            # Prettier configuration
│── tsconfig.json             # TypeScript configuration
│── package.json              # Dependencies and scripts
│── README.md                 # Documentation

```


## 🔧 Configuration

### TypeScript (tsconfig.json)

Compiler configuration tailored for Node.js and Express development.
```bash
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "ESNext",
        "moduleResolution": "node",
        "outDir": "./dist",
        "rootDir": "./src",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "sourceMap": true
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
}

```

### ESLint (eslint.config.mjs)
Linting to enforce code quality and consistency.
```bash
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
    rules: {
        semi: 'off',
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        // '@typescript-eslint/no-explicit-any': 'off',
    },
});

```

### Prettier (.prettierrc)
```bash
{
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "all",
    "semi": true,
    "printWidth": 150,
    "pluginSearchDirs": false
}
```


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/vishal-jagamani/nodejs-express-typescript-setup/issues) or submit a pull request.

### 📝 Steps to Contribute

1. **Fork** the repository  
   🔗 [Click here to fork](https://github.com/vishal-jagamani/nodejs-express-typescript-setup/fork)
   
2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/your-username/nodejs-express-typescript-setup.git
   ```
   
3. **Navigate** to the project directory:
    ```bash
    cd nodejs-express-typescript-setup
    ```

4. Create a feature branch:
     ```bash
    git checkout -b feature/feature-name
    ```

5. Make your changes and commit them:
    ```bash
    git add .
    git commit -m "✨ Add new feature"
    ```

6. Push to your forked repository:
    ```bash
    git push origin feature/feature-name

    ```

7. Open a Pull Request

    Go to your forked repository on GitHub and click "Compare & pull request".


## 📝 License
This project is licensed under the ISC License.



## 👤 Author

**Vishal Jagamani**

- GitHub: [@vishal-jagamani](https://github.com/vishal-jagamani)
- Portfolio: [Vishal Jagamani](https://vishaljagamani.vercel.app)
- LinkedIn: [Vishal Jagamani](https://www.linkedin.com/in/vishaljagamani)

