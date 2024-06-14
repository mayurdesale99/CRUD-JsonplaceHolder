import React, { useState } from "react";

const User = ({ id, name, email, deleteUser, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };
  return (
    <div className="p-2 border-bottom">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="row">
          <div className="col-md-5">Name: {name}</div>
          <div className="col-md-5">Email: {email}</div>
          <div className="col-md-1">
            <i
              class="far fa-edit text-success"
              onClick={() => setIsEdit(!isEdit)}
            ></i>
          </div>
          <div className="col-md-1">
            <i
              class="far fa-trash-alt text-danger"
              onClick={() => deleteUser(id)}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
