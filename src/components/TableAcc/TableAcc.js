import React, { useCallback, useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getDaysArray } from './getDaysArray';
import "./style.scss";
import { Table, Button, Spinner } from 'react-bootstrap';
import { createLocation } from "../../redux/actions";

const TableAcc = ({ category, salary }) => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.categories.locations);
  console.log(location);
  const loading = useSelector(state => state.app.loading);
  const [headerTable, setHeaderTable] = useState([]);
  const [countMounthDays, setCountMounthDays] = useState([]);
  const [countCol, setCountCol] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);
  useEffect(() => {
    console.log(salary);
    const countDays = getDaysArray(2020, 8);
    setCountMounthDays(countDays);
    const arrHeaderTable = [["day"].concat(...category)];
    const arrFullTable = ([].concat(...arrHeaderTable));
    setHeaderTable(...arrHeaderTable);
    const columns = arrFullTable.length - 1;
    const arrDefaultValue = new Array(columns).fill("");
    setCountCol(arrDefaultValue);
  }, [category, salary]);

  const handleClickCell = useCallback(() => {
    if (!isInputActive) setIsInputActive(true);
  }, [isInputActive]);
  const handleAddValue = useCallback(() => {
    setIsInputActive(false);
  }, []);

  const handleClick = useCallback(() => {
    console.log([...category, 'table']);
  }, [category]);

  return (

    <>
      <section className="tableBlock">
        <Table striped bordered hover variant="dark" className="table">
          <thead>
            <tr>
              {headerTable.map(item => <th key={item}>{item}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {countMounthDays.map(item => (
              <tr key={item}>
                <td >{item}</td>
                {
                  countCol.map((el, index) =>
                    (<td key={index + "key"} onClick={handleClickCell}>
                      {isInputActive && <div className="cellBlock"><input className="tableCell" type="number"></input>
                        <Button variant="secondary" className="addBtn" onClick={handleAddValue}>Добавить</Button></div>}</td>))
                }
              </tr>
            ))}


          </tbody>
        </Table>


        <button onClick={handleClick}>cl</button>
        <button onClick={() => dispatch(createLocation())}>ASYNC</button>
        {loading && <Spinner animation="border" variant="primary" />}
      </section>
    </>

  );
};
const mapStateToProps = state => {

  return {
    category: state.categories.categories,
    salary: state.categories.salary
  };
};
export default connect(mapStateToProps)(TableAcc);