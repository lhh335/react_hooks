import React, { useState, useEffect } from 'react';

export const useCount = (countId) => {

  const [flag, setFlag] = useState(countId % 5);

  useEffect(() => {
    setFlag(countId % 5);
  })
  switch(flag > 0) {
      case true:
        return '不能被5整除';
      case false:
        return '可以被5整除';
  }
}

export const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
}