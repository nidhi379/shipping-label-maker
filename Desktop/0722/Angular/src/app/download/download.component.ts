import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  documentname: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/pdf.svg',
    area: 17075200,
    documentname : '146989754'
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    documentname: '6624199'
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    documentname: '6624199'
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    documentname: '6624199'
  }
];

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  countries = COUNTRIES;

  constructor() { }

  ngOnInit() {
  }

}
