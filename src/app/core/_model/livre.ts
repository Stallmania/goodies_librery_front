export class Livre {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public coverPath: string,
    public genre: string,
    public summary: string,
    public votesAverage: string,
    public dateAdded: string
  ) {}
}
