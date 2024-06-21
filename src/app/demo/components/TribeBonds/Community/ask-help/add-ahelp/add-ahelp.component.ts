import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-add-ahelp',
  templateUrl: './add-ahelp.component.html',
  styleUrl: './add-ahelp.component.scss'
})
export class AddAhelpComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addAskFreeForm: FormGroup;
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

  user: any
  cityData: any
  userDataString: any
  submitted: boolean = false;
  constructor(private toastr: ToastrService, private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addAskFreeForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      contactEmail: ["", Validators.required],
      images: [],
      description: [],
      city: [],
      location: ["", Validators.required],
      price: ["", Validators.required],
      category: ["", Validators.required],
      address: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addAskFreeForm = this.fb.group({
      city: [this.cityData],
      name: ['',Validators.required],
      phone: ['',Validators.required],
      contactEmail: ['',Validators.required],
      images: [],
      description: [],
      location: ['',Validators.required],
      price: ['',Validators.required],
      category: ['',Validators.required],
      address: ['',Validators.required]

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

  helpresult: any
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {

    this.submitted = true;
    if (!this.addAskFreeForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.addAskFreeForm.valid) {

      this.formData.append('name', value.name);
      this.formData.append('phone', value.phone);
      this.formData.append('contactEmail', value.contactEmail);
      this.formData.append('city', value.city);
      this.formData.append('address', value.address);
      this.formData.append('description', value.description);
      this.formData.append('location', value.location);
      // this.formData.append('price', value.price);
      this.formData.append('category', value.category.value);







      console.log(this.formData.append);


      this.auth.addAskFree(this.formData).subscribe(
        (result: any) => {
          this.helpresult = result;
          console.log(this.helpresult.message);

          this.toastr.success(this.helpresult.message);

          this.router.navigate([`/tribe/askhelp`]);
          this.addAskFreeForm.reset();
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

