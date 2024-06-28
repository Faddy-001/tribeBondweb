import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss'
})
export class AddJobComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addjobForm: FormGroup;
  user: any
  cityData: any
  userDataString: any
  submitted: boolean = false
  constructor(private toastr: ToastrService, private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addjobForm = this.fb.group({
      location: [],
      jobTitle: ["", Validators.required],
      jobDetails: [],
      contactEmail: ["", Validators.required],
city:[]
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addjobForm.patchValue({

      city: [this.cityData],

    })
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'

      // Append the rest of the files to the 'images' array in FormData
      for (let i = 0; i < files.length; i++) {

        this.formData.append('images', files[i]);
      }
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Push the URL of the loaded image to the images array
          this.images.push(e.target.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  jobResult: any
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.submitted = true;
    if (!this.addjobForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.addjobForm.valid) {
      this.formData.append('location', value.location);
      this.formData.append('jobTitle', value.jobTitle);
      this.formData.append('jobDetails', value.jobDetails);
      this.formData.append('contactEmail', value.contactEmail);
      this.formData.append('city', value.city);





      console.log(this.formData.append);


      this.auth.addJob(this.formData).subscribe(
        (result: any) => {
          this.jobResult = result;
          console.log(this.jobResult.message);

          this.toastr.success(this.jobResult.message);

          this.router.navigate([`/tribe/job`]);
          this.addjobForm.reset();
          this.formData = new FormData();
          this.submitted = false;
        },
        (err: any) => {
          console.log(err);
          this.errorShow = err;
          this.errorMsg = this.errorShow.error.message;
          this.toastr.error(this.errorMsg);
          this.formData = new FormData();
          this.submitted = false;
        })


    }
  }
}


