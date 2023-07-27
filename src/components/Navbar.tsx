import { useState } from 'react';
import '../style/Navbar.scss'

const Navbar = ({ toDos, setToDos }: { toDos: string[], setToDos: (toDosList: string[]) => void }) => {

    const [compteur, setCompteur] = useState(1);
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const [label, setLabel] = useState("Add +")

    const handleClick = () => {
        setCompteur(compteur + 1);
        setLabel("x");
        if (compteur % 2 == 0) {
            setToggle(false);
            setLabel("Add +");
        }
        else {
            setToggle(true)
        }
    }

    const handleKeyPress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    const handle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            setToDos([...toDos, input]);
            setToggle(false);
            setLabel("Add +");
        }
    }


    return (
        <div className='nav-main'>
            <nav className="navbar">
                <div className='nav-item'>
                    <select name="filter" id="filter">
                        <option value="all">All ({toDos.length})</option>
                        <option value="checked">Checked</option>
                        <option value="unchecked">Unchecked</option>
                    </select>
                    <div className="modifyList">
                        <button className="addToList" onClick={handleClick}>{label}</button>
                    </div>
                </div>
            </nav>
            {toggle && <input type="text" className='modify-list' placeholder='Type here and press "Enter" to add' autoFocus onChange={handleKeyPress} onKeyUp={handle} />}
        </div>
    );
};

export default Navbar;