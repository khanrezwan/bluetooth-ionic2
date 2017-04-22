import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msg:any;
  constructor(public navCtrl: NavController, public bluetoothSerial:BluetoothSerial, public platform:Platform) {
    this.platform.ready().then(()=>{
      this.bluetoothSerial.isEnabled().then((data)=>{
        this.msg = data;
      },(err)=>{
        this.msg = err;
      });
    },()=>{
      this.msg = 'platform not ready'
    });
  }

}
