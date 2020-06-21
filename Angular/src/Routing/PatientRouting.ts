import { PatientComponent } from 'src/PatientApp/PatientApp.component';
import { HomePageComponent } from 'src/PatientApp/PatientHomePage.component';
import { PatientSearchComponent } from 'src/PatientApp/PatientApp.Search.component';



export const PatientRoutes = [
    { path: '', component: HomePageComponent },
    { path: 'Home', component: HomePageComponent  },
    { path: 'Patient', component: PatientComponent  },
    { path: 'SearchPatient', component: PatientSearchComponent }
    
]