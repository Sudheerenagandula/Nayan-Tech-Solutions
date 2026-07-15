import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class SearchComponent {

  keyword = '';
  location = '';
  category = '';
  experience = '';

  searchJob() {
    console.log({
      keyword: this.keyword,
      location: this.location,
      category: this.category,
      experience: this.experience
    });
  }

}
