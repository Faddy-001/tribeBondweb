import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { ChangeDetectorRef } from '@angular/core';
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
  replyCommentForm!: FormGroup;
  isUploadButtonDisabled: boolean = false;
  areImagesDisabled: boolean = false;
  constructor(private auth: AuthenticationService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
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
    this.replyCommentForm = this.fb.group({
      commentId: [],
      text: []
    });

    this.getAllBlog();
  }
  getAllBlogData: any;
  blogdata: any = [];
  commentData: any[] = [];
  replyData: any[] = [];

  // commentLength: any = []
  getAllBlog() {
    this.auth.getAllBlog().subscribe(
      (res: any) => {
        console.log(res);
        this.getAllBlogData = res
        this.blogdata = []
        
        this.getAllBlogData.data.forEach((data: any) => {
          console.log(data.comments.length);
          console.log(data.comments.length);
          // this.commentLength = data.comments.length

          // this.blogdata = []
         this.commentData = []
         this.replyData = []
          // this.commentData = data;
          this.blogdata.push({
            id: data._id,
            blogImage: data.blogImage,
            statusText: data.statusText,
            backgroundImage: data.backgroundImage,
            firstname: data.createdBy.firstName,
            lastname: data.createdBy.lastName,
            profilePic: data.createdBy.profilePicture,
            commentLength: data.comments.length,
            comment:data.comments
            
          })
          console.log(this.blogdata);
          console.log(data.comments);
          
          data.comments.forEach((dataComment: any) => {
            this.commentData.push({
              commentText: dataComment.text,
              createdAt: dataComment.createdAt,
              isReply: dataComment.isReply,
              replyIds: dataComment.replyIds,
              status: dataComment.status,
              updatedAt: dataComment.updatedAt,
              userId: dataComment.userId,
              commentId: dataComment._id,
              commentFirst: dataComment.userId.firstName,
              commentLast: dataComment.userId.lastName,
              commentProfile: dataComment.userId.profilePicture,

            });
            dataComment.replyIds.forEach((datareply: any) => {
              console.log(dataComment.replyIds);
              this.replyData.push({
                replytText: datareply.text,
                // createdAt: datareply.createdAt,
                isReply: datareply.isReply,
                replyIds: datareply._id,
                status: datareply.status,
                updatedAt: datareply.updatedAt,
                userId: datareply.userId,
              
                replyFirst: datareply.userId.firstName,
                replyLast: datareply.userId.lastName,
                replyProfile: datareply.userId.profilePicture,
  
  
              });
  
            })
          })

        })

      })
  }
  getRepliesForComment(commentId: string): any[] {
    // this.reply.commentId
    return this.replyData.filter(reply => '664ca44f1ca2d1bda9d6074d' === commentId);
  }
  commentsVisible: boolean = false; //
  allcommentFetch:any
  clickCommentIcon(id:number) {
    this.commentsVisible = !this.commentsVisible; // Toggle the visibility
    const dataValue = {
      "blogId": id,
    
    }
    this.auth.fetchAllComment(dataValue).subscribe(
      (result) => {
        this.allcommentFetch = result
        // this.commentData = []
        // // this.commentLength = this.allcommentFetch.data.length
        // console.log(this.allcommentFetch.data.length);
        // this.allcommentFetch.data.forEach((dataComment: any) => {
        //   console.log(dataComment);
          
        //   this.commentData.push({
        //     commentText: dataComment.text,
        //     createdAt: dataComment.createdAt,
        //     isReply: dataComment.isReply,
        //     replyIds: dataComment.replyIds,
        //     status: dataComment.status,
        //     updatedAt: dataComment.updatedAt,
        //     userId: dataComment.userId,
        //     commentId: dataComment._id,
        //     commentFirst: dataComment.userId.firstName,
        //     commentLast: dataComment.userId.lastName,
        //     commentProfile: dataComment.userId.profilePicture,


        //   });
        //   dataComment.replyIds.forEach((datareply: any) => {
        //     console.log(dataComment.replyIds);
        //     this.replyData.push({
        //       replytText: datareply.text,
        //       // createdAt: datareply.createdAt,
        //       isReply: datareply.isReply,
        //       replyIds: datareply._id,
        //       status: datareply.status,
        //       updatedAt: datareply.updatedAt,
        //       userId: datareply.userId,
            
        //       replyFirst: datareply.userId.firstName,
        //       replyLast: datareply.userId.lastName,
        //       replyProfile: datareply.userId.profilePicture,


        //     });

        //   })


      //   })
      //   this.blogdata = this.blogdata.map((blog:any) => {
      //     if (blog.id === id) {
      //       return { ...blog, comment: this.commentData };
      //     }
      //     return blog;
      //   });
      // })
  // }
  const updatedComments = this.allcommentFetch.data.map((dataComment: any) => ({
    text: dataComment.text,
    createdAt: dataComment.createdAt,
    isReply: dataComment.isReply,
    replyIds: dataComment.replyIds,
    status: dataComment.status,
    updatedAt: dataComment.updatedAt,
    userId: dataComment.userId,
    commentId: dataComment._id,
    commentFirst: dataComment.userId.firstName,
    commentLast: dataComment.userId.lastName,
    commentProfile: dataComment.userId.profilePicture,
  }));

  this.replyData = [];
  this.allcommentFetch.data.forEach((dataComment: any) => {
    dataComment.replyIds.forEach((dataReply: any) => {
      this.replyData.push({
        replytText: dataReply.text,
        isReply: dataReply.isReply,
        replyIds: dataReply._id,
        status: dataReply.status,
        updatedAt: dataReply.updatedAt,
        userId: dataReply.userId,
        replyFirst: dataReply.userId.firstName,
        replyLast: dataReply.userId.lastName,
        replyProfile: dataReply.userId.profilePicture,
        commentId: dataComment._id, // Link the reply to its parent comment
      });
    });
  });

  // Update the comments for the specific blog in blogdata
  this.blogdata = this.blogdata.map((blog:any) => {
    if (blog.id === id) {
      return { ...blog, comment: updatedComments, commentLength: updatedComments.length };
    }
    return blog;
  });
  this.cdr.detectChanges();
});
}
  replycomment: boolean = false
  viewReplay: boolean = false
  currentCommentId: string | null = null;
  viewReplyCommentId: string | null = null;
  viewReply(commentId: string) {
    // this.viewReplyCommentId = this.viewReplyCommentId === commentId ? null : commentId; // Toggle the visibility of replies
    if (this.viewReplyCommentId === commentId) {
      this.viewReplyCommentId = null;
    } else {
      this.viewReplyCommentId = commentId;
    }
  }
  reply(commentId: string) {
    this.replycomment = !this.replycomment
    // this.replycomment = true;
    this.currentCommentId = commentId;
  }
  onSubmitReply(value: any, id: number) {
    console.log('Comment ID:', this.currentCommentId);
    const dataValue = {
      "commentId": this.currentCommentId,
      "text": value.text
    }
    this.auth.replyBlogComment(dataValue).subscribe(
      (result) => {
        this.ngOnInit()
      })
  }
  onSubmitComment(value: any, id: number) {
    console.log(value, id);

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
  fetchAllComment(){
    
  }
}
