import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-party',
 
  templateUrl: './party.component.html',
  styleUrl: './party.component.scss'
})
export class PartyComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];
//  @Input() starRating: any;

 entityShow: any = [];
 allData: any;
 entities: any;
 desiredWidth = 400; // Example width in pixels
 desiredHeight = 250;

sortField: string = '';

ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);
    this.getAllRenatlDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/partyList/add-party`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/partyList/detail-party/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllRenatlDisplay() {
    this.auth.getAllBanq().subscribe(
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
                        date: data.date,
                        address: data.address,
                        phone: data.phone,
                        offers:data.offers,
                        image: data.images[0],
                        email:data.email,
                        website:data.website
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
}




