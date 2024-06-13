import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-sweet',

  templateUrl: './edit-sweet.component.html',
  styleUrl: './edit-sweet.component.scss'
})
export class EditSweetComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editSweetForm!: FormGroup;
  sweetResult: any
  editsweet: any
  constructor(private toastr: ToastrService, private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editSweetForm = this.fb.group({
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
    this.auth.getSweetById(this.idParam).subscribe(
      (res: any) => {
        this.editsweet = res.data;
        this.images = this.editsweet.images

        console.log(this.editsweet);

        this.editSweetForm = this.fb.group({
          name: [this.editsweet.name],
          address: [this.editsweet.address],
          city: [this.editsweet.city],
          description: [this.editsweet.description],
          phone: [this.editsweet.phone],
          website: [this.editsweet.website],
        })
        console.log('Form controls:', this.editSweetForm.controls);


        this.cdr.detectChanges();
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
  errorShow: any;
  errorMsg: any;
  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);


    console.log(this.formData.append);



    this.auth.editSweet(this.idParam, this.formData).subscribe(
      (result) => {
        this.sweetResult = result;
        console.log(this.sweetResult.message);

        this.toastr.success(this.sweetResult.message);

        this.router.navigate(['/tribe/sweetList']);
      },
      (err) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
        const formData = new FormData();

      })
  }
}



