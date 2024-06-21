import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-volunter',
  templateUrl: './add-volunter.component.html',
  styleUrl: './add-volunter.component.scss'
})
export class AddVolunterComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addVolunteerForm: FormGroup;
  Category = [
    { label: 'Kids', value: 'Kids' },
    { label: 'Beauty', value: 'Beauty' },
    { label: 'Business', value: 'Business' },
    { label: 'Automobile', value: 'Automobile' },
    { label: 'Clothes', value: 'Clothes' },
    { label: 'Electronic', value: 'Electronic' },
    { label: 'Phone', value: 'Phone' },
    { label: 'Furniture', value: 'Furniture' },
    { label: 'Household', value: 'Household' },
    { label: 'Music', value: 'Music' },
    { label: 'Sports', value: 'Sports' },
    { label: 'Tickets', value: 'Tickets' },
    { label: 'General', value: 'General' },
    { label: 'Free', value: 'Free' },
  ];
  submitted:boolean=false
user:any
cityData:any
userDataString:any
  constructor(private toastr: ToastrService ,private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addVolunteerForm = this.fb.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required],
      images: [],
      description:[],
      city:[],
      time:['',Validators.required],
      date:['',Validators.required],
      website:['',Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
     this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addVolunteerForm.patchValue({
      city:[this.cityData],
  

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

  volunterResult: any
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    // console.log(value.category.value);
    this.submitted = true;
    if (!this.addVolunteerForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.addVolunteerForm.valid) {



    this.formData.append('name', value.name);
    this.formData.append('phone', value.phone);
    // this.formData.append('contactEmail', value.contactEmail);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);
    this.formData.append('time', value.time);
    this.formData.append('date', value.date);
    this.formData.append('address', value.address);

    this.auth.addVolunteer(this.formData).subscribe(
      (result: any) => {
        this.volunterResult = result;
        console.log(this.volunterResult.message);

        this.toastr.success(this.volunterResult.message);

        this.router.navigate([`/tribe/volunter`]);
        this.addVolunteerForm.reset();
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





