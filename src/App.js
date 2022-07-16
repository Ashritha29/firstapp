import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;






























// import Addtodo from './Addtodo'
// import Todolist from './Todolist'
// import Todocount from './Todocount'
// import { useState } from 'react'


// function App() {
//   // //state
//   // const [todos, setTodos] = useState([]);

//   // const onFormSubmit = (todoObj) => {
//   //   setTodos([...todos, todoObj.todo]);


//   // }
//   // return (
//   //   <div className="container text-center mt-5">

//   //     <Apidata />
//   //     {/* row-1 */}
//   //     <div className="row">
//   //       <div className="col-sm-4">
//   //         <Addtodo onFormSubmit={onFormSubmit} />
//   //       </div>
//   //       <div className="col-sm-4">
//   //         <Todolist todos={todos} />
//   //       </div>
//   //       <div className="col-sm-4">
//   //         <Todocount todos={todos} />
//   //       </div>
//   //     </div>

//   //   </div>

//   // );
// }

// export default App;