import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titre'
})
export class TitrePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(!value) { 
      return null;
    } else { 
        let word = value.split(' ')
        let returnword = []
       word.map((e, index)=>{ 
          if(index > 0 && this.isPreposition(e)){
            returnword.push(e)
          } else {
            let mot = this.toTitleCase(e)
            returnword.push(mot)
          }     
        })
        return returnword.join(' ')  
    }
  }
  private isPreposition( word : string ) : boolean { 
    let prepositions = ['les','des','un','une','le','la','the','of','from','in']
    return prepositions.includes(word.toLocaleLowerCase())
  }
  private toTitleCase (e : string ) : string { 
    return `${e.substr(0,1).toUpperCase()}${e.substr(1)}`
  }
}
