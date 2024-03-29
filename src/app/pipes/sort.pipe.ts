import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: String): any {
    if (args ==='ascending')
    {
      return value.sort();
    }
    else
    {
  if(args==='descending')
  {
  return value.sort.reverse();
  }

    }

  }

}
