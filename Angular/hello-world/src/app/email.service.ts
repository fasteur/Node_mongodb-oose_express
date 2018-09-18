import { Injectable } from '@angular/core';

@Injectable({ // permet l'injection de dépendances, mais il est inclut ds component
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
