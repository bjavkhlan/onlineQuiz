import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of'
import { SET_LEVELS } from '../actions';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';


@Injectable()
export class SubjectGuard implements CanActivate {
    subjectid: string;
    constructor(private route: ActivatedRoute, private serv: DataService, private router: Router,private ngRedux: NgRedux<IAppState>){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable <boolean> | boolean {
       
        this.subjectid = route.params.subjectid;

            return this.serv.get_levels(this.subjectid).map(e => {
                this.ngRedux.dispatch({type: SET_LEVELS, levels:e});
                return true;
            }).catch(() => {
                this.router.navigateByUrl('subjects/subject/notfound');
                return of(false);
            });
       
    }
}