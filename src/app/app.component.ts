import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [

    {

     title: 'Tree',

     imageUrl: 'assets/tree.jpeg',

     username: 'nature',

     content: 'I saw this awesome neat tree during my hike today'

    },

    {

     title: 'Snowy Mountain',

     imageUrl: 'assets/mountain.jpeg',

     username: 'mountainlover',

     content: 'Here is the picture of snowy mountain'

    },

    {

     title: 'Mountain Biking',

     imageUrl: 'assets/biking.jpeg',

     username: 'bikingbro',

     content: 'I did some biking today'

    },

   ];
}
