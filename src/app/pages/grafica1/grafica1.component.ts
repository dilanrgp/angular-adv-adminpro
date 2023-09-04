import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = [
    'PS5',
    'XBOX One',
    'Nintendo',
  ];

  public data1: number[] = [200, 350, 400];
  public data2: number[] = [10, 80, 15];
  
}
