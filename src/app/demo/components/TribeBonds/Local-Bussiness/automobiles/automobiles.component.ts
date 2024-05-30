import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-automobiles',

  templateUrl: './automobiles.component.html',
  styleUrl: './automobiles.component.scss'
})
export class AutomobilesComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];

 entityShow: any = [];
 allData: any;
 entities: any;
 desiredWidth = 400; // Example width in pixels
 desiredHeight = 250;
websiteUrl: string = "http://www.houstonpeace.org/";

sortField: string = '';

ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);
    this.getAllRenatlDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/automobileList/add-auto`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/automobileList/detail-auto/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllRenatlDisplay() {
    this.auth.getAllAutomobile().subscribe(
        (res: any) => {
            console.log(res.data);
            this.allData = res
            console.log(this.allData);
            
            this.allData.data.forEach((data: any) => {
                console.log(data);
                this.entities = data;
                    this.entityShow.push({
                        id: data._id,
                        name: data.name,
                        address: data.address,
                        phone: data.phone,
                        image: data.images[0],
                        website:data.website,
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
}





