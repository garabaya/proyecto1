import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colorLocal: string;
  numrandom: number = Math.floor(Math.random() * 10);

  constructor() { }

  ngOnInit(): void {
  }

  colorrandom(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  color() {
    this.colorLocal = '#' + this.colorrandom();
    return this.colorLocal;
  }

}
