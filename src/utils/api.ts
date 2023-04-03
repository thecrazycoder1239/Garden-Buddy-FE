import axios from "axios";

const gardenBuddy = axios.create({
  baseURL: "https://garden-buddy.onrender.com",
});

export const valididateLogin = (userObject ?:{username: string, password: string})=> {
  if (userObject){
    const {username, password} = userObject;
  return gardenBuddy
    .post("/login", {
      username,
      password,
    })
    .then(({ data }) => {
      return data.user;
    });
  } else {
    return Promise.resolve();
  }
};

export const signUp = (username: string, first_name: string, last_name: string, password: string) => {
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
      console.error(error);
    });
};

export const getSinglePlant = (_id: string) => {
  return growStuffAPI
    .get(`/crops/${_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postPlantToUser = (user: User, plant_id: string, planted_date: Date) : Promise<UsersPlant> => {
  return gardenBuddy
    .post(`/api/users/${user.username}/plants`, {password: user.password, plant_id: plant_id, planted_date: planted_date.toISOString()
    })
    .then(({ data }) => {
      return data.plant;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getUsersPlants = (user: User) : Promise<User> => {
  return gardenBuddy
    .post(`/api/users/${user.username}/plants/access`, {password: user.password})
      .then(({data}) => {
        console.log('here')
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
}