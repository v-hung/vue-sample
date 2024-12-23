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

export class TicketDto {
    'id': number;
    'creator': UserDto;
    'approver': UserDto;
    'type': TicketDtoTypeEnum;
    'status': TicketDtoStatusEnum;
    'description': string;
    'createdAt': Date;
    'updatedAt'?: Date;
    'createdBy': UserDto;
    'lastModifiedBy'?: UserDto;

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
            "name": "creator",
            "baseName": "creator",
            "type": "UserDto",
            "format": ""
        },
        {
            "name": "approver",
            "baseName": "approver",
            "type": "UserDto",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TicketDtoTypeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TicketDtoStatusEnum",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
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
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "UserDto",
            "format": ""
        },
        {
            "name": "lastModifiedBy",
            "baseName": "lastModifiedBy",
            "type": "UserDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TicketDto.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TicketDtoTypeEnum {
    TimesheetAdjustment = 'TIMESHEET_ADJUSTMENT',
    LeaveRequest = 'LEAVE_REQUEST',
    OvertimeRequest = 'OVERTIME_REQUEST',
    WorkFromHome = 'WORK_FROM_HOME'
}
export enum TicketDtoStatusEnum {
    Pending = 'PENDING',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
    Cancelled = 'CANCELLED'
}

