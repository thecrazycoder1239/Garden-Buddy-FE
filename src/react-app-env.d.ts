/// <reference types="react-scripts" />

interface GrowStuffCrop {
  //from '/crops'
  _id: string;
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

  openfarm_data: {
    attributes: {
      description: string;
      main_image_path: string;
      sun_requirements: string;
      sowing_method: string;
      height: number;
      spread: number;
    };
  };
}
interface User {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
}

interface Task {
    users_task_id: number;
    task_slug: string;
    task_start_date: string;
}

interface Log {
    log_id: number;
    log_date: string;
    body: string;
}

interface UsersPlant {
    plant_id: number;
    users_plant_id: number;
    planted_date: string | null;
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