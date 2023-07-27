import { useState } from 'react';
import '../style/App.scss'
import Banner from './Banner'
import Navbar from './Navbar'
import ToDoList from './ToDoList'

function App() {

  const [toDos, setToDos] = useState<string[]>([]);


  return (
    <div className='app'>
      <Banner />
      <Navbar toDos={toDos} setToDos={setToDos} />
      <div className='content'>
        <ToDoList toDos={toDos} />
      </div>
    </div>
  )
}

export default App
