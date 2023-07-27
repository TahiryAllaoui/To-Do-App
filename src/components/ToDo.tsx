import '../style/ToDo.scss'

const ToDo = ({ toDoInput }: { toDoInput: string }) => {
    return (
        <div className="to-do-input">
            <input type="checkbox" />
            <p>{toDoInput}</p>
        </div>
    );
};

export default ToDo;