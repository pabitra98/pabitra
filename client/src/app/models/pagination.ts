import { IProcuct } from './product';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProcuct[];
  }