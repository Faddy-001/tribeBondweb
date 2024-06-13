import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-halal-meat',

  templateUrl: './add-halal-meat.component.html',
  styleUrl: './add-halal-meat.component.scss'
})
export class AddHalalMeatComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addHalal: FormGroup;
  halalResult: any

  constructor(private toastr: ToastrService ,private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addHalal = this.fb.group({
      name: [],
      address: [],
      phone: [],
      website: [],
      // thumbnail: [],
      images: [],
      description: [],
      city:[]



    });
  }
  user:any
  cityData:any
  userDataString:any
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
   this.user = JSON.parse(this.userDataString);
   this.cityData = this.user.city
   console.log(this.cityData);
   this.addHalal = this.fb.group({
     city:[this.cityData],
     name: [],
     address: [],
     phone: [],
     website: [],
     images: [],
     description:[],

   })
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      // this.formData.append('thumbnail', files[0]);
      // this.images.push();
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

  Submit(value: any) {



    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);


    this.auth.addMeat(this.formData).subscribe(
      (result: any) => {
        this.halalResult = result;
        console.log(this.halalResult.message);

        this.toastr.success(this.halalResult.message);

        this.router.navigate([`/tribe/halalMList`]);
      },
      (err: any) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // this.toastr.error(this.errorMsg);
      })
    const formData = new FormData();

  }
}



