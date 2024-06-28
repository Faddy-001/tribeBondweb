import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-detail-grocery',

  templateUrl: './detail-grocery.component.html',
  styleUrl: './detail-grocery.component.scss'
})
export class DetailGroceryComponent {
  images!: any[];
  rowCount = 3;
  idParam = this.activatedRoute.snapshot.params['id'];
  allData: any
  reviewRespShow: any = [];

  entities: any
  name: any;
  address: any;
  phone: any;
  description: any
  desiredWidth = 150; // Example width in pixels
  desiredHeight = 70;
  reviewText: string = ''; // Variable to hold the value of the textarea
  reviewResult: any;
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

  constructor(private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getbyIDGroceryDisplay();
  }

  getbyIDGroceryDisplay() {
    this.auth.getGroceryById(this.idParam).subscribe(
      (res: any) => {
        console.log(res.data);
        this.allData = res.data
        console.log(this.allData.address);


        this.allData = res;
        this.name = this.allData.data[0].name;
        this.address = this.allData.data[0].address;
        this.phone = this.allData.data[0].phone;
        this.images = this.allData.data[0].images,
        this.description = this.allData.data[0].description
        console.log(this.allData.data.reviews);


        this.reviewRespShow = []
        this.allData.data[0].reviews.forEach((reviewResp: any) => {
          this.reviewRespShow.push({
            id: reviewResp._id,
            reviewText: reviewResp.reviewText,
            firstname: reviewResp.user.firstName,

            lastname: reviewResp.user.lastName,

            image: reviewResp.user.profilePicture,


          })
          console.log(reviewResp);

        })
      })
  }
  navigateEdit(id: number): void {
    this.router.navigateByUrl(`/tribe/gList/edit-G/${this.idParam}`);
  }

  AddReview() {
    // Access the value of the textarea using this.reviewText
    console.log('Review Text:', this.reviewText);
    const dataValue = {
      "groceryId": this.idParam,
      "review": this.reviewText
    }
    console.log(dataValue);

    // You can then perform any logic you need with the review text
    this.auth.addGroceryReview(dataValue).subscribe(
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
