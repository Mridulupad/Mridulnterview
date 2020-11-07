import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParam } from '../Model/QueryParam';
import { SpaceService } from '../Services/space.service';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-space-ex-interview',
  templateUrl: './space-ex-interview.component.html',
  styleUrls: ['./space-ex-interview.component.css']
})
export class SpaceExInterviewComponent implements OnInit {
  toggle: any = false;
  color: any;
  data: any = []
  queryParam = new QueryParam();
  filterArray = [
    {
      id: 1,
      year: 2007,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 2,
      year: 2008,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 3,
      year: 2009,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 4,
      year: 2010,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 5,
      year: 2011,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 6,
      year: 2012,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 7,
      year: 2013,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 8,
      year: 2013,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 9,
      year: 2014,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 10,
      year: 2015,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 11,
      year: 2016,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 12,
      year: 2017,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 13,
      year: 2018,
      selected: false,
      bgcolor: 'yellow'
    },
    {
      id: 14,
      year: 2019,
      selected: false,
      bgcolor: 'yellow'
    },
  ]
  
  year: any;
  landValueFlag: boolean = false
  landTrue: boolean = false;
  landFlagFalse: boolean = false
  launchFlagTrue: boolean = false;
  launchFlagFalse: boolean = false;
  activatedRoute: ActivatedRoute;
   url:any;
  subscription:Subscription;
  imageUrl: any=[]
  constructor(private location: Location,private dataService: SpaceService, private route: ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
   
    this.getIntialLoad();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  getIntialLoad() {
    let storedArr = [];
    this.url = this.router.createUrlTree([], {relativeTo: this.activatedRoute, queryParams: {limit: 100}}).toString()
    this.subscription=this.dataService.getIntialLoadData(100).subscribe(element => {
      this.data = element;
      this.data.forEach((element:any)=> {
        this.imageUrl.push(element.links.mission_patch);
      });
      
      console.log(this.data);
    },
      (error => {
        return error;
      })
    )

  }
  getYear(event, index) {

    //SETTING VISITED NODE TO FALSE
    this.filterArray.forEach((settingFalse: any) => {
      if (settingFalse.selected == true) {
        settingFalse.selected = false;
      }
    })
    this.toggle = true
    this.filterArray[index].selected = true;
    console.log(this.filterArray)
    this.year = event;
    this.color = "red";

    if (this.launchFlagTrue == true && !this.landTrue == true) {
      this.getLaunchSuceess();
     
    }
    if (this.launchFlagTrue == true && this.landTrue == true && !this.year) {
      this.getLandandLaunch();
     
    }
    if (this.year && this.launchFlagTrue == true && this.landTrue == true) {
      this.getAllSucess()
     
    }
  }
  landValue(event) {
    if (event == 'true') {
      this.landTrue = true;
      this.landValueFlag = true;
      this.landFlagFalse = false;
    }
    else {
      this.landFlagFalse = true;
      this.landTrue = false;
      // this.landValueFlag=false;
    }
    if (this.launchFlagTrue == true && !this.landTrue == true) {
      this.getLaunchSuceess();
      
    }
    if (this.launchFlagTrue == true && this.landTrue == true && !this.year) {
      this.getLandandLaunch();
     
     
    }
    if (this.year && this.launchFlagTrue == true && this.landTrue == true) {
      this.getAllSucess()
     
    }

  }
  launchValue(event) {
    if (event == 'true') {
      this.launchFlagTrue = true;
      this.launchFlagFalse = false;
    }
    else {
      this.launchFlagTrue = false;
      this.launchFlagFalse = true;
    }
    if (this.launchFlagTrue == true && !this.landTrue == true) {
      this.getLaunchSuceess();
      
    }
    if (this.launchFlagTrue == true && this.landTrue == true && !this.year) {
      this.getLandandLaunch();
     
    }
    if (this.year && this.launchFlagTrue == true && this.landTrue == true) {
      this.getAllSucess()
     
    }
  }
  getLaunchSuceess() {
    this.data = [];
    this.queryParam.launch_success = true;
    this.queryParam.limit = "100"
    this.url=this.router.createUrlTree([], {relativeTo: this.activatedRoute, queryParams: {launch_success:this.queryParam.launch_success,limit: this.queryParam.limit}}).toString()
    this.location.go(this.url)
    this.subscription= this.dataService.sucessLaunch(this.queryParam).subscribe(sucessData => {
      this.data = sucessData;
    },
      (error => {
        return error;
      })
    )
  }
  getLandandLaunch() {
    this.data = [];
    this.queryParam.launch_success = true;
    this.queryParam.land_success = true;
    this.queryParam.limit = "100";
   
    this.url=this.router.createUrlTree([], {relativeTo: this.activatedRoute, queryParams: {launch_success:this.queryParam.launch_success,land_success:this.queryParam.land_success,limit: this.queryParam.limit}}).toString()
    this.location.go(this.url)
    this.subscription= this.dataService.sucessLaunchandLand(this.queryParam).subscribe(bothLaunch => {
      this.data = bothLaunch;
    },
      (error => {
        return error;
      })
    )
  }
  getAllSucess() {
    this.data = [];
    this.queryParam.launch_success = true;
    this.queryParam.land_success = true;
    this.queryParam.limit = "100";
    this.queryParam.launch_year = this.year;
    this.url=this.router.createUrlTree([], {relativeTo: this.activatedRoute, queryParams: {launch_success:this.queryParam.launch_success,land_success:this.queryParam.land_success,launch_year:this.year,limit: this.queryParam.limit}}).toString()
    this.location.go(this.url)
    this.subscription= this.dataService.allSuccess(this.queryParam).subscribe(bothLaunch => {
      this.data = bothLaunch;
    },
      (error => {
        return error;
      })
    )
  }
}
