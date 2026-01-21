# 🎨 Chat Bot Frontend - React UI

Modern chat interface với **TypeScript**, **React Query**, **Chakra UI**, **Cloudinary Upload**, và **Input Suggestions**.

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Lightning fast build
- **Chakra UI v2** - Component library
- **React Query** (TanStack Query) - State management
- **Apollo Client** - GraphQL HTTP client
- **GraphQL Codegen** - Auto-generate types
- **Cloudinary** - Image upload & CDN
- **React Router DOM** - Routing
- **React Hook Form** + **Yup** - Form validation
- **React Hot Toast** - Notifications
- **React Icons** - Icons
- **Lazy Loading** - Code splitting

---

## ⚡ Quick Start

### Prerequisites

- Node.js v22+ (recommended)
- Yarn package manager  
- Backend API running
- Cloudinary account (optional)

### 1. Install Dependencies

```bash
yarn install
```

### 2. Setup Environment Variables

```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local
```

**Required:**
```env
VITE_GRAPHQL_URL=http://localhost:3000/graphql
```

**Optional (for image uploads):**
```env
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=chat-bot-unsigned
```

### 3. Generate GraphQL Types (Optional)

```bash
# Make sure backend is running first!
yarn codegen

# Or watch mode
yarn codegen:watch
```

### 4. Start Development Server

```bash
yarn dev
```

**URL:** http://localhost:5173

---

## 📝 Environment Variables (.env.local)

Based on `.env.example`:

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_GRAPHQL_URL` | Backend GraphQL endpoint | ✅ Yes | `http://localhost:3000/graphql` |
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | ⚪ Optional | `your-cloud-name` |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Upload preset (unsigned) | ⚪ Optional | `chat-bot-unsigned` |

**Note:** 
- `.env.example` - Template (committed to Git)
- `.env.local` - Your actual values (ignored by Git)
- All `VITE_*` variables are injected at build time

---

## ✨ Features

### 1. 📷 Image Upload (Cloudinary)

**Setup:**
1. Create Cloudinary account (free): https://cloudinary.com
2. Get cloud name from dashboard
3. Create unsigned upload preset: `chat-bot-unsigned`
4. Add to `.env.local`
5. Restart dev server

**Usage:**
- Click **+** button
- Upload widget opens
- Select image
- Image preview appears
- Send with message

### 2. 💡 Input Suggestions

**Features:**
- Auto-suggest from previous messages
- Common phrases included
- Type 2+ characters to see suggestions
- Click to auto-fill

**Suggestions:**
- Previous user messages
- Common chat phrases
- Context-aware (based on AI response)

### 3. 🎨 Chakra UI Components

All forms use Chakra UI v2:

```tsx
<FormControl isInvalid={!!errors.email}>
  <FormLabel>Email</FormLabel>
  <Input type="email" {...register('email')} />
  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
</FormControl>
```

### 4. 🔄 React Query State Management

Simple hooks, no Redux:

```tsx
const loginMutation = useLogin();
await loginMutation.mutateAsync({ email, password });
```

### 5. 📦 Lazy Loading

All pages lazy-loaded:
- LoginPage: 1.75 KB
- RegisterPage: 1.65 KB
- ChatPage: 25.89 KB

### 6. 💀 Skeleton Loaders

Loading states:
- `<MessageSkeleton />` - Chat loading
- `<FormSkeleton />` - Form loading
- `<LoadingSpinner />` - General loading

---

## 📦 Scripts

```bash
yarn dev              # Development server
yarn build            # Production build
yarn preview          # Preview production build
yarn codegen          # Generate GraphQL types from backend
yarn codegen:watch    # Watch mode
yarn lint             # Run ESLint
```

---

## 🏗️ Build for Production

```bash
# Build
yarn build

# Output
dist/
├── index.html
├── assets/
│   ├── index-[hash].js  (526KB → 172KB gzipped)
│   └── index-[hash].css (5.4KB → 1.7KB gzipped)
```

**Deploy to:**
- Vercel
- Netlify
- Cloudflare Pages

**Environment Variables on Deploy:**
```env
VITE_GRAPHQL_URL=https://your-backend-api.com/graphql
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=chat-bot-unsigned
```

---

## 🔐 Mock Users

