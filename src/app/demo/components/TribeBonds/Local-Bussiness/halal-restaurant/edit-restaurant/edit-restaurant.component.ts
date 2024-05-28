import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-restaurant',

  templateUrl: './edit-restaurant.component.html',
  styleUrl: './edit-restaurant.component.scss'
})
export class EditRestaurantComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editRestaurant: FormGroup;
  restaurantResult: any

  constructor(private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editRestaurant = this.fb.group({
      name: [],
      address: [],
      phone: [],
      website: [],
      thumbnail: [],
      images: [],
      city:[],
      description: []


    });
  }
  editResta: any

  ngOnInit(): void {
    this.auth.getReataurantById(this.idParam).subscribe(
      (res: any) => {
        this.editResta = res.data;
        this.images = this.editResta.images

console.log(this.editResta);

        this.editRestaurant = this.fb.group({
          name: [this.editResta.name],
         
          address: [this.editResta.address],
          city: [this.editResta.city],
          description: [this.editResta.description],
          phone: [this.editResta.phone],
          website: [this.editResta.website],
          thumbnail: [],
        })
       

        // Set the parsed date object to the time FormControl
        
        this.editRestaurant.get('description')?.setValue('bdnsbdfmsb');
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

  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('website', value.website);
    this.formData.append('description', value.description);

    console.log(this.formData.append);

    this.auth.editRestaurant(this.idParam, this.formData).subscribe(
      (result) => {
        this.restaurantResult = result;
        console.log(this.restaurantResult.message);

        // this.toastr.success(this.halalResult.message);

        this.router.navigate(['/tribe/gList']);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas
    
    const formData = new FormData();

  }
  )}

}
