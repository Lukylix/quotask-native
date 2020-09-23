[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![Typescript](https://img.shields.io/badge/Typescript-~3.9.5-blue.svg)



![React Native](https://img.shields.io/badge/React-^16.11-<COLOR>.svg)
![Expo](https://img.shields.io/badge/Expo-^38.0-<COLOR>.svg)
![Axios](https://img.shields.io/badge/Axios-^0.19-<COLOR>.svg)
![React Navigation](https://img.shields.io/badge/React_Navigation-^5.7-<COLOR>.svg)
![React Hook Horm](https://img.shields.io/badge/React_Hook_Form-^6.3-<COLOR>.svg)

# :memo: Quotask React Native application

## :building_construction: Core Project Structure

```text
.
├── UI/
│   ├── components/
│   ├── hooks/
│   ├── navigation/             * Routing and navigation
│   ├── screens/                * Pages (navigation entry)
│   └── styles/                 * Reusable styles
│
├── configs/                    * Configs files used across project
│   └── env.js                  * Env like file [You must create it]
├── assets/
│   ├── fonts/                  * Text fonts
│   └── images/                 * Statics icons/images
│
├── libraries/                  * Reusable functions
│
└── App.js                      * Everything start form here
```

## :rocket: Running project

### Configuration

You must create **/configs/env.js** before running the project like so:

```js
export default {
	QUOTASK_API_HOST: "https://your.api.host",
};
```

## Screenshot

![Login Screen](https://github.com/Lukylix/Repos_Images/raw/master/quotask-native/loginScreen.png)