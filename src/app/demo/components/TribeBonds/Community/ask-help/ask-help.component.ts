import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-ask-help',

  templateUrl: './ask-help.component.html',
  styleUrl: './ask-help.component.scss'
})
export class AskHelpComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];

 entityShow: any = [];
 allData: any;
 entities: any;
 desiredWidth = 400; // Example width in pixels
 desiredHeight = 250;
sortField: string = '';

ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);
    this.getAllbuyDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/askhelp/add-ask`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/askhelp/detail-ask/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllbuyDisplay() {
    this.auth.getAllAsk().subscribe(
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
                // })

                console.log(this.entityShow.image);

            })
        })
}
}






