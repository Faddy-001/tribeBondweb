import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Blog } from 'src/app/demo/api/blog';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
  selector: 'app-online-tutor',
  
  templateUrl: './online-tutor.component.html',
  styleUrl: './online-tutor.component.scss'
})
export class OnlineTutorComponent {

  constructor(private router: Router,private activatedRoute:ActivatedRoute,private auth :AuthenticationService){}
  idParam = this.activatedRoute.snapshot.params['id'];

  @Input() starRating: any;
  sortOptions: SelectItem[] = [
    { label: 'Most Shared', value: 'share' },
    { label: 'Most Commented', value: 'comment' },
];
websiteUrl: string = "http://www.houstonpeace.org/";

sortField: string = '';
  totalBlogs: Blog[] = [
    {
        coverImage: 'assets/demo/images/blog/blog-1.png',
        profile: 'assets/demo/images/avatar/circle/avatar-f-1.png',
        title: 'Blog',
        description:
            'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
        comment: 2,
        share: 7,
        day: '15',
        month: 'October',
    },
    {
        coverImage: 'assets/demo/images/blog/blog-2.png',
        profile: 'assets/demo/images/avatar/circle/avatar-f-2.png',
        title: 'Magazine',
        description:
            'Magna iaculis sagittis, amet faucibus scelerisque non ornare non in penatibus ',
        comment: 5,
        share: 1,
        day: '20',
        month: 'Nov',
    },
    {
        coverImage: 'assets/demo/images/blog/blog-3.png',
        profile: 'assets/demo/images/avatar/circle/avatar-m-1.png',
        title: 'Science',
        description:
            'Purus mattis mi, libero maecenas volutpat quis a morbi arcu pharetra, mollis',
        comment: 2,
        share: 6,
        day: '23',
        month: 'Oct',
    },
    {
        coverImage: 'assets/demo/images/blog/blog-4.png',
        profile: 'assets/demo/images/avatar/circle/avatar-m-1.png',
        title: 'Blog',
        description:
            'Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc',
        comment: 5,
        share: 5,
        day: '14',
        month: 'Dec',
    },
    {
        coverImage: 'assets/demo/images/blog/blog-5.png',
        profile: 'assets/demo/images/avatar/circle/avatar-f-3.png',
        title: 'Magazine',
        description:
            'Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam',
        comment: 4,
        share: 1,
        day: '05',
        month: 'Apr',
    },
    {
        coverImage: 'assets/demo/images/blog/blog-5.png',
        profile: 'assets/demo/images/avatar/circle/avatar-m-3.png',
        title: 'Science',
        description:
            'Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et',
        comment: 1,
        share: 3,
        day: '12',
        month: 'Nov',
    },
];
ngOnInit(): void {
    console.log("f s bdn");
    console.log(this.idParam);
    this.getAllEductionDisplay();

}
navigateToAdd(){
  this.router.navigateByUrl(`/tribe/onlinetutor/${this.idParam}/add-online-tutor`);

}
navigateToDetail(id:number): void {
  this.router.navigateByUrl(`/tribe/onlinetutor/${this.idParam}/online-detail/${id}`);
}
routing(){
    console.log('dfsf');
    
    this.router.navigateByUrl('add-events')
}
get filledStars(): number[] {
  const roundedRating = Math.round(this.starRating * 2) / 2; // Round rating to nearest half
  return Array.from({ length: 5 }, (_, index) => index + 0.5 <= roundedRating ? index + 0.5 : 0);
}

entityShow: any = [];
allData: any;
entities: any;
desiredWidth = 400; // Example width in pixels
desiredHeight = 250;
getAllEductionDisplay() {
    this.auth.getAllEducation().subscribe(
        (res: any) => {
            console.log(res.data);
            this.allData = res
            console.log(this.allData.data[1].entities);
            
            this.allData.data[1].entities.forEach((data: any) => {
                console.log(data);
                this.entities = data;
                    this.entityShow.push({
                        id: data._id,
                        name: data.name,
                        date: data.date,
                        address: data.address,
                        phone: data.contactNumber,
                        offers:data.offers,
                        image: data.thumbnail,
                        email:data.email,
                        website:data.website
                    })
                // })

                console.log(this.entityShow.image);

            })
        })
}
}
