# Learn & Practice DevOps

This repository is a DevOps approach project

## Day 1:

✅Deploy a React app to Cloudflare Pages https://devops-aav.pages.dev

## Day 2:

✅Dockerize .NET app and deploy to Render https://devops-api.onrender.com/swagger/index.html</br>
✅Setup CI/CD auto deploy .NET app to Render [![Deploy .NET API to Render](https://github.com/huynhducthanhtuan/devops/actions/workflows/deploy-render.yml/badge.svg)](https://github.com/huynhducthanhtuan/devops/actions/workflows/deploy-render.yml)</br>
✅Setup CI/CD auto deploy React app to Cloudflare Pages [![Deploy React app to Cloudflare Pages](https://github.com/huynhducthanhtuan/devops/actions/workflows/deploy-cloudflare.yml/badge.svg)](https://github.com/huynhducthanhtuan/devops/actions/workflows/deploy-cloudflare.yml)

## Day 3:

✅Publish a sample npm package to npmjs.com [@tuanhuynh734623/helloworld@1.0.0](https://www.npmjs.com/package/@tuanhuynh734623/helloworld)</br>
✅Publish a sample .NET package to nuget.org [TuanHuynhHelloWorld.3.0.0](https://www.nuget.org/packages/TuanHuynhHelloWorld/)

## Day 4:

✅Refactor React app from JavaScript to TypeScript</br>
✅Deploy React app to Firebase Hosting https://devops-web-hdttuan.web.app</br>
✅Setup CI/CD auto deploy React app to Firebase Hosting [![Deploy React app to Firebase Hosting](https://github.com/huynhducthanhtuan/devops/actions/workflows/deploy-firebase.yml/badge.svg)](https://github.com/huynhducthanhtuan/devops/actions/workflows/deploy-firebase.yml)

## 📦 Project Structure

```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 .github/
│   └── 📁 workflows/
│       ├── ⚙️ deploy-cloudflare.yml
│       ├── ⚙️ deploy-firebase.yml
│       └── ⚙️ deploy-render.yml
├── 📁 backend/
│   ├── 📁 .vs/ 🚫 (auto-hidden)
│   ├── 📁 Controllers/
│   │   ├── 🟣 HealthzController.cs
│   │   └── 🟣 WeatherForecastController.cs
│   ├── 📁 DTO/
│   │   └── 🟣 WeatherForecast.cs
│   ├── 📁 Properties/
│   │   └── 📄 launchSettings.json
│   ├── 📁 bin/ 🚫 (auto-hidden)
│   ├── 📁 obj/ 🚫 (auto-hidden)
│   ├── 📄 .dockerignore
│   ├── 🚫 .gitignore
│   ├── 🐳 Dockerfile
│   ├── 🟣 Program.cs
│   ├── 📄 appsettings.Development.json
│   ├── 📄 appsettings.json
│   ├── 🟣 backend.csproj
│   ├── 📄 backend.csproj.user
│   ├── 📄 backend.http
│   └── 🟣 backend.sln
├── 📁 frontend/
│   ├── 📁 .firebase/
│   │   └── 🗑️ hosting.YnVpbGQ.cache 🚫 (auto-hidden)
│   ├── 📁 build/ 🚫 (auto-hidden)
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 public/
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🌐 index.html
│   │   ├── 🖼️ logo192.png
│   │   ├── 🖼️ logo512.png
│   │   ├── 📄 manifest.json
│   │   └── 📄 robots.txt
│   ├── 📁 src/
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.test.ts
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   ├── 📄 index.tsx
│   │   ├── 🖼️ logo.svg
│   │   ├── 📄 reportWebVitals.ts
│   │   └── 📄 setupTests.ts
│   ├── 🔒 .env 🚫 (auto-hidden)
│   ├── 📄 .env.example
│   ├── 📄 .firebaserc
│   ├── 🚫 .gitignore
│   ├── 📄 .prettierignore
│   ├── 📄 .prettierrc
│   ├── 📄 custom.d.ts
│   ├── 📄 firebase.json
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   └── 📄 tsconfig.json
├── 📁 npm/
│   └── 📁 helloworld/
│       ├── 📖 README.md
│       ├── 📄 index.js
│       └── 📄 package.json
├── 📁 nuget/
│   └── 📁 TuanHuynhHelloWorld/
│       ├── 📁 .vs/ 🚫 (auto-hidden)
│       ├── 📁 bin/ 🚫 (auto-hidden)
│       ├── 📁 obj/ 🚫 (auto-hidden)
│       ├── 🚫 .gitignore
│       ├── 📖 README.md
│       ├── 🟣 TuanHuynhHelloWorld.cs
│       └── 🟣 TuanHuynhHelloWorld.csproj
├── 📜 LICENSE
├── 📖 README.md
└── 📝 SECURITY.md
```
