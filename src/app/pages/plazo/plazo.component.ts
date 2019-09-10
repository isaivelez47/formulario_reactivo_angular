import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plazo',
  templateUrl: './plazo.component.html',
  styleUrls: ['./plazo.component.scss']
})
export class PlazoComponent implements OnInit {

  public plazos: any[] = [ '90', '120', '180', '360' ];

  constructor() { }

  ngOnInit() {
  }

}
