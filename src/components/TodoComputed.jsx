const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return(
        <section className="px-4 py-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400">{computedItemsLeft} items left</span> {/*computedItemsLeft esta devolviendo un numero no un metodo*/}
        {/* <button className="text-gray-400" onClick={() => clearCompleted()}>Clear completed</button>*/  }
            <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button> {/*como el metodo no tiene parametrop se puede poner asi tambien */}
        </section>  
    )

 }
 export default TodoComputed