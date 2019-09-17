export class News {
  id: number;
  type: NewsType;
  title: string;
  date: Date;
}

export enum NewsType {
  Info = 'info_outline',
  Event = 'event',
  Update = 'system_update_alt'
}
