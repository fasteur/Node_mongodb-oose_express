import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title = 'Binding page';
  imgUrl = 'https://placekitten.com/200/300';
  colspan = 2; 
  isActive = false;
  onClick($event) { 
    $event.stopPropagation(); //évite de propager l'event click sur la div
    console.log("On m'a cliqué");
    console.log($event);
  }
  doSomething(){
    console.log('la div a été cliqué');
  }
  constructor() { }

  ngOnInit() {
  }

}