| Email | Password |
|-------|----------|
| user1@test.com | password123 |
| admin@test.com | password123 |
| user2@test.com | password123 |

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api-service/              # GraphQL SDK layer
│   │   ├── generated/           # Auto-generated types
│   │   ├── modules/             # Feature-based .gql files
│   │   │   ├── auth-feature/
│   │   │   │   ├── auth/        # login, register, logout
│   │   │   │   └── account/     # me
│   │   │   └── chat-feature/
│   │   │       ├── message/     # sendMessage
│   │   │       └── thread/      # getThreads, getThread
│   │   └── index.ts             # SDK with Request Coalescing
│   ├── components/
│   │   ├── auth/                # Login, Register (Chakra UI)
│   │   ├── chat/                # Chat UI with Upload & Suggestions
│   │   ├── layout/              # Sidebar
│   │   └── ui/                  # Skeleton, Spinner, Provider
│   ├── contexts/                # Auth context
│   ├── hooks/
│   │   ├── graphql/             # React Query hooks
│   │   ├── useCloudinaryUpload  # Image upload
│   │   └── useInputSuggestions  # Autocomplete
│   ├── core/                    # Config, constants, headers
│   ├── lib/                     # Apollo client, validations
│   ├── types/                   # TypeScript types
│   └── pages/                   # Lazy-loaded pages
├── .env.example                 # Environment template ⭐
└── README.md                    # This file
```

---

## 🧪 Testing

### Development

```bash
yarn dev
# Open: http://localhost:5173
# Login: user1@test.com / password123
```

### Test Image Upload

1. Login
2. Click **+** button
3. Upload image
4. See preview
5. Send message
6. Image appears in chat

### Test Suggestions

1. Type "H"
2. See "Hello!", "How are you?"
3. Click suggestion
4. Input auto-fills

---

## 🎨 Cloudinary Setup (Optional)

**If you want image uploads:**

1. **Create account:** https://cloudinary.com/users/register_free
2. **Get cloud name:** Dashboard → Account Details
3. **Create upload preset:**
   - Go to Settings → Upload
   - Click "Add upload preset"
   - Name: `chat-bot-unsigned`
   - Signing Mode: **Unsigned** ⭐
   - Save
4. **Update `.env.local`:**
   ```env
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   VITE_CLOUDINARY_UPLOAD_PRESET=chat-bot-unsigned
   ```
5. **Restart:** `yarn dev`

**If you skip Cloudinary:**
- Upload button shows "not configured" toast
- App works normally without images

See `../CLOUDINARY_SETUP.md` for detailed guide.

---

## 🔧 Troubleshooting

### Backend not connected?

Check `.env.local`:
```env
VITE_GRAPHQL_URL=http://localhost:3000/graphql
```

Make sure backend is running!

### Cloudinary upload not working?

1. Check `.env.local` has correct values
2. Verify upload preset is **unsigned**
3. Check browser console for errors
4. Restart dev server

### White screen?

1. Open console (F12)
2. Check errors
3. Clear cache (Cmd+Shift+R)

---

## 📊 Performance

**Build Output:**
- Total bundle: 526 KB (172 KB gzipped)
- Lazy loaded chunks:
  - Login: 1.75 KB
  - Register: 1.65 KB
  - Chat: 25.89 KB

**Optimizations:**
- ✅ Lazy loading
- ✅ Code splitting
- ✅ React Query caching
- ✅ Request coalescing
- ✅ Skeleton loaders

---

## ✅ Features Checklist

- [x] Login/Register with Yup validation
- [x] Protected routes
- [x] Chakra UI components
- [x] Chat interface with sidebar
- [x] 📷 **Image upload (Cloudinary)**
- [x] 💡 **Input suggestions**
- [x] Message bubbles (user vs AI)
- [x] "Generate Free" button
- [x] Auto-scroll messages
- [x] Loading states (skeleton + spinner)
- [x] Toast notifications
- [x] Lazy loading
- [x] GraphQL Codegen
- [x] Type-safe throughout

---

## 📚 Documentation

- **Setup:** This README
- **Cloudinary:** `../CLOUDINARY_SETUP.md`
- **Features:** `../FEATURES_IMPLEMENTATION.md`
- **API Service:** `src/api-service/README.md`

---

**Built with ❤️ using Modern Frontend Stack**
