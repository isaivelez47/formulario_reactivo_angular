import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Todos los componentes de deben importar desde ComponentModules
import { ComponentModules } from './modules/component.module';
import { AppComponent } from './app.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { PlazoComponent } from './pages/plazo/plazo.component';



@NgModule({
  declarations: [StepOneComponent, PlazoComponent],
  imports: [
    BrowserModule,
    ComponentModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
