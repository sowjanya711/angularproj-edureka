import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
export declare class AddcandidateComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    candidat: {
        name: any;
        age: any;
        qualification: any;
    };
    resCandidate: {
        name: any;
        age: any;
        qualification: any;
    };
    constructor(_router: Router, _httpprovider: Httpprovider);
    submit(candidat: any): void;
}
