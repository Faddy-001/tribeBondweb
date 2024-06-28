import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import { ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private dialog: MatDialog,private toastr: ToastrService, private auth: AuthenticationService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
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
  // getAllBlog() {
  //   this.auth.getAllBlog().subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       this.getAllBlogData = res
  //       this.blogdata = []

  //       this.getAllBlogData.data.forEach((data: any) => {
  //         console.log(data.comments.length);
  //         console.log(data.comments);
  //         // this.commentLength = data.comments.length

  //         // this.blogdata = []
  //         this.commentData = []
  //         this.replyData = []
  //         // this.commentData = data;
  //         this.blogdata.push({
  //           id: data._id,
  //           blogImage: data.blogImage,
  //           statusText: data.statusText,
  //           backgroundImage: data.backgroundImage,
  //           firstname: data.createdBy.firstName,
  //           lastname: data.createdBy.lastName,
  //           profilePic: data.createdBy.profilePicture,
  //           commentLength: data.comments.length,
  //           comments: data.comments.map((comment: any) => ({
  //             commentText: comment.text,
  //             createdAt: comment.createdAt,
  //             isReply: comment.isReply,
  //             replyIds: comment.replyIds,
  //             status: comment.status,
  //             updatedAt: comment.updatedAt,
  //             userId: comment.userId,
  //             commentId: comment._id,
  //             commentFirst: comment.userId.firstName,
  //             commentLast: comment.userId.lastName,
  //             commentProfile: comment.userId.profilePicture,
  //           })),
           


  //         })


  //         // data.comments.forEach((dataComment: any) => {
  //         //   console.log(dataComment);
  //         //   this.commentData.push({
  //         //     commentText: dataComment.text,
  //         //     createdAt: dataComment.createdAt,
  //         //     isReply: dataComment.isReply,
  //         //     replyIds: dataComment.replyIds,
  //         //     status: dataComment.status,
  //         //     updatedAt: dataComment.updatedAt,
  //         //     userId: dataComment.userId,
  //         //     commentId: dataComment._id,
  //         //     commentFirst: dataComment.userId.firstName,
  //         //     commentLast: dataComment.userId.lastName,
  //         //     commentProfile: dataComment.userId.profilePicture,

  //         //   });
  //  // Process comments
  //  data.comments.forEach((dataComment: any) => {
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

  //           //   dataComment.replyIds.forEach((datareply: any) => {
  //           //     console.log(dataComment.replyIds);
  //           //     this.replyData.push({
  //           //       replytText: datareply.text,
  //           //       // createdAt: datareply.createdAt,
  //           //       isReply: datareply.isReply,
  //           //       replyIds: datareply._id,
  //           //       status: datareply.status,
  //           //       updatedAt: datareply.updatedAt,
  //           //       userId: datareply.userId,

  //           //       replyFirst: datareply.userId.firstName,
  //           //       replyLast: datareply.userId.lastName,
  //           //       replyProfile: datareply.userId.profilePicture,


  //           //     });

  //           //   })
  //           // })
  //           // Process replies
  //           dataComment.replyIds.forEach((replyId: any) => {
  //             const reply = data.comments.find((comment: any) => comment._id === replyId);
  //             if (reply) {
  //               console.log(reply);
  //               this.replyData.push({
  //                 replyText: reply.text,
  //                 createdAt: reply.createdAt,
  //                 isReply: reply.isReply,
  //                 replyId: reply._id,
  //                 status: reply.status,
  //                 updatedAt: reply.updatedAt,
  //                 userId: reply.userId,
  //                 replyFirst: reply.userId.firstName,
  //                 replyLast: reply.userId.lastName,
  //                 replyProfile: reply.userId.profilePicture,
  //               });
  //             }
  //           });
  //         });
  //       });
  //       // })

  //     })
  //   this.cdr.detectChanges();
  // }
  getAllBlog() {
    this.auth.getAllBlog().subscribe(
      (res: any) => {
        console.log(res);
        this.getAllBlogData = res;
        this.blogdata = [];
  
        this.getAllBlogData.data.forEach((data: any) => {
          console.log(data.comments.length);
          console.log(data.comments);
  
          this.commentData = [];
          this.replyData = [];
          
          this.blogdata.push({
            id: data._id,
            blogImage: data.blogImage,
            statusText: data.statusText,
            backgroundImage: data.backgroundImage,
            firstname: data.createdBy.firstName,
            lastname: data.createdBy.lastName,
            profilePic: data.createdBy.profilePicture,
            commentLength: data.comments.length,
            comments: data.comments.map((comment: any) => ({
              commentText: comment.text,
              createdAt: comment.createdAt,
              isReply: comment.isReply,
              replyIds: comment.replyIds,
              status: comment.status,
              updatedAt: comment.updatedAt,
              userId: comment.userId,
              commentId: comment._id,
              commentFirst: comment.userId.firstName,
              commentLast: comment.userId.lastName,
              commentProfile: comment.userId.profilePicture,
            })),
          });
  
          data.comments.forEach((dataComment: any) => {
            console.log(dataComment);
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
  
            dataComment.replyIds.forEach((replyId: any) => {
              const reply = data.comments.find((comment: any) => comment._id === replyId);
              if (reply) {
                console.log(reply);
                this.replyData.push({
                  replyText: reply.text,
                  createdAt: reply.createdAt,
                  isReply: reply.isReply,
                  replyId: reply._id,
                  status: reply.status,
                  updatedAt: reply.updatedAt,
                  userId: reply.userId,
                  replyFirst: reply.userId.firstName,
                  replyLast: reply.userId.lastName,
                  replyProfile: reply.userId.profilePicture,
                });
              }
            });
          });
        });
        this.cdr.detectChanges(); // Ensure the view updates with new data
      });}
  // getRepliesForComment(commentId: string): any[] {
  //   // this.reply.commentId
  //   return this.replyData.filter(reply => '664ca44f1ca2d1bda9d6074d' === commentId);
  // }
  likeBlog(id:number){
    
  }
  commentsVisible: boolean = false; //
  allcommentFetch: any
  clickCommentIcon(id: number) {
  
    this.commentsVisible = !this.commentsVisible; // Toggle the visibility
    const dataValue = {
      "blogId": id,

    }
    this.auth.fetchAllComment(dataValue).subscribe(
      (result) => {
        this.allcommentFetch = result
    
        const updatedComments = this.allcommentFetch.data.map((dataComment: any) => ({
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
        this.blogdata = this.blogdata.map((blog: any) => {
          if (blog.id === id) {
            return { ...blog, comments: updatedComments, commentLength: updatedComments.length };
          }
          return blog;
        });
        console.log('Updated blogdata:', this.blogdata);
        this.cdr.detectChanges();
      });
  }
  openCommentsDialog() {
   
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
  selectedImage: string | null = null;
  passImage(imagePath: string): void {
    if (this.selectedImage === imagePath) {
      // Image already selected, do nothing or handle as needed
      return;
    }
    // if (this.areImagesDisabled) return;
    this.areImagesDisabled = true;
    this.selectedImage = imagePath;
    this.isUploadButtonDisabled = false;


    this.formData.delete('backgroundImage');
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
  resetSelection(): void {
    this.selectedImage = null;
    this.isUploadButtonDisabled = false;
    this.areImagesDisabled = false;
    this.images = [];
    this.formData.delete('backgroundImage');
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
  blogResult: any
  errorShow: any;
  errorMsg: any;
  onSubmit(value: any) {
    console.log(this.formData);
    this.formData.append('statusText', value.statusText)
    this.auth.addBlog(this.formData).subscribe(
      (result) => {
        this.blogResult = result
        this.toastr.success(this.blogResult.message);
        this.reviewForm.reset();
        this.resetSelection();
        this.formData = new FormData();
        this.ngOnInit()


      },
      (err: any) => {
        console.log(err);
        this.errorShow = err;
        this.errorMsg = this.errorShow.error.message;
        this.toastr.error(this.errorMsg);
        this.formData = new FormData();

      })




  }
  // Utility method to check if the form is ready for submission
  isFormReady(): boolean {
    const statusText = this.reviewForm.get('statusText')?.value;
    const isStatusTextProvided = statusText && statusText.trim().length > 0;
    return this.reviewForm.valid && (isStatusTextProvided || this.selectedImage !== null || this.images.length > 0);
  }


  onImageLoad(blog: any) {
    blog.imageLoaded = true;
    this.cdr.detectChanges(); // Trigger change detection
  }
  
  onImageError(blog: any) {
    blog.imageLoaded = true; // Prevent spinner from showing indefinitely
    this.cdr.detectChanges(); // Trigger change detection
  }
}
