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
 * ON_REQUEST type Data Source.
 * @export
 * @interface UiDataSourceOnRequest
 */
export interface UiDataSourceOnRequest {
    /**
     * Contact E-Mail address
     * @type {string}
     * @memberof UiDataSourceOnRequest
     */
    contactEmail: string;
    /**
     * Contact Preferred E-Mail Subject
     * @type {string}
     * @memberof UiDataSourceOnRequest
     */
    contactPreferredEmailSubject: string;
}

/**
 * Check if a given object implements the UiDataSourceOnRequest interface.
 */
export function instanceOfUiDataSourceOnRequest(value: any): value is UiDataSourceOnRequest {
    if (!('contactEmail' in value) || value['contactEmail'] === undefined) return false;
    if (!('contactPreferredEmailSubject' in value) || value['contactPreferredEmailSubject'] === undefined) return false;
    return true;
}

export function UiDataSourceOnRequestFromJSON(json: any): UiDataSourceOnRequest {
    return UiDataSourceOnRequestFromJSONTyped(json, false);
}

export function UiDataSourceOnRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiDataSourceOnRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'contactEmail': json['contactEmail'],
        'contactPreferredEmailSubject': json['contactPreferredEmailSubject'],
    };
}

export function UiDataSourceOnRequestToJSON(json: any): UiDataSourceOnRequest {
    return UiDataSourceOnRequestToJSONTyped(json, false);
}

export function UiDataSourceOnRequestToJSONTyped(value?: UiDataSourceOnRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'contactEmail': value['contactEmail'],
        'contactPreferredEmailSubject': value['contactPreferredEmailSubject'],
    };
}

