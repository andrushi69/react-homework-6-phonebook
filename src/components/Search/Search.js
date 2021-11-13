import React from 'react';
import styles from "./Search.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {changeFilterItem} from "../../redux/Contacts/ContactsAction";

const Filter = () => {

  const value = useSelector(state => state.contacts.changeFilter)
  const dispatch = useDispatch()
  const onChange = (e) => dispatch(changeFilterItem(e.target.value))

  return (
    <div className={styles.search}>
      <label className={styles.search_label}>
        <input className={styles.search_input} type="text" value={value} onChange={onChange}/>
      </label>
    </div>
  );

}

export default Filter;