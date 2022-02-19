export class SelectionButtonModel {
  constructor(
    public text: string,
    public selected: string,
    public selections: string[],
    public onSelectionChange: (selection: string) => void,
  ) {}
}
