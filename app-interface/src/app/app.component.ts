import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./template/navbar/navbar.component";
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app-interface';

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  path = window.location.href;
  links = this.el.nativeElement.querySelectorAll("#layoutSidenav_nav .sb-sidenav a.nav-link");

  ngAfterViewInit() {
    // Adicionar estado ativo aos links de navegação lateral


    this.links.forEach((link: HTMLAnchorElement) => {
      const anchor = link as HTMLAnchorElement;
      if (anchor.href === this.path) {
        this.renderer.addClass(anchor, 'active');
      }
    });

    // Alternar a navegação lateral
    const sidebarToggle = this.el.nativeElement.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      this.renderer.listen(sidebarToggle, 'click', (e) => {
        e.preventDefault();
        if (document.body.classList.contains('sb-sidenav-toggled')) {
          this.renderer.removeClass(document.body, 'sb-sidenav-toggled');
        } else {
          this.renderer.addClass(document.body, 'sb-sidenav-toggled');
        }
      });
    }
  }
}
