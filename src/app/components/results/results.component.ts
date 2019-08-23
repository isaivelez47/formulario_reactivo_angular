import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BackServiceService } from 'src/app/services/back-service.service';

import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuota } from './../../interfaces/cuota';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() tabActivo;
  @Output() OutPutDelPadre = new EventEmitter<number>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  datosCargadosDelBack: boolean;



  // variables para la tabla
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }


  ELEMENT_DATA: Cuota[];

  displayedColumns = ['cuotaNumero', 'abonoInteres', 'abonoCapital', 'cuota', 'seguro', 'cuotaSeguro', 'saldo'];
  dataSource: MatTableDataSource<Cuota>;

  constructor(
    private _back?: BackServiceService
  ) { }

  ngOnInit() {
    this.consultarSimulacro();
  }

  ngOnChanges() {
    if (this.tabActivo === 1) {
      this.consultarSimulacro();
    }
  }

  ocultarSpinner() {
    this.datosCargadosDelBack = true;
    return this.datosCargadosDelBack;
  }

  mostrarSpinner() {
    this.datosCargadosDelBack = false;
    return this.datosCargadosDelBack;
  }

  iniciarPaginador(respuestaDelServicio) {
    console.log(respuestaDelServicio.slice(2));
    this.ELEMENT_DATA = respuestaDelServicio.slice(2);
    this.length = this.ELEMENT_DATA.length;

    this.dataSource = new MatTableDataSource<Cuota>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  cambiarTab() {
    this.OutPutDelPadre.emit(0);
    return true;
  }

  consultarSimulacro() {
    this.mostrarSpinner();
    console.log("ngChange");
    const json = this._back.getDatos();
    if (json !== undefined) {
      this._back.simulacion(json).subscribe(res => {
        this.iniciarPaginador(res)
        this.ocultarSpinner();
      });
    }
  }
}
