import {CommonModule} from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './product/navbar/navbar.component';
import { ThemeService } from './core/services/theme.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  isDarkTheme = computed(() => this.themeService.isDarkTheme);

  constructor(private themeService:ThemeService){}
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
