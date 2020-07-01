import { useState } from 'react';
import style from './list.module.scss';
import toggleNote from './toggleNote';

function List() {
  const [content, setContent] = useState([
    {
      title: 'Things i need to buy',
      date: '29/06/2020',
      note:
        'lorem bla bla something really cool lorem bla bla something really cool lorem bla bla something really coollorem bla bla something really cool lorem bla bla something really cool lorem bla bla something really cool',
      id: 1,
    },
    {
      title: 'item 2',
      date: '29/06/2020',
      note: 'lorem bla bla something really cool',
      id: 2,
    },
    {
      title: 'item 3',
      date: '29/06/2020',
      note: 'lorem bla bla something really cool',
      id: 3,
    },
  ]);

  return (
    <div className={style['list']}>
      <h1 className={style['list--title']}>Your notes</h1>

      <div className={style['list--header']}>
        <span className={style['list--header__title']}>TITLE</span>
        <span className={style['list--header__date']}>DATE</span>
      </div>

      {content.map((item, i) => {
        return (
          <div
            className={`${item} ${style['list--item']}`}
            onClick={toggleNote}
            key={i}
            style={{ maxHeight: '50px' }}
          >
            <div className={style['list--item__info']}>
              <p className={style['list--item__title']}>{item.title}</p>
              <p className={style['list--item__date']}>{item.date}</p>
            </div>

            <div className={style['list--item__note']}>
              <p>{item.note}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
