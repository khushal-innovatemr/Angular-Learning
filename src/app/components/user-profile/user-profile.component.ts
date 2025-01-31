import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
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
  inputVal = "texct"
  
  onChange(){
    console.log("called")
  }
  
  onChain(e:Event){
    const value = (e.target as HTMLInputElement).value

  } 
}

