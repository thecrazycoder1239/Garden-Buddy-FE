import axios from "axios";

const growStuffAPI = axios.create({
  baseURL: "https://www.growstuff.org",
});

export const getPlants = () => {
  return growStuffAPI
    .get(`/crops.json`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSinglePlant = (_id) => {
  return growStuffAPI
    .get(`/crops/${_id}.json`)
    .then(({ data }) => {
      console.log(data, 'heree')
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
