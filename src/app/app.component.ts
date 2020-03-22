import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CoVid18-dashBoard';
  showHome : boolean;
  constructor (private router: Router , private route : ActivatedRoute) {

  
  }

  ngOnInit() {

    this.route.queryParamMap.subscribe( param => console.log(param));
    
    if(this.router.url !== '/home') {
      this.showHome = false;
      console.log(this.showHome);
    } else {
      this.showHome = true;
    }
    //this.router.navigateByUrl('/');
  }
 }
