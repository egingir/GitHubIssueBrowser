export class IssueFilterModel {
  constructor(
    public onSortChange: (selection: string) => void,
    public onBookmarkPress: (bookMarkShow: boolean) => void,
  ) {}
}
