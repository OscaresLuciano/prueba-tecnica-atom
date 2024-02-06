import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapse, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule, NgbCollapse, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  isNavbarCollapsed=true;
}
