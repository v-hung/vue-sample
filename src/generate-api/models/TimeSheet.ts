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

import { LocalTime } from '../models/LocalTime';
import { HttpFile } from '../http/http';

export class TimeSheet {
    'id'?: string;
    'date': string;
    'startTime'?: LocalTime;
    'endTime'?: LocalTime;
    'workMinutes'?: number;
    'userId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "LocalTime",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "LocalTime",
            "format": ""
        },
        {
            "name": "workMinutes",
            "baseName": "workMinutes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TimeSheet.attributeTypeMap;
    }

    public constructor() {
    }
}
