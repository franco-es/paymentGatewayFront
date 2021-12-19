import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function getPixConn(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}users/getPix?id=${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}