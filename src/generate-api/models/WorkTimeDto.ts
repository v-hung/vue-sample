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

export class WorkTimeDto {
    'id': number;
    'title': string;
    'startTimeMorning': string;
    'endTimeMorning': string;
    'startTimeAfternoon': string;
    'endTimeAfternoon': string;
    'allowedLateMinutes': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTimeMorning",
            "baseName": "startTimeMorning",
            "type": "string",
            "format": "time"
        },
        {
            "name": "endTimeMorning",
            "baseName": "endTimeMorning",
            "type": "string",
            "format": "time"
        },
        {
            "name": "startTimeAfternoon",
            "baseName": "startTimeAfternoon",
            "type": "string",
            "format": "time"
        },
        {
            "name": "endTimeAfternoon",
            "baseName": "endTimeAfternoon",
            "type": "string",
            "format": "time"
        },
        {
            "name": "allowedLateMinutes",
            "baseName": "allowedLateMinutes",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return WorkTimeDto.attributeTypeMap;
    }

    public constructor() {
    }
}
