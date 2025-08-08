# Publish a DotNet package to nuget.org

## 1. Build

```bash
    dotnet build --configuration Release
```

## 2. Pack

```bash
    dotnet pack --configuration Release
```

## 3. Publish

```bash
    dotnet nuget push bin/Release/TuanHuynhHelloWorld.3.0.0.nupkg --api-key $NUGET_API_KEY --source https://api.nuget.org/v3/index.json
```
