import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-add-party',

  templateUrl: './add-party.component.html',
  styleUrl: './add-party.component.scss'
})
export class AddPartyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addPartyForm: FormGroup;
user:any
cityData:any
userDataString:any
  constructor(private toastr: ToastrService ,private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addPartyForm = this.fb.group({
      name: ['',Validators.required],
      address:['',Validators.required],
      phone:['',Validators.required],
      website:['',Validators.required],
      images: [],
      description:[],
      city:[]



    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
     this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addPartyForm = this.fb.group({
      city:[this.cityData],
      name:['',Validators.required],
      address:['',Validators.required],
      phone:['',Validators.required],
      website:['',Validators.required],
      images: [],
      description:[],

    })
  }
 
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
     
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

  partyResult: any
  errorShow: any;
  errorMsg: any;

  submitted: boolean = false
  Submit(value: any) {
    

    this.submitted = true
    if (!this.addPartyForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.addPartyForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);

    // this.formData.append('contactNumber', value.contactNumber);
    this.formData.append('website', value.website);
    // this.formData.append('offers', value.offers);
    this.formData.append('description', value.description);

    
    console.log(this.formData.append);


    this.auth.addBanq(this.formData).subscribe(
      (result: any) => {
        this.partyResult = result;
        console.log(this.partyResult.message);

        this.toastr.success(this.partyResult.message);

        this.router.navigate([`/tribe/partyList`]);
        this.addPartyForm.reset();
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

