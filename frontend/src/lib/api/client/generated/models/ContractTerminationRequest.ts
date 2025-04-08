/* eslint-disable */
/**
 * sovity EDC API Wrapper
 * sovity\'s EDC API Wrapper contains a selection of APIs for multiple consumers, e.g. our EDC UI API, our generic Use Case API, our Commercial Edition APIs, etc. We bundled these APIs, so we can have an easier time generating our API Client Libraries.
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: contact@sovity.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Data for terminating a Contract Agreement
 * @export
 * @interface ContractTerminationRequest
 */
export interface ContractTerminationRequest {
    /**
     * A user explanation to detail why the contract was terminated.
     * @type {string}
     * @memberof ContractTerminationRequest
     */
    detail: string;
    /**
     * A short reason why this contract was terminated
     * @type {string}
     * @memberof ContractTerminationRequest
     */
    reason: string;
}

/**
 * Check if a given object implements the ContractTerminationRequest interface.
 */
export function instanceOfContractTerminationRequest(value: any): value is ContractTerminationRequest {
    if (!('detail' in value) || value['detail'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function ContractTerminationRequestFromJSON(json: any): ContractTerminationRequest {
    return ContractTerminationRequestFromJSONTyped(json, false);
}

export function ContractTerminationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractTerminationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'detail': json['detail'],
        'reason': json['reason'],
    };
}

export function ContractTerminationRequestToJSON(json: any): ContractTerminationRequest {
    return ContractTerminationRequestToJSONTyped(json, false);
}

export function ContractTerminationRequestToJSONTyped(value?: ContractTerminationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'detail': value['detail'],
        'reason': value['reason'],
    };
}

