
import { Component, OnInit, inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import * as validator from "../../../../services/validators";

@Component({
  selector: 'app-modifycourier',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './modifycourier.component.html',
  styleUrl: './modifycourier.component.scss'
})

export class ModifycourierComponent implements OnInit {
  http = inject(HttpClient);
  couriersArray: Array<Courier> = [];
  dataSource = new MatTableDataSource<Courier>(this.couriersArray);
  columnsToDisplay = ['id', 'nev', 'emailcim', 'telefonszam', 'cim', 'felfuggesztve'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Courier | null;
  emptyForm = new FormGroup({});

  modifyCouriers: Map<number, FormGroup> = new Map();

  ngOnInit(): void {
    this.http.get("http://localhost:3000/getcouriers").subscribe((response: any) => {
      this.loadCouriers(response);
      this.initializeFormGroups(response);
    });
  }

  deleteCourier(id:number) {
    this.http.delete("http://localhost:3000/deletecourier"+"/"+id).subscribe((response: any) => {
      this.http.get("http://localhost:3000/getcouriers").subscribe((response: any) => {
        this.loadCouriers(response);
        this.modifyCouriers.delete(id);
        });
    })
  }

  suspendCourier(id:number,felfuggesztve:boolean) {
    this.http.post("http://localhost:3000/suspendcourier", {felfuggesztve:felfuggesztve,id : id}).subscribe((response: any) => {
      this.http.get("http://localhost:3000/getcouriers").subscribe((response: any) => {
        this.loadCouriers(response);
      });
    })
  }

  onButtonClick(courierId: number): void {
    console.log("Button clicked for courier with ID:", courierId);
    // Add your code here to handle the specific courier
  }

  initializeFormGroups(couriers: any) {
    this.modifyCouriers = new Map(
      couriers.map((courier: any) => [
        courier.id,
        new FormGroup({
          nev: new FormControl("", [validator.modifyNameValidator()]),
          emailcim: new FormControl("", [validator.modifyStrictEmailValidator()]),
          telefonszam: new FormControl("", [validator.modifyPhoneValidator()]),
        })
      ])
    );
  }

  loadCouriers(couriers: any) {
    this.couriersArray = couriers.map((courier: any) => ({
      id: courier.id,
      nev: courier.nev,
      emailcim: courier.emailcim,
      telefonszam: courier.telefonszam,
      cim: courier.cim,
      felfuggesztve: courier.felfuggesztve ? "igen" : "nem"
    }));
    this.dataSource.data = this.couriersArray;
  }

  toggleRow(element: Courier) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  courierFields: Array<keyof CourierData> = ['nev', 'emailcim', 'telefonszam'];

  anyFieldHasValue(id:number): boolean {
    const form = this.modifyCouriers.get(id)
    return form ? this.courierFields.some(field => !!form.get(field)?.value) : false;
  }

  courierTempModifyData: CourierData = {
    nev: "",
    emailcim: "",
    telefonszam: "",
    id : 0
  };

  defaultData!: CourierData;
  isFormSubmitted: boolean = false;
  SuccessfulModify: boolean = true;
  OneFieldValid: boolean = true;



  onSubmit(element:any) {
    const courierForm = this.modifyCouriers.get(element.id);
    if (courierForm) {


      const isFormValid = courierForm.valid;
      this.isFormSubmitted = false;


    if (this.anyFieldHasValue(element.id)) {
        this.isFormSubmitted = true;
        this.courierTempModifyData["id"]=element["id"];

        this.courierFields.forEach(field => {
          const control = courierForm.get(field);
          if (control && !control.value) {
            this.courierTempModifyData[field] = String(element[field]);
          } else {
            this.courierTempModifyData[field] = courierForm.controls[field].value
          }
        });
        this.http.post('http://localhost:3000/modifycourieradmin', this.courierTempModifyData).subscribe(response => {
          console.log(this.courierTempModifyData)
          courierForm.reset({
            nev: '',
            email: '',
            telefonszam: '',
          });
          courierForm.markAsPristine();
          courierForm.markAsUntouched();

          this.SuccessfulModify = true;
          this.http.get("http://localhost:3000/getcouriers").subscribe((response: any) => {
          this.loadCouriers(response);
          });
        }, error => {
          console.log(error);
          this.SuccessfulModify = false;
        });

      }
    }

  }




}

export interface Courier {
  id: number;
  nev: string;
  emailcim: string;
  telefonszam: string;
  felfuggesztve: boolean;
}

interface CourierData {
  nev: string;
  emailcim: string;
  telefonszam: string;
  id: string | number
}
