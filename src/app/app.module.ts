import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EstudiantesComponent } from './components/centro-formacion/estudiantes/estudiantes.component';
import { DetalleMod1Component } from './components/detalle-mod1/detalle-mod1.component';
import { DetalleMod2Component } from './components/detalle-mod2/detalle-mod2.component';
import { DetalleMod3Component } from './components/detalle-mod3/detalle-mod3.component';
import { EstudiantesNotasComponent } from './components/centro-formacion/estudiantes-notas/estudiantes-notas.component';
import { EstudiantesHorariosComponent } from './components/centro-formacion/estudiantes-horarios/estudiantes-horarios.component';
import { EstudiantesAspiranteBecaComponent } from './components/centro-formacion/estudiantes-aspirante-beca/estudiantes-aspirante-beca.component';
import { EstudiantesPerfilComponent } from './components/centro-formacion/estudiantes-perfil/estudiantes-perfil.component';
import { EstudiantesModuloComponent } from './components/centro-formacion/estudiantes-modulo/estudiantes-modulo.component';
import { ProfesoresComponent } from './components/centro-formacion/profesores/profesores.component';
import { ProfesoresPerfilComponent } from './components/centro-formacion/profesores-perfil/profesores-perfil.component';
import { ProfesoresSalarioComponent } from './components/centro-formacion/profesores-salario/profesores-salario.component';
import { ProfesoresHorariosComponent } from './components/centro-formacion/profesores-horarios/profesores-horarios.component';
import { ProfesoresAddCaliComponent } from './components/centro-formacion/profesores-add-cali/profesores-add-cali.component';
import { CalificacionesService } from './shared/calificaciones.service';
import { HorarioEstudianteService } from './shared/horario-estudiante.service';
import { HorarioDocenteService } from './shared/horario-docente.service';
import { AsignaturaService } from './shared/asignatura.service';
import { ModuloService } from './shared/modulo.service';
import { PerfilEstudianteService } from './shared/perfil-estudiante.service';
import { PerfilDocenteService } from './shared/perfil-docente.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EstudiantesComponent,
    DetalleMod1Component,
    DetalleMod2Component,
    DetalleMod3Component,
    EstudiantesNotasComponent,
    EstudiantesHorariosComponent,
    EstudiantesAspiranteBecaComponent,
    EstudiantesPerfilComponent,
    EstudiantesModuloComponent,
    ProfesoresComponent,
    ProfesoresPerfilComponent,
    ProfesoresSalarioComponent,
    ProfesoresHorariosComponent,
    ProfesoresAddCaliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CalificacionesService,
    HorarioEstudianteService,
    HorarioDocenteService,
    AsignaturaService,
    ModuloService,
    PerfilEstudianteService,
    PerfilDocenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
