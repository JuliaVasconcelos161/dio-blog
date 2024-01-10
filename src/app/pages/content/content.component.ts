import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "https://cdn.cloudflare.steamstatic.com/steam/apps/318950/capsule_616x353.jpg?t=1571776898";
  photoCoverAlt: string = "Tangled's Movie image";
  contentTitle: string = "Why you must watch Tangled?";
  contentDescription: string = "It is a long established fact that a reader will be distracted.";
}
