import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

  // courses = [
  //   "lait",
  //   "beurre"
  // ]
  // viewMode = "";

  // products = [
  //   { id: 1, name: "lait"},
  //   { id: 2, name: "oeufs"},
  //   { id: 3, name: "pain"},
  // ]

  // addProduct() { 
  //   this.products.push({id:4, name: 'papier Q'})
  // }
  // removeProduct(elem) { 
  //   let index = this.products.indexOf(elem)
  //   this.products.splice(index, 1)
  // }
  // updateProduct(elem) { 
  //   elem.name = 'modifié'
  // }

  // products; 
  // loadProducts()  {
  //    this.products = [
  //       { id: 1, name: "lait"},
  //       { id: 2, name: "oeufs"},
  //       { id: 3, name: "pain"},
  //     ]
  // }
  // trackProducts(index, elem) { 
  //   return elem ? elem.id : undefined
  // }
  tasks = { 
    title : 'machin chose', 
    assignee : { 
      name : null
    }
  }
}
