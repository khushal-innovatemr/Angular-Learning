import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, viewChild, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';

function formatName(value: string) {
  return "" + value;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule,CountrycodePipe,HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit,OnDestroy,OnChanges ,AfterViewInit{
  name = "Khushal Sethi"
  status = "Intern"
  city = "Surat"
  company = "Software Developer"
  age = "23"
  fees = "2700"
  isBtnDisabled = true
  inputVal = "Intern"
  phoneno = 12345609876

  users = [
    { name: "Rohan", isSingle: true, salary: 10000 },
    { name: "Khushal", isSingle: false, salary: 20000 },
    { name: "Ronak", isSingle: true, salary: 40000 },
  ]

  interns = [
    { name: "Dinesh", isSingle: true, salary: 30000 },
    { name: "Kautilya", isSingle: false, salary: 43000 },
    { name: "Yash", isSingle: false, salary: 56000 },
  ]
  
  onChange() {
    console.log("called")
  }
  
  onChain(e: Event) {
    const value = (e.target as HTMLInputElement).value
    this.inputVal = value;
  }

  @Input({ alias: "names", transform: formatName }) nam_e = "";
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;
  @Input() item = 'Box';

  @Output() myEvent = new EventEmitter<User>()
  sendData() {
    this.myEvent.emit({ name: this.nam_e, newSalary: 76884 })
  }
  bgColor = "blue";

  @ViewChild("myheading") heading?:ElementRef

  constructor(){
    //initialize properties
    //dependancy injection
    //event listner register
    console.log("constructor called",this.nam_e);
    console.log("ngOnInit called",this.heading?.nativeElement.textContent)
  }

  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("",changes)
    console.log("ngOnInit called",this.heading?.nativeElement.textContent)
    //notify karna ho changes toh we can implement this 
  }
  
  ngOnInit(){
    //initialize properties
    //event listner register
    //initial api call
    console.log("ngOnInt called ",this.nam_e)
    console.log("ngOnInit called",this.heading?.nativeElement.textContent)
  }
  ngAfterViewInit(): void {
    console.log("After View Init")
    console.log("ngOnInit called",this.heading?.nativeElement.textContent)
  }
  
  ngOnDestroy(){
    console.log("component destroyed")
  }
  
 

}