import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {BooksComponent} from './books.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>
        <authors></authors>
        <books></books>
    `,
    directives: [CoursesComponent, AuthorsComponent, BooksComponent]
})
export class AppComponent { }
