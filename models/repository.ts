export class Repository {
  constructor(
    readonly id: number,
    readonly full_name: string,
    readonly open_issues_count: number,
  ) {}
}
