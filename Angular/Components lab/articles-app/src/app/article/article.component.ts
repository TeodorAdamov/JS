import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css'
})
export class ArticleComponent {
    private symbols: number = 250;
    @Input('article') article!: Article;
    @Input('articleDesc') articleDesc: string = '';
    descToShow: string;
    articleDescLen: number;
    showReadMoreBtn: boolean = true;
    showHideBtn: boolean = false;
    imageIsShown: boolean = false;
    imageButtonTitle: string = 'Show Image';

    constructor() {
        this.articleDescLen = 0;
        this.descToShow = '';

    }

    readMore(): void {
        console.log('readmore');
        this.articleDescLen += this.symbols;
        if (this.articleDescLen >= this.articleDesc.length) {
            this.showReadMoreBtn = false;
            this.showHideBtn = true;
        } else {
            this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
        }
    }

    hideDesc(event: Event): void {
        console.log(event);
        this.symbols = 250;
        this.articleDescLen = 0;
        this.showReadMoreBtn = true;
        this.showHideBtn = false;
    }

    toggleImage(): void {
        console.log('toggleImage');
        if(this.imageIsShown) {
            this.imageIsShown = false;
        } else {
            this.imageIsShown = true;
        }
    }
}
