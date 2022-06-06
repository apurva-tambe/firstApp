import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laserhairreduction',
  templateUrl: './laserhairreduction.component.html',
  styleUrls: ['./laserhairreduction.component.css']
})
export class LaserhairreductionComponent implements OnInit {
  public laser = false;
  show=true;
  showMore1 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
