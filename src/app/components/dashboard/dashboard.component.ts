import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  toppings = new FormControl('');
  socialList: string[] = ['PROFILE.INSTAGRAM', 'PROFILE.FACEBOOK', 'PROFILE.TIKTOK'];

  statusList: string[] = ['STATUS.IN_PROGRESS', 'STATUS.STOPPED', 'STATUS.FINISHED'];

  // Pie Social
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public pieChartLabels = [ [ 'Instagram' ], [ 'Facebook' ], 'Tik Tok' ];
  public pieChartDatasets = [ {data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // Pie Progress chart
  public pieChartOptionsProgress: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public pieChartLabelsProgress = [ [ 'Em Progresso' ], [ 'Pausado' ], 'Finalizado' ];
  public pieChartDatasetsProgress = [ {data: [ 300, 500, 100 ]
  } ];
  public pieChartLegendProgress = true;
  public pieChartPluginsProgress = [];
}
