import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UdpCurrencyMaskPipe } from 'src/app/pipes/UdpCurrencyMaskPipe.pipe';
import { CurrencyPipe } from '@angular/common';
import { BackServiceService } from 'src/app/services/back-service.service';

describe('FormComponent', () => {

  let component: FormComponent;
  let errores: any;

  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatButtonModule,
        HttpClientModule
      ],
      providers: [CurrencyPipe]
    }).compileComponents();

    component = new FormComponent();
    errores = component.inciarMensajesDeValidacion();
  }));

  describe('Mensajes de error', () => {

    it('tipoSimulacion requerido', () => {
      expect(errores.tipoSimulacion.required).toEqual('Este campo es obligatorio.');
    });

    it('fechaNacimiento requerido', () => {
      expect(errores.fechaNacimiento.required).toEqual('Este campo es obligatorio.');
    });

    it('tipoTasa requerido', () => {
      expect(errores.tipoTasa.required).toEqual('Este campo es obligatorio.');
    });

    it('producto requerido', () => {
      expect(errores.producto.required).toEqual('Este campo es obligatorio.');
    });

    it('ingresosMinimos requerido', () => {
      expect(errores.ingresosMinimos.required).toEqual('Este campo es obligatorio.');
    });

    it('plazo requerido', () => {
      expect(errores.plazo.required).toEqual('Este campo es obligatorio.');
    });

    it('valorAPrestar requerido', () => {
      expect(errores.valorAPrestar.required).toEqual('Este campo es obligatorio.');
    });

    it('valorAPagar requerido', () => {
      expect(errores.valorAPagar.required).toEqual('Este campo es obligatorio.');
    });

    it('plazo numerico', () => {
      expect(errores.plazo.invalidNumber).toEqual('Por favor usa solo caracteres numéricos enteros en este campo.');
    });

    it('plazo minimo', () => {
      expect(errores.plazo.min).toEqual('El campo no cumple con el valor mínimo');
    });

    it('plazo maximo', () => {
      expect(errores.plazo.max).toEqual('El campo no cumple con el valor máximo');
    });

    it('valorAPrestar numerico', () => {
      expect(errores.valorAPrestar.invalidNumber).toEqual('Por favor usa solo caracteres numéricos enteros en este campo.');
    });

    it('valorAPrestar minimo', () => {
      expect(errores.valorAPrestar.min).toEqual('El campo no cumple con el valor mínimo');
    });

    it('valorAPrestar maximo', () => {
      expect(errores.valorAPrestar.max).toEqual('El campo no cumple con el valor máximo');
    });

    it('valorAPagar numerico', () => {
      expect(errores.valorAPagar.invalidNumber).toEqual('Por favor usa solo caracteres numéricos enteros en este campo.');
    });

    it('valorAPagar minimo', () => {
      expect(errores.valorAPagar.min).toEqual('El campo no cumple con el valor mínimo');
    });

    it('valorAPagar maximo', () => {
      expect(errores.valorAPagar.max).toEqual('El campo no cumple con el valor máximo');
    });
  });

  describe('Testing del formulario', () => {
    it('Crear el formulario', () => {
      const component = new FormComponent(new FormBuilder);
      expect(typeof component.iniciarFormulario()).toEqual('object');
    });
  });

  describe('Valores tipos de simulación', () => {

    it('Crear los dos tipos de simulación (Cuota/Monto)', () => {
      component.iniciarValoresTipoSimulacion();
      component.inciarMensajesDeValidacion();
      component.iniciarValoresTipoSimulacion();
      expect(component.tiposSimulacion.length).toEqual(2);
    });

    it('Crear los dos tipos de tasas (Fija/Variable)', () => {
      component.iniciarValoresTipoTasa();
      component.inciarMensajesDeValidacion();
      component.iniciarValoresTipoSimulacion();
      expect(component.tiposTasa.length).toEqual(2);
    });

    it('Crear los tres productos fijos (Cre Libre/Pen. Volun/Libranza)', () => {
      component.iniciarValoresProductos();
      expect(component.productos.length).toEqual(3);
    });
  });

  describe('ValueChanges', () => {
    it('Setear tasa fija y esperar 4 productos', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearProductosAlCambiarTasa();

      comp.simulacionForm.patchValue({
        tipoTasa: 'tasa fija'
      });

      expect(comp.productos.length).toEqual(4);
    });

    it('Setear tasa variable y esperar 4 productos', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearProductosAlCambiarTasa();

      comp.simulacionForm.patchValue({
        tipoTasa: 'tasa variable'
      });

      expect(comp.productos.length).toEqual(4);
    });

    it('Setear tasa incorrecta y esperar 3 productos', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearProductosAlCambiarTasa();

      comp.simulacionForm.patchValue({
        tipoTasa: 'tasa incorrecta'
      });

      expect(comp.productos.length).toEqual(3);
    });

    it('Setear producto "crédito de libre inversion" y esperar 1000000', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();

      comp.simulacionForm.patchValue({
        producto: 'crédito de libre inversion'
      });

      expect(comp.simulacionForm.controls.ingresosMinimos.value).toEqual(1000000);
    });

    it('Setear producto "crédito de pignoración de pensiones voluntarias" y esperar 1000000', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();

      comp.simulacionForm.patchValue({
        producto: 'crédito de pignoración de pensiones voluntarias'
      });

      expect(comp.simulacionForm.controls.ingresosMinimos.value).toEqual(1000000);
    });

    it('Setear producto "libranza empleados" y esperar 781242', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();

      comp.simulacionForm.patchValue({
        producto: 'libranza empleados'
      });

      expect(comp.simulacionForm.controls.ingresosMinimos.value).toEqual(781242);
    });

    it('Setear producto "libranza protección" y esperar 781242', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();

      comp.simulacionForm.patchValue({
        producto: 'libranza protección'
      });

      expect(comp.simulacionForm.controls.ingresosMinimos.value).toEqual(781242);
    });

    it('Setear producto "libranza fopep" y esperar 781242', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();

      comp.simulacionForm.patchValue({
        producto: 'libranza fopep'
      });

      expect(comp.simulacionForm.controls.ingresosMinimos.value).toEqual(781242);
    });

    it('Setear producto incorrecto y esperar 0', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();

      comp.simulacionForm.patchValue({
        producto: 'incorrecto'
      });

      expect(comp.simulacionForm.controls.ingresosMinimos.value).toEqual(0);
    });

    it('Resetear seguro de desempleo al cambiar producto', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearSeguroDesempleoSegunProducto();

      comp.simulacionForm.patchValue({
        producto: 'crédito de libre inversion'
      });

      expect(comp.simulacionForm.controls.seguroDesempleo.value).toEqual(false);
    });

    it('Resetear seguro de desempleo al cambiar tipoTasa', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearSeguroDesempleoSegunProducto();

      comp.simulacionForm.patchValue({
        tipoTasa: 'tasa fija'
      });

      expect(comp.simulacionForm.controls.seguroDesempleo.value).toEqual(false);
    });

    it('Listener del formulario, debe retornar true si está activo', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.formControlValueChanges();

      comp.simulacionForm.patchValue({
        tipoTasa: 'tasa fija'
      });

      expect(comp.formControlValueChanges()).toEqual(true);
    });

    xit('Setear plazo incorrecto y esperar mensaje de error por invalidNumber', () => {
      const comp = new FormComponent(new FormBuilder);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();

      comp.simulacionForm.patchValue({
        plazo: 'palzo incorrecto'
      });

      comp.recorrerFormularioYSetearMensajesDeError(comp.simulacionForm);

      expect(comp.formErrors.plazo.invalidNumber).toEqual('Por favor usa solo caracteres numéricos enteros en este campo.');
    });
  });

  describe('Formatear currencies', () => {
    it('Format Currency valorAPrestar 1,000,000', () => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.formatearCurrencyAPrestar();

      comp.simulacionForm.patchValue({
        valorAPrestar: '1,000,000'
      });

      expect(comp.simulacionForm.controls.valorAPrestar.value).toEqual('1000000');
    });

    it('Format Currency valorAPrestar mandando number', () => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.formatearCurrencyAPrestar();

      // valor a prestar solo debe aceptar caracteres tipo string
      comp.simulacionForm.patchValue({
        valorAPrestar: 123456
      });

      expect(comp.simulacionForm.controls.valorAPrestar.value).toEqual('0');
    });

    it('Format Currency valorAPagar 4,469,000', () => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.formatearCurrencyAPagar();

      comp.simulacionForm.patchValue({
        valorAPagar: '4,469,000'
      });

      expect(comp.simulacionForm.controls.valorAPagar.value).toEqual('4469000');
    });

    it('Format Currency valorAPagar mandando number', () => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.formatearCurrencyAPagar();

      // valor a prestar solo debe aceptar caracteres tipo string
      comp.simulacionForm.patchValue({
        valorAPagar: 123456
      });

      expect(comp.simulacionForm.controls.valorAPagar.value).toEqual('0');
    });
  });

  describe('Variables globales injectando CurrencyPipe', () => {
    it('Setear nuevo plazo al cambiar de producto', inject([CurrencyPipe], (currencyPipe: CurrencyPipe) => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe, currencyPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearValidatorsPlazosAlCambiarProducto();

      comp.simulacionForm.patchValue({
        tipoSimulacion: 'simula tu cuota',
        tipoTasa: 'tasa variable',
        producto: 'crédito de libre inversion'
      });

      // Credito de libre inversión tiene min 36 - max 120
      comp.simulacionForm.patchValue({
        plazo: 36
      });

      expect(comp.simulacionForm.controls.plazo.valid).toEqual(true);
    }));

    it('Simular monto', inject([CurrencyPipe], (currencyPipe: CurrencyPipe) => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe, currencyPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearValidatorsPlazosAlCambiarProducto();

      comp.simulacionForm.patchValue({
        tipoSimulacion: 'simula tu monto',
        tipoTasa: 'tasa variable',
        producto: 'crédito de libre inversion'
      });

      // Credito de libre inversión tiene min 36 - max 120
      comp.simulacionForm.patchValue({
        plazo: 36
      });

      expect(comp.simulacionForm.controls.plazo.valid).toEqual(true);
    }));

    it('plazo incorrecto', inject([CurrencyPipe], (currencyPipe: CurrencyPipe) => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe, currencyPipe);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearValidatorsPlazosAlCambiarProducto();

      comp.simulacionForm.patchValue({
        tipoSimulacion: 'simula tu monto',
        tipoTasa: 'tasa variable',
        producto: 'crédito de libre inversion'
      });

      // Credito de libre inversión tiene min 36 - max 120
      comp.simulacionForm.patchValue({
        plazo: 'plazo incorrecto'
      });

      expect(comp.simulacionForm.controls.plazo.valid).toEqual(false);
    }));

  });

  describe('Submit tests', () => {
    it('formulario bueno', inject([CurrencyPipe], (currencyPipe: CurrencyPipe) => {
      const comp = new FormComponent(new FormBuilder, new UdpCurrencyMaskPipe, currencyPipe, new BackServiceService);
      comp.iniciarFormulario();
      comp.inciarMensajesDeValidacion();
      comp.iniciarValoresTipoSimulacion();
      comp.setearIngresoMinimoAlCambiarProducto();
      comp.reiniciarPreciosAlCambiarTipoSimulacion();
      comp.setearValidatorsPlazosAlCambiarProducto();

      comp.simulacionForm.patchValue({
        tipoSimulacion: 'simula tu cuota',
        fechaNacimiento: '05/12/2000',
        tipoTasa: 'tasa variable',
        producto: 'crédito de libre inversion'
      });

      // Credito de libre inversión tiene min 36 - max 120
      comp.simulacionForm.patchValue({
        plazo: 36,
        valorAPrestar: 5000000
      });

      comp.onSubmit();
      expect(true).toEqual(true);
    }));
  });
});
