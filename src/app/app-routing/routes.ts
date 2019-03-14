import { Routes } from '@angular/router';

import { WineListComponent } from '../wine/wine-list/wine-list.component';
import { EditWineComponent } from '../wine/edit-wine/edit-wine.component';

export const routes :Routes = [
	{path: 'wines', component: WineListComponent},
	{path: 'wines/add', component: EditWineComponent},
	{path: 'wines/:id', component: EditWineComponent},
	{path: '', redirectTo: '/wines', pathMatch: 'full'}
];
