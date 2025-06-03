# Demo Web

A modern, high-performance web application built with **Next.js 15**, featuring a robust architecture and cutting-edge technologies.

---

## 🚀 Features

- ⚡️ **Next.js 15** - The React Framework for production
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔥 **TypeScript** - Type safety and better developer experience
- 📦 **Zustand** - State Management
- 🎯 **React Hook Form** + **Zod** - Form validation and schema
- 📱 **PWA Support** - Progressive Web App capabilities
- 🌙 **Dark Mode** - Built-in dark mode support
- 🧩 **Atomic Design** - Component architecture following atomic design principles
- 🔍 **ESLint** & **Prettier** - Code quality and style enforcement
- 🛠️ **Axios** - HTTP client with interceptor
- 🌐 **i18n** - Internationalization support
- 🧪 **React Query** - Data fetching and caching

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Components:** Ant Design, Custom Components
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Form Validation:** React Hook Form + Zod
- **HTTP Client:** Axios
- **Date Handling:** Day.js
- **Type Checking:** TypeScript
- **API Layer:** React Query
- **Icons:** Custom SVG, Ant Design Icons
- **Package Manager:** npm / yarn / pnpm / bun

---

## 📦 Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_BASE_URL=your_api_url
# Add other environment variables as needed
```

---

## 🏗️ Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # Reusable components
│   ├── config/             # App configuration and constants
│   ├── constants/          # Shared constants
│   ├── features/           # Main features/modules
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization
│   ├── lib/                # Utilities, axios instance, etc.
│   ├── services/           # API communication
│   └── shared/             # Shared components/utilities
├── .env.sample             # Environment variable sample
├── package.json            # Project info and scripts
├── tsconfig.json           # TypeScript configuration
└── ...                     # Other config files
```

---

## 🚀 Deployment

The application can be deployed easily on [Vercel](https://vercel.com/) or any Node.js hosting.

---

## 🤝 Development Guidelines

### Branch Naming Convention

Create feature branches from the `develop` branch following this pattern:

```
feature_XXXX_[Backlog_Ticket_Number]_NN
```
Where:
- `XXXX`: Feature description
- `Backlog_Ticket_Number`: Ticket number from Backlog (e.g., DEMO-1)
- `NN`: Sequential number for PRs with the same name (optional)

**Examples:**
- `feature_add_login_DEMO-1`
- `feature_edited_notificationlist_DEMO-12_3`

---

### Pull Request Rules

- **Target Branch:** Always merge to `develop` branch
- **PR Title Format:**
    ```
    [Backlog_Ticket_No][Screen_ID] [Type] Description
    ```
    - `Backlog_Ticket_No`: Ticket number (e.g., DEMO-15)
    - `Screen_ID`: Screen identifier (e.g., JU-0001-1)
    - `Type`: `[ADD]` for new features, `[EDIT]` for modifications
    - `Description`: Brief description

**Examples:**
- `[DEMO-15][JU-0001-1] [ADD] New feature implementation`
- `[DEMO-15][JU-0001-2] [EDIT] Feature modification`

**PR Description Template:**
```
------------------------
【Overview】
[Brief overview of changes]

【Details】
[Detailed description of changes]

【Unit Test】
[Test details]
※ Please attach screenshots and video files for UI changes and validation checks
------------------------
```

---

### Development Process

1. Create a feature branch from `develop`
2. Make your changes
3. Create a PR following the above rules
4. Wait for review and approval
5. Merge to `develop` branch

> **Note:** Please ensure ticket numbers are accurate as incorrect numbers may affect project tracking.

---

## 📄 License

This project is licensed under the MIT License.
