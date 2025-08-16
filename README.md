<div align="center">
  <br />
    <a href="https://pitchspark.vercel.app" target="_blank">
      <img src="https://github.com/user-attachments/assets/471e2baa-8781-43b8-aaed-62e313d03e99" alt="PitchSpark - Startup Pitch Platform" width="800" />
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />
    <img src="https://img.shields.io/badge/-NextAuth-black?style=for-the-badge&logoColor=white&logo=nextauth&color=000000" alt="nextauth" />
    <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logoColor=white&logo=vercel&color=000000" alt="vercel" />
  </div>

  <h1 align="center">PitchSpark</h1>
  <h3 align="center">The Ultimate Startup Pitch Platform</h3>
  
  <p align="center">
    <strong>Where innovative ideas meet opportunity</strong>
  </p>

  <div align="center">
    <a href="https://pitchspark.vercel.app">🚀 Live Demo</a>
    ·
    <a href="https://github.com/ShubhamRakheja/Next-ventures/issues">🐛 Report Bug</a>
    ·
    <a href="https://github.com/ShubhamRakheja/Next-ventures/issues">✨ Request Feature</a>
  </div>
</div>

## 📋 Table of Contents

1. 🎯 [About PitchSpark](#about-pitchspark)
2. ✨ [Key Features](#key-features)
3. 🛠️ [Tech Stack](#tech-stack)
4. 🚀 [Getting Started](#getting-started)
5. 📊 [Usage](#usage)
6. 🎨 [Design System](#design-system)
7. 🧪 [Development](#development)
8. 🚀 [Deployment](#deployment)
9. 🤝 [Contributing](#contributing)
10. 📄 [License](#license)

## 🎯 About PitchSpark

**PitchSpark** is a cutting-edge platform designed to revolutionize how entrepreneurs showcase their startup ideas and connect with potential investors, mentors, and collaborators. Built with modern web technologies, it provides a seamless experience for pitching innovative ideas and discovering groundbreaking startups.

### 👨‍💻 About the Developer
Created by **Shubham Rakheja** - A passionate full-stack developer focused on building impactful web applications that solve real-world problems.

### 🌟 Mission
Empower entrepreneurs worldwide by providing a platform where great ideas get the visibility they deserve.

### 💡 Problem Solved
- **For Entrepreneurs**: Lack of platform to showcase ideas and get feedback
- **For Investors**: Difficulty in discovering early-stage startups
- **For Community**: Limited access to innovative ideas and collaboration opportunities

## ✨ Key Features

### 🚀 Core Features

#### 📊 **Live Pitch Submissions**
- Real-time startup idea submissions
- Rich media support (images, videos, documents)
- Category-based organization
- Dynamic content updates

#### 🔍 **Advanced Discovery**
- Smart search functionality
- Category and tag filtering
- Trending pitches section
- Editor's picks showcase

#### 👤 **User Profiles**
- GitHub OAuth integration
- Personal pitch portfolio
- Activity tracking
- Profile customization

#### 📈 **Engagement Metrics**
- View counters for each pitch
- Social sharing capabilities
- Bookmark/favorite system
- Comment and feedback features

#### 🎨 **Modern UI/UX**
- Clean, minimalistic design
- Dark/light mode support
- Smooth animations
- Mobile-first responsive design

### 🏆 **Competition Features**
- Virtual pitch competitions
- Leaderboards
- Voting system
- Winner showcases

### 📱 **Mobile Experience**
- Progressive Web App (PWA)
- Offline capability
- Push notifications
- Native app-like experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend & CMS
- **Sanity CMS** - Headless content management
- **NextAuth.js** - Authentication solution
- **Vercel Edge Functions** - Serverless functions
- **Groq** - AI-powered search and recommendations

### Database & Storage
- **Sanity Content Lake** - Real-time database
- **Cloudinary** - Image and video storage
- **Vercel KV** - Key-value storage for caching

### Development & DevOps
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vercel** - Deployment platform
- **Sentry** - Error tracking and monitoring

### Third-party Services
- **GitHub OAuth** - Authentication provider
- **Vercel Analytics** - Web analytics
- **Sentry** - Error monitoring
- **Cloudinary** - Media optimization

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git** latest version
- **Sanity account** (for CMS)

### 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/ShubhamRakheja/Next-ventures.git
cd Next-ventures
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-12-01
SANITY_API_TOKEN=your_sanity_token

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Optional: Analytics
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### 🗄️ Database Setup

1. **Create Sanity project**
   - Go to [sanity.io](https://www.sanity.io/)
   - Create new project
   - Get project ID and dataset name

2. **Configure schema**
   - Run `npm run sanity:dev` to start Sanity Studio
   - Define content schemas for startups, categories, users

3. **Seed initial data**
   - Use Sanity Studio to add sample pitches
   - Configure categories and tags

## 📊 Usage

### 👤 For Entrepreneurs
1. **Sign up** with GitHub account
2. **Create pitch** with startup details
3. **Add media** - images, videos, documents
4. **Publish** and share with community
5. **Track views** and engagement metrics

### 🔍 For Discoverers
1. **Browse** latest pitches on homepage
2. **Search** for specific ideas or categories
3. **Filter** by category, tags, or trending
4. **View details** of interesting pitches
5. **Share** pitches on social media

### 🏆 For Competition Participants
1. **Join competitions** from homepage
2. **Submit pitches** to specific competitions
3. **Vote** for favorite pitches
4. **Track leaderboard** positions
5. **Win prizes** and recognition

## 🎨 Design System

### 🎯 Design Principles
- **Minimalistic** - Clean and simple
- **Accessible** - WCAG 2.1 compliant
- **Responsive** - Mobile-first approach
- **Performant** - Optimized for speed

### 🎨 Color Palette
- **Primary**: `#3B82F6` (Blue)
- **Secondary**: `#8B5CF6` (Purple)
- **Accent**: `#10B981` (Green)
- **Neutral**: Gray scale
- **Semantic**: Red, Yellow, Green

### 🔤 Typography
- **Headings**: Inter font family
- **Body**: System fonts
- **Code**: Monospace fonts

### 🧩 Components
- **Buttons** - Primary, secondary, ghost variants
- **Cards** - Pitch cards, user cards
- **Forms** - Input, textarea, select
- **Navigation** - Navbar, sidebar, footer

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run sanity:dev` - Start Sanity Studio
- `npm run sanity:deploy` - Deploy Sanity Studio

### Testing
- **Unit Tests**: `npm run test`
- **E2E Tests**: `npm run test:e2e`
- **Performance**: Lighthouse CI

### Performance Optimization
- **Image optimization** with Next.js
- **Static generation** for fast loading
- **CDN distribution** via Vercel
- **Caching strategies** for API responses

## 🚀 Deployment

### Vercel Deployment
1. **Connect repository** to Vercel
2. **Configure environment variables**
3. **Deploy** with automatic CI/CD
4. **Monitor** with Vercel Analytics

### Environment Variables
```bash
# Production
NEXT_PUBLIC_SANITY_PROJECT_ID=your_prod_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Performance Monitoring
- **Vercel Analytics** - Web vitals tracking
- **Sentry** - Error monitoring
- **Lighthouse CI** - Performance audits

## 🤝 Contributing

As this is a personal project, contributions are welcome but please reach out first!

### Development Workflow
1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

### Code Standards
- **ESLint** configuration
- **Prettier** formatting
- **TypeScript** strict mode
- **Conventional commits**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Sanity team** for the headless CMS
- **Vercel team** for deployment platform
- **Open source community** for inspiration

## 📞 Connect with Me

- **LinkedIn**: [Shubham Rakheja](https://linkedin.com/in/shubham-rakheja-8a514a289)
- **Email**: b4mshubham@gmail.com

---

