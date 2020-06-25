import { HomePageComponent } from './PatientHomePage.component';
import { PatientComponent } from 'src/PatientEdit/PatientApp.component';

export const PatientRoutes = [
    { path: '', component: HomePageComponent },
    { path: 'Home', component: HomePageComponent  },
    { path: 'PatientEdit', loadChildren: () => import('../PatientEdit/PatientEdit.module').then(m => m.PatientHomeModule)  },
    { path: 'SearchPatient', loadChildren: () => import('../PatientSearch/PatientSearch.module').then(m => m.PatientSearchModule)  },
    
    
]