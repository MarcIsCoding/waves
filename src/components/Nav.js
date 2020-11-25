import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic, faTimes} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo192.png';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return(
        <nav>
            <img src={logo} alt=""></img>
            <h3>React Music App</h3>
            <button className="btn-standard" onClick={() => setLibraryStatus(!libraryStatus)}>
                <span>Library </span>
                <FontAwesomeIcon icon={faMusic} />
            </button>
            <button className="btn-small" onClick={() => setLibraryStatus(!libraryStatus)}>
                <span className={libraryStatus ? "btn-zero-text" : ""}>Library </span>
                <FontAwesomeIcon icon={libraryStatus ? faTimes : faMusic} />
            </button>
        </nav>
    )
}

export default Nav;