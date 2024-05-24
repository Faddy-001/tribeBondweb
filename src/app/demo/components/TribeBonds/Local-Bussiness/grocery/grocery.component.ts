import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-grocery',

  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthenticationService) { }
  idParam = this.activatedRoute.snapshot.params['id'];
  @Input() starRating: any;
  entityShow: any = [];
  allData: any;
  entities: any;
  desiredWidth = 400; // Example width in pixels
  desiredHeight = 250;

  websiteUrl: string = "http://www.houstonpeace.org/";

  sortField: string = '';

  ngOnInit(): void {
    console.log(this.idParam);
    this.getAllEductionDisplay();

  }
  navigateToAdd() {
    this.router.navigateByUrl(`/tribe/gList/add-G`);

  }
  navigateToDetail(id: number): void {
    this.router.navigateByUrl(`/tribe/gList/detail-G`);
  }

  routing() {
    console.log('dfsf');

    this.router.navigateByUrl('add-events')
  }
  get filledStars(): number[] {
    const roundedRating = Math.round(this.starRating * 2) / 2; // Round rating to nearest half
    return Array.from({ length: 5 }, (_, index) => index + 0.5 <= roundedRating ? index + 0.5 : 0);
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
          // })

          console.log(this.entityShow.image);

        })
      })
  }
}



