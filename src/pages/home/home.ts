import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/Task";
import {TasksProvider} from "../../providers/tasks/tasks";
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  ngOnInit(): void{
    this.taskProvider.getTasks().then(
      tasks => {
        //let if tasks pour vérifier que le tableau n'est pas vide avant d'enregistrer
        if(tasks !== null) {
          this.taches = tasks;
        }
        }
    )
  }
  constructor(public navCtrl: NavController, private taskProvider: TasksProvider) {}

  task: Task = new Task();
  active: boolean = true;

  taches: Task[] = [];
  enterSave(keyCode) {
    if(keyCode === 13) {
      this.saveTask();
    }
  }
  saveDoneTasks() {
    this.taskProvider.saveTasks(this.taches);
  }
  saveTask() {
    if(this.task.titre !== undefined) {
      this.taches.push(this.task);
      this.taskProvider.saveTasks(this.taches);
    }
    this.task = new Task();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  deleteTask (task) {
    _.pullAllWith(this.taches, [task], _.isEqual);
    this.taskProvider.saveTasks(this.taches);
  }


}
