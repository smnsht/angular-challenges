import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'HeavyCompu',	
	standalone: true
})
export class HeavyCompuPipe implements PipeTransform {
	transform(name: string, index: number): string {
		return `${name} - ${index}`;
	}	
}