import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule ,HeaderComponent, UserComponent , TasksComponent]
})
export class AppComponent {
  users= DUMMY_USERS;
  selectedId?: string;
  get SelectUser() {
     return this.users.find(user => user.id === this.selectedId)!;
  }
  onSelectUser(id:string){
      this.selectedId=id;
  }
}
