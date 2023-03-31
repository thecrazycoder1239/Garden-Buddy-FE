import axios from "axios";

const gardenBuddy = axios.create({
  baseURL: "https://garden-buddy.onrender.com",
});

export const valididateLogin = ({ username, password }) => {
  return gardenBuddy
    .post("/login", {
      username,
      password,
    })
    .then(({ data }) => {
      return data.user;
    });
};

export const signUp = (username, first_name, last_name, password) => {
  return gardenBuddy
    .post("/api/users", {
      username,
      first_name,
      last_name,
      password,
    })
    .then(({ data }) => {
      return data.user;
    });
};

const growStuffAPI = axios.create({
  baseURL: "https://garden-buddy.onrender.com/growstuff",
});

export const getPlants = () => {
  return growStuffAPI
    .get(`/crops`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSinglePlant = (_id) => {
  return growStuffAPI
    .get(`/crops/${_id}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
