# Patterns

https://medium.freecodecamp.org/mindset-lessons-from-a-year-with-react-1de862421981

## Fractal
[First Article](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)

Fractal can be summarized in just one guiding principle : All units repeat themselves.

* build is where all the built files go, you never touch this except when you need to deploy.
* public is where your index.html file and <script src> assets go. (They automatically get copied to build while using create-react-app)
* src is where you code.
* src.pages are the root level components, ones which are directly mounted on level 1 routes. (Ex. if you have a route called /login that mounts a Login component, then Login.js will be present in pages directory).
* src.modules handles your state (actions + reducers using ducks file structure).
* src.components have shared components, like Button, Input etc.
* src.utils have utilities like your api wrapper, date utils, string utils etc.
* config is where you store your environment variables like api endpoints. Don’t commit this to git.
* store initializes the redux store.
* index registers the routes, and renders the app.



## Duck Structure
[First Article](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
## Compound Components
## High Order Components
## Render Props
## Smart/Dumb Components
many others (try out Profiling)