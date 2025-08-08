# Publish a DotNet package to nuget.org

## 1. Create [nuget.org](https://www.nuget.org/) account & API key

## 2. Build

```bash
    dotnet build --configuration Release
```

## 3. Pack

```bash
    dotnet pack --configuration Release
```

## 4. Publish

```bash
    dotnet nuget push bin/Release/TuanHuynhHelloWorld.3.0.0.nupkg --api-key $NUGET_API_KEY --source https://api.nuget.org/v3/index.json
```
