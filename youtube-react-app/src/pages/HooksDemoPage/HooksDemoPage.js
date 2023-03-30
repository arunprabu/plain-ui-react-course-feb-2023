import React from 'react';
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

const HooksDemoPage = () => {
  return (
    <div>
      <h1>HooksDemoPage</h1>
      <h2>useState() - Hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>useEffect() - Hook Demo</h2>
      <Blog />

      <hr />
      <h2>useRef() and useState() - Hooks Demo</h2>
      <TodosVariant1 />

      <hr />
      <h2>useRef() and useReducer() - Hooks Demo</h2>
      <TodosVariant2 />
    </div>
  );
};

export default HooksDemoPage;
