import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:String):void{
    this.router.navigate(['/Visit']);
  }

  ngOnInit(): void {
  }

}
