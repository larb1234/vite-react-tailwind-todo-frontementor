import { useState } from "react";

const TodoCreate = ({createTodo}) => { 


    const[title, setTitle] = useState('')
    const handleSubmitAddTodo = (e) => { 
        e.preventDefault();
        console.log(title);
        if(!title.trim()){
            return setTitle('')
        }

        createTodo(title);
        setTitle('');        
        
    }
    return(

        <form onSubmit={handleSubmitAddTodo} className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8 dark:bg-gray-800 ">
            <span className="dark:bg-gray-800 rounded-full border-2 h-5 w-5 inline-block"></span>
            <input type="text" placeholder="Create a new todo..." className="dark:bg-gray-800 w-full text-gray-400 outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
        </form>
    )

 }
 export default TodoCreate