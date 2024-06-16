import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { PhotoService } from 'src/app/demo/service/photo.service';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
    selector: 'app-event-detail',

    templateUrl: './event-detail.component.html',
    styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent {
    images!: any[];
    products!: Product[];
    idParam = this.activatedRoute.snapshot.params['id'];
    
    eventDate:any;
    desiredWidth = 150; // Example width in pixels
    desiredHeight = 70;
    name:any;
    address:any;
    phone:any;
    description:any
    newPPT: any = [];
    allData: any;
    reviewRespShow: any = [];
  

    rowCount = 3;
    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    constructor(private activatedRoute: ActivatedRoute, private router:Router, private productService: ProductService, private photoService: PhotoService, private auth: AuthenticationService) { }
    ngOnInit() {
        console.log(this.idParam);
        
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });

        // this.photoService.getImages().then(images => {
        //     this.images = images;
        // });
        console.log("Sdsdsd");
        
        this.auth.getEventById(this.idParam).subscribe(
            (res: any) => {
                this.eventDate = res;
                console.log( this.eventDate);

                this.name =   this.eventDate.data[0].name ;
                console.log( this.name);
                
                this.address = this.eventDate.data[0].address;
                this.phone = this.eventDate.data[0].phone;
                this.description = this.eventDate.data[0].description;
                this.images = this.eventDate.data[0].images
                this.reviewRespShow = []
                this.eventDate.data[0].reviews.forEach((reviewResp: any) => {
                    console.log(reviewResp);
                    
                    this.reviewRespShow.push({
                        id: reviewResp._id,
                        reviewText: reviewResp.reviewText                        ,
                        firstname: reviewResp.user.firstName,
                       
                        lastname: reviewResp.user.lastName,
                        
                        image: reviewResp.user.profilePicture,
                        
                        
                    })
                    console.log(reviewResp);
    
                })
            })

    }

  
    getAllEventsDisplay() {
        this.auth.getAllEvent().subscribe(
            (res: any) => {
                console.log(res.data.thumbnail);
                this.allData = res
                this.allData.data.forEach((data: any) => {
                    console.log(data.images
                    );

                    this.newPPT.push({
                        id: data._id,
                        name: data.name,
                        date: data.date,
                        address: data.address,
                        phone: data.phone,
                        time: data.time,
                        image: data.thumbnail,
                        multipleImage:data.images


                    })
                    console.log(this.newPPT.image);

                })
            })
    }
    reviewText: string = ''; // Variable to hold the value of the textarea
    reviewResult:any;
    AddReview() {
        
        const dataValue = {
            "eventId": this.idParam,
            "review": this.reviewText
        }
        // Access the value of the textarea using this.reviewText
        console.log('Review Text:', this.reviewText);
        // You can then perform any logic you need with the review text
        this.auth.addEventReview(dataValue).subscribe(
            (result) => {
              this.reviewResult = result;
              console.log(this.reviewResult.message);
              this.reviewText = ""
              this.ngOnInit()
            //   this.toastr.success(this.eventResult.message);
      
            //   this.router.navigate(['/tribe/event']);
            },)
    }
}
