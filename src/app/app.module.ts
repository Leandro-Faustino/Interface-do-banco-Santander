import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './Pages/pagina-principal/pagina-principal.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BeneficiosComponent } from './shared/components/beneficios/beneficios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacotesComponent } from './shared/components/pacotes/pacotes.component';
import { PedidoCartaoComponent } from './shared/components/pedido-cartao/pedido-cartao.component';
import { AbrirContaComponent } from './shared/components/abrir-conta/abrir-conta.component';
import { BoxComponent } from './shared/components/box/box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    HeaderComponent,
    BannerComponent,
    BeneficiosComponent,
    PacotesComponent,
    PedidoCartaoComponent,
    AbrirContaComponent,
    BoxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
