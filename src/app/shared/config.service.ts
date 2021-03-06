import { Inject } from '@angular/core';


export class ConfigService {

    constructor( @Inject('Window') private window: any) {
    }

    getApiUrl(): string {
        console.log(window.location.hostname);
        if (window.location.hostname === 'localhost') {
            return 'http://localhost:1466';
        } else if (window.location.hostname === 'dakq62eaafsg6.cloudfront.net'
            || window.location.hostname === 'auction.svuus.org') {
            return 'https://nnr40fq1oj.execute-api.us-west-2.amazonaws.com/prod';
        }
        return '';
    }

    getStage(): string {
        if (window.location.hostname === 'localhost')
            return 'dev';
        else
            return 'prod';
    }

    getStripeToken(): string {
        if (window.location.hostname === 'localhost')
            return 'pk_test_TplRtT5yloUqkARvZ1QR4dzt';
        else
            return 'pk_test_TplRtT5yloUqkARvZ1QR4dzt';
    }
};
