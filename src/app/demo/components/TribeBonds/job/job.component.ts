import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  constructor(private toastr :ToastrService,private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthenticationService) { }
  idParam = this.activatedRoute.snapshot.params['id'];

  entityShow: any = [];
  allData: any;
  entities: any;
  desiredWidth = 400; // Example width in pixels
  desiredHeight = 250;
  websiteUrl: string = "http://www.houstonpeace.org/";

  sortField: string = '';

  ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);
    this.getAllJobDisplay();

  }
  navigateToAdd() {
    this.router.navigateByUrl(`/tribe/job/add-job`);

  }
  navigateToDetail(id: number): void {
    this.router.navigateByUrl(`/tribe/job/detail-job/${id}`);
  }
  navigateToWebsite(website: any) {
    window.open(website, '_blank');
  }



  getAllJobDisplay() {
    this.auth.getAllJob().subscribe(
      (res: any) => {
        console.log(res.data);
        this.allData = res
        console.log(this.allData);

        this.allData.data.forEach((data: any) => {
          console.log(data);
          this.entities = data;
          this.entityShow.push({
            id: data._id,
            contactEmail: data.contactEmail,
            jobDetails: data.jobDetails,
            jobTitle: data.jobTitle,
            location: data.location
          })
          // })

          console.log(this.entityShow.image);

        })
      })
  }
  jobdelete:any;
  errorShow:any
  errorMsg:any
  deletecard(id: any) {
    this.auth.deletejob(id).subscribe(
      (res: any) => {
       this. jobdelete = res;
        console.log(res);
        this.toastr.success(this. jobdelete.message)
        this.ngOnInit()
        window.location.reload();
      },
      (err: any) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
   
      }
    )
  }
}






