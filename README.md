# Learn & Practice DevOps

This repository is a DevOps approach project

## Day 1:

✅Deploy a React app to Cloudflare Pages https://devops-aav.pages.dev

## Day 2:

✅Dockerize .NET app and deploy to Render https://devops-api.onrender.com/swagger/index.html</br>
✅Setup CI/CD with GitHub Actions to auto-deploy .NET app to Render</br>
✅Setup CI/CD with GitHub Actions to auto-deploy React app to Cloudflare Pages

## Day 3:

✅Publish a sample npm package to npmjs.com [@tuanhuynh734623/helloworld@1.0.0](https://www.npmjs.com/package/@tuanhuynh734623/helloworld)</br>
✅Publish a sample .NET package to nuget.org [TuanHuynhHelloWorld.3.0.0](https://www.nuget.org/packages/TuanHuynhHelloWorld/)

## Day 4:

✅Refactor React app from JavaScript to TypeScript</br>
✅Deploy React app to Firebase Hosting https://devops-web-hdttuan.web.app</br>
✅Setup CI/CD with GitHub Actions to auto-deploy React app to Firebase Hosting

## 📦 Project Structure

```text
├── .github
    └── workflows
    │   ├── deploy-cloudflare.yml
    │   ├── deploy-firebase.yml
    │   └── deploy-render.yml
├── LICENSE
├── README.md
├── backend
    ├── .dockerignore
    ├── .gitignore
    ├── Controllers
    │   ├── HealthzController.cs
    │   └── WeatherForecastController.cs
    ├── DTO
    │   └── WeatherForecast.cs
    ├── Dockerfile
    ├── Program.cs
    ├── Properties
    │   └── launchSettings.json
    ├── appsettings.json
    ├── backend.csproj
    ├── backend.csproj.user
    ├── backend.http
    └── backend.sln
├── frontend
    ├── .env.example
    ├── .firebaserc
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── custom.d.ts
    ├── firebase.json
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── App.css
    │   ├── App.test.ts
    │   ├── App.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── logo.svg
    │   ├── reportWebVitals.ts
    │   └── setupTests.ts
    └── tsconfig.json
├── npm
    └── helloworld
    │   ├── README.md
    │   ├── index.js
    │   └── package.json
└── nuget
    └── TuanHuynhHelloWorld
        ├── .gitignore
        ├── README.md
        ├── TuanHuynhHelloWorld.cs
        └── TuanHuynhHelloWorld.csproj
```
