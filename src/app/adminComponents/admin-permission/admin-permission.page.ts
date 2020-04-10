import { Component, OnInit } from '@angular/core';
import { AddSchoolPage } from 'src/app/components/add-school/add-school.page';
import {AddStaffPage} from 'src/app/components/add-staff/add-staff.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-admin-permission',
  templateUrl: './admin-permission.page.html',
  styleUrls: ['./admin-permission.page.scss'],
})
export class AdminPermissionPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

    async addSchool() {
    const modal = await this.modalController.create({
      component: AddSchoolPage
});
    return await modal.present();
  }

  async addStaff() {
  const modal = await this.modalController.create({
    component: AddStaffPage
});
  return await modal.present();
}
}
