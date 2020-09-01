import React, { useState, useEffect } from "react";
import queryString from 'query-string';

import logo from "./logo.svg";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";

function App() {
  const initTodoList = [
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend!' },
    { id: 3, title: 'They love Easy Frontend!' },
  ]

  const [todoList, setTodoList] = useState(initTodoList);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  })

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleOnSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  useEffect(() => {
    async function fetchPostList() {
      try {
        // const { _page, _limit } = filter;
        const paramsString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch:", error.message);
      }
    }
    fetchPostList();
  }, [filter]);

  function handlePageChange(newPage) {
    setFilter({ ...filter, _page: newPage })
  }

  function handleSearchPostList(formValues) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: formValues.searchTerm
    });
  }

  return (
    <div className="app">
      <h1>React Hooks - Digital Clock</h1>
      <Clock />
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleOnSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostFiltersForm onSubmit={handleSearchPostList} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    </div>
  );
}

export default App;
