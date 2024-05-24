import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-food-catering',

  templateUrl: './food-catering.component.html',
  styleUrl: './food-catering.component.scss'
})
export class FoodCateringComponent {
  idParam = this.activatedRoute.snapshot.params['id'];
  websiteUrl: string = "http://www.houstonpeace.org/";
  sortField: string = '';
  entityShow: any = [];
  allData: any;
  entities: any;
  desiredWidth = 400; // Example width in pixels
  desiredHeight = 250;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthenticationService) { }



 
   ngOnInit(): void {
    console.log(this.idParam);
    this.getAllEductionDisplay();

  }
  navigateToAdd() {
    this.router.navigateByUrl(`/tribe/foodList/add-F`);

  }
  navigateToDetail(id: number): void {
    this.router.navigateByUrl(`/tribe/foodList/detail-F`);
  }

  

 
  getAllEductionDisplay() {
    this.auth.getAllEducation().subscribe(
      (res: any) => {
        console.log(res.data);
        this.allData = res
        console.log(this.allData.data[1].entities);

        this.allData.data[1].entities.forEach((data: any) => {
          console.log(data);
          this.entities = data;
          this.entityShow.push({
            id: data._id,
            name: data.name,
            date: data.date,
            address: data.address,
            phone: data.contactNumber,
            offers: data.offers,
            image: data.thumbnail,
            email: data.email,
            website: data.website
          })

          console.log(this.entityShow.image);

        })
      })
  }
}



