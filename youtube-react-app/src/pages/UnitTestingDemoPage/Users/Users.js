import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../../utils/fetchApi';

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // after the initial rendering, this callback fn will be called.
    // What's the API URL? https://jsonplaceholder.typicode.com/users
    // What's the REST API Client Tool? fetch
    // What's the Http Method? GET
    fetchApi('https://jsonplaceholder.typicode.com/users', 'GET')
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statusCode !== 404) {
          setUserList(resInJson);
          setIsError(false);
        } else {
          setUserList([]);
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className='spinner-border text-success'></div>;
  }

  if (isError) {
    return <div className='alert alert-danger'>Some Error Occured. Try again later.</div>;
  }

  return (
    <div className='row'>
      <h2>Users | Demo of Mocking REST API Call</h2>
      {userList?.map((user) => {
        return (
          <div className='col-md-4' key={user.id}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{user.name}</h5>
                <p className='card-text'>{user.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
