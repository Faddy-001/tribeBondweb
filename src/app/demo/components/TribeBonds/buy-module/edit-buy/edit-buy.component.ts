import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-buy',

  templateUrl: './edit-buy.component.html',
  styleUrl: './edit-buy.component.scss'
})
export class EditBuyComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editBuyForm!: FormGroup;
  autoResult: any
  Category = [
    { label: 'Kids', value: 'Kids' },
    { label: 'Beauty', value: 'Beauty' },
    { label: 'Business', value: 'Business' },
    { label: 'Automobile', value: 'Automobile' },
    { label: 'Clothes', value: 'Clothes' },
    { label: 'Electronic', value: 'Electronic' },
    { label: 'Phone', value: 'Phone' },
    { label: 'Furniture', value: 'Furniture' },
    { label: 'Household', value: 'Household' },
    { label: 'Music', value: 'Music' },
    { label: 'Sports', value: 'Sports' },
    { label: 'Tickets', value: 'Tickets' },
    { label: 'General', value: 'General' },
    { label: 'Free', value: 'Free' },
  ];

  constructor(private router: Router, private cdr: ChangeDetectorRef, private auth: AuthenticationService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,) {
    this.editBuyForm = this.fb.group({
      name: [],
      phone: [],
      city: [],
      website: [],
      images: [],
      description: [],
      contactEmail: [],
      location: [],
      price: [],
      category: []
    });
  }

  ngOnInit(): void {
    this.auth.getBuyId(this.idParam).subscribe(
      (res: any) => {
        this.autoResult = res.data;
        this.images = this.autoResult.images

        console.log(this.autoResult.category);

        this.editBuyForm = this.fb.group({
          name: [this.autoResult.name],
          city: [this.autoResult.city],
          description: [this.autoResult.description],
          price: [this.autoResult.price],
          contactEmail: [this.autoResult.contactEmail],
          location: [this.autoResult.location],
          category: [this.autoResult.category]
        })
        console.log('Form controls:', this.editBuyForm.controls);


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
  editresult: any
  Submit(value: any) {

    this.formData.append('name', value.name);
    this.formData.append('price', value.price);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('description', value.description);
    this.formData.append('contactEmail', value.contactEmail);
    this.formData.append('location', value.location);
    this.formData.append('category', value.category.value);
    console.log(this.formData.append);

    this.auth.editBuy(this.idParam, this.formData).subscribe(
      (result) => {
        this.editresult = result;
        console.log(this.editresult.message);


        this.router.navigate([`/tribe/BuyList`]);
      },
      (err) => {
        console.log(err);
        // this.errorShow = err;
        // this.errorMsg = this.errorShow;
        // // this.toas

        const formData = new FormData();

      })
  }
}



