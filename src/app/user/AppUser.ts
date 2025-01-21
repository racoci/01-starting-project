import {AppTask} from "../task/AppTask";

export interface AppUser {
  id: string,
  name: string,
  avatar: string,
  tasks?: AppTask[]
}
