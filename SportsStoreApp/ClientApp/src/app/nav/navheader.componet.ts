import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.componet.html'
})

export class NavHeaderComponent {
  @Input() title: any;
}

