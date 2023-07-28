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
            setCompteur(1);
        }
        else {
            setToggle(true)
        }
    }

    const handleKeyPress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    }

    const handle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter" && e.currentTarget.value != '') {
            setToDos([...toDos, input]);
            setToggle(false);
            setLabel("Add +");
        }
    }

    return (
        <div className='nav-main'>
            <nav className="navbar">
                <div className='nav-item'>
                    {(toDos.length == 0 || toDos.length == 1) ? <div className="select">Note ({toDos.length})</div> : <div className="select">Notes ({toDos.length})</div>}
                    <div className="modifyList">
                        <button className="addToList" onClick={handleClick}>{label}</button>
                    </div>
                </div>
            </nav>
            {toggle && <input
                type="text"
                className='modify-list'
                placeholder='Type here and press "Enter" to add'
                autoFocus
                onChange={handleKeyPress}
                onKeyUp={handle} />}
        </div>
    );
};

export default Navbar;