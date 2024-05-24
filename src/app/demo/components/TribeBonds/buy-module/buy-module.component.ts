import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-buy-module',
  // standalone: true,
  // imports: [],
  templateUrl: './buy-module.component.html',
  styleUrl: './buy-module.component.scss'
})
export class BuyModuleComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  navigateToAdd(){
    this.router.navigateByUrl(`/tribe/BuyList/add`);
  }
}
