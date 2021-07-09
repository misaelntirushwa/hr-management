import { Component, HostBinding, Input } from '@angular/core';
import { EmployeeSummary } from "@hr-management/shared";
import { TileType } from "./tile-type";

@Component({
  selector: 'hr-management-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() employee: EmployeeSummary | undefined;

  @Input() @HostBinding('attr.data-state') type: TileType = 'regular';
}
