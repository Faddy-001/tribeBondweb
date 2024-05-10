import { Component } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { PhotoService } from 'src/app/demo/service/photo.service';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-tutor-detail',
  
  templateUrl: './tutor-detail.component.html',
  styleUrl: './tutor-detail.component.scss'
})
export class TutorDetailComponent {
  images!: any[];
  products!: Product[];
   comments= [
     {
      image:'assets/demo/images/avatar/circle/avatar-m-3.png',
      name:"Ayesha",
      date:"09/May/2024",
      description:"fbsdnfsmnbssfbfsfbdfbdfbbff s"
     },
     {
      image:'assets/demo/images/avatar/circle/avatar-m-3.png',
      name:"Fardeen",
      date:"09/May/2024",
      description:"fbsdnfsmnbssfbfsfbdfbdfbbff s"
     },
     {
      image:'assets/demo/images/avatar/circle/avatar-m-3.png',
      name:"Mahira",
      date:"09/May/2024",
      description:"fbsdnfsmnbssfbfsfbdfbdfbbff s"
     },
     {
      image:'assets/demo/images/avatar/circle/avatar-m-3.png',
      name:"Shifa",
      date:"09/May/2024",
      description:"fbsdnfsmnbssfbfsfbdfbdfbbff s"
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
constructor(private productService: ProductService, private photoService: PhotoService) { }

ngOnInit() {
    this.productService.getProductsSmall().then(products => {
        this.products = products;
    });

    this.photoService.getImages().then(images => {
        this.images = images;
    });
}
}
