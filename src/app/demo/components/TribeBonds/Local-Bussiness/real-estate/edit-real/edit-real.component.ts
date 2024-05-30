import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-real',

  templateUrl: './edit-real.component.html',
  styleUrl: './edit-real.component.scss'
})
export class EditRealComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editRealForm!: FormGroup;
  rentalResult: any
  editReal: any
  constructor(private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editRealForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      email: [],
      images: [],
      description: [],
      price:[]


    });
  }

  ngOnInit(): void {
    this.auth.getRealId(this.idParam).subscribe(
      (res: any) => {
        this.editReal = res.data;
        this.images = this.editReal.images

        console.log(this.editReal);

        this.editRealForm = this.fb.group({
          name: [this.editReal.name],
          address: [this.editReal.address],
          city: [this.editReal.city],
          description: [this.editReal.description],
          phone: [this.editReal.phone],
          email: [this.editReal.email],
          price:[this.editReal.price]
        })
        console.log('Form controls:', this.editRealForm.controls);

     
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
    this.formData.append('email', value.email);
    this.formData.append('price', value.price);
    this.formData.append('description', value.description);



    console.log(this.formData.append);


    
    this.auth.editReal(this.idParam, this.formData).subscribe(
      (result) => {
        this.rentalResult = result;
        console.log(this.rentalResult.message);

        // this.toastr.success(this.halalResult.message);

        this.router.navigate(['/tribe/realEstateList']);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas
    
    const formData = new FormData();

  })}
}




