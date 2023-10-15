import "../style/ToDoList.scss";

interface ITodo {
  id: string;
  content: string;
  createdAt: string;
}

const ToDoList = ({ toDos }: { toDos: ITodo[] }) => {
  //   const handleDelete = (index: number) => {
  //     // let deletedItemList: string[] = [...toDos];
  //     // deletedItemList.splice(index, 1);
  //     // setToDos(deletedItemList);
  //     console.log("deleted");
  //   };
  //   const [todoItem, setTodoItem] = useState<ITodo>({
  //     id: "",
  //     content: "",
  //     createdAt: "",
  //   });

  const handleSingleItem = (id: string) => {
    fetch("http://localhost:3000/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data: any) => {
        let tmp: ITodo[] = [];
        data.forEach((index: any) => {
          let newItem: ITodo = {
            id: index._id,
            content: index.content,
            createdAt: index.createdAt,
          };
          tmp.push(newItem);
          console.log(tmp);
        });
      });
    let pop = document.querySelector(".pop") as HTMLElement;
    pop.style.display = "flex";
    pop.style.flexDirection = "column";
    pop.style.justifyContent = "center";
    pop.style.alignItems = "center";
  };

  const handleBack = () => {
    let pop = document.querySelector(".pop") as HTMLElement;
    pop.style.display = "none";
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
          onClick={() => handleSingleItem(todo.id)}
        >
          <div className="todoItem">
            <p onClick={() => handleSingleItem(todo.id)}>{todo.content}</p>
          </div>
          <div className="pop">
            <h2>{todo.content}</h2>
            <p>On: {todo.createdAt}</p>
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
