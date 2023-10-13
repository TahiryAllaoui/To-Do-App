import { useEffect, useState } from "react";
import "../style/App.scss";
import Banner from "./Banner";
import Navbar from "./Navbar";
import ToDoList from "./ToDoList";

function App() {
  const [toDos, setToDos] = useState<string[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((datas) => {
        let tmp: string[] = [];
        datas.forEach((item: any) => tmp.push(item.content));
        setToDos(tmp);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="app">
      <Banner />
      <Navbar toDos={toDos} setToDos={setToDos} />
      <div className="content">
        <ToDoList toDos={toDos} />
      </div>
    </div>
  );
}

export default App;
