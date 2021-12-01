import React from 'react'
import {Link} from 'react-router-dom'
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'

const NavBar = ({ onDeleteCompleted}) => {
    return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <Link to="/" className="btn btn-outline-dark bg-light" exact={true}><FaListAlt /></Link>
                <Link to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></Link>
                <Link to="/add-task" className="btn btn-outline-dark bg-light" exact={true}><FaPlusSquare /></Link>
            </div>
            <button className="btn btn-outline-dark bg-light" onClick={onDeleteCompleted}><FaTrash /></button>
        </footer>
    )
}

export default NavBar
