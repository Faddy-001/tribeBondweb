import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-doctor',
 
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {
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
  this.router.navigateByUrl(`/tribe/doctorList/add-doc`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/doctorList/detail-doc/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllRenatlDisplay() {
    this.auth.getAllDoctor().subscribe(
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
deletecard(id: any) {
  this.auth.deleteDoctor(id).subscribe(
    (res: any) => {
      console.log(res);
      this.ngOnInit()
      window.location.reload();
    })
}
}





