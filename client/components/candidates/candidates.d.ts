import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
export declare class CandidatesComponent {
    private _router;
    private _httpprovider;
    candidates: any[];
    manageCandidate: {};
    manage: Boolean;
    constructor(_router: Router, _httpprovider: Httpprovider);
    delete(candidate: any): boolean;
    calculateAge(birthday: any): number;
    submitCandidate(candidate: any): boolean;
    edit(candidate: any): boolean;
    ngOnInit(): void;
}
