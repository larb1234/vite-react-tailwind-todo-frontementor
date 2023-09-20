import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initailStateTodos = [
  {id: 1, title: "Complete online Javascrit bluuweb Curse", completed:true},
  {id: 2, title: "Go to de gym", completed:false},
  {id: 3, title: "10 minutes meditation", completed:false},
  {id: 4, title: "Pick up grocerias", completed:false},
  {id: 5, title: "Complete todo app on Fronted Mentor", completed:false}
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

  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      
      <Header/>

      <main className="container mx-auto px-4 mt-8">
       
        {/*TodoCreate*/}
        <TodoCreate createTodo={createTodo}/>
        
        {/* TodoList (TodoItem) TodoUpdate TodoDelete*/}
        <TodoList todos={todos}/>

        {/* TodoComputed*/}
        <TodoComputed/>   
               
        {/*TodoFilter */}
        <TodoFilter/>

      </main>

      <footer className="text-center mt-8"> drag and drop to reorder list</footer>
     
    </div>
  )
}
export default App