import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-add-beauty',

  templateUrl: './add-beauty.component.html',
  styleUrl: './add-beauty.component.scss'
})
export class AddBeautyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addBeautyForm: FormGroup;
user:any
cityData:any
userDataString:any
  constructor(private toastr: ToastrService ,private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addBeautyForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      website: [],
      images: [],
      description:[],
      city:[],
      email:[],
      services:[],



    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
     this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addBeautyForm = this.fb.group({
      city:[this.cityData],
      name: [],
      address: [],
      phone: [],
      website: [],
      images: [],
      description:[],
      services:[],
      email:[]

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

  beautyResult: any
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    


    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('email', value.email);

    // this.formData.append('contactNumber', value.contactNumber);
    this.formData.append('website', value.website);
    // this.formData.append('offers', value.offers);
    this.formData.append('description', value.description);
    this.formData.append('services', value.services);

    
    console.log(this.formData.append);


    this.auth.addBeauty(this.formData).subscribe(
      (result: any) => {
        this.beautyResult = result;
        console.log(this.beautyResult.message);

        this.toastr.success(this.beautyResult.message);

        this.router.navigate([`/tribe/beautyList`]);
      },
      (err: any) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
      })
    const formData = new FormData();

  }
}





