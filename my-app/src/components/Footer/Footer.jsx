import React from 'react';

import classes from './footer.module.css'

const Footer = () => {
  return (
      <>
        <footer className={classes.footer}>
          <div>
            <div className={classes.footer__container}>
              <span className={classes.footer__logo}>Justice</span>
              <nav className={classes.footer__menu} aria-label="footer-menu">
                <ul className={classes.footer_menu__list}>
                  <li className={classes.footer_menu__list__item}>Главная</li>
                  <li className={classes.footer_menu__list__item}>Список</li>
                  <li className={classes.footer_menu__list__item}>Друзья</li>
                  <li className={classes.footer_menu__list__item}>Контакты</li>
                </ul>
              </nav>
            </div>
            <div className={classes.footer__rights_block}>
              <span>© 2021 Justice-team. All rights reserved.</span>
              <div className={classes.rights_block__privacy_container}>
                <span>Terms & conditions</span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
};

export default Footer;