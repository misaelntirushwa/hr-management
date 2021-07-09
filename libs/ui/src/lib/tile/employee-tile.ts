import { EmployeeSummary } from "@hr-management/shared";
import { TileType } from "./tile-type";

export interface EmployeeTile extends EmployeeSummary {
  type: TileType; 
}