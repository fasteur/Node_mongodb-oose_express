import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
countries;
  constructor() { 
    this.countries = [
      "countryName","Afghanistan","Albania","Algeria","American Samoa","Andorra" ,"Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia"
    ,"Aruba"
    ,"Australia"
    ,"Austria"
    ,"Azerbaijan"
    ,"Bahamas"
    ,"Bahrain"
    ,"Bangladesh"
    ,"Barbados"
    ,"Belarus"
    ,"Belgium"
    ,"Belize"
    ,"Benin"
    ,"Bermuda"
    ,"Bhutan"
    ,"Bolivia"
    ,"Bonaire"
    ,"Bosnia and Herzegovina"
    ,"Botswana"
    ,"Bouvet Island"
    ,"Brazil"
    ,"British Indian Ocean Territory"
    ,"British Virgin Islands"
    ,"Brunei"
    ,"Bulgaria"
    ,"Burkina Faso"
    ,",Burundi"
    ,"Cambodia"
    ,"Cameroon"
    ,"Canada"
    ,"Cape Verde"
    ,"Cayman Islands"
    ,"Centraltan"
    ,"Vanuatu"
    ,"Vatican City"
    ,"Venezuela"
    ,"Vietnam"
    ,"Wallis and Futuna"
    ,"Western Sahara"
    ,"Yemen"
    ,"Zambia"
    ,"Zimbabwe"
    ,"Åland" 
    ,"Chad"
    ,"Chile"
    ,"China"
    ,"Christmas Island"
    ,"Cocos [Keeling] Islands"
    ,"Colombia"
    ,"Comoros"
    ,"Cook Islands"
    ,"Costa Rica"
    
  
  
    ]
  }
  getCountries():string[]{ 
    return this.countries
  }
}
