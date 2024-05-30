import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-beauty',

  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.scss'
})
export class BeautyComponent {
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
    this.getAllBeautyDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/beautyList/add-beauty`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/beautyList/detail-beauty/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllBeautyDisplay() {
    this.auth.getAllBeauty().subscribe(
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
                        website:data.website,
                        services:data.services,
                        createdFirstName:data.createdBy.firstName,
                        createdLastName:data.createdBy.lastName,
                        createdpic:data.createdBy.profilePicture,
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
}





