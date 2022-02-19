import {Repository} from './repository';

export class Issue {
  constructor(
    readonly id: number,
    readonly number: number,
    readonly url: string,
    readonly title: string,
    readonly state: string,
    readonly assignees: [],
    readonly body: string,
    readonly user: object,
    readonly locked: boolean,
    readonly created_at: string,
    readonly updated_at: string,
    readonly closed_at: string,
    public bookmarked: boolean = false,
    public repo: Repository,
  ) {}
}
