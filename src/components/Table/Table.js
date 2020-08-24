import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import "./style.scss";


const Table = ({ category }) => {


  const handleClick = useCallback(() => {
    console.log(category, 'table');
  }, [category]);

  return (

    <>

      <button onClick={handleClick}>cl</button>

    </>

  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    category: state.categories.categories
  };
};
export default connect(mapStateToProps)(Table);