import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() listItems?: Array<{ id: number; alapar: number; nev: string; etterem_cim: string; }>;

  @Output() removeItem = new EventEmitter<number>();

  onRemoveClick(itemId: number):void {
    this.removeItem.emit(itemId);
  }
}