import { Component } from "@angular/core";
import { CoursesService } from "./courses.services";
import { AuthorsService } from "./authors.services";

@Component({
    selector: 'app-courses',
    template : `
        <h2>Titre : {{ title }} </h2>
        <h2>Titre : {{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <h2>Titre : {{ authorTitle}} </h2>
        <h3> Nombre d'auteurs : {{nbAuthor}} </h3>
        <ul>
            <li *ngFor="let author of authors">{{ author }}</li>
        </ul>

    `,
})
export class CoursesComponent {
    title = "Liste des  cours"; 
    authorTitle = 'Liste des auteurs'
    // courses = ["geo", "histoire", "sciences"];
    courses; 
    authors;
    nbAuthor;
    getTitle() {
        return this.title;
    }

    constructor(service : CoursesService, author : AuthorsService) {
        
        this.courses = service.getCourses();
        // service.test = 'test'
        // console.log(service.test);
        this.authors = author.getAuthors()
        this.nbAuthor = author.getAuthors().length
    }
}