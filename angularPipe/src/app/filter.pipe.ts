import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: string, propName: string): any {
    if(value.length === 0 || filteredStatus === '') {
      return value;
    }
    const filteredServers = [];
    for(const item of value) {
      if(item[propName] === filteredStatus) {
        filteredServers.push(item);
      }
    }
    return filteredServers;
  }

}
