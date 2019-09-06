import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';

import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';


xdescribe('ResultsComponent', () => {
  /*
    let component: ResultsComponent;
    let fixture: ComponentFixture<ResultsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ResultsComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ResultsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  */
  it('ocultar spinner', () => {
    const resultsComponent = new ResultsComponent();
    const ocultarSpinner = resultsComponent.ocultarSpinner();
    expect(ocultarSpinner).toEqual(true);

  });

  it('mostrar spinner', () => {
    const resultsComponent = new ResultsComponent();
    const ocultarSpinner = resultsComponent.mostrarSpinner();
    expect(ocultarSpinner).toEqual(false);
  });

  it('Validar estructura del json a 13 cuotas', () => {
    const component = new ResultsComponent();

    var json = [
      {
        "Plazo": "13 meses",
        "Seguro de vida asociado a la deuda por cuota": "$12000.00",
        "Cuota mensual más seguro(s)": "$500157.97",
        "Cuota mensual": "$488157.97",
        "Tasa mes vencida utilizada en la simulación": "1.35%",
        "Tasa efectiva anual utilizada en la simulación": "17.46%"
      },
      {
        "seguro": 12000.0,
        "cuotaNumero": 0,
        "saldo": 5000000.0
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 1,
        "abonoInteres": 67500.0,
        "abonoCapital": 420657.97,
        "saldo": 4579342.0
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 2,
        "abonoInteres": 61821.117,
        "abonoCapital": 426336.84,
        "saldo": 4153005.0
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 3,
        "abonoInteres": 56065.57,
        "abonoCapital": 432092.4,
        "saldo": 3720912.5
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 4,
        "abonoInteres": 50232.32,
        "abonoCapital": 437925.66,
        "saldo": 3282986.8
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 5,
        "abonoInteres": 44320.324,
        "abonoCapital": 443837.66,
        "saldo": 2839149.0
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 6,
        "abonoInteres": 38328.51,
        "abonoCapital": 449829.47,
        "saldo": 2389319.5
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 7,
        "abonoInteres": 32255.814,
        "abonoCapital": 455902.16,
        "saldo": 1933417.4
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 8,
        "abonoInteres": 26101.135,
        "abonoCapital": 462056.84,
        "saldo": 1471360.5
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 9,
        "abonoInteres": 19863.367,
        "abonoCapital": 468294.6,
        "saldo": 1003065.9
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 10,
        "abonoInteres": 13541.39,
        "abonoCapital": 474616.6,
        "saldo": 528449.3
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 11,
        "abonoInteres": 7134.066,
        "abonoCapital": 481023.9,
        "saldo": 47425.41
      },
      {
        "seguro": 12000.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 12,
        "abonoInteres": 640.24304,
        "abonoCapital": 487517.72,
        "saldo": -440092.3
      },
      {
        "seguro": 0.0,
        "cuotaSeguro": 500157.97,
        "cuota": 488157.97,
        "cuotaNumero": 13,
        "abonoInteres": -5941.2466,
        "abonoCapital": 494099.22,
        "saldo": -934191.5
      }
    ];

    component.iniciarPaginador(json);
    const cantCuotas = component.length;
    expect(cantCuotas).toEqual(13);
  });

  it('Definir setPageSizeOptions', () => {
    const component = new ResultsComponent();
    component.setPageSizeOptions('[1,2,3]');
    const pageSize = component.pageSizeOptions;
    expect(pageSize).toBeDefined();
  });

  it('Cambiar tab', () => {
    const component = new ResultsComponent();
    expect(component.cambiarTab()).toEqual(true);
  });
});
/*
describe('Service: RestService', () => {
  let backend: MockBackend;
  let service: RestService;
});
*/
