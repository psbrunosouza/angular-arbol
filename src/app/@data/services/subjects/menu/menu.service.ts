import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  openMenuState$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  set setMenuState(state: boolean){
    this.openMenuState$.next(state);
  }
}
