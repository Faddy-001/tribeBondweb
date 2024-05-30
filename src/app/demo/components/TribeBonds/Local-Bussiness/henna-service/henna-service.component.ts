import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-henna-service',
  
  templateUrl: './henna-service.component.html',
  styleUrl: './henna-service.component.scss'
})
export class HennaServiceComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];
//  @Input() starRating: any;

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
    this.getAllHennaDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/hennaList/add-henna`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/hennaList/detail-henna/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllHennaDisplay() {
    this.auth.getAllHenna().subscribe(
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
                        email:data.email,
                        website:data.website,

                        servingCities:data.servingCities
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
}






