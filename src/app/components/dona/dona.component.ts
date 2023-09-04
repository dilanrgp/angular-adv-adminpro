import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin título';
  @Input() dataChart: number[] = [33, 33, 33];
  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];

  public doughnutChartData!: ChartData<'doughnut'>;
  
  ngOnInit(): void {

    this.doughnutChartData  = {
        labels: this.doughnutChartLabels,
        datasets: [
          { data: this.dataChart, backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] },
        ],
      };
    
  }


}
