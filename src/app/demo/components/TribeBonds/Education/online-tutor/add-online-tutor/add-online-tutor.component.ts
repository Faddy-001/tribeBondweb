import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-add-online-tutor',

  templateUrl: './add-online-tutor.component.html',
  styleUrl: './add-online-tutor.component.scss'
})
export class AddOnlineTutorComponent {
  selectedState: any = null;
  calendarVal: Date | null = null;
  UserPreviousImage: any;
  selectedFile: any = [];
  uploadedFiles: any[] = [];

  idParam = this.activatedRoute.snapshot.params['id'];
  addEducationOnline: FormGroup;

  constructor(private router: Router, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.addEducationOnline = this.fb.group({
      name: [],
      address: [],
      contactNumber: [],
      email: [,],
      website: [],
      offers: [],
      additionalInfo: [],
      thumbnail: [],
      images: [],



    });
  }

  ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);

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
      this.formData.append('thumbnail', files[0]);
      this.images.push();
      // Append the rest of the files to the 'images' array in FormData
      for (let i = 1; i < files.length; i++) {

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

  educationResult: any
  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('email', value.email);
    this.formData.append('typeId', this.idParam);

    this.formData.append('contactNumber', value.contactNumber);
    this.formData.append('website', value.website);
    this.formData.append('offers', value.offers);

    console.log(this.formData.append);


    this.auth.addEdEntity(this.formData).subscribe(
      (result: any) => {
        this.educationResult = result;
        console.log(this.educationResult.message);

        // this.toastr.success(this.eventResult.message);

        this.router.navigate([`/tribe/onlinetutor/${this.idParam}`]);
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
