import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import { AppTranslationModule } from '../../app.translation.module';
import { D3Js } from './components/D3Js/D3Js.component';
import { D3JsService} from './components/D3Js/D3Js.service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Charts,
    ChartistJs,
    D3Js
  ],
  providers: [
    ChartistJsService,
    D3JsService
  ]
})
export class ChartsModule {}
