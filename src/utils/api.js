import axios from "axios";

const gardenBuddy = axios.create({
  baseURL: "https://garden-buddy.onrender.com"
})

export const valididateLogin = ({username, password}) => {
  return gardenBuddy
    .post('/login', {
      username,
      password
    })
    .then(({ data }) => {
      return data.user
    })
}

const growStuffAPI = axios.create({
  baseURL: "https://www.growstuff.org/crops.json/",
});

export const getPlants = () => {
  return growStuffAPI
    .get()
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSinglePlant = (_id) => {
    return growStuffAPI
      .get(`/all-plants/${_id}`)
      .then(({ data }) => {
        console.log(data)
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}