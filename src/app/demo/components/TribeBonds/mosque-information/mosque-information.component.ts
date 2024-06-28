import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-mosque-information',

  templateUrl: './mosque-information.component.html',
  styleUrl: './mosque-information.component.scss'
})
export class MosqueInformationComponent {
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
  this.router.navigateByUrl(`/tribe/mosqueList/add-mos`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/mosqueList/detail-mos/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllRenatlDisplay() {
    this.auth.getAllMosque().subscribe(
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
                        khutbah: data.khutbah //
                        
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
redirectToGoogleMaps(address: string): void {
  // Construct the Google Maps URL with the address
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  // Open the URL in a new tab/window
  window.open(mapsUrl, '_blank');
}
}






