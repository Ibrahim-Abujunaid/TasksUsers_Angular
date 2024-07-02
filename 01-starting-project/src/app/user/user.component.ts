import { name } from './../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component, Input ,computed,input, Output , EventEmitter} from '@angular/core';

interface User {
  id:string;
  name:string;
  avatar:string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
     @Input({required: true}) user!:User;
     @Input({required: true}) selected!: boolean;
     @Output() select = new EventEmitter();

    onSelectedUser(){

      this.select.emit(this.user.id);
    }

    get imagePath(){
       return "../../assets/users/"+this.user.avatar;
    }
}
