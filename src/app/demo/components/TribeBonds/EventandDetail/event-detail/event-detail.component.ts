import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
    constructor( private router:Router, private productService: ProductService, private photoService: PhotoService, private auth: AuthenticationService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });

        this.photoService.getImages().then(images => {
            this.images = images;
        });
        this.getAllEventsDisplay();

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
    editLead(){
        this.router.navigateByUrl('/tribe/event/event-edit/6643a7a09c2fafe214340334');
    }
}
