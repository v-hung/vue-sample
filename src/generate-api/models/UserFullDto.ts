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

import { ProfileDto } from '../models/ProfileDto';
import { RoleDto } from '../models/RoleDto';
import { TeamDto } from '../models/TeamDto';
import { UserDto } from '../models/UserDto';
import { WorkTime } from '../models/WorkTime';
import { HttpFile } from '../http/http';

export class UserFullDto {
    'id': number;
    'name': string;
    'email': string;
    'position'?: UserFullDtoPositionEnum;
    'supervisor'?: UserDto;
    'team'?: TeamDto;
    'status': UserFullDtoStatusEnum;
    'roles': Array<RoleDto>;
    'leaveHours': number;
    'profile'?: ProfileDto;
    'workTime'?: WorkTime;
    'firstLogin'?: boolean;

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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "UserFullDtoPositionEnum",
            "format": ""
        },
        {
            "name": "supervisor",
            "baseName": "supervisor",
            "type": "UserDto",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "TeamDto",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UserFullDtoStatusEnum",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<RoleDto>",
            "format": ""
        },
        {
            "name": "leaveHours",
            "baseName": "leaveHours",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "ProfileDto",
            "format": ""
        },
        {
            "name": "workTime",
            "baseName": "workTime",
            "type": "WorkTime",
            "format": ""
        },
        {
            "name": "firstLogin",
            "baseName": "firstLogin",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserFullDto.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UserFullDtoPositionEnum {
    Developer = 'DEVELOPER',
    ProjectManager = 'PROJECT_MANAGER',
    HrManager = 'HR_MANAGER',
    TeachLeader = 'TEACH_LEADER',
    Tester = 'TESTER',
    TestLeader = 'TEST_LEADER',
    Ceo = 'CEO',
    Sale = 'SALE'
}
export enum UserFullDtoStatusEnum {
    Active = 'ACTIVE',
    Onboarding = 'ONBOARDING',
    OffBoarding = 'OFF_BOARDING',
    Inactive = 'INACTIVE'
}

