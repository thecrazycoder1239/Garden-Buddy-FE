/// <reference types="react-scripts" />


interface User {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
}

type TaskSlug='water' | 'prune' | 'look for bugs' | 'health check' | 'harvest' | 'fertilise'

interface Task {
    users_task_id: number;
    task_slug: TaskSlug;
    task_start_date: string;
    users_plant_id: number
}


interface Log {
    log_id: number;
    log_date: string;
    body: string;
}

interface UsersPlant {
  name: string,
  thumbnail_url: string,
  plant_id: number;
  users_plant_id: number;
  planted_date: string | null;
}
interface DetailedUsersPlant extends UsersPlant{
    tasks: Task[];
    logs: Log[];
}



interface OpenFarmData {
  attributes: {
    description: string;
    main_image_path: string;
    sun_requirements: string;
    sowing_method: string;
    height: number;
    spread: number;
  };
}

interface GrowStuffCrop {
	//from '/crops'
	_id: string;
  _score: number;
	id: number;
	name: string;
	slug: string;
	scientific_name: string[];
	description: string;
	thumbnail_url: string;

	// from '/crops/:id'
	median_lifespan: number;
	median_days_to_first_harvest: number;
	median_days_to_last_harvest: number;
	perennial: boolean;

	openfarm_data: OpenFarmData | false;
}
