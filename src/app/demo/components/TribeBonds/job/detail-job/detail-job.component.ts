import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-detail-job',
 
  templateUrl: './detail-job.component.html',
  styleUrl: './detail-job.component.scss'
})
export class DetailJobComponent {
  idParam = this.activatedRoute.snapshot.params['id'];
  constructor( private auth: AuthenticationService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
  
      this.getbyIDJobDisplay();
  }
allData: any
description:any
  getbyIDJobDisplay() {
    this.auth.getjobId(this.idParam).subscribe(
        (res: any) => {
            console.log(res.data);
            this.allData = res.data[0]
            console.log(this.allData.address);


            this.allData = res;
            this.description = this.allData.data[0].jobDetails
            console.log(this.allData.data.reviews);


            

        })
}
}
