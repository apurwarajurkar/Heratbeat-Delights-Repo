import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OffersComponent } from './offers/offers.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, AboutComponent, GalleryComponent, OffersComponent,FormsModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  constructor(private router: Router) {}
  SelectedTab:string='';
  feedback:string='';
  SelectedApp:string='';
  isshowapp:boolean=false;
  isShippingDeliver:boolean=false;
  isRefundExchange:boolean=false;
  isPrivacyPolicy:boolean=false;
  isRateUs:boolean=false;
  moveuptabname:string='';
  selectedcountry:string='';
  baseimgurl:string="https://imgur.com/";
  slogan:string=' Every Surprise is a Delight that belongs to a Heartbeat!';
  cta:string[]=['Shop Now','Find the Perfect Gift','Shipping & Delivery', 
  'Refund & Exchange Policy','Privacy Policy','Rate Us'];
  user_data:string[]=['Email address',
    'First name and last name',
    'Phone number',
    'Address, State, Province, ZIP/Postal code, City',
    'Cookies and Usage Data'];
  countries:any[] = [{name:'India', cities:['Mumbai', 'Pune']},
  {name:'America',cities:['Washington','Chicago']},
  {name:'Turkey', cities:['Istanbul','Antalya']}] ;

  ngOnInit(){
    const currentUrl: string = window.location.href;
    if (currentUrl.includes('gallery')) {
      this.SelectedTab = 'gallery';
    } else if(currentUrl.includes('about_us')) {
      this.SelectedTab = 'about_us';
    }
    else if(currentUrl.includes('offers')){
      this.SelectedTab = 'offers';
    }
    else{
      this.SelectedTab = 'home';
    }
    this.selectTab(this.SelectedTab);
    //this.getduplicates(this.obj1,this.obj2);  
  }

  showcitydropdown(value:string){
    this.selectedcountry = value;
    // console.log(this.countries[0].cities)
  }
 obj1:object = {a:10,b:20,c:30,d:40,f:50};
  obj2:object = {a:14,b:20,d:40};
  finalobj:object={};

  // getduplicates(obj1:object,obj2:object){
  //   const obj1keys = Object.keys(this.obj1);
  //   const obj2keys = Object.keys(this.obj2);
  //   for (let key1 in this.obj1){
  //     if(this.obj2.includes(key1)){
  //       console.log(this.finalobj,'finalobj')
  //     }
  //   }
  // }
  moveup(tabName:string){
      this.moveuptabname = tabName;
  }

  movenormal(){
    this.moveuptabname = '';
  }

  showContactDetails(app:string){
    this.isshowapp = true;
    this.SelectedApp = app;
  }

  Rating(){
    console.log(this.feedback);
    this.isRateUs = false;
  }

  Goto(tabname:string){
    if(tabname === 'Rate Us'){
      this.isRateUs = true;
    }
    else if(tabname === 'Privacy Policy'){
      this.isPrivacyPolicy = true;
    }
    else if(tabname === 'Refund & Exchange Policy'){
      this.isRefundExchange = true;
    }
    else if(tabname === 'Shipping & Delivery'){
      this.isShippingDeliver = true;
    }

  }

  hideContactDetails(){
    this.isshowapp = false;
    this.SelectedApp='';
  }

  selectTab(tabName:string){
    this.SelectedTab = tabName;
    this.router.navigate([tabName.toLowerCase()]);
  }

  closethetab(){
    this.isShippingDeliver=false;
    this.isRefundExchange=false;
    this.isPrivacyPolicy = false;
    this.isRateUs = false;
  }

}
