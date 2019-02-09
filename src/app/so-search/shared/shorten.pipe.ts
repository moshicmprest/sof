
import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (value.length > limit) {
            let substring = value.substr(0, limit);
            return substring.substr(0, substring.lastIndexOf(" ")) + '...';
        }
        return value;    
    }
}