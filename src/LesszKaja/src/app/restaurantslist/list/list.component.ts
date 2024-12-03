import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() show: Array<{ id: number; nev: string; image: string; eteltipusok?: { nev: string }[], route: string}> = [];

  ngOnInit() {
    this.show.forEach(item => {
      if (!item.eteltipusok) {
        item.eteltipusok = [];
      }
    });
  }
}
