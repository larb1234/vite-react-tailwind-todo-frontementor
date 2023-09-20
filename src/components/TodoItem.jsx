import IconCheck from "./IconCheck"
import IconCross from "./IconCross"
const TodoItem= ({todo}) => { 
    return(
        <article className="gap-4 flex  py-4 border-b-gray-400 border-b px-4">
            
            <button className="flex-none rounded-full border-2 h-5 w-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
                <IconCheck />
            </button>
            <p className="text-gray-600 grow">{todo.title}</p>
            <button className="flex-none"><IconCross/></button>
        </article>
    )

 }
 export default TodoItem