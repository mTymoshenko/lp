This is a project with module structure. Every page is a module in its own folder with encapsulated local files (store, components etc)

1. There is a local card component in the module "B". You should render same card in module "C", but with data from module "C" data's `card` object as a card content. Reuse as much code as possible.
2. Create a new module "D", make it look like a copy of the module "C" at first. Then, make it to be white version of the page. Background color should be white. Implement the banner in code (HTML/CSS) - design: [desktop](./task/desktop.png), [mobile](./task/mobile.png), and add it to the very top of the page.
3. In Module "A" there is a store with empty `getData` action. This action should load data to state via `addToList` mutation. There is also a mock file with test data. This action should load either test data from json file or load data from real API (depends on `process.env.NODE_ENV` for example). As for API use [this](https://jsonplaceholder.typicode.com/users)

## Important!

Consider this project and task as a real one. 
Ask questions that you would ask in real world, leave comments that you would leave, give suggestions, that you would give. 

Good luck :)
