import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() vada='';
  @Input() username='';
  @Input() imageUrl='';
  @Input() content='';
  constructor() { }

  ngOnInit(): void {
  }

}
