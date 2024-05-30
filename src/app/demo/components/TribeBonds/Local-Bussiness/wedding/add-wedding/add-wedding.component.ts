import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-add-wedding',
  
  templateUrl: './add-wedding.component.html',
  styleUrl: './add-wedding.component.scss'
})
export class AddWeddingComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  addWeddingForm: FormGroup;
user:any
cityData:any
userDataString:any
  constructor(private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addWeddingForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      website: [],
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
    this.addWeddingForm = this.fb.group({
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
  Submit(value: any) {
    


    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);

    
    console.log(this.formData.append);


    this.auth.addParty(this.formData).subscribe(
      (result: any) => {
        this.partyResult = result;
        console.log(this.partyResult.message);

        // this.toastr.success(this.eventResult.message);

        this.router.navigate([`/tribe/weddingList`]);
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




