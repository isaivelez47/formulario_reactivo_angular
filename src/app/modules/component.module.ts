import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from './material.module';

// Routing
import { AppRoutingModule } from '../app-routing.module';

// Componentes
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FormComponent } from '../components/form/form.component';
import { ResultsComponent } from '../components/results/results.component';
import { UdpCurrencyMaskPipe } from '../pipes/UdpCurrencyMaskPipe.pipe';

// Services
import { BackServiceService } from '../services/back-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../pages/home/home.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ItauButtonComponent } from '../components/itau-button/itau-button.component';
import { CdtComponent } from './../pages/cdt/cdt.component';
import { ProductService } from '../services/product.service';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ResultsComponent,
    UdpCurrencyMaskPipe,
    HomeComponent,
    ProductCardComponent,
    ItauButtonComponent,
    CdtComponent
  ],
  providers: [BackServiceService, ProductService],
  bootstrap: [AppComponent]
})

export class ComponentModules { }
