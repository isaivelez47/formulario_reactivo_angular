import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itau-button',
  templateUrl: './itau-button.component.html',
  styleUrls: ['./itau-button.component.scss']
})
export class ItauButtonComponent implements OnInit {

  @Input() title;
  @Input() routeUrl;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleClickRedirect() {
    this.router.navigate([this.routeUrl]);
  }

}
