import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'pipefil'
})
export class PipefilPipe implements PipeTransform {

  transform(value: any, searchTirm: any): any {
      return value.filter(items=>{
      return  items.name.toLowerCase().indexOf(searchTirm.toLowerCase()) > -1;
       })
  }

}
