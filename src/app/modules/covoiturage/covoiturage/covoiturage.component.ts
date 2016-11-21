import { Component, Input } from "@angular/core";
import template from './covoiturage.component.html';

@Component({
    selector: "covoiturage",
    template,
    styles: [
        '.ui.grid.segment{transition : all ease 200ms;cursor:pointer;margin:0;min-height:90px;}',
        '.ui.grid.segment:hover{border-color : black;}',
        '.modal{font-size:1.5rem;}'
    ]
})
export class CovoiturageComponent {
    @Input() covoitData: any;
    JSON: Object;
    constructor() {
        this.JSON = JSON;
    }

    ngAfterContentInit() {
        // console.log(this.covoitData);
    }

    showModal(id)
    {
        $('#covoit_num_'+id).modal('show');
    }
}
