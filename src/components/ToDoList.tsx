import { useState } from "react";
import "../style/ToDoList.scss";

interface ITodo {
  id: string;
  content: string;
  createdAt: string;
}

const ToDoList = ({
  toDos,
  setToDos,
}: {
  toDos: ITodo[];
  setToDos: (toDosList: ITodo[]) => void;
}) => {
  const [singleTodo, setSingleTodo] = useState<ITodo>({
    id: "",
    content: "",
    createdAt: "",
  });
  const [pop, setPop] = useState(false);

  const handleSingleItem = (id: string) => {
    fetch("http://localhost:3000/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data: any) => {
        setSingleTodo({
          id: data._id,
          content: data.content,
          createdAt: data.createdAt,
        });
        setPop(true);
      });
  };
  const handleDelete = (id: string) => {
    fetch("http://localhost:3000/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
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
      })
      .catch((e) => console.log("err: " + e));
  };

  const handleBack = () => {
    setPop(false);
  };

  return (
    <ul className="to-do">
      {toDos.map((todo, index) => (
        <li
          className="to-do-content"
          key={index}
          onClick={() => handleSingleItem(todo.id)}
        >
          <div className="todoItem">
            <p onClick={() => handleSingleItem(todo.id)}>{todo.content}</p>
          </div>

          <div
            className="delete"
            style={{ color: "gray", cursor: "pointer" }}
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </div>
        </li>
      ))}
      {pop && (
        <div
          className="pop"
          style={{
            width: "35%",
            height: "12rem",
            border: "1px solid black",
            borderRadius: "8px",
            position: "absolute",
            left: "30%",
            top: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            boxShadow: "0 0 50rem 50rem hsla(0, 0%, 0%, 0.171)",
          }}
        >
          <h2>{singleTodo.content}</h2>
          <h2>{singleTodo.createdAt}</h2>
          <p style={{ color: "gray", cursor: "pointer" }} onClick={handleBack}>
            Back
          </p>
        </div>
      )}
    </ul>
  );
};

export default ToDoList;
