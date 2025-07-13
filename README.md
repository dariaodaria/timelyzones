# TimelyZones 🌍

A fast, modern, mobile-friendly time zone converter that helps users convert time between any global locations and understand the current time across the world.

## ✨ Features

- **Instant Time Conversion**: Convert time between any two time zones
- **Smart Timezone Detection**: Auto-detects user's current timezone
- **Multi-Location Support**: Compare multiple timezones simultaneously
- **Business Hours Indicator**: Shows if it's a good time to call
- **Mobile Optimized**: Clean, responsive design for all devices
- **Dark/Light Mode**: Automatic theme switching
- **SEO Optimized**: Fast loading with search-friendly URLs
- **Copy & Share**: Generate shareable links for specific conversions

## 🚀 Live Demo

Visit: **[timelyzones.com](https://timelyzones.com)**

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Deployment**: Vercel
- **Performance**: Optimized for Core Web Vitals

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/timelyzones.git
   cd timelyzones
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Environment Variables

Create a `.env.local` file with:

```env
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 🎯 Core Features

### Time Conversion
- Convert between 500+ cities and timezones
- Real-time timezone calculations
- Daylight saving time awareness

### User Experience
- Searchable timezone dropdown
- Keyboard navigation support
- Copy-to-clipboard functionality
- Responsive mobile design

### SEO & Performance
- Server-side rendering
- Optimized Core Web Vitals
- SEO-friendly URLs like `/new-york-to-london`
- Fast loading times

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Set environment variables**
4. **Deploy automatically**

## 📊 Performance

- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Time zone data provided by IANA Time Zone Database
- Icons by Lucide React
- Built with Next.js and Vercel

---

Made with ❤️ for better global communication
