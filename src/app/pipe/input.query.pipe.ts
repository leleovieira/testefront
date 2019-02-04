import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'InputSearch'
})
export class InputQueryPipe implements PipeTransform {
    transform(dp: any, name: string) {
        name = name.trim().toLocaleLowerCase();
        if (name) {
           return dp.filter(
              dados => {
                   return dados.nome.toLocaleLowerCase().includes(name);
               }
           );
        } else {
            return dp;
        }
   }
}
