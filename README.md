# Subani Shaik - Portfolio Website 🚀

A modern, responsive personal portfolio website showcasing my skills, projects, and certifications. Built with React and Vite for the Web Crafters Competition.

## ✨ Features

- **Modern UI/UX Design** - Clean and professional interface with smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Interactive Elements** - Hover effects, scroll animations, and transitions
- **Email Integration** - Contact form powered by EmailJS for direct inbox delivery
- **Certificate Modal** - Click to view certifications in full-screen modal
- **Six Main Sections:**
  - 🏠 **Home** - Hero section with profile picture and dynamic greeting
  - 👤 **About** - Personal bio, skills, and expertise
  - 💼 **Projects** - Showcase of web development projects (Learnify, Advice App, etc.)
  - 🏆 **Certifications** - Professional credentials with image previews
  - 📧 **Contact** - Interactive form with EmailJS integration
  - 📱 **Footer** - Social media links (GitHub, LinkedIn, Instagram)

## 🛠️ Tech Stack

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Lightning-fast build tool and development server
- **EmailJS** - Email service for contact form submissions
- **React Icons** - Beautiful icon library (Font Awesome)
- **CSS3** - Custom styling with CSS variables, animations, and keyframes
- **JavaScript ES6+** - Modern JavaScript features (hooks, async/await)

## 🚀 Quick Start

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This project is configured for easy deployment to Vercel.

### Deploy to Vercel (Recommended)

**Option 1: Via Vercel Website**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy" (auto-detects Vite configuration)
5. Your site is live! 🎉

**Option 2: Via Vercel CLI**

```bash
npm install -g vercel
vercel
```

For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

**OR** connect your GitHub repository with:
- Build command: `npm run build`
- Publish directory: `dist`

## 📧 Contact Form Setup

### EmailJS Configuration

The contact form uses EmailJS to send messages directly to your inbox:

1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update the values in `src/components/Contact.jsx`:

```javascript
const serviceID = 'YOUR_SERVICE_ID'
const templateID = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

For detailed setup instructions, see [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

- **src/components/Home.jsx** - Update name, tagline, and profile picture
- **src/components/About.jsx** - Update bio, skills, and experience
- **src/components/Projects.jsx** - Add your project portfolio
- **src/components/Certifications.jsx** - Add certification images and details
- **src/components/Contact.jsx** - Update email and contact information
- **src/components/Footer.jsx** - Update social media links

### Color Scheme

Customize colors in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Home.jsx & Home.css
│   │   ├── About.jsx & About.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Certifications.jsx & Certifications.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── image/
│   │   ├── chatgpt.png
│   │   ├── git.png
│   │   ├── ai.png
│   │   ├── nptel.png
│   │   ├── python.png
│   │   └── subani.jpg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 🏆 Competition Criteria

This portfolio meets all Web Crafters competition requirements:

✅ **UI Design & Aesthetics (30%)** - Modern, clean design with professional look  
✅ **Creativity & Originality (25%)** - Unique layout with custom animations  
✅ **Responsiveness (20%)** - Fully responsive across all devices  
✅ **Usability (15%)** - Easy navigation and intuitive interface  
✅ **Presentation (10%)** - Well-organized and visually appealing  

## 🎯 Key Highlights

- ✅ **5 Professional Certifications** - Git, AI/ML, ChatGPT, Python, NPTEL
- ✅ **Multiple Projects** - Learnify, Advice Generator, and more
- ✅ **Working Contact Form** - Direct email integration via EmailJS
- ✅ **Certificate Viewer** - Modal popup to view full certification images
- ✅ **Smooth Animations** - Custom scroll effects and transitions
- ✅ **SEO Optimized** - Proper meta tags and structure

## 👨‍💻 About Me

**Subani Shaik**  
Full-Stack Web Developer  
Hyderabad, India

- 📧 Email: subanishaik248@gmail.com
- 📱 Phone: +91 7569337729
- 💼 LinkedIn: [linkedin.com/in/subani-shaik-3201a42a9](https://www.linkedin.com/in/subani-shaik-3201a42a9/)
- 🐙 GitHub: [github.com/subani248](https://github.com/subani248)
- 📸 Instagram: [@beyond_lens_subani](https://www.instagram.com/beyond_lens_subani/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ by Subani Shaik for the Web Crafters Competition
