# 🌐 Professional 3D Developer Portfolio

A high-performance, immersive developer portfolio featuring custom 3D web graphics, physical simulations, and fluid micro-interactions. Built using vanilla JS for the core framework, and React/Vite/Spline/Tailwind for interactive 3D pages.

---

## 🚀 Key Features

* **3D Interactive Physics Scene**: Loaded via a secure, high-performance iframe sandboxed module using Spline physical simulation.
* **Vanilla 3D Icon Sphere**: A beautiful, mathematical Fibonacci-distributed 3D tag cloud displaying developer skills.
* **Optimized Web Assets**: Fully optimized media assets, including:
  - Low-bitrate web-ready MP4/WebM files for instantaneous previews.
  - Highly compressed, vector-preserved PDF certificates.
* **Fully Responsive Design**: Fluid adaptation across desktop, tablet, and mobile browsers with custom accessibility controls.
* **Production Ready**: Optimized headers, advanced cache control headers, and full Vercel/Cloudflare CDN compatibility.

---

## 🛠️ Technology Stack

* **Main Application**: HTML5, Vanilla JavaScript (ES Modules), Custom HSL CSS.
* **3D Subproject**: React 19, TypeScript 6, Vite 8, Tailwind CSS v4, Spline React runtime.
* **External Integrations**: Lenis Scroll, Three.js, Vercel Serverless Configurations.

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install all dependencies**:
   This single command installs the required dependencies for both the root project and the nested 3D workspace.
   ```bash
   npm install
   ```

---

## 💻 Development & Building

### Running Locally

To start the local development server and preview the portfolio:
```bash
npm run dev
```
This spins up a local server at `http://localhost:3005`.

### Building for Production

To compile all React/Vite/Spline pages in the subproject and output assets:
```bash
npm run build
```
This compiles the subproject and deposits the optimized static bundle in `edc/3dcom1/dist/`, which is directly loaded by the root `index.html`.

---

## ☁️ Deployment

This project is fully optimized for single-click deployment on modern cloud platforms.

### Vercel Deployment

1. Import your repository into the [Vercel Dashboard](https://vercel.com).
2. Configure the following Project Settings:
   - **Framework Preset**: `Other` (or static)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.` (the project root directory, which deploys your root HTML/JS and the built `edc/3dcom1/dist/` subproject assets)
3. Click **Deploy**. Vercel will automatically run your postinstall steps, compile your Spline workspace, and publish your site with the optimized HTTP headers specified in `vercel.json`.

### Cloudflare CDN / Pages

1. Create a new project in the **Cloudflare Pages** dashboard.
2. Select your git repository.
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `/` (the root directory)
4. Click **Save and Deploy**.
