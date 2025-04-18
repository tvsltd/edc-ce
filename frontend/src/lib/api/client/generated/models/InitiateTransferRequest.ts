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
 * For type PARAMS_ONLY: Required data for starting a Transfer Process
 * @export
 * @interface InitiateTransferRequest
 */
export interface InitiateTransferRequest {
    /**
     * Contract Agreement ID
     * @type {string}
     * @memberof InitiateTransferRequest
     */
    contractAgreementId: string;
    /**
     * Transfer Type. Used to select a compatible DataPlane. Examples are 'HttpData-PUSH', 'HttpData-PULL'. Not to be confused with the 'type' of the data source, or the 'type' of the data sink found in the 'properties'
     * @type {string}
     * @memberof InitiateTransferRequest
     */
    transferType: string;
    /**
     * Data Sink / Data Address
     * @type {{ [key: string]: string; }}
     * @memberof InitiateTransferRequest
     */
    dataSinkProperties: { [key: string]: string; };
    /**
     * Additional transfer process properties. These are not passed to the consumer EDC
     * @type {{ [key: string]: string; }}
     * @memberof InitiateTransferRequest
     */
    transferProcessProperties: { [key: string]: string; };
}

/**
 * Check if a given object implements the InitiateTransferRequest interface.
 */
export function instanceOfInitiateTransferRequest(value: any): value is InitiateTransferRequest {
    if (!('contractAgreementId' in value) || value['contractAgreementId'] === undefined) return false;
    if (!('transferType' in value) || value['transferType'] === undefined) return false;
    if (!('dataSinkProperties' in value) || value['dataSinkProperties'] === undefined) return false;
    if (!('transferProcessProperties' in value) || value['transferProcessProperties'] === undefined) return false;
    return true;
}

export function InitiateTransferRequestFromJSON(json: any): InitiateTransferRequest {
    return InitiateTransferRequestFromJSONTyped(json, false);
}

export function InitiateTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiateTransferRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'contractAgreementId': json['contractAgreementId'],
        'transferType': json['transferType'],
        'dataSinkProperties': json['dataSinkProperties'],
        'transferProcessProperties': json['transferProcessProperties'],
    };
}

export function InitiateTransferRequestToJSON(json: any): InitiateTransferRequest {
    return InitiateTransferRequestToJSONTyped(json, false);
}

export function InitiateTransferRequestToJSONTyped(value?: InitiateTransferRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'contractAgreementId': value['contractAgreementId'],
        'transferType': value['transferType'],
        'dataSinkProperties': value['dataSinkProperties'],
        'transferProcessProperties': value['transferProcessProperties'],
    };
}

