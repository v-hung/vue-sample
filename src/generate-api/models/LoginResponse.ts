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

import { UserDto } from './UserDto'
import { HttpFile } from '../http/http'

export class LoginResponse {
  'user'?: UserDto
  'token'?: string
  'refreshToken'?: string

  static readonly discriminator: string | undefined = undefined

  static readonly mapping: { [index: string]: string } | undefined = undefined

  static readonly attributeTypeMap: Array<{
    name: string
    baseName: string
    type: string
    format: string
  }> = [
    {
      name: 'user',
      baseName: 'user',
      type: 'UserDto',
      format: '',
    },
    {
      name: 'token',
      baseName: 'token',
      type: 'string',
      format: '',
    },
    {
      name: 'refreshToken',
      baseName: 'refreshToken',
      type: 'string',
      format: '',
    },
  ]

  static getAttributeTypeMap() {
    return LoginResponse.attributeTypeMap
  }

  public constructor() {}
}
