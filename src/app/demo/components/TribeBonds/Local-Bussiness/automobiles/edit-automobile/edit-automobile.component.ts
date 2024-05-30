import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
@Component({
  selector: 'app-edit-automobile',
 
  templateUrl: './edit-automobile.component.html',
  styleUrl: './edit-automobile.component.scss'
})
export class EditAutomobileComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editAutomobileForm!: FormGroup;
  autoResult:any
  constructor(private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editAutomobileForm = this.fb.group({
      name: [],
      address: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: [],


    });
  }

  ngOnInit(): void {
    this.auth.getAutomobileById(this.idParam).subscribe(
      (res: any) => {
        this.autoResult = res.data;
        this.images = this.autoResult.images

        console.log(this.autoResult);

        this.editAutomobileForm = this.fb.group({
          name: [this.autoResult.name],
          address: [this.autoResult.address],
          city: [this.autoResult.city],
          description: [this.autoResult.description],
          phone: [this.autoResult.phone],
          website: [this.autoResult.website],
    
        })
        console.log('Form controls:', this.editAutomobileForm.controls);

     
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
editresult:any
  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);
   




    console.log(this.formData.append);


    
    this.auth.editAutomobile(this.idParam, this.formData).subscribe(
      (result) => {
        this.editresult = result;
        console.log(this.editresult.message);

        // this.toastr.success(this.halalResult.message);

        this.router.navigate([`/tribe/automobileList`]);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas
    
    const formData = new FormData();

  })}
}



