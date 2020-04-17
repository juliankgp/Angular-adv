import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.moudule';
// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,

    ],
    imports: [
        PagesRoutingModule,
        SharedModule,
        FormsModule,
        ChartsModule
    ],
    providers: [],
})

export class PagesModule { }
