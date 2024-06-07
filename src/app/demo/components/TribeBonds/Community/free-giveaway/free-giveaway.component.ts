import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-free-giveaway',
  
  templateUrl: './free-giveaway.component.html',
  styleUrl: './free-giveaway.component.scss'
})
export class FreeGiveawayComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];

 entityShow: any = [];
 allData: any;
 entities: any;
 desiredWidth = 400; // Example width in pixels
 desiredHeight = 250;
sortField: string = '';

ngOnInit(): void {
    this.getAllGiveDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/giveawayList/add-fgive`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/giveawayList/detail-fgive/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllGiveDisplay() {
    this.auth.getAllGive().subscribe(
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
                        price: data.price,
                        phone:data.phone,
                        email: data.contactEmail,
                        image: data.images[0],
                        category:data.category,
                        location:data.city
                    })
                console.log(this.entityShow.image);

            })
        })
}
}






