import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TipoSimulacion } from '../../interfaces/tipo-simulacion';
import { TipoTasa } from 'src/app/interfaces/tipo-tasa';
import { CustomValidator } from 'src/app/validators/CustomValidators';
import { Producto } from 'src/app/interfaces/producto';
import { UdpCurrencyMaskPipe } from 'src/app/pipes/UdpCurrencyMaskPipe.pipe';
import { Variables } from './../../globales/Variables';
import { CurrencyPipe } from '@angular/common';
import { BackServiceService } from 'src/app/services/back-service.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    UdpCurrencyMaskPipe,
    CurrencyPipe
  ]
})
export class FormComponent implements OnInit {

  @Output() OutPutDelPadre = new EventEmitter<number>();

  simulacionForm: FormGroup;

  tiposSimulacion: Array<TipoSimulacion>;
  mensajesTipoSimulacion: Array<TipoSimulacion>;
  tiposTasa: Array<TipoTasa>;
  productos: Array<Producto> = [];


  mensajesDeValidacion: any;
  formErrors: any;

  constructor(
    private fb?: FormBuilder,
    private currencyMask?: UdpCurrencyMaskPipe,
    private cp?: CurrencyPipe,
    private _back?: BackServiceService
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
    this.inciarMensajesDeValidacion();
    this.iniciarValoresTipoSimulacion();
    this.iniciarValoresTipoTasa();
    this.setearProductosAlCambiarTasa();
    this.setearIngresoMinimoAlCambiarProducto();
    this.setearSeguroDesempleoSegunProducto();
    this.formControlValueChanges();
    this.formatearCurrencyAPrestar();
    this.formatearCurrencyAPagar();
    this.reiniciarPreciosAlCambiarTipoSimulacion();
    this.setearValidatorsPlazosAlCambiarProducto();
  }

  iniciarFormulario() {
    this.simulacionForm = this.fb.group({
      tipoSimulacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      tipoTasa: ['', Validators.required],
      producto: ['', Validators.required],
      ingresosMinimos: ['', Validators.required],
      seguroDesempleo: [false, Validators.required],
      plazo: ['', [Validators.required]],
      valorAPrestar: ['', [Validators.required]],
      valorAPagar: ['', [Validators.required]]
    });
    return this.simulacionForm;
  }

  inciarMensajesDeValidacion() {
    this.mensajesDeValidacion = {
      tipoSimulacion: {
        required: 'Este campo es obligatorio.'
      },
      fechaNacimiento: {
        required: 'Este campo es obligatorio.'
      },
      tipoTasa: {
        required: 'Este campo es obligatorio.'
      },
      producto: {
        required: 'Este campo es obligatorio.'
      },
      ingresosMinimos: {
        required: 'Este campo es obligatorio.'
      },
      plazo: {
        required: 'Este campo es obligatorio.',
        invalidNumber: 'Por favor usa solo caracteres numéricos enteros en este campo.',
        min: 'El campo no cumple con el valor mínimo',
        max: 'El campo no cumple con el valor máximo'
      },
      valorAPrestar: {
        required: 'Este campo es obligatorio.',
        invalidNumber: 'Por favor usa solo caracteres numéricos enteros en este campo.',
        min: 'El campo no cumple con el valor mínimo',
        max: 'El campo no cumple con el valor máximo'
      },
      valorAPagar: {
        required: 'Este campo es obligatorio.',
        invalidNumber: 'Por favor usa solo caracteres numéricos enteros en este campo.',
        min: 'El campo no cumple con el valor mínimo',
        max: 'El campo no cumple con el valor máximo'
      }
    };

    this.formErrors = {
      tipoSimulacion: '',
      fechaNacimiento: '',
      tipoTasa: '',
      producto: '',
      ingresosMinimos: '',
      plazo: '',
      valorAPrestar: '',
      valorAPagar: ''
    };

    return this.mensajesDeValidacion;
  }

  iniciarValoresTipoSimulacion() {
    this.tiposSimulacion = [
      { value: 'simula tu cuota', viewValue: 'Simula tu cuota' },
      { value: 'simula tu monto', viewValue: 'Simula tu monto' }
    ];
    this.mensajesTipoSimulacion = [
      {
        value: 'simula tu cuota',
        viewValue: 'Este simulador te permite identificar el valor de la cuota que debes pagar cada mes, según el monto que ' +
          'deseas prestar y el plazo que solicites.'
      },
      {
        value: 'simula tu monto',
        viewValue: 'Este simulador te permite conocer cuál es el monto que puedes solicitar, según tus necesidades en ' +
          'cuanto a la cantidad de dinero que puedes asignar en el pago de la cuota periódica y el plazo de ' +
          'financiación que requieres.'
      }
    ];
  }

  iniciarValoresTipoTasa() {
    this.tiposTasa = [
      { value: 'tasa fija', viewValue: 'Tasa Fija' },
      { value: 'tasa variable', viewValue: 'Tasa Variable' }
    ];
  }

  iniciarValoresProductos() {
    this.productos = [
      { value: 'crédito de libre inversion', viewValue: 'Crédito de Libre Inversión' },
      { value: 'crédito de pignoración de pensiones voluntarias', viewValue: 'Crédito de Pignoración de Pensiones Voluntarias' },
      { value: 'libranza empleados', viewValue: 'Libranza Empleados' }
    ];
  }

  setearProductosAlCambiarTasa() {
    this.simulacionForm.controls.tipoTasa.valueChanges.subscribe(tasaSeleccionada => {
      this.iniciarValoresProductos();
      switch (tasaSeleccionada) {
        case 'tasa fija':
          this.productos.push({
            value: 'libranza protección', viewValue: 'Libranza Protección'
          });
          break;
        case 'tasa variable':
          this.productos.push({
            value: 'libranza fopep', viewValue: 'Libranza FOPEP'
          });
          break;
        default:
          break;
      }

      this.simulacionForm.patchValue({
        producto: ''
      })
    });
  }

  setearIngresoMinimoAlCambiarProducto() {
    this.simulacionForm.controls.producto.valueChanges.subscribe(productoSeleccionado => {
      let nuevoIngresoMinimo: number;
      switch (productoSeleccionado) {
        case 'crédito de libre inversion':
          nuevoIngresoMinimo = 1000000;
          break;
        case 'crédito de pignoración de pensiones voluntarias':
          nuevoIngresoMinimo = 1000000;
          break;
        case 'libranza empleados':
          nuevoIngresoMinimo = 781242;
          break;
        case 'libranza protección':
          nuevoIngresoMinimo = 781242;
          break;
        case 'libranza fopep':
          nuevoIngresoMinimo = 781242;
          break;
        default:
          nuevoIngresoMinimo = 0;
          break;
      }

      this.simulacionForm.patchValue({
        ingresosMinimos: nuevoIngresoMinimo
      });
    });
  }


  setearSeguroDesempleoSegunProducto() {
    this.simulacionForm.controls.producto.valueChanges.subscribe(producto => {
      this.simulacionForm.patchValue({
        seguroDesempleo: false
      });
    });

    this.simulacionForm.controls.tipoTasa.valueChanges.subscribe(tasa => {
      this.simulacionForm.patchValue({
        seguroDesempleo: false
      });
    });
  }

  formControlValueChanges() {
    this.simulacionForm.valueChanges.subscribe(value => {
      this.recorrerFormularioYSetearMensajesDeError(this.simulacionForm);
    });
    return true;
  }

