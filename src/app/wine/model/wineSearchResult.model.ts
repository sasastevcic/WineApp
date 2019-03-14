import { Wine } from "./wine.model";

export class WineSearchResult{
  wines: Wine[];
  count: number;

  constructor(obj? :any){
    this.wines = obj && obj.results.map(elem => new Wine(elem) ) || [];

    this.count = obj && obj.count || null;
  }
}
