import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private webReqService: WebrequestService) { }

  submitFormData(inputA:string, inputB:string) {
    return this.webReqService.post('chartData', { inputA, inputB });
  }
  getChartData() {
    return this.webReqService.get('chartData');
  }
}
