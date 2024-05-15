import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
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
      thumbnail: [],
      description: []

    });
  }
  ngOnInit() {

  }

  images: string[] = [];
  thumbnailBinary:string[]=[];
  private formData = new FormData();
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      this.formData.append('thumbnail', files[0]);
      this.images.push();
      // Append the rest of the files to the 'images' array in FormData
      for (let i = 1; i < files.length; i++) {
        
        this.formData.append('images', files[i]);
      }
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e:any) => {
          // Push the URL of the loaded image to the images array
          this.images.push(e.target.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }

  //  const input = event.target as HTMLInputElement;
  //   const files = input.files;
  //    console.log(files);
  //   if (files) {
  //     for (let i = 0; i < files.length; i++) {
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         this.images.push(e.target.result);
  //   const formData = new FormData();

  //         formData.append('images[]', e.target.result);
  //       };
  //       reader.readAsDataURL(files[i]);
  //     }
  //   }
  }

  eventResult: any;
  errorShow: any;
  errorMsg: any;
  // form submit
  Submit(value: any) {
    console.log(this.images);

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
    for (let i = 0; i < this.images.length; i++) {
      this.formData.append('thumbnails', this.images[i]);
    }
    console.log(this.formData.append);


    this.auth.addEvent(this.formData).subscribe(
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
    const formData = new FormData();

  }
}