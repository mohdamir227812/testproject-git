import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddressSerService } from './address-ser.service';
import { User } from './user.model';

 @Injectable({
  providedIn: 'root'
 })
@Injectable()
export class ShareserviceService {

constructor(private _http:HttpClient){

}
url='https://my-testpro-54b37-default-rtdb.firebaseio.com/User.json';



postFirebase(data){
  return this._http.post<User>(this.url,data)
}

fetchFirebase(){
  return this._http.get<User>(this.url)
}

deleteFirebase(userI){
  return this._http.delete("https://my-testpro-54b37-default-rtdb.firebaseio.com/User/"+ userI + ".json")
}
}
