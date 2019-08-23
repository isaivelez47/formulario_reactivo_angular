import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { BackServiceService } from './back-service.service';

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

describe('BackServiceService', () => {
  let backend: MockBackend;
  let service: BackServiceService;
  /*
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [
          BaseRequestOptions,
          MockBackend,
          BackServiceService,
          {
            deps: [
              MockBackend,
              BaseRequestOptions
            ],
            provider: Http,
            useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
          }
        ]
      })
    }));

    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(BackServiceService);

    function setupConnections(backend: MockBackend, options: any) {
      backend.connections.subscribe((connection: MockConnection) => {
        if (connection.request.url === 'https://accenture-form.herokuapp.com/simulation') {
          const responseOptions = new ResponseOptions(options);
          const response = new Response(responseOptions);

          connection.mockRespond(response);
        }
      });
    }
    */

  it('setear json', () => {
    var json = [
      { nombre: 'test' }
    ];
    const service = new BackServiceService();
    service.setJson(json);
    expect(service.getDatos()).toEqual(json);
  });

  it('obtener resultados', () => {
    const service = new BackServiceService();
    expect(service.getResultados()).toEqual({});
  })
});
