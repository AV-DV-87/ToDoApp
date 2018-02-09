import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {Task} from "../../models/Task";

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksProvider {

  constructor(public storage: Storage) { }

  saveTasks(tasks:Task[]) {
    this.storage.set('tasks', tasks);
  }

  getTasks() {
    return this.storage.get('tasks');
  }
}
