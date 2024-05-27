import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.css'
})
export class NotesPageComponent implements OnInit {
  taskArray = [{ taskName: 'Brush teeth' }];
  isEditing = false;
  editIndex: number | null = null;
  editTaskName = '';

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(form: NgForm) {
    // if task is in editing mode at a certain index point, and the value is not empty
    if (this.isEditing && this.editIndex !== null) {
      // the value in the task array is updated at editTaskName
      this.taskArray[this.editIndex].taskName = this.editTaskName;
      // this clears the editing mode
      this.isEditing = false;
      // this clears the index point we were just editing
      this.editIndex = null;
      // this clears the task when we're done editing
      this.editTaskName = '';
      // or else, just push the NEW TASK VALUE to taskArray
    } else {
      this.taskArray.push({
        taskName: form.controls['task'].value,
      });
    }
  }

  //Toggle the editing mode of a specific task by index point
  toggleEdit(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.editTaskName = this.taskArray[index].taskName;

 
}

   //delete value by specific index point from the taskArray
   onDelete(index: number) {
    this.taskArray.splice(index, 1);
   
  }

}
