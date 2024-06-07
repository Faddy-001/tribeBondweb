import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-edit-ahelp',
  templateUrl: './edit-ahelp.component.html',
  styleUrls: ['./edit-ahelp.component.scss']
})
export class EditAhelpComponent {
  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  idParam = this.activatedRoute.snapshot.params['id'];
  editAskForm!: FormGroup;
  autoResult: any;
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

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private auth: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editAskForm = this.fb.group({
      name: [],
      phone: [],
      address: [],
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
    this.auth.getBuyIdask(this.idParam).subscribe(
      (res: any) => {
        this.autoResult = res.data;
        this.images = this.autoResult.images;

        console.log(this.autoResult.category);
          // Trim and convert to lowercase for comparison
          const trimmedCategory = this.autoResult.category.trim().toLowerCase();
          const matchedCategory = this.Category.find(cat => cat.value.trim().toLowerCase() === trimmedCategory);
          const categoryValue = matchedCategory ? matchedCategory.value : null;
  
          console.log('Matched Category:', matchedCategory);
        
        this.editAskForm.patchValue({
          name: this.autoResult.name,
          city: this.autoResult.city,
          description: this.autoResult.description,
          price: this.autoResult.price,
          phone: this.autoResult.phone,
          address: this.autoResult.address,
          contactEmail: this.autoResult.contactEmail,
          location: this.autoResult.location,
          category: categoryValue  // directly set the category object
        });

        console.log('Form controls:', this.editAskForm.controls);
        this.cdr.detectChanges();
      }
    );
  }

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

  editresult: any;
  Submit(value: any) {
    this.formData.append('name', value.name);
    this.formData.append('address', value.address);
    this.formData.append('phone', value.phone);
    this.formData.append('city', value.city);
    this.formData.append('description', value.description);
    this.formData.append('contactEmail', value.contactEmail);
    this.formData.append('location', value.location);
    this.formData.append('category', value.category.value);

    this.auth.editAskFree(this.idParam, this.formData).subscribe(
      (result) => {
        this.editresult = result;
        this.router.navigate([`/tribe/askhelp`]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
