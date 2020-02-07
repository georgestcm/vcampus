import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LanguageSelectPage} from './components/language-select/language-select.page';
import { IonicStorageModule } from '@ionic/storage';
import { AdminPage } from './admin/admin.page';
import { AdminDashboardPage } from './admin-dashboard/admin-dashboard.page';
import {PermissionsPage} from './components/permissions/permissions.page'
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [AppComponent,
    LanguageSelectPage,
    AdminPage,
    PermissionsPage,
    AdminDashboardPage
  ],
  entryComponents: [
    LanguageSelectPage,
    AdminPage
  ],
  imports: [BrowserModule,FormsModule,HttpClientModule,IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['localstorage','sqlite', 'websql']
    }), IonicModule.forRoot(),TranslateModule.forRoot(
    {
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }
  ), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
