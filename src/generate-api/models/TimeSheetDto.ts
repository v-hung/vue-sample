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

import { UserDto } from '../models/UserDto';
import { HttpFile } from '../http/http';

export class TimesheetDto {
    'id': string;
    'date': string;
    'startTime'?: string;
    'endTime'?: string;
    'workMinutes'?: number;
    'user': UserDto;
    'createdAt'?: Date;
    'updatedAt'?: Date;

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
            "type": "string",
            "format": "time"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string",
            "format": "time"
        },
        {
            "name": "workMinutes",
            "baseName": "workMinutes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "UserDto",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return TimesheetDto.attributeTypeMap;
    }

    public constructor() {
    }
}
