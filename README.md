# 🎨 Chat Bot Frontend - React UI

Modern chat interface với **TypeScript**, **React Query**, **Chakra UI**, và **GraphQL Codegen**.

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Lightning fast build
- **Chakra UI v2** - Component library
- **React Query** (TanStack Query) - State management
- **Apollo Client** - GraphQL HTTP client
- **GraphQL Codegen** - Auto-generate types
- **React Router DOM** - Routing
- **React Hook Form** + **Yup** - Form validation
- **React Hot Toast** - Notifications
- **React Icons** - Icons
- **Lazy Loading** - Code splitting

---

## 📁 Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── auth/                  # Login, Register (Chakra UI)
│   │   ├── chat/                  # Chat UI (Chakra UI)
│   │   ├── layout/                # Sidebar (Chakra UI)
│   │   ├── common/                # ProtectedRoute
│   │   └── ui/                    # Skeleton, Spinner, Provider
│   ├── contexts/
│   │   └── AuthContext.tsx        # Auth state
│   ├── hooks/graphql/
│   │   ├── useAuth.ts             # Login, Register, Logout
│   │   └── useChat.ts             # Send Message
│   ├── lib/
│   │   ├── apollo-client.ts       # GraphQL client
│   │   └── validations.ts         # Yup schemas
│   ├── generated/
│   │   └── graphql.ts             # Auto-generated types ✨
│   ├── types/                     # Manual TypeScript types
│   ├── pages/                     # Lazy-loaded pages
│   ├── App.tsx                    # Routes with lazy loading
│   └── main.tsx                   # Entry point
└── ENV_TEMPLATE.txt               # Environment template
```

---

## ⚡ Quick Start

### Prerequisites

- Node.js v22+ (recommended)
- Yarn package manager  
- Backend API running

### 1. Install Dependencies

```bash
yarn install
```

### 2. Setup Environment

```bash
# Copy template
cp ENV_TEMPLATE.txt .env

# Edit .env
VITE_GRAPHQL_URL=http://localhost:3000/graphql
```

### 3. Generate GraphQL Types (Optional)

```bash
# Make sure backend is running first!
yarn codegen

# Or watch mode
yarn codegen:watch
```

### 4. Start Development

```bash
yarn dev
```

**URL:** http://localhost:5173

---

## 📝 Environment Variables

`ENV_TEMPLATE.txt` → `.env`:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_GRAPHQL_URL` | Backend GraphQL endpoint | `http://localhost:3000/graphql` |

**Note:** All `VITE_*` variables are injected at build time!

---

## 🎨 Features

### ✨ UI Components (Chakra UI)

All components use Chakra UI v2:

```tsx
<FormControl isInvalid={!!errors.email}>
  <FormLabel>Email</FormLabel>
  <Input type="email" {...register('email')} />
  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
</FormControl>
```

**Components:**
- `Box`, `Flex`, `VStack`, `HStack` - Layout
- `Button`, `IconButton` - Buttons with loading states
- `Input`, `Textarea` - Form inputs
- `FormControl`, `FormLabel`, `FormErrorMessage` - Forms
- `Heading`, `Text`, `Link` - Typography
- `Avatar`, `Spinner`, `Skeleton` - UI elements
- `Divider`, `Separator` - Dividers

### 🔄 State Management (React Query)

Simple hooks, no Redux complexity:

```tsx
// Login
const loginMutation = useLogin();
await loginMutation.mutateAsync({ email, password });

// Send message
const sendMessage = useSendMessage();
await sendMessage.mutateAsync({ content, threadId });
```

**Benefits:**
- ✅ Automatic caching
- ✅ Loading/error states
- ✅ Optimistic updates
- ✅ Retry on failure
- ✅ No boilerplate!

### 📦 GraphQL Codegen

Auto-generate TypeScript types from backend schema:

```bash
yarn codegen
```

**Generates:**
- TypeScript interfaces
- React hooks (optional)
- Type-safe queries/mutations

### 🎯 Lazy Loading

All pages lazy-loaded for performance:

```tsx
const LoginPage = lazy(() => import('./pages/LoginPage'));
```

**Benefits:**
- ✅ Smaller initial bundle
- ✅ Faster first load
- ✅ Code splitting
- ✅ Better performance

### 💀 Skeleton Loaders

Loading states with Chakra Skeleton:

```tsx
<MessageSkeleton />      // Chat messages loading
<FormSkeleton />         // Form loading
<ChatPageSkeleton />     // Full page loading
```

---

## 📦 Scripts

```bash
yarn dev              # Development server
yarn build            # Production build
yarn preview          # Preview production build
yarn codegen          # Generate GraphQL types
yarn codegen:watch    # Watch mode for codegen
yarn lint             # Run ESLint
```

---

## 🏗️ Build for Production

```bash
# Build
yarn build

# Preview
yarn preview

# Output
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
```

**Deploy to:**
- Vercel (zero config)
- Netlify
- Cloudflare Pages
- Any static hosting

---

## 🔐 Mock Users

| Email | Password |
|-------|----------|
| user1@test.com | password123 |
| admin@test.com | password123 |
| user2@test.com | password123 |

---

## 🧪 Testing

### Development

```bash
yarn dev
# Open: http://localhost:5173
# Login: user1@test.com / password123
```

### Production Build

```bash
yarn build
yarn preview
```

### Features to Test

- ✅ Login/Register with validation
- ✅ Protected routes
- ✅ Chat interface with Sidebar
- ✅ Send message → AI response
- ✅ Skeleton loaders while loading
- ✅ Toast notifications
- ✅ Upload button (toast)
- ✅ Sidebar icons (toast "under development")
- ✅ Logout

---

## 🔧 Troubleshooting

### Backend not connected?

Check `.env`:
```env
VITE_GRAPHQL_URL=http://localhost:3000/graphql
```

Make sure backend is running!

### White screen?

1. Open console (F12)
2. Check errors
3. Clear cache (Cmd+Shift+R)

### Build errors?

```bash
# Clear cache
rm -rf node_modules/.vite dist

# Reinstall
yarn install

# Build
yarn build
```

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
yarn global add vercel

# Deploy
vercel

# Add environment variable in dashboard:
# VITE_GRAPHQL_URL=https://your-backend.com/graphql
```

---

## 📊 Performance Optimizations

### ✅ Implemented:

- **Lazy Loading** - Pages loaded on-demand
- **Code Splitting** - Smaller bundles
- **React Query** - Smart caching
- **Skeleton Loaders** - Better UX
- **Chakra UI** - Optimized components
- **Vite** - Fast HMR & build

### Build Output:

```
dist/assets/index-[hash].js  ~800KB (gzipped: ~250KB)
dist/assets/index-[hash].css ~5KB
```

---

## ✅ Code Quality

- ✅ **TypeScript** - 100% type-safe
- ✅ **ESLint** - Code linting
- ✅ **Yup** - Runtime validation
- ✅ **GraphQL Codegen** - Type safety
- ✅ **Lazy Loading** - Performance
- ✅ **Skeleton Loaders** - Better UX
- ✅ **Error Handling** - Comprehensive
- ✅ **Clean Code** - Well-structured

---

**Built with ❤️ using Modern Frontend Stack**
# FE-chat-bot-project
