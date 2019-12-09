import React, { useState, useEffect } from 'react';
import "./index.css";
import { useCount, useReducer } from '../../customerHooks/useReducer';
import { Reducers } from '../../customerHooks/reducers';
/**
 * 只在最顶层使用 Hook
 * 不要在循环，条件或嵌套函数中调用 Hook
 * ==========所谓自定义hook,实质上是对业务功能的函数封装===========
 */
export default function Users() {

  const initState = {
    name: '李海河',
    age: 26,
    country: 'CN',
    count: 0
  }
  const [users, setUsers] = useState(initState);
  let flag = useCount(users.age);
  const [state, dispatch] = useReducer(Reducers, initState);

  const handleClick = () => {
    setUsers({
      ...users, // 因为useState不会对旧的和新的state进行合并，所以必须这样写
      age: users.age + 1
    })
  }

  const handleClickAdd = (type) => {
    dispatch({ type });
  }

  // userEffect相当于class中componentDidMount和componentDidUpdate、componentWillUnmount三个生命周期钩子函数的结合
  // React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect
  useEffect(() => {
    console.log(users, '更新后的状态数据');
    document.title = `Hooks ${users.age}`;
  }, [users]) // useEffect的第二个参数表示：当参数2的数组中的变量发生变化时，才对副作用函数进行调用，若未发生变化，则会跳过这次effect(注意：是对数组中的值进行比较，若是复杂类型，则深度比较)=====如果第二个参数数组为空，则表示该effect只执行一次

  return (
    <div>
      <div className='title' onClick={handleClick}>
        {users.name + '年龄' + users.age}
      </div>
      <div className='title'>
        {'年龄' + flag}
      </div>
      <div className='title' onClick={() => { handleClickAdd('add') }}>
        {'点击增加' + state.count}
      </div>
      <div className='title' onClick={() => { handleClickAdd('reduce') }}>
        {'点击减少' + state.count}
      </div>
    </div>

  )
}