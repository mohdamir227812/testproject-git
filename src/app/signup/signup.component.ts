import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  text="";
  textSize(event){
      let val=event.target.value;

      this.text=val;
  }
 
  texts=15;

  textsizeInDe(operat){
    if(operat === 'inc'){
      this.texts += 1;
    }else{
      this.texts -=  1
    }
  }
  textCo='';
  textColor(event){
    let val=event.target.value;
    this.textCo=val;
  }
  ngOnInit(): void {
    
  }



}
