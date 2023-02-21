import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'

import { A, Routes, Route, Router } from "@solidjs/router"
import { Editor } from './editor'

const Center: Component<{ children: JSXElement }> = (props) => {
  return <div class='flex flex-row'>
    <div class='flex-1' />
    <div>{props.children}</div>
    <div class='flex-1'></div>
  </div>
}

const Home = () => {
  const [count, setCount] = createSignal(1)
  return <>
    <Center>

      {/* <div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count() + 1)}>+</button>  Counter: {count}</div> */}
    </Center>
  </>
}
const About = () => {
  return <Center>
    <div class='m-2 p-2 rounded-md bg-white text-black' >My personal site</div>
  </Center>
}
const EditorPage = () => {
  return  <div class='m-2 p-2 rounded-md bg-white text-black h-screen' ><Editor/></div>
}

function App() {
  return <>
    <nav>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/about">About</A>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/">Home</A>
      <A class='p-2 hover:text-blue-600 text-blue-700' href="/editor">Editor</A>
    </nav>

    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/editor" component={EditorPage} />
    </Routes>
  </>
}

const NavBar = () => {
  return <div>
    <a href="#" class="logo_little_photo">
            {/* <img height="50" width="50" src="https://media.licdn.com/dms/image/D4E03AQEQjlhNGZzh5w/profile-displayphoto-shrink_800_800/0/1676474003185?e=2147483647&v=beta&t=Gjq7lT1Aid5aZY0K9AORm9r2e8XF_iFgZS_ZLPMQGDQ" alt="Foto de Maycol Espinoza"> */}
            <div class="logotype">
                <p>Maycol Espinoza Ponce</p>
            </div>
        </a>
        <button id="open_main_menu" aria-label="OPEN MENU">
            {/* <img class="menu_icon1" src="https://img.icons8.com/glyph-neue/256/xbox-menu.png" alt="Icono Open Menu"> */}
        </button> 
        <ul id="main_menu" class='font-bold text-lg bg-slate-500 list-none inline-flex space-x-1 p-2 m-2 cursor-pointer w-full'> 
        <button id="close_main_menu" aria-label="CLOSE MENU">
            {/* <img class="menu_icon2" src="https://img.icons8.com/sf-black/256/xbox-menu.png" alt="Icon Close Menu">    */}
        </button>
            <li class='hover:text-green-500'><a href="./index.html" id="selected">HOME</a></li> 
            <li class='hover:text-green-500'><a href="./about.html">ABOUT</a></li>
            <li class='hover:text-green-500'><a href="./experience.html">EXPERIENCE</a></li>
            <li class='hover:text-green-500'><a href="./social.html">SOCIAL</a></li>
            <li class='hover:text-green-500'><a href="./contact.html">CONTACT</a></li>
        </ul>
  </div>

}
render(() => <NavBar />, document.getElementById("topheader")!);
render(() => <Router><App /></Router>, document.getElementById("app")!);
