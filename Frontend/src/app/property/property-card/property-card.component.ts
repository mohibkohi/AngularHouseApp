import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am card</h1>`,
    templateUrl: 'property-card.component.html',
    styleUrl: 'property-card.component.css'
    // styles:['h1 {font-weight: norgal; color:red}']
    
})

export class PropertyCardComponent{
    Property: any = {
        "Id": 1,
        "Type": "House",
        "Price": 12000
    }
}