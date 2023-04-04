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

export const addSubscription = (user: User, pushSubscription: PushSubscription) => {
  return gardenBuddy
    .post("/add-subscription", {
      user,
      pushSubscription
    })
}

export const removeSubscription = (pushSubscription: PushSubscription) => {
  return gardenBuddy
    .post(`/remove-subscription`, {
      pushSubscription
    })
}


const growStuffAPI = axios.create({
  baseURL: "https://garden-buddy.onrender.com/growstuff",
});

export const getPlants = (term: string | null) => {
  if (term) {
    return growStuffAPI
      .get(`/crops/search`, {params: {term}})
      .then(({ data }) => {
        return data
      })
      .catch((error) => {
        console.error(error)
      })
  }
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

export const getUsersPlants = (user: User) : Promise<UsersPlant[]> => {
  return gardenBuddy
    .post(`/api/users/${user.username}/plants/access`, {password: user.password})
      .then(({data}) => {
        const plants = data.plants
        return Promise.all(
          plants.map((plant: UsersPlant) => {
            const id = plant.plant_id.toString();
            return getSinglePlant(id).then((singlePlant) => ({
              ...singlePlant,
              planted_date: plant.planted_date,
              thumbnail_url: plant.thumbnail_url
            }));
          })
          );
        })
        .catch((error) => {
          console.log(error);
          throw error;
        })
};

export const postTaskToUsersPlant = (user: User, users_plant_id: string, task_slug: string, task_start_date: Date) => {
  return gardenBuddy
    .post('/:users_plant_id/tasks', {password: user.password, start_date: task_start_date,
      task_slug: task_slug})
}