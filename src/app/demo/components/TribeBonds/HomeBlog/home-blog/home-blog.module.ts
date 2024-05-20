import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBlogRoutingModule } from './home-blog-routing.module';
import { HomeBlogComponent } from './home-blog.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeBlogComponent,],
  imports: [
    CommonModule,
    HomeBlogRoutingModule,
    AutoCompleteModule,
		InputMaskModule,
		// InputTextModule,
		FileUploadModule,
    BadgeModule,
    InputTextareaModule,
		InputTextModule,
		FileUploadModule,
		// FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeBlogModule { }
