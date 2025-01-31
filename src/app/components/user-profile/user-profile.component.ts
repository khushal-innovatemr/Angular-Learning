import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Khushal Sethi"
  status = "Intern"
  city = "Surat"
  company = "Software Developer"
  age = "23"
  isBtnDisabled = true
  inputVal = "Intern"

  users = [
    {name:"Rohan",isSingle:true,salary:10000},
    {name:"Khushal",isSingle:false,salary:20000},
    {name:"Ronak",isSingle:true,salary:40000},
    
  ]
  interns = [
    {name:"Dinesh",isSingle:true,salary:30000},
    {name:"Kautilya",isSingle:false,salary:43000},
    {name:"Yash",isSingle:false,salary:56000},
    
  ]
  
  onChange(){
    console.log("called")
  }
  
  onChain(e:Event){
    const value = (e.target as HTMLInputElement).value
    this.inputVal = value;

  } 
}

