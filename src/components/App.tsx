import { useEffect, useState } from "react";
import "../style/App.scss";
import Banner from "./Banner";
import Navbar from "./Navbar";
import ToDoList from "./ToDoList";

interface ITodo {
  id: string;
  content: string;
  createdAt: string;
}

function App() {
  const [toDos, setToDos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((datas) => {
        let tmp: ITodo[] = [];
        datas.forEach((item: any) =>
          tmp.push({
            id: item._id,
            content: item.content,
            createdAt: item.createdAt,
          })
        );
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
