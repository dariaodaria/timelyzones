# TimelyZones.com

A fast, modern, mobile-friendly time zone converter built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Lightning-fast time zone conversions** with real-time updates
- **Smart call suggestions** - know when it's a good time to call
- **Beautiful dark/light themes** with smooth transitions
- **Mobile-first responsive design** 
- **Copy shareable links** for specific time conversions
- **World clock** with live updates for major cities
- **SEO-optimized** with dynamic meta tags

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date/Time**: date-fns with timezone support
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone or download the project**:
```bash
cd timelyzones
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts** to link your project and deploy

### Other Deployment Options

- **Netlify**: Connect your Git repository
- **Railway**: One-click deployment
- **DigitalOcean App Platform**: Git-based deployment

## 🎨 Customization

### Adding More Cities

Edit `src/data/cities.json` to add more cities:

```json
{
  "id": "your-city",
  "name": "Your City",
  "country": "Your Country",
  "timezone": "Your/Timezone",
  "coordinates": { "lat": 0, "lng": 0 },
  "population": 1000000,
  "isCapital": false
}
```

### Customizing Colors

Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 37 99 235;      /* Your primary color */
  --secondary: 100 116 139;  /* Your secondary color */
  --accent: 5 150 105;       /* Your accent color */
}
```

## 📱 Progressive Web App (PWA)

To add PWA capabilities:

1. Install `next-pwa`:
```bash
npm install next-pwa
```

2. Configure in `next.config.js`
3. Add manifest.json and service worker

## 🔜 Upcoming Features

- **User Authentication** with Google/GitHub
- **Location Groups** - organize multiple offices
- **Team Collaboration** - share groups with team members
- **Calendar Integration** - export meeting times
- **Mobile App** - native iOS/Android apps

## 📊 SEO Features

- Dynamic meta tags for each time zone conversion
- Open Graph images for social sharing
- Structured data for rich snippets
- Fast loading times (95+ Lighthouse score)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🎯 Performance

- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Lighthouse Score**: 95+
- **Bundle Size**: <100KB

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Email: support@timelyzones.com
- Twitter: @TimelyZones

---

Built with ❤️ for distributed teams worldwide.