  recorrerFormularioYSetearMensajesDeError(group: FormGroup = this.simulacionForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      /*
      Descomentar cuando haya un Nested form
      if (abstractControl instanceof FormGroup) {
        this.recorrerFormularioYSetearMensajesDeError(abstractControl);
      } else {
        */
      this.formErrors[key] = '';
      if (abstractControl &&
        !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {
        const mensajes = this.mensajesDeValidacion[key];

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += mensajes[errorKey] + ' ';
          }
        }
      }
      //}
    });
  }

  formatearCurrencyAPrestar() {
    this.simulacionForm.controls.valorAPrestar.valueChanges.subscribe(val => {
      if (typeof val === 'string') {
        const maskedVal = this.currencyMask.transform(val);

        if (val !== maskedVal) {
          this.simulacionForm.patchValue({ valorAPrestar: maskedVal });
        }
      } else {
        this.simulacionForm.patchValue({ valorAPrestar: '0' });
      }
    });
  }

  formatearCurrencyAPagar() {
    this.simulacionForm.controls.valorAPagar.valueChanges.subscribe(val => {
      if (typeof val === 'string') {
        const maskedVal = this.currencyMask.transform(val);
        if (val !== maskedVal) {
          this.simulacionForm.patchValue({ valorAPagar: maskedVal });
        }
      } else {
        this.simulacionForm.patchValue({ valorAPagar: '0' });
      }
    });
  }

  reiniciarPreciosAlCambiarTipoSimulacion() {
    this.simulacionForm.controls.tipoSimulacion.valueChanges.subscribe(simulacion => {
      this.simulacionForm.patchValue({
        valorAPagar: '',
        valorAPrestar: '',
      });

      if (simulacion === 'simula tu cuota') {
        this.simulacionForm.get('valorAPrestar').setValidators([
          Validators.required,
          CustomValidator.numeric,
          Validators.min(1000000), Validators.max(500000000)
        ]);
        this.simulacionForm.get('valorAPagar').clearValidators();

        this.simulacionForm.get('valorAPrestar').updateValueAndValidity();
        this.simulacionForm.get('valorAPagar').updateValueAndValidity();
      } else {
        this.simulacionForm.get('valorAPagar').setValidators([
          Validators.required,
          CustomValidator.numeric,
          Validators.min(25833),
          Validators.max(58861111)
        ]);
        this.simulacionForm.get('valorAPrestar').clearValidators();

        this.simulacionForm.get('valorAPrestar').updateValueAndValidity();
        this.simulacionForm.get('valorAPagar').updateValueAndValidity();
      }
    });
  }

  setearValidatorsPlazosAlCambiarProducto() {
    this.simulacionForm.controls.producto.valueChanges.subscribe(producto => {
      const tasa = this.simulacionForm.get('tipoTasa').value;
      const tipoSimulacion = this.simulacionForm.get('tipoSimulacion').value;

      if (tipoSimulacion !== undefined && tasa !== undefined && producto !== '') {
        const productoObtenido = Variables[tipoSimulacion][tasa][producto];
        const plazoMin = productoObtenido.plazoMin;
        const plazoMax = productoObtenido.plazoMax;

        this.simulacionForm.get('plazo').setValidators([
          Validators.required,
          CustomValidator.numeric,
          Validators.min(plazoMin), Validators.max(plazoMax)
        ]);

        this.mensajesDeValidacion.plazo.min = 'El campo no cumple con el valor mínimo ' + plazoMin;
        this.mensajesDeValidacion.plazo.max = 'El campo no cumple con el valor máximo ' + plazoMax;
        this.simulacionForm.get('plazo').updateValueAndValidity();

        const precioMin = productoObtenido.precioMin;
        const precioMax = productoObtenido.precioMax;

        switch (tipoSimulacion) {
          case 'simula tu cuota':
            this.simulacionForm.get('valorAPrestar').setValidators([
              Validators.required,
              CustomValidator.numeric,
              Validators.min(precioMin), Validators.max(precioMax)
            ]);

            this.mensajesDeValidacion.valorAPrestar.min = 'El campo no cumple con el valor mínimo ' + this.cp.transform(precioMin, 'USD', '$');
            this.mensajesDeValidacion.valorAPrestar.max = 'El campo no cumple con el valor máximo ' + this.cp.transform(precioMax, 'USD', '$');
            break;
          case 'simula tu monto':
            this.simulacionForm.get('valorAPagar').setValidators([
              Validators.required,
              CustomValidator.numeric,
              Validators.min(precioMin), Validators.max(precioMax)
            ]);

            this.mensajesDeValidacion.valorAPagar.min = 'El campo no cumple con el valor mínimo ' + this.cp.transform(precioMin, 'USD', '$');
            this.mensajesDeValidacion.valorAPagar.max = 'El campo no cumple con el valor máximo ' + this.cp.transform(precioMax, 'USD', '$');
            break;
        }
      }
    });
  }

  onSubmit() {
    this.recorrerFormularioYSetearMensajesDeError(this.simulacionForm);
    if (this.simulacionForm.valid === true) {
      const fc = this.simulacionForm.controls;

      let aPagar = parseInt(fc.valorAPagar.value);
      // Preguntar si el valor viene vacio, para setearle un 0
      aPagar = aPagar > 0 ? aPagar : 0;

      let aPrestar = parseInt(fc.valorAPrestar.value);
      // Preguntar si el valor viene vacio, para setearle un 0
      aPrestar = aPrestar > 0 ? aPrestar : 0;

      const json = {
        tipoSimulacion: fc.tipoSimulacion.value,
        fechaNacimiento: fc.fechaNacimiento.value.toString(),
        tipoTasa: fc.tipoTasa.value,
        producto: fc.producto.value,
        ingresosMinimos: fc.ingresosMinimos.value,
        seguroDesempleo: fc.seguroDesempleo.value,
        plazo: parseInt(fc.plazo.value),
        valorAPrestar: aPrestar,
        valorAPagar: aPagar
      };
      this._back.setJson(json);
      this.OutPutDelPadre.emit(1);
    }
  }
}
