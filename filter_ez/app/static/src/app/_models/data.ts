export class UserData {
  constructor(
    public user_files: Array<object>,
    public user_datasets: Array<object>,
    public user_filters: Array<object>
  ) {}
}


export class File {
  constructor(
    public id: number,
    public name: string,
    public size: number,
    public date: number,
    public rows: number,
    public dataset_id: number
  ) {}
}

export class Filter {
  constructor(
    public id: number,
    public name: string
  ) {}
}

export class DataSet {
  constructor(
    public id: number,
    public user_id: number,
    public filter_id: number,
    public name: string,
    public date: Date,
    public items: number
  ) {}
}