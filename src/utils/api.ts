import axios from "axios";

const gardenBuddy = axios.create({
  baseURL: "https://garden-buddy.onrender.com",
});

export const valididateLogin = (userObject?: {
  username: string;
  password: string;
}) => {
  if (userObject) {
    const { username, password } = userObject;
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

export const signUp = (
  username: string,
  first_name: string,
  last_name: string,
  password: string
) => {
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

export const deleteUser = (username: string, password: string) => {
  return gardenBuddy
    .delete(`/api/users/${username}`, { data: { password } })
    .then(({ data }) => {
      return data;
    })
};

export const addSubscription = (
  user: User,
  pushSubscription: PushSubscription
) => {
  return gardenBuddy.post("/add-subscription", {
    user,
    pushSubscription,
  });
};

export const removeSubscription = (pushSubscription: PushSubscription) => {
  return gardenBuddy.post(`/remove-subscription`, {
    pushSubscription,
  });
};

export const patchUserInfo = (user: User, first_name: string | undefined, last_name: string | undefined) => {
  return gardenBuddy
    .patch(`/api/users/${user.username}`, {password: user.password, first_name, last_name})
    .then(({ data }) => {
      return data.user;
    })
};

const growStuffAPI = axios.create({
  baseURL: "https://garden-buddy.onrender.com/growstuff",
});

export const getPlants = (term: string | null, page: string | null) => {

  if(page === null) {
    page = "1"
  }

  if (term) {
    return growStuffAPI
      .get(`/crops/search/`, { params: { term, page } })
      .then(({ data }) => {
        return data;
      })
  }
  return growStuffAPI
    .get(`/crops/`, { params: { page }})
    .then(({ data }) => {
      return data;
    })
};

export const getSinglePlant = (_id: string): Promise<GrowStuffCrop> => {
  return growStuffAPI
    .get(`/crops/${_id}`)
    .then(({ data }) => {
      return data;
    })
};

export const postPlantToUser = (
  user: User,
  plant_id: string,
  planted_date: Date
): Promise<UsersPlant> => {
  return gardenBuddy
    .post(`/api/users/${user.username}/plants`, {
      password: user.password,
      plant_id: plant_id,
      planted_date: planted_date.toISOString(),
    })
    .then(({ data }) => {
      return data.plant;
    })
};

export const postTaskToUsersPlant = (
	user: User,
	users_plant_id: number,
	task_slug: TaskSlug,
	task_start_date: string
) => {
	return gardenBuddy.post(`/api/users-plants/${users_plant_id}/tasks`, {
		password: user.password,
		task_start_date: task_start_date,
		task_slug: task_slug,
	});
};

export const getUsersPlants = (user: User): Promise<UsersPlant[]> => {
  return gardenBuddy
    .post(`/api/users/${user.username}/plants/access`, {
      password: user.password,
    })
    .then(({data}) => {
      return data.plants
    })
  }

export const getUsersDetailedPlant = (users_plant_id: number, user: User): Promise<DetailedUsersPlant> => {
  return gardenBuddy
  .post(`/api/users-plants/${users_plant_id}/access`, {password: user.password})
  .then(({data}) => {
    return data.plant
  })}

 


export const getUsersPlantsTasks = (user: User): Promise<Task[]> => {
  return getUsersPlants(user)
  .then((plants) => {
    return Promise.all (
      plants.map((plant) => {
        return getUsersDetailedPlant(plant.users_plant_id, user)

      })
    )
  })
  .then((detailedPlants) => {
    return detailedPlants.reduce((tasks: Task[], detailedPlant) => {
      return tasks.concat(detailedPlant.tasks)
    }, [])
  })
}

  export const deleteUsersPlantById = (user: User, users_plant_id: number): Promise<void> => {
  return gardenBuddy
    .delete(`/api/users-plants/${users_plant_id}`, {data: {password: user.password}})
}
