import React, { useEffect, useState } from 'react';

const Blog = () => {
  // console.log('1. Program Started');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  // console.log('2. Before useEffect in Blog Comp');
  // in useEffect hook, first param: effect callback. second param: dependency list
  useEffect(() => {
    // runs after initial rendering
    // and also upon state update as well
    // console.log('4. Inside useEffect');
    // this is alternative to lifecycle hooks (componentDidMount and componentDidUpdate)
    // this is the right place for your REST API Calls
    // you can update the state from here
    document.title = topicName;
  }, [topicName]); // second arg is dependency. it is an array and -- it is optional
  // if the dep is changed by any means, then the effect callback will be called.
  // remove the dep and have empty array then see

  const handleChangeTopic = () => {
    // console.log('Inside handleChangeTopic');
    setTopicName('Demo of useEffect Hook and useState Hook');
  };

  const handleUpdatePublishedDate = () => {
    setPublishedDate(new Date());
  }

  // console.log('3. Program Ended');
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type='button' onClick={handleChangeTopic}>
        Change Topic
      </button>

      <p>Published Date: {publishedDate.toString()} </p>
      <button type='button' onClick={handleUpdatePublishedDate}>
        Update Published Date
      </button>

      <p>Published By: </p>
      <input type='text'/>
    </div>
  );
};

export default Blog;
