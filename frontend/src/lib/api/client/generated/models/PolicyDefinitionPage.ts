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
import type { PolicyDefinitionDto } from './PolicyDefinitionDto';
import {
    PolicyDefinitionDtoFromJSON,
    PolicyDefinitionDtoFromJSONTyped,
    PolicyDefinitionDtoToJSON,
    PolicyDefinitionDtoToJSONTyped,
} from './PolicyDefinitionDto';

/**
 * All data for the policy definition page as required by the UI
 * @export
 * @interface PolicyDefinitionPage
 */
export interface PolicyDefinitionPage {
    /**
     * Policy Definition Entries
     * @type {Array<PolicyDefinitionDto>}
     * @memberof PolicyDefinitionPage
     */
    policies: Array<PolicyDefinitionDto>;
}

/**
 * Check if a given object implements the PolicyDefinitionPage interface.
 */
export function instanceOfPolicyDefinitionPage(value: any): value is PolicyDefinitionPage {
    if (!('policies' in value) || value['policies'] === undefined) return false;
    return true;
}

export function PolicyDefinitionPageFromJSON(json: any): PolicyDefinitionPage {
    return PolicyDefinitionPageFromJSONTyped(json, false);
}

export function PolicyDefinitionPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyDefinitionPage {
    if (json == null) {
        return json;
    }
    return {
        
        'policies': ((json['policies'] as Array<any>).map(PolicyDefinitionDtoFromJSON)),
    };
}

export function PolicyDefinitionPageToJSON(json: any): PolicyDefinitionPage {
    return PolicyDefinitionPageToJSONTyped(json, false);
}

export function PolicyDefinitionPageToJSONTyped(value?: PolicyDefinitionPage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'policies': ((value['policies'] as Array<any>).map(PolicyDefinitionDtoToJSON)),
    };
}

