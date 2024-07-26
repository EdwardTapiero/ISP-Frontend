import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page/page.component';
import { ChargeRoutingModule } from './charge-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    ChargeRoutingModule,
    NavbarModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask({
      thousandSeparator: '.',  // Configura el separador de miles como punto
      decimalMarker: ',',      // Configura el marcador decimal como coma si es necesario
      prefix: 'COP ',
      suffix: '',
      dropSpecialCharacters: false // Mantiene los caracteres especiales en el modelo
    })
  ]
})
export class ChargeModule { }
