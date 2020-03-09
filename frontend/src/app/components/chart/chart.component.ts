import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartData } from 'src/app/_models/ChartData';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartService } from 'src/app/_services/chart.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  @Input() chartData : ChartData;
  @ViewChild('sidenav') sidenav : MatSidenav;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { "data": [] }
  ];
  constructor(private chartService:ChartService) { }

  ngOnInit(): void {
    this.chartService.getChartData().subscribe((res:any) => {
      this.barChartLabels = res.labels;
      this.barChartData = [
        {
          "data" : res.values
        }
      ]
    })
  }


}
