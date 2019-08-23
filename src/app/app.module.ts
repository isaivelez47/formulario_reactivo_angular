import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Todos los componentes de deben importar desde ComponentModules
import { ComponentModules } from './modules/component.module';
import { AppComponent } from './app.component';
import { BackServiceService } from './services/back-service.service';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ComponentModules
  ],
  providers: [BackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
