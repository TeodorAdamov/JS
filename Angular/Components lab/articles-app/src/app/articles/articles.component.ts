import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data/data';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [ArticleComponent, CommonModule],
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
    articles!: Article[];

    constructor() { }

    ngOnInit() {
        this.articles = new ArticleData().getData();
        console.log(this.articles);
        
    }
}
