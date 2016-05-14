[![npm](https://img.shields.io/npm/v/nativescript-applist.svg)](https://www.npmjs.com/package/nativescript-applist)
[![npm](https://img.shields.io/npm/dt/nativescript-applist.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-applist)

# NativeScript AppList

A [NativeScript](https://nativescript.org/) module to handle the list of installed apps on a device.

## License

[MIT license](https://raw.githubusercontent.com/mkloubert/nativescript-applist/master/LICENSE)

## Platforms

* Android
* iOS (currently returns empty list!)

## Installation

Run

```bash
tns plugin add nativescript-applist
```

inside your app project to install the module.

## Demo

For quick start have a look at the [demo/app/main-view-model.js](https://github.com/mkloubert/nativescript-applist/blob/master/demo/app/main-view-model.js) file of the [demo app](https://github.com/mkloubert/nativescript-applist/tree/master/demo) to learn how it works.

Otherwise ...

## Usage

### Include

Include the module in your code-behind:

```javascript
var AppList = require('nativescript-applist');
```

### Get installed apps

```javascript
AppList.getInstalledApps(function(apps) {
    for (var i = 0; i < apps.length; i++) {
        // TODO
    }
});
```

Each item of `apps` has the following properties:

| Name  | Description  |
| ----- | ----------- |
| displayName | The display name |
| name | The internal (package) name |
| version.code | The version code (Android only) |
| version.name | The version name |

#### Additional options

```javascript
// get apps with icons
AppList.getInstalledApps(function(apps) {
    // TODO
}, {
    withIcons: true
});
```

The 2nd parameter of `AppList.getInstalledApps` function has the following structure:

| Name  | Description  |
| ----- | ----------- |
| icon.format | The icon format. `0` = `PNG`, `1` = `JPEG` |
| icon.quality | The icon quality between 0 and 100 |
| withIcons | Also loads icons for each entry or not |
