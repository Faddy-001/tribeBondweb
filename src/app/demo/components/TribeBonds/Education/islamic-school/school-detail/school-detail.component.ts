import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { PhotoService } from 'src/app/demo/service/photo.service';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
    selector: 'app-school-detail',

    templateUrl: './school-detail.component.html',
    styleUrl: './school-detail.component.scss'
})
export class SchoolDetailComponent {
    images!: any[];
    products!: Product[];
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
    idParam = this.activatedRoute.snapshot.params['id'];

    constructor(private productService: ProductService, private photoService: PhotoService, private auth: AuthenticationService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // this.productService.getProductsSmall().then(products => {
        //     this.products = products;
        // });
        // console.log(this.idParam);

        // this.photoService.getImages().then(images => {
        //     this.images = images;
        // });
        this.getbyIDEductionDisplay();
    }
    allData: any
    reviewRespShow: any = [];

    entities: any
    name: any;
    address: any;
    phone: any;
    description: any
    desiredWidth = 150; // Example width in pixels
    desiredHeight = 70;
    getbyIDEductionDisplay() {
        this.auth.getEductionEntitiyById(this.idParam).subscribe(
            (res: any) => {
                console.log(res.data);
                this.allData = res.data
                console.log(this.allData.address);


                this.allData = res;
                this.name = this.allData.data.name;
                this.address = this.allData.data.address;
                this.phone = this.allData.data.contactNumber;
                this.images = this.allData.data.images
                console.log(this.allData.data.reviews);


                this.reviewRespShow = []
                this.allData.data.reviews.forEach((reviewResp: any) => {
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

    reviewText: string = ''; // Variable to hold the value of the textarea
    reviewResult: any;
    AddReview() {
        // Access the value of the textarea using this.reviewText
        console.log('Review Text:', this.reviewText);
        const dataValue = {
            "eduId": this.idParam,
            "review": this.reviewText
        }
        console.log(dataValue);

        // You can then perform any logic you need with the review text
        this.auth.addEducationReview(dataValue).subscribe(
            (result) => {
                this.reviewResult = result;
                console.log(this.reviewResult.success);
                if (this.reviewResult.success == true) {
                    console.log('f');
                    
                    this.reviewText = ""
                    this.ngOnInit()
                }
                //   this.toastr.success(this.eventResult.message);

                //   this.router.navigate(['/tribe/event']);
            },)
    }

}
