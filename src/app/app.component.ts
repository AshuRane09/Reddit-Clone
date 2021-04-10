import { Component, Input } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];
  id: number = 0;
  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 0, this.id++),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if (title.value === '' || link.value === '') return false;
    this.articles.push(new Article(title.value, link.value, 0, this.id++));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
