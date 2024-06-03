import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-mosque',
  templateUrl: './add-mosque.component.html',
  styleUrls: ['./add-mosque.component.scss']
})
export class AddMosqueComponent implements OnInit {
  selectedState: any = null;
  calendarVal: Date | null = null;
  UserPreviousImage: any;
  selectedFile: any = [];
  uploadedFiles: any[] = [];
  user: any;
  cityData: any;
  userDataString: any;

  addEvent: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth: AuthenticationService, 
    private toastr: ToastrService, 
    public router: Router
  ) {
    this.addEvent = this.fb.group({
      name: ['', Validators.required],
      khutbah: this.fb.array([]), // Initialize as a FormArray
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      website: [''],
      description: [''],
      images: []
    });
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'));
    this.userDataString = localStorage.getItem('user');
    this.user = JSON.parse(this.userDataString);
    this.cityData = this.user.city;
    console.log(this.cityData);

    this.addEvent.patchValue({
      city: this.cityData
    });

    // this.initKhutbahTimes(['12:00', '14:20', '15:30']); // Initialize with default times
  }

  get khutbahTimes(): FormArray {
    return this.addEvent.get('khutbah') as FormArray;
  }

  // initKhutbahTimes(times: string[]): void {
  //   times.forEach(time => this.khutbahTimes.push(this.fb.group({
  //     time: [time, Validators.required]
  //   })));
  // }

  addKhutbahTime() {
    this.khutbahTimes.push(this.fb.group({
      time: ['', Validators.required]
    }));
  }

  removeKhutbahTime(index: number) {
    this.khutbahTimes.removeAt(index);
  }

  images: string[] = [];
  private formData = new FormData();

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.formData.append('images', files[i]);
      }
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  eventResult: any;
  errorShow: any;
  errorMsg: any;

  // Form submit
  Submit(value: any) {
    console.log(this.images);

    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('website', value.website);
    this.formData.append('city', value.city);
    this.formData.append('description', value.description);

    // Append khutbah times
    value.khutbah.forEach((khutbah: any) => {
      this.formData.append('khutbah', khutbah.time);
    });

    this.auth.addMosque(this.formData).subscribe(
      (result) => {
        this.eventResult = result;
        console.log(this.eventResult.message);
        this.toastr.success(this.eventResult.message);
        this.router.navigate(['/tribe/mosqueList']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow;
        this.toastr.error(this.errorMsg);
      }
    );
  }
}
