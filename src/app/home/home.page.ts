import { Component } from '@angular/core';
import Portals from '@ionic/portals';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  viewName='';
  myvalue='';


  constructor() {
    if(Capacitor.isNativePlatform()){
      this.loadNativeContext();
    }
  }

  loadNativeContext(){
    Portals.getInitialContext<{name:string; nativevalue:string}>().then(
        (context=>{
          this.viewName=context.name;
          this.myvalue=context.value.nativevalue;
          }
        )
      )
  }

  functionName(){
    alert("hi ");
  }

}
