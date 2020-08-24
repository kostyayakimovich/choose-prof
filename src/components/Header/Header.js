import React from 'react';
import { useHistory } from "react-router-dom";
import "./style.scss";


const Header = () => {
  let history = useHistory();
  const onClick = (path) => {
    history.push(`/${path}`);
  };
  return (

    <header className="header">
      <h1 className="logo" onClick={() => onClick("info")}>F<div className="logo-2">P</div></h1>
      <ul className="navigation">
        <li>регистрация</li>
        <li>войти</li>
      </ul>
    </header>

  );
};

export default Header;
