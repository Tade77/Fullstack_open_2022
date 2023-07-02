import axios from "axios";

const baseUrl = "http://localhost:3030/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => {
    return res.data;
  });
};
const create = (nameObj) => {
  const request = axios.post(baseUrl, nameObj);
  return request.then((res) => {
    return res.data;
  });
};
const services = { getAll, create };

export default services;
