import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sidebar_item_list = [
    { icon: 'home', title: 'Dashboard' },
    { icon: 'person', title: 'Student' },
    { icon: 'people', title: 'Resource' },
    { icon: 'shopping_cart', title: 'Indent' },
    { icon: 'description', title: 'Invoice and Receipt' },
    { icon: 'currency_rupee', title: 'Fee Structure' },
    { icon: 'calendar_today', title: 'Timetable' },
    { icon: 'insights', title: 'Reports' },
    { icon: 'file_download', title: 'Downloads' },
  ];

  sidebar_state: any;
  show_title: any;
  private subscription: Subscription;

  constructor(private eventService: EventService) {
    this.subscription = this.eventService.data$.subscribe((data) => {
      this.sidebar_state = data;
      if (window.innerWidth > 991) {
        this.show_title = this.sidebar_state;
      }
      let sidebar = document.getElementById('sidebar');
      sidebar?.classList.toggle('collapsed_sidebar')
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
