import React from 'react';
import { createHashHistory } from 'history';


export default function About(props) {

  console.log(props, 'about组件');

  const goPage = () => {
    props.history.push('/users/user');
  }

  return (
    <div>
      About
      <br />
      <a href="#/users/user">a链接跳转</a>
      <br />
      <div onClick={goPage}>路由跳转</div>
    </div>
  )
}