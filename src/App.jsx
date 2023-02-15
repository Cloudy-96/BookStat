import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <img src="src\assets\BookIcon.svg"/>
        <h1>BookStat</h1>
        <form>
          <input type="text" placeholder="Search Your Books..." />
          <button type="submit">Search</button>
        </form>
        {/* <div className="hero">
        <p> types things this page does</p>
      </div> */}
      </header>
      

      <aside className='PlaceLeft'>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>Shelves</a></li>
            <li><a>TBR</a></li>
            <li><a>Favourite reads</a></li>
            <li><a>Book stats</a></li>
          </ul>
        </nav>
      </aside>

      <main>
        <h2>Landing Page</h2>
        <ul>
          <li>gonna display it like spotify</li>
          <li>current reads</li>
          <li>TBR</li>
          <li>Anticipated reads</li>
        </ul>
      </main>

      <footer>
        <p>made by K.C.D, 2023</p>
      </footer>

    </div>


  )
}

export default App
