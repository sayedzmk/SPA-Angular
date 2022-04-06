import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pip'
})
export class PipPipe implements PipeTransform {

  transform(value: any) {
    let substr=value.substr(0,5);
    return substr;
  }

}
