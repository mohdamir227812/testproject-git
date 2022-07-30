import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namepipe'
})
export class NamepipePipe implements PipeTransform {

  transform(value: string, genders: any): any {
    if(genders == "male"){
      return "mr"+value
    }else{
     return "miss"+value
    }
  }

}
