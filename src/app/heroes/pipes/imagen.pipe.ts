import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name:'imagen'
})
export class ImagenPipe implements PipeTransform{

    
    transform(value:Heroe){

        if(!value.id && !value.alt_img){

            return 'assets/no-image.png';
        } else if (value.alt_img) {
    
            return value.alt_img;
        } else {

            return `assets/heroes/${value.id}.jpg`
        }

    }
}