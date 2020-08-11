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
