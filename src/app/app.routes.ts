import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard,loginGuard } from './core/guards/auth.guard';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ProductResolverService } from './core/services/product-resolver.service';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'shop',
        component:ProductComponent,
        title:'Shop',
        canActivate: [authGuard],        
    }
    ,{
        path:'shop/:id',
        component:ViewProductComponent,
        title:'producto-details',
        canActivate:[authGuard],
        resolve:{
            product: ProductResolverService
        }
    }
    ,{
        path:'login',
        component:LoginComponent,
        title:'Login',
        canActivate:[loginGuard],
    }
    
];
