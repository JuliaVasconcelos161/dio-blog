import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() id: string = "0";
  @Input() cardPhoto: string = "";
  @Input() cardPhotoAlt: string = "";
  @Input() cardTitle: string = "";
}
