import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-buy-module',
  // standalone: true,
  // imports: [],
  templateUrl: './buy-module.component.html',
  styleUrl: './buy-module.component.scss'
})
export class BuyModuleComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];

 entityShow: any = [];
 allData: any;
 entities: any;
 desiredWidth = 400; // Example width in pixels
 desiredHeight = 250;
sortField: string = '';
page = 1;
loadingData = false;
  pageSize = 10; 
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      // Fetch more data when scrolled to the bottom
      this.page++;
      this.getAllbuyDisplay();
    }
  }

ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);
    this.getAllbuyDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/BuyList/add-buy`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/BuyList/detail-buy/${id}`);
}
navigateToWebsite(website:any){
  window.open(website, '_blank');
}



getAllbuyDisplay() {
  this.loadingData = true; 
    this.auth.getAllBuy().subscribe(
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
                    })
                // })

                console.log(this.entityShow.image);

            },
            (error: any) => {
              console.error(error);
              this.loadingData = false; // Ensure loadingData is set to false even in case of errors
          }
          
          )
           
        })
}
}






