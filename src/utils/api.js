import axios from "axios";

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