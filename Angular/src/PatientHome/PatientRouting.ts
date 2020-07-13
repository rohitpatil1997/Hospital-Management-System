import { HomePageComponent } from './PatientHomePage.component';
import { PatientComponent } from 'src/PatientEdit/PatientApp.component';
import { PatientLoginPageComponent } from './PatientLoginPage.component';
import { SecurityLogic } from 'src/Utilities/Utility.AuthGuard';

export const PatientRoutes = [
    { path: '', component: HomePageComponent , canActivate : [SecurityLogic]},
    { path: 'Home', component: HomePageComponent , canActivate : [SecurityLogic] },
    { path: 'Login', component: PatientLoginPageComponent  },
    { path: 'PatientEdit', loadChildren: () => import('../PatientEdit/PatientEdit.module')
    .then(m => m.PatientHomeModule) , canActivate : [SecurityLogic] },
    { path: 'SearchPatient', loadChildren: () => import('../PatientSearch/PatientSearch.module')
    .then(m => m.PatientSearchModule) , canActivate : [SecurityLogic] },
    
    
]