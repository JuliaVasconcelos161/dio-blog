import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() photoCover: string = "";
  @Input() cardPhotoAlt: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = ""; 
  @Input() id: string = "0";
}

