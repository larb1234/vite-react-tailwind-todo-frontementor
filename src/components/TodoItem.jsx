import IconCheck from "./IconCheck"
import IconCross from "./IconCross"
const TodoItem= ({todo, removeTodo, updateTodo}) => { 
    const {id,title, completed} = todo
    return(
        <article className="gap-4 flex  py-4 border-b-gray-400 border-b px-4 dark:bg-gray-800">
            
            <button className= {`h-5 w-5 flex-none rounded-full border-2  
                                    ${completed ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" 
                                                : "inline-block "}`
                                }
                    onClick={() => updateTodo(id)}            
            >
               { completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow ${completed ? "line-through" : ""} `}>{title}</p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross/>
            </button>
        </article>
    )

 }
 export default TodoItem