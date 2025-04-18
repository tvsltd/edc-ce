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


/**
 * Value type of an asset selector criterion right expression value
 * @export
 */
export const UiCriterionLiteralType = {
    Value: 'VALUE',
    ValueList: 'VALUE_LIST'
} as const;
export type UiCriterionLiteralType = typeof UiCriterionLiteralType[keyof typeof UiCriterionLiteralType];


export function instanceOfUiCriterionLiteralType(value: any): boolean {
    for (const key in UiCriterionLiteralType) {
        if (Object.prototype.hasOwnProperty.call(UiCriterionLiteralType, key)) {
            if (UiCriterionLiteralType[key as keyof typeof UiCriterionLiteralType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UiCriterionLiteralTypeFromJSON(json: any): UiCriterionLiteralType {
    return UiCriterionLiteralTypeFromJSONTyped(json, false);
}

export function UiCriterionLiteralTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiCriterionLiteralType {
    return json as UiCriterionLiteralType;
}

export function UiCriterionLiteralTypeToJSON(value?: UiCriterionLiteralType | null): any {
    return value as any;
}

export function UiCriterionLiteralTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): UiCriterionLiteralType {
    return value as UiCriterionLiteralType;
}

