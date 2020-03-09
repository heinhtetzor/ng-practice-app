import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/_services/chart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username:string;
  password:string;
  serverResponse:any;
  loading:boolean;

  constructor(private chartService:ChartService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
      this.chartService.submitFormData(this.username, this.password).subscribe((res) => {
          this.serverResponse = res;
          setTimeout(() => {
            this.router.navigate(['/chart']);
          }, 2000);
      })
    }
}
