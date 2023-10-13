import { useState } from "react";
import "../style/ToDoList.scss";

interface ITodo {
  content: string;
  createdAt: string;
}

const ToDoList = ({ toDos }: { toDos: string[] }) => {
  //   const handleDelete = (index: number) => {
  //     // let deletedItemList: string[] = [...toDos];
  //     // deletedItemList.splice(index, 1);
  //     // setToDos(deletedItemList);
  //     console.log("deleted");
  //   };
  const [todoItem, setTodoItem] = useState<ITodo>({
    content: "",
    createdAt: "",
  });

  const handleSingleItem = (i: number) => {
    fetch("http://localhost:3000", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data: any) => {
        let tmp: ITodo[] = [];
        data.forEach((i: any) => {
          let newItem: ITodo = {
            content: i.content,
            createdAt: i.createdAt,
          };
          tmp.push(newItem);
        });
        setTodoItem(tmp[i]);
      });
    let pop = document.querySelector(".pop") as HTMLElement;
    pop.style.display = "flex";
    pop.style.flexDirection = "column";
    pop.style.justifyContent = "center";
    pop.style.alignItems = "center";
  };

  const handleBack = () => {
    let pop = document.querySelector(".pop") as HTMLElement;
    pop.style.opacity = "none";
    console.log("back");
  };

  const handleDelete = () => {
    fetch("http://localhost:3000", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <ul className="to-do">
      {toDos.map((todo, index) => (
        <li
          className="to-do-content"
          key={index}
          onClick={() => handleSingleItem(index)}
        >
          <div className="todoItem">
            <p onClick={() => handleSingleItem(index)}>{todo}</p>
          </div>
          <div className="pop">
            <h2>{todoItem.content}</h2>
            <p>On: {todoItem.createdAt}</p>
            <p
              style={{ color: "gray", border: "1px solid black" }}
              onClick={handleBack}
            >
              Back
            </p>
          </div>
          <div
            className="delete"
            style={{ color: "gray", cursor: "pointer" }}
            onClick={handleDelete}
          >
            Delete
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
