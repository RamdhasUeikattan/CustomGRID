import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { gridData } from './data';
@Component({
    selector: 'my-app',
    template: `<ej-grid #grid [dataSource]='data' [allowSorting]='true'>
                    <e-columns>
                        <e-column field='LastName' headerText='Last Name' width='140'></e-column>
                        <e-column field='FirstName' headerText='First Name' width='170' format= 'C2'></e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign="center"></e-column>
                        <e-column field='Title' headerText='Title' width='180' ></e-column>
                        <e-column field='BirthDate' headerText='Bitth Date' width='120' format='yMd' ></e-column>
                        <e-column field='City' headerText='City' width='120' ></e-column>
                    </e-columns>
                </ej-grid>`,
    styleUrls: ['app/app.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        this.data = gridData;
    }

}
