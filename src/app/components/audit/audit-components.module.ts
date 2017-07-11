import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditDetailsComponent} from './audit-details/audit-details.component';
import {AuditListComponent} from './audit-list/aduit-list.component';
import {SharedModule} from "../../shared.module";
import {TranslateModule} from '@ngx-translate/core'

@NgModule({
    declarations: [
        AuditDetailsComponent,
        AuditListComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        AuditDetailsComponent,
        AuditListComponent,
        SharedModule
    ],
    providers: [],
})
export class AuditComponentModule {
}
