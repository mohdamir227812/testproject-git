import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ShareserviceService } from '../shareservice.service';
import { User } from '../user.model';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-sercom',
  templateUrl: './sercom.component.html',
  styleUrls: ['./sercom.component.css'],
  
})
export class SercomComponent implements OnInit {
 @ViewChild('formcontrol') formcontrol:NgForm
constructor(private _shareS:ShareserviceService){
this.getdataFirebase()
}

addUserSubmit(dataV:User){
 console.log(dataV.name)
 this._shareS.postFirebase(dataV).subscribe((res)=>{

  this.getdataFirebase();
  
 })
 
}
userget;
getdataFirebase(){
  this._shareS.fetchFirebase()
 .pipe(map(mapdata =>{
  const transformData:any=[];
  for(const keys in mapdata){
    transformData.push({userId:keys,...mapdata[keys]})
  }
  return transformData
 }))

 
 .subscribe(res =>{
  this.userget=res;
 })
   
}

adduserandedidt:boolean=false;

updatefirebasedata(ind){
  this.adduserandedidt=true;
 this.formcontrol.setValue({
  name:this.userget[ind].name,
  technology:this.userget[ind].technology
 })

 
}

deletedatafirebase(userId){
if(confirm('Do you want to delete this user')){
   
 this._shareS.deleteFirebase(userId).subscribe(dele =>{
  this.userget=dele;
  this.getdataFirebase()
 })
}
}
  ngOnInit(): void {
    
  }
  

}
