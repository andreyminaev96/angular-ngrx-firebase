import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        AngularFireAuthModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        AngularFireAuthModule,
        MaterialModule
    ]
})
export class SharedModule {}