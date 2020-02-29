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

function useAxios(url) {
  const [list, setList] = useState([]);
  const addToList = async (endpoint = '') => {
    const response = await axios.get(url + endpoint);
    setList(list => [...list, { ...response.data, id: uuid() }]);
  };
  const deleteList = () => {
    setList([])
  }

  return [list, addToList, deleteList];
}

export { useFlip, useAxios };