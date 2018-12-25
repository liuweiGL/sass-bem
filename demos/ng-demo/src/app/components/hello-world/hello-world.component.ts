import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nd-hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
    @Input() msg: string

    constructor() {

    }

    ngOnInit() {
    }

}
