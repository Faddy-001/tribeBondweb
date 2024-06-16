import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrl: './add-events.component.scss'
})
export class AddEventsComponent {
  selectedState: any = null;
  calendarVal: Date | null = null;
  UserPreviousImage: any;
  selectedFile: any = [];
  uploadedFiles: any[] = [];
  user: any
  cityData: any
  userDataString: any
  submitted: boolean = false;
  @ViewChild('fileUpload', { static: true }) fileUpload!: ElementRef<HTMLInputElement>;
  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
  ];
  addEvent: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private toastr: ToastrService, public router: Router,) {
    this.addEvent = this.fb.group({
      name: [],
      date: [],
      time: [,],
      address: [],
      city: [],
      gender: [],
      phone: [],
      website: [],
      description: []

    });
  }
  ngOnInit() {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city
    console.log(this.cityData);
    this.addEvent = this.fb.group({
      city: [this.cityData],
      name: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      website: ["", Validators.required],
      images: ["", Validators.required],
      description: [],
      date: ["", Validators.required],
      time: ["", Validators.required]
    })
  }

  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
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

  eventResult: any;
  errorShow: any;
  errorMsg: any;
  // form submit
  Submit(value: any) {
    console.log(value);
    this.submitted = true
    if(!this.addEvent.valid){
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.addEvent.valid) {
      this.formData.append('name', value.name);
      // for (let i = 0; i < this.images.length; i++) {
      //   this.formData.append('thumbnails[]', this.images[i]);
      // }
      this.formData.append('date', value.date);
      this.formData.append('time', value.time);
      this.formData.append('address', value.address);
      this.formData.append('phone', value.phone);
      this.formData.append('website', value.website);
      this.formData.append('city', value.city);
      this.formData.append('description', value.description);
      // this.formData.append('images', this.images);
      // for (let i = 0; i < this.images.length; i++) {
      //   this.formData.append('thumbnails', this.images[i]);
      // }
      console.log(this.formData.append);


      this.auth.addEvent(this.formData).subscribe(
        (result) => {
          this.eventResult = result;
          console.log(this.eventResult.message);

          this.toastr.success(this.eventResult.message);

          this.router.navigate(['/tribe/event']);
        },
        (err) => {
          console.log(err.error.message);
          this.errorShow = err;
          this.errorMsg = this.errorShow.error.message;
          this.toastr.error(this.errorMsg);
        })
      const formData = new FormData();

    }
  }
}