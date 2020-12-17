import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {Page404Component} from './page404/page404.component';
import {CamionComponent} from './camion/camion.component';
import {ClientComponent} from './client/client.component';
import {CommandComponent} from './command/command.component';
import {EmployerComponent} from './employer/employer.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  { path : 'products',
    component : ProductComponent
  },
  { path : 'employees',
    component : EmployerComponent
  },
  { path : 'commands',
    component : CommandComponent
  },
  { path : 'clients',
    component : ClientComponent
  },
  { path : 'camions',
    component : CamionComponent
  },
  { path : 'home',
    component : HomeComponent
  },
  { path : '',
    component : LoginComponent
  },
  { path: '**'
    , component: Page404Component
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
