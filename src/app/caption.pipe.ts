import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'caption'
})

export class CaptionPipe implements PipeTransform {
    transform(value: string, args?: any) {
        // return("my pipe works." + value.toUpperCase());
        
        if (value.length == 1 && value == " ") {
        }
        // else if (value.length == 2 && value == "of") {
        else if (value == " of ") {
            value.toLowerCase();
        }
        // else if (value.length == 3 && value == "the") {
        else if (value == " the ") {
            value.toLowerCase();
        }
        else if (!value.includes(" ")) {
            console.log("hi there");
            console.log(value.replace(value.charAt(0),value.charAt(0).toUpperCase()));
            value = value.replace(value.charAt(0),value.charAt(0).toUpperCase());
        }

        return value;
        



        // if (value.startsWith(" ") && value.length == 3 && value.substr(1) == "of") {
        //     // return('text leads with space.');
        //     value = 'text leads with space.' + value.substr(1) ;
        //     console.log(value.substr(0,2));
        //     console.log(value.charAt(0).toUpperCase());
        // }
        // else if (value.length == 3 && value.substr(0,2) == "of") {
        //     // return(value + 'hi there.');
        //     value.charAt(0).toUpperCase();
        //     console.log (value);
        // }
        // else {
        //     // value.toLowerCase();            
        // }

        return value;
    }
}