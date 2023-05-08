import dayjs from 'dayjs';

export interface BaseStore { 
    nodedetail: NodeDetail[];
    testItem: number;
  }

export interface NodeDetail{
  Voltage: number;
  updatedAt: dayjs.Dayjs;
}