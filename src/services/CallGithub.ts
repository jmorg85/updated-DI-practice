import { inject, Service } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Response } from "../models/Response";

@Service()
export class CallGithubAPI {
    http = inject(HttpClient);

    GetAll(): Observable<Response[]> {
        return this.http.get<Response[]>('https://api.github.com/users/jmorg85/repos')
    }
}