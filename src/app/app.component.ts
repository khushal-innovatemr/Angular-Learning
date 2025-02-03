import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../models/user';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {name:"Rohan",isSingle:true,salary:10000},
    {name:"Khushal",isSingle:false,salary:20000},
    {name:"Ronak",isSingle:true,salary:40000},
  ]
  title = 'one';
  recievedData(e:User){
    console.log(e);
    
    const index = this.users.findIndex(user =>user.name == e.name)
    this.users[index].salary = e.newSalary
  }
}
