import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-home-blog',
  // standalone: true,
  // imports: [],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.scss'
})
export class HomeBlogComponent {
  reviewForm!: FormGroup;
  CommentForm!: FormGroup;
  isUploadButtonDisabled: boolean = false;
  areImagesDisabled: boolean = false;
  constructor(private auth: AuthenticationService, private fb: FormBuilder) {

    // this.addBlog = this.fb.group({
    //   statusText:[],
    //   // backgroundImage:[],
    //   // blogImages:[]
    // });
    // this.addBlog = this.fb.group({
    //   name: [],
    //   date: [],
    //   time: [,],
    //   address: [],
    //   city: [],
    //   gender: [],
    //   phone: [],
    //   website: [],
    //   thumbnail: [],
    //   description: []

    // });
  }
  ngOnInit() {
    this.reviewForm = this.fb.group({

      statusText: [''],
      backgroundImage: [[]],
      blogImages: [[]]
    });
    this.CommentForm = this.fb.group({
      blogId: [],
      text: []
    });
    this.getAllBlog();
  }
  getAllBlogData: any;
  blogdata: any = [];
  getAllBlog() {
    this.auth.getAllBlog().subscribe(
      (res: any) => {
        console.log(res);
        this.getAllBlogData = res
        this.blogdata= []
        this.getAllBlogData.data.forEach((data: any) => {
          this.blogdata.push({
            id: data._id,
            blogImage: data.blogImage,
            statusText: data.statusText,
            backgroundImage: data.backgroundImage,
            firstname:data.createdBy.firstName,
            lastname:data.createdBy.lastName,
            profilePic:data.createdBy.profilePicture

          })
        })

      })
  }
  onSubmitComment(value: any,id:number) {
console.log(value,id);
 
const dataValue = {
  "blogId": id,
  "text": value.text
}
  this.auth.addBlogComment(dataValue).subscribe(
    (result) => {
      this.ngOnInit()
    })
  const formData = new FormData();
  }

  imagestheme = [
    "assets/themeImages/theme1.jpg",
    "assets/themeImages/theme2.jpg",
    "assets/themeImages/theme3.jpg",
    "assets/themeImages/theme4.jpg",
    "assets/themeImages/theme5.jpg",
  ]

  passImage(imagePath: string): void {
    this.areImagesDisabled = true;
    this.isUploadButtonDisabled = false;
    // Load the image and convert it to Blob
    this.loadImageAsBlob(imagePath).then(blob => {
      // Create a File object from the Blob
      const file = new File([blob], this.extractFileName(imagePath), { type: blob.type });
      console.log(file);

      // const formData = new FormData();
      this.formData.append('backgroundImage', file);

      // Log the FormData entries for debugging
      this.formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });


    });
  }

  private loadImageAsBlob(imagePath: string): Promise<Blob> {
    return fetch(imagePath)
      .then(response => response.blob())
      .catch(error => {
        console.error('Error fetching the image:', error);
        return new Blob();
      });
  }

  private extractFileName(imagePath: string): string {
    return imagePath.split('/').pop() || 'image.jpg';
  }

  images: string[] = [];
  thumbnailBinary: string[] = [];
  private formData = new FormData();
  triggerFileInput(): void {
    this.isUploadButtonDisabled = true;
    this.areImagesDisabled = false;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.images = [];
    if (files && files.length > 0) {
      // Append the first file as 'thumbnail'
      this.formData.append('blogImages', files[0]);
      this.images.push();
      // Append the rest of the files to the 'images' array in FormData
      for (let i = 1; i < files.length; i++) {

        this.formData.append('blogImages', files[i]);
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
  blogText: any
  onSubmit(value: any) {
    console.log(this.formData);
    this.formData.append('statusText', value.statusText)
    this.auth.addBlog(this.formData).subscribe(
      (result) => {
        this.ngOnInit()
      })
    const formData = new FormData();

  }
}
