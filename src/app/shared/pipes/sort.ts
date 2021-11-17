import { Pipe, PipeTransform } from '@angular/core';
import { People } from '../models/people';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(people: People[], type = 'asc') {

        if (people) {
            people.sort((a: People, b: People) => {
                if (a.seconds < b.seconds) { return -1; }
                if (a.seconds > b.seconds) { return 1; }
                return 0;
            })
        }
    }
}
