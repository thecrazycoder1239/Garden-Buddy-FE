/// <reference types="react-scripts" />
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