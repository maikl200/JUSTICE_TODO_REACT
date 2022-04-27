import React from 'react';

import classes from './header.module.css'
import burgerIcon from '../../assets/burger-icon.svg'
import bellIcon from '../../assets/bell-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'

const Header = () => {
  return (
      <>
        <header className={classes.header}>
          <span className={classes.header__logo}>Justice</span>
          <div className={classes.header__burger}>
            <img src={burgerIcon} alt="burger-button"/>
          </div>
          <nav className={classes.header__menu} aria-label="Header menu">
            <ul className={classes.menu__list}>
              <li className={classes.menu__list__item}>
                <a href="#">Главная</a>
              </li>
              <li className={classes.menu__list__item}>
                <a href="#">Список</a>
              </li>
              <li className={classes.menu__list__item}>
                <a href="#">Друзья</a>
              </li>
              <li className={classes.menu__list__item}>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <div className={classes.menu__profile}>
              <button className={classes.menu__profile__item}>Выйти</button>
              <img className={classes.menu__profile__item}
                   src={bellIcon}
                   alt="bell-icon"/>
              <img className={classes.menu__profile__item}
                   src={profileIcon}
                   alt="profile-icon"/>
            </div>
          </nav>
        </header>
      </>
  );

};

export default Header;