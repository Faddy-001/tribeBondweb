import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-henna',

  templateUrl: './edit-henna.component.html',
  styleUrl: './edit-henna.component.scss'
})
export class EditHennaComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editHennaForm!: FormGroup;
  hennaResult: any
  editHennaItem: any
  constructor(private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editHennaForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: [],
      servingCities:[],
      email:[]


    });
  }

  ngOnInit(): void {
    this.auth.getHennaId(this.idParam).subscribe(
      (res: any) => {
        this.editHennaItem = res.data;
        this.images = this.editHennaItem.images

        console.log(this.editHennaItem);

        this.editHennaForm = this.fb.group({
          name: [this.editHennaItem.name],
          address: [this.editHennaItem.address],
          city: [this.editHennaItem.city],
          description: [this.editHennaItem.description],
          phone: [this.editHennaItem.phone],
          website: [this.editHennaItem.website],
          servingCities: [this.editHennaItem.servingCities],
          email: [this.editHennaItem.email],


          
        })
        console.log('Form controls:', this.editHennaForm.controls);

     
        this.cdr.detectChanges();
      })
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      this.formData.append('thumbnail', files[0]);
      this.images.push();
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


    console.log(this.formData.append);


    
    this.auth.editHenna(this.idParam, this.formData).subscribe(
      (result) => {
        this.hennaResult = result;
        console.log(this.hennaResult.message);

        // this.toastr.success(this.halalResult.message);

        this.router.navigate(['/tribe/hennaList']);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas
    
    const formData = new FormData();

  })}
}




