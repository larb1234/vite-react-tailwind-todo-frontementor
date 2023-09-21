import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import { utils } from "prettier/doc"

const initailStateTodos = [
  {id: 1, title: "Complete online Javascrit bluuweb Curse", completed:true},
  {id: 2, title: "Go to de gym", completed:false},
  {id: 3, title: "10 minutes meditation", completed:false},
  {id: 4, title: "Pick up grocerias", completed:false},
  {id: 5, title: "Complete todo app on Fronted Mentor", completed:true}
]
const App = ()=>{

  const [todos, setTodos] = useState(initailStateTodos);
  
  const createTodo = (title) =>{
  
    const newMetodo={
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos, newMetodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => { 
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo));
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => { 
    setTodos(todos.filter((todo) => !todo.completed ))
  }

  const [filter, setFilter] = useState("all");

  const changeFilter  = (filter) =>{
    setFilter(filter)
  };

  const filteredTodos = () =>{
    switch (filter) {
      case "all":
        return todos;        
      case "active":
        return todos.filter((todo)=>!todo.completed);
      case "completed":
        return todos.filter((todo)=>todo.completed);
      default:
        return todos;
    }
  }


  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dar:bg-[url('./assets/images/bg-mobile-dark.jpg')]" >
      
      <Header/>

      <main className="container mx-auto px-4 mt-8">
       
        {/*TodoCreate*/}
        <TodoCreate createTodo={createTodo}/>
        
        {/* TodoList (TodoItem) TodoUpdate TodoDelete*/}
        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>

        {/* TodoComputed*/}
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>   
               
        {/*TodoFilter */}
        <TodoFilter changeFilter = {changeFilter} filter={filter}/>

      </main>

      <footer className="text-center mt-8 dark:bg-gray-400"> drag and drop to reorder list</footer>
     
    </div>
  )
}
export default App