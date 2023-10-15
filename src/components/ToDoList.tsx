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
        console.log(data);
        // let tmp: ITodo[] = [];
        // data.forEach((index: any) => {
        //   let newItem: ITodo = {
        //     id: index._id,
        //     content: index.content,
        //     createdAt: index.createdAt,
        //   };
        //   tmp.push(newItem);
        //   console.log(tmp);
      });
  };

  const handleDelete = (id: string) => {
    fetch("http://localhost:3000/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => console.log("deleted"))
      .catch((e) => console.log("err: " + e));
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
    </ul>
  );
};

export default ToDoList;
