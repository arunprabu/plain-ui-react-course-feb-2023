// // Step 1 of context api
// have the context to have data  (optional) -- by using createContext()
import { createContext } from 'react';

export const PageContext = createContext(); // you can have the data
console.log(PageContext);
// step 2 of context api -- refer App.js
// step 3: refer AboutUsPage.js
