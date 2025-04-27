import { Component, computed } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ThemeService } from '../../core/services/theme.service';
import { LoginService } from '../../core/services/login.service';
import { ShoppingCardComponent } from '../shopping-card/shopping-card.component';
import { ShoppingCartService } from '../../core/services/shopping_cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule,MatMenuModule,MatButtonModule,ShoppingCardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  shoppingCartStatus = computed(() => this.shoppingCartService.statusSignal());

  constructor(
    private themeService: ThemeService,
    private authService: LoginService,
    private shoppingCartService: ShoppingCartService,
  ) {}

  isDarkTheme = computed(() => this.themeService.isDarkTheme);

  Logout(): void {
    this.authService.logout();
  }

  toggleStatus(): void {
    this.shoppingCartService.toggleShoppingCartStatus();
  }
}
