import React, { useState, useCallback } from 'react';
import "./style.scss";
import { connect } from 'react-redux';
import { createCategory } from '../../redux/actions';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';

const Accounting = (props) => {
  console.log(props);
  const [salary, setSalary] = useState("");
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [isFormFull, setIsFormFull] = useState(false);
  const [newCategory, setNewCategory] = useState("")
  const [categories, setCategories] =
    useState(["Food", "Education", "City transport", "Car", "Hobby", "Clothes"]);
  const handleCreateTable = useCallback(() => {
    console.log(checkedCategories, 'acc');
    props.createCategory(checkedCategories);
    if (salary) setIsFormFull(true);
  }, [salary, checkedCategories, props]);

  const handleAddCategory = useCallback(() => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
    }
  }, [newCategory, categories]);
  const handleRemove = useCallback((value) => {
    const arrCheckedCategory = checkedCategories.filter(item => item !== value);
    setCheckedCategories(arrCheckedCategory);
  }, [checkedCategories, setCheckedCategories]);

  return (
    <>
      <section className="accounting">

        {!isFormFull && <InputGroup value={salary} onChange=
          {({ target: { value } }) => setSalary(value)}>
          <FormControl
            type="number"
            placeholder="Your salary for mounth"
            min="0"
            max="999999999999"
            aria-label="Your salary for mounth"
            aria-describedby="basic-addon2" />
        </InputGroup>}
        <InputGroup className="selectCategoryBlock">
          <label>
            Select the categories of your spending</label>
          <div className="checkCategory" onClick={(event) => {
            if (event.target.checked) {
              setCheckedCategories([...checkedCategories, event.target.value])
            } else if (checkedCategories) {
              handleRemove(event.target.value)
            }
          }}>
            {categories.map((item) => {
              return <Form.Check type="checkbox" value={item} label={item} key={item} />
            })}
          </div>
        </InputGroup>
        <InputGroup onChange={({ target: { value } }) => {
          if (value) setNewCategory(value);
        }} >
          <FormControl
            placeholder="Add your category"
            aria-label="Add your category"
            aria-describedby="basic-addon2"
          />
          <Button variant="secondary" className="addBtn" onClick={handleAddCategory}>Добавить</Button>
        </InputGroup>
        <button className="createBtn" onClick={handleCreateTable}>Create table</button>
        {isFormFull && <h1>1</h1>}
      </section>
    </>

  );
};
const mapDispatchToProps = {
  createCategory
};

export default connect(null, mapDispatchToProps)(Accounting);