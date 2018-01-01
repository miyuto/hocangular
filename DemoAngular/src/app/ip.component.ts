import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { IpService } from './ip.service';

@Component({
    selector: 'app-ip',
    template: '<h3> {{ ip }}</h3>',
    providers: [IpService]
})
export class IpComponent implements  OnInit {
    ip: String;
    constructor(private ipService: IpService) {

    }
    ngOnInit(): void {
        this.ipService.getIP().then(ip => this.ip = ip);
    }
}
