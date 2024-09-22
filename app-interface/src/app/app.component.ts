import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./template/navbar/navbar.component";
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from "./home/home.component";
import jQuery from 'jquery';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent, ClientesFormComponent, RouterModule,HttpClientModule],
  providers: [ClientesService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app-interface';

  constructor(private el: ElementRef) { }


  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const path = window.location.href;

      // Seleciona os links como uma NodeList de HTMLAnchorElement sem anotação explícita de tipo
      const links = this.el.nativeElement.querySelectorAll("#layoutSidenav_nav .sb-sidenav a.nav-link") as NodeListOf<HTMLAnchorElement>;

      (function ($) {
        "use strict";

        // Adiciona o estado ativo aos links de navegação lateral
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
          if ((this as HTMLAnchorElement).href === path) {
            $(this).addClass("active");
          }
        });

        // Alterna a navegação lateral
        $("#sidebarToggle").on("click", function (e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
        });
      })(jQuery);
    }

  }


}
