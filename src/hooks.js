import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useFlip(isFlipped = true) {
  const [flip, setFlip] = useState(isFlipped);
  const flipCard = () => {
    setFlip(flip => !flip);
  }

  return [flip, flipCard];
}

function useAxios(url, key) {
  const [list, setList] = useLocalStorage(key, []);
  const addToList = async (endpoint = '') => {
    const response = await axios.get(url + endpoint);
    setList(list => [...list, { ...response.data, id: uuid() }]);
  };
  const deleteList = () => {
    setList([])
  }

  return [list, addToList, deleteList];
}

function useLocalStorage(key, initialVal) {
  const [list, setList] = useState(() => {
    let val = window.localStorage.getItem(key);
    return val ? JSON.parse(val) : initialVal;
  });

  const setLocalStorage = (item) => {
    window.localStorage.setItem(key, JSON.stringify(item));
  }

  setLocalStorage(list);

  return [list, setList]
}

export { useFlip, useAxios, useLocalStorage };