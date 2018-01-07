import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  imgGoed:string;
  imgMiddelmatig:string;
  imgSlecht:string;
  logo: string;
  logos = [
    '../assets/img/greenSmiley.png',
    '../assets/img/yellowSmiley.png',
    '../assets/img/redSmilley.png'
  ]

  setLogo(val: number){
    if ((val === 0)||(val === 1)||(val === 2)){
      this.logo = this.logos[val];
      console.log('log is set to '+ val);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
