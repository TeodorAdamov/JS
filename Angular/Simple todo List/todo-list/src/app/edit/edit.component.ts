import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';


@Component({
    selector: 'app-edit',
    standalone: true,
    imports: [],
    templateUrl: './edit.component.html',
    styleUrl: './edit.component.css',

})
export class EditComponent {
    method: string = '';
    @Input('title') title: string = '';
    @Input('id') id!: number

    constructor(private appServ: AppService) { }

    onUserCancel(id: number): void {
        this.appServ.onEditCancel(id);
    }

    onUserSave(inputRef: HTMLInputElement, id: number) {
        const input = inputRef.value
        this.appServ.onEditSave(input, id);
    }

}
