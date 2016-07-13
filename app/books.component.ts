import {Component} from 'angular2/core'
import {BookService} from './book.service'

@Component({
  selector: 'books',
  template: `
              <h2>Books</h2>
              {{ title }}
              <ul>
                <li *ngFor='#book of books'>{{ book }}</li>
              </ul>
            `,
  providers: [BookService]
})
export class BooksComponent {
  title = 'The title for the Books page';
  books;
  constructor(bookService: BookService) {
    this.books = bookService.getBooks();
  }
}
