## Project structure
- [`src`](#src)
  - [`assets`](#assets)
  - [`components`](#components)
  - [`config`](#config)
  - [`directives`](#directives)
  - [`layout`](#layout)
  - [`mixins`](#mixins)
  - [`pages`](#pages)
  - [`plugins`](#plugins)
  - [`router`](#router)
  - [`scss`](#scss)
  - [`services`](#services)
  - [`store`](#store)
  - [`.env.js`](#envjs)
  - [`main.js`](#mainjs)
  - [`global.helpers.js`](#globalhelpersjs)

### `src`
Source =)

### `assets`
Images/Fonts/Other media stuff.

### `components`
Shared components folder.

### `config`
App config files. Each category in separate file.

### `directives`
- Handy debounce directive

### `layout`
Base app layout components.
- `Header`, `Footer` components and main layout wrapper.

### `mixins`
- One method/prop per file principle.

### `pages`
Page wrapper components(Pages) and Local components.

### `plugins`
- `globalEventBus` - $bus.

### `router`
Router instance and routing declaration.
- `index` - router initialization.
- `routes` - routing.
- `middlewares`:
  - `initCurrentUserStateMiddleware` - Current user state initialization (each time app loads, check refresh token and fetch current user if token exist.)
  - `checkAccessMiddleware` - Each time user change route, check permissions to route.
  - `setPageTitleMiddleware` - Each time user change route, set page title.
- `util`:
  - `routePropResolver` - Pass params from URL to component as props (example in `src/router/routes.js`)

### `services`
Data access layer/API calls.
- ES6 API calls classes.
- API calls must be represented in separate classes (not in vuex action).
- `auth.service` - Auth methods and API calls.
- `http.init` - Http request class.
- `util`:
  - `ResponseWrapper` - Represent response object.
  - `ErrorWrapper` - Represent error object.
  - `clearData` - Uses to clear request data before send it. Helper.

### `store`
App store with separate modules.

### `.env.js`
Environment variables (add this to git ignore).

### `main.js`
Root app initialization file.

### `global.helpers.js`
Add global helpers to window object. Yepp globals ... =)

## Utils/Helpers

## Build Setup
``` bash
# clone repo
git clone https://github.com/kien868788/ShoppingCard.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve or yarn serve

# build for production with minification
npm run build or yarn build
