import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-q-service',
  
  templateUrl: './edit-q-service.component.html',
  styleUrl: './edit-q-service.component.scss'
})
export class EditQServiceComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editQurForm!: FormGroup;
  qurResult: any
  editsweet: any
  constructor(private toastr: ToastrService ,private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editQurForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: []


    });
  }

  ngOnInit(): void {
    this.auth.getQurId(this.idParam).subscribe(
      (res: any) => {
        this.editsweet = res.data;
        this.images = this.editsweet.images

        console.log(this.editsweet);

        this.editQurForm = this.fb.group({
          name: [this.editsweet.name],
          address: [this.editsweet.address],
          city: [this.editsweet.city],
          description: [this.editsweet.description],
          phone: [this.editsweet.phone],
          website: [this.editsweet.website],
        })
        console.log('Form controls:', this.editQurForm.controls);

     
        this.cdr.detectChanges();
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
  errorShow: any;
  errorMsg: any;
  submitted: boolean = false

  Submit(value: any) {
    this.submitted = true
    if (!this.editQurForm.valid) {
      this.toastr.error("Please fill all Mandatory field")
    }
    if (this.editQurForm.valid) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);


    
    this.auth.editQur(this.idParam, this.formData).subscribe(
      (result) => {
        this.qurResult = result;
        console.log(this.qurResult.message);

        this.toastr.success(this.qurResult.message);

        this.router.navigate(['/tribe/qServiceList']);
        this.editQurForm.reset();
        this.formData = new FormData();
        this.submitted = false;
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
    
        this.formData = new FormData();
        this.submitted = false;

  })}
}

}

