import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-halal-meat',
 
  templateUrl: './halal-meat.component.html',
  styleUrl: './halal-meat.component.scss'
})
export class HalalMeatComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];
 @Input() starRating: any;
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
    this.getAllhalalMeatDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/halalMList/add-M`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/halalMList/detail-M/${id}`);
}

navigateToWebsite(website:any){
    window.open(website, '_blank');
  }


getAllhalalMeatDisplay() {
    this.auth.getAllMeat().subscribe(
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
                        website:data.website
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
}


