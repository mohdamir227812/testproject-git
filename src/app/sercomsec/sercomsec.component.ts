import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareserviceService } from '../shareservice.service';

@Component({
  selector: 'app-sercomsec',
  templateUrl: './sercomsec.component.html',
  styleUrls: ['./sercomsec.component.css']
})
export class SercomsecComponent implements OnInit {
 
  constructor(private _shareser:ShareserviceService){
   
  }

  ngOnInit(): void {

  }

}
