import { Component } from "@angular/core";

@Component({
    selector: 'subjects',
    template: `
        <H4 *ngFor="let subject of subjectList"> {{ subject }} </H4>
    `
}) 

export class MoshTutorialComponent {
   subjectList = ["maths", "english", "physics"];
}