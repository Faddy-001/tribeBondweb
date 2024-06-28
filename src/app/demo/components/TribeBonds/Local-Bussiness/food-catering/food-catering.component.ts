import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-food-catering',

  templateUrl: './food-catering.component.html',
  styleUrl: './food-catering.component.scss'
})
export class FoodCateringComponent {
  websiteUrl: string = "http://www.houstonpeace.org/";
  sortField: string = '';
  entityShow: any = [];
  allData: any;
  entities: any;
  desiredWidth = 400; // Example width in pixels
  desiredHeight = 250;
  constructor(private toastr: ToastrService ,private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthenticationService) { }




  ngOnInit(): void {
    this.getAllFoodDisplay();

  }
  navigateToAdd() {
    this.router.navigateByUrl(`/tribe/foodList/add-F`);

  }
  navigateToDetail(id: number): void {
    this.router.navigateByUrl(`/tribe/foodList/detail-F/${id}`);
  }




  getAllFoodDisplay() {
    this.auth.getAllFood().subscribe(
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
            typeFood: data.foodType,
            image: data.images[0],
            email: data.email,
            website: data.website,
            createdFirstName: data.createdBy.firstName,
            createdLastName: data.createdBy.lastName,
            createdpic: data.createdBy.profilePicture,
          })

          console.log(this.entityShow.image);

        })
      })
  }
  deleteResp:any;
  deletecard(id: any) {
    this.auth.deleteFood(id).subscribe(
      (res: any) => {
        console.log(res);
        this.deleteResp= res;
        this.toastr.success(this.deleteResp.message);
        this.ngOnInit()
        window.location.reload();
      })
  }
}



