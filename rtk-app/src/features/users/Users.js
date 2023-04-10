// Users component
// will list down many users and also add a new user
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync, fetchUsersAsync } from "./usersSlice";

const Users = () => {
  // to subscribe the store data
  const usersState = useSelector((state) => {
    // state is the store data
    // console.log(state);
    return state.users;
  });
  console.log(usersState);

  // getting dispatch fn from the store
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchUsersAsync())
  }, []);

  const handleAddUser = (event) => {
    // TODO: read the form data

    // stopping the page refresh
    event.preventDefault();

    // if we want to add, fetch, update, delete ...
    // the component must dispatch an action with type and payload (optional)
    dispatch(
      addUserAsync({
        name: "John",
        email: "j@k.com",
        phone: 34253487,
      })
    );
  };

  if (usersState.isLoading) {
    return <div className="spinner-border text-primary"></div>;
  }

  if (usersState.isError) {
    return (
      <div className="alert alert-danger">
        Some Error occurred! Try again later!
      </div>
    );
  }

  return (
    <div className="row">
      <h1>Users</h1>
      <div className="col-md-4">
        <h2>Add User</h2>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
          />

          <br />
          <input
            type="text"
            placeholder="Enter E-Mail"
            className="form-control"
          />

          <br />
          <input
            type="text"
            placeholder="Enter Phone"
            className="form-control"
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </form>
      </div>

      <div className="col-md-8">
        <h2>Listing Users</h2>

        {usersState.userList?.map((user) => {
          return (
            <div className="card" key={user?.id}>
              <div className="card-body">
                <h6 className="card-title">Name: {user?.name}</h6>
                <h6 className="card-subtitle">E-Mail: {user?.email}</h6>
                <p className="card-text">Phone: {user?.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
