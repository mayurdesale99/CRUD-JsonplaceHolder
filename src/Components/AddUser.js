import React from "react";

const AddUser = ({ addUser }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };
  return (
    <div>
      <h4>Add user</h4>
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
