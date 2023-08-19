import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toggle_sidebar = true;
  constructor(private eventService: EventService) {

  }

  toggleSidebar() {
    this.toggle_sidebar = !this.toggle_sidebar;
    this.eventService.setState(this.toggle_sidebar)
  }
}
