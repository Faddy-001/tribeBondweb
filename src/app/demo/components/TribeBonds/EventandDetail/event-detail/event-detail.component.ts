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
    id = this.activatedRoute.snapshot.params['id'];
    eventDate:any;
    desiredWidth = 150; // Example width in pixels
    desiredHeight = 70;
    name:any;
    address:any;
    phone:any;
    description:any
    comments = [
        {
            image: 'assets/demo/images/avatar/circle/avatar-m-3.png',
            name: "Ayesha",
            date: "09/May/2024",
            description: "fbsdnfsmnbssfbfsfbdfbdfbbff s"
        },
        {
            image: 'assets/demo/images/avatar/circle/avatar-m-3.png',
            name: "Fardeen",
            date: "09/May/2024",
            description: "fbsdnfsmnbssfbfsfbdfbdfbbff s"
        },
        {
            image: 'assets/demo/images/avatar/circle/avatar-m-3.png',
            name: "Mahira",
            date: "09/May/2024",
            description: "fbsdnfsmnbssfbfsfbdfbdfbbff s"
        },
        {
            image: 'assets/demo/images/avatar/circle/avatar-m-3.png',
            name: "Shifa",
            date: "09/May/2024",
            description: "fbsdnfsmnbssfbfsfbdfbdfbbff s"
        }
    ];

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
        console.log(this.id);
        
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });

        // this.photoService.getImages().then(images => {
        //     this.images = images;
        // });
        console.log("Sdsdsd");
        
        this.auth.getEventById(this.id).subscribe(
            (res: any) => {
                this.eventDate = res;
                this.name =   this.eventDate.data.name ;
                this.address = this.eventDate.data.address;
                this.phone = this.eventDate.data.phone;
                this.description = this.eventDate.data.description;
                console.log(this.eventDate.data.thumbnail);
                this.images = this.eventDate.data.images
                
            })

    }

    newPPT: any = [];
    allData: any;
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
        // Access the value of the textarea using this.reviewText
        console.log('Review Text:', this.reviewText);
        // You can then perform any logic you need with the review text
        this.auth.addEventReview(this.reviewText).subscribe(
            (result) => {
              this.reviewResult = result;
              console.log(this.reviewResult.message);
      
            //   this.toastr.success(this.eventResult.message);
      
            //   this.router.navigate(['/tribe/event']);
            },)
    }
}
