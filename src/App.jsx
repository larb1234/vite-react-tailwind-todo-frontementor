import { Fragment } from "react"
import CrossIcon from "./components/CrossIcon"
import MoonIcon from "./components/MoonIcon"

const App = ()=>{
  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8 ">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo </h1>        
          <button><MoonIcon fill="#000" className="fill-red-500"/></button>
        </div>
        <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo..." className="w-full text-gray-400 outline-none"/>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md ">
          
          <article className="gap-4 flex py-4 border-b-gray-400 border-b px-4">
            <button className="flex-none rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-600 grow">complete online Javascript curse in bluueweb</p>
            <button className=""><CrossIcon/></button>
          </article>
          <article className="gap-4 flex py-4 border-b-gray-400 border-b px-4">
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-600">complete online Javascript curse in bluueweb</p>
            <button><CrossIcon/></button>
          </article>
          <article className="gap-4 flex py-4 border-b-gray-400 border-b px-4">
            <button className="rounded-full border-2 h-5 w-5 inline-block"></button>
            <p className="text-gray-600">complete online Javascript curse in bluueweb</p>
            <button><CrossIcon/></button>
          </article>

          <section className="px-4 py-4 flex justify-between">
              <span className="text-gray-400">5 items left</span>
              <button className="text-gray-400">Clear completed</button>
          </section>     
        </div>        
      </main>

      <section className="container mx-auto px-4">
        <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center ">
       <p className="text-center mt-8"> drag and drop</p>
      </section>

    </div>
  )
}
export default App