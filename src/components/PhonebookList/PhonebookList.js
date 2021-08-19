import React from "react";
import { connect } from 'react-redux';
import  deleteItem  from '../../redux/actions';
import PhoneBookItem from "../PhonebookItem/PhoneBookItem";
import PropTypes from "prop-types";

// import s from "./PhonebookList.module.css";

const PhonebookList = ({ contacts, title, onDeleteList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <PhoneBookItem
            key={id}
            name={name}
            number={number}
            onDeleteList={() => onDeleteList(id)}
          />
        ))}
      </ul>
    </div>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};



const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
})

const mapDispatchToProps = dispatch => ({
  onDeleteList: (id) => dispatch(deleteItem.deleteItem(id))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
