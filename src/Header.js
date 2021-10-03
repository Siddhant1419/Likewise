import React from "react"
import "./Header.css"
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton'
import icon9 from './Icons/icon9.png'

import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
        {backButton ? (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
          </IconButton>
        ) : (
          <IconButton>
            <PersonRoundedIcon className="header__icon" fontSize="large" />
          </IconButton>
        )}
        
        <Link to="/">
          <img
          className="header__logo" 
          src={icon9} alt="Likewise logo"/>
        </Link>
        
        <Link to="/chat">
          <IconButton>
              <QuestionAnswerIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
    </div>
  );
}

export default Header;
