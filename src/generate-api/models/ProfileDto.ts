/**
 * OpenApi specification - My Spring App
 * OpenApi document for Spring Security
 *
 * OpenAPI spec version: 1.0
 * Contact: viet.hung.2898@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProfileDto {
    'birthDate'?: string;
    'phone'?: string;
    'gender'?: boolean;
    'avatar'?: string;
    'permanentAddress'?: string;
    'contactAddress'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "birthDate",
            "baseName": "birthDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "permanentAddress",
            "baseName": "permanentAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactAddress",
            "baseName": "contactAddress",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProfileDto.attributeTypeMap;
    }

    public constructor() {
    }
}
