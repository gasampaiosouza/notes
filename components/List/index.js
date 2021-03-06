import style from './list.module.scss';
import toggleNote from './toggleNote';
import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function List({ content, setContent }) {
  const listItem = useRef(null);
  const isListClear = Object.keys(content).length !== 1;

  const [searchValue, setSearchValue] = useState('');

  const search = (event) => {
    const inputValue = event.currentTarget.value;

    setSearchValue(inputValue);
  };

  const deleteNote = (list_id) => {
    const contentDefaultValue = [
      {
        title: '',
        desc: '',
        date: '',
        id: 1,
      },
    ];

    setContent(content.filter((item) => item.id.toString() != list_id));
    return isListClear
      ? localStorage.setItem('listItems', JSON.stringify(contentDefaultValue))
      : 0;
  };

  const filterFunction = (item) =>
    item.title.toLowerCase().includes(searchValue.trim().toLowerCase());

  return (
    <div className={style['list']}>
      <h1 className={style['list--title']}>Your notes</h1>

      <div className={style['list--search']}>
        <span className={style['list--search__icon']}>
          <FontAwesomeIcon icon={faSearch} />
        </span>

        <input
          type="text"
          className={style['list--search__input']}
          onChange={search}
          placeholder="Search..."
        />
      </div>

      <div className={style['list--header']}>
        <span className={style['list--header__title']}>TITLE</span>
        <span className={style['list--header__date']}>DATE</span>
      </div>

      {isListClear ? (
        (localStorage.setItem('listItems', JSON.stringify(content)),
        content.filter(filterFunction).map(({ title, id, desc, date }) => {
          if (!title) return;

          return (
            <div
              className={`${style['list--item']}`}
              onClick={toggleNote}
              key={id}
              style={{ maxHeight: '50px' }}
              ref={listItem}
              id={id.toString()}
              onContextMenu={(ev) => {
                ev.preventDefault();
                const clickedListID = ev.currentTarget.id;

                deleteNote(clickedListID);
              }}
            >
              <div className={style['list--item__info']}>
                <p className={style['list--item__title']}>{title}</p>
                <p className={style['list--item__date']}>{date}</p>
              </div>

              <div className={style['list--item__note']}>
                <p>{desc}</p>
              </div>
            </div>
          );
        }))
      ) : (
        <p className={`${style['list--empty__message']} desc`}>
          You do not have any notes
        </p>
      )}
    </div>
  );
}

export default List;
