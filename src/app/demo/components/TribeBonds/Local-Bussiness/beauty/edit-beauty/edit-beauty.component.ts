import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-beauty',

  templateUrl: './edit-beauty.component.html',
  styleUrl: './edit-beauty.component.scss'
})
export class EditBeautyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editBeautyForm!: FormGroup;
  editBeauty: any
  beautyResult:any
  constructor(private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editBeautyForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: [],
      services:[],
      email:[]


    });
  }

  ngOnInit(): void {
    this.auth.getBeautyId(this.idParam).subscribe(
      (res: any) => {
        this.editBeauty = res.data;
        this.images = this.editBeauty.images

        console.log(this.editBeauty);

        this.editBeautyForm = this.fb.group({
          name: [this.editBeauty.name],
          address: [this.editBeauty.address],
          city: [this.editBeauty.city],
          description: [this.editBeauty.description],
          phone: [this.editBeauty.phone],
          website: [this.editBeauty.website],
          services:[this.editBeauty.services],
          email:[this.editBeauty.email]
        })
        console.log('Form controls:', this.editBeautyForm.controls);

     
        this.cdr.detectChanges();
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

  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);
    this.formData.append('services', value.services);
    this.formData.append('email', value.email);




    console.log(this.formData.append);


    
    this.auth.editBeauty(this.idParam, this.formData).subscribe(
      (result) => {
        this.beautyResult = result;
        console.log(this.beautyResult.message);

        // this.toastr.success(this.halalResult.message);

        this.router.navigate([`/tribe/beautyList`]);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas
    
    const formData = new FormData();

  })}
}



