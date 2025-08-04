# simple-expo

## 使い方

- git clone
- cd simple-expo-3
- npm install
- .env.localを作成し、EXPO_PUBLIC_GAS_API_URLを設定
- npx expo start


## build

```
npm install -g eas-cli
npx expo install expo-dev-client

eas login

eas build:configure
```

```json
{
  "cli": {
    "version": ">= 16.17.4",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "enterpriseProvisioning": "universal"
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "development": {},
    "production": {}
  }
}
```

ひとまずiOS用をビルド。


一気にTestFlightに配布したほうが手間が少ない（Apple Developer Accountが必要）

```
eas build --profile development --platform ios --auto-submit
```

普通にビルドするのもあり。

```
eas build --profile development --platform ios
```