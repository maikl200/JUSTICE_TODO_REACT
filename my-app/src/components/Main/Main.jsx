import React, {useState} from 'react';

import classes from '../Main/main.module.css'
import plusIcon from '../../assets/plus-icon.svg'
import trashIcon from '../../assets/trash-icon.svg'
import editIcon from '../../assets/edit-icon.svg'
import mobileIcon from '../../assets/mobile-ellipse.svg'


const Main = () => {

  const [info, setInfo] = useState([
    {
      text: 'Текст',
      id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    }
  ])

  const [value, setValue] = useState('')
  const [read, setRead] = useState(true)


  const addTask = () => {
    if (!value.split(" ").join("").length) {
      setValue('')
      return
    }
    setInfo([
      ...info,
      {
        text: value,
        id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
      }
    ])
    setValue('')
  }


  const editTask = () => {
    setRead(false)
  }

  const deleteTask = (item) => {
    setInfo(info.filter((element) => element.id !== item.id))
  }


  return (
      <>
        <main className={classes.main}>
          <div className={classes.main__header}>
            <div className={classes.main__header__options}>
              <button className={classes.main__header__option__btn}>Список</button>
              <button className={classes.main__header__option__btn}>Напоминания</button>
              <button className={classes.main__header__option__btn}>Еще</button>
            </div>
            <div className={classes.main__header__add_field}>
              <input
                  onChange={(e) => setValue(e.target.value)}
                  className={classes.add_field__text}
                  type="text"
                  value={value}
                  placeholder="Введите текст"/>
              <button
                  onClick={() => addTask()}
                  className={classes.btn}>Добавить
                <img src={plusIcon} alt={'plusIcon'}/>
              </button>
            </div>
          </div>
          <div className={classes.todo_list}>
            {info.map(item => {
              return (
                  <div key={item.id}
                       className={classes.todo_item}>
                    <input
                        onBlur={() => setRead(true)}
                        readOnly={read}
                        defaultValue={item.text}/>
                    <div className={classes.todo_item__icons}>
                      <img
                          onClick={() => deleteTask(item)}
                          className={classes.todo_item__icon}
                          src={trashIcon}
                          alt="trash-icon"/>
                      <img className={classes.todo_item__icon}
                           onClick={() => editTask()}
                           src={editIcon}
                           alt="edit-icon"/>
                      <img className={classes.todo_item__icon_mobile}
                           src={mobileIcon}
                           alt="mobile-ellipse"/>
                    </div>
                  </div>
              )
            })}
          </div>
        </main>
      </>
  )
};

export default Main;