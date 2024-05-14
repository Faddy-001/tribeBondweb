import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-event',
  
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.scss'
})
export class EditEventComponent {
  addEvent: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService,private toastr: ToastrService,public router: Router,) {
    this.addEvent = this.fb.group({
      name: [],
      date: [],
      time: [,],
      address: [],
      city: [],
      gender: [],
      phone: [],
      website: [],
      thumbnail: []

    });
  }
  ngOnInit() {

  }
  images: string[] = [];
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }}
    eventResult: any;
  errorShow:any;
  errorMsg:any;
  // form submit
  Submit(value: any) {
    console.log(value);

    const formData = new FormData();
    formData.append('name', value.name); 
    // for (let i = 0; i < this.images.length; i++) {
    //   formData.append('thumbnails[]', this.images[i]);
    // }
    formData.append('date', value.date);
    formData.append('time', value.time);
    formData.append('address', value.address);
    formData.append('phone', value.phone);
    formData.append('website', value.website);
    formData.append('city', value.city);

    for (let i = 0; i < this.images.length; i++) {
      formData.append('thumbnails', this.images[i]);
    }
    console.log(formData.append);
   
      
    this.auth.addEvent(formData).subscribe(
      (result) => {
        this.eventResult = result;
        console.log(this.eventResult.message);
        
        this.toastr.success(this.eventResult.message);

        this.router.navigate(['/tribe/event']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow;
        this.toastr.error(this.errorMsg);
      })
  }

}
