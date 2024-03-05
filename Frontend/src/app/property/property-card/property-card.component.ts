import { Component, Input, input } from "@angular/core";
import { IProperty } from "./IProperty.interface";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am card</h1>`,
    templateUrl: 'property-card.component.html',
    styleUrl: 'property-card.component.css'
    // styles:['h1 {font-weight: norgal; color:red}']
    
})

export class PropertyCardComponent{
    @Input() property : IProperty | undefined
}