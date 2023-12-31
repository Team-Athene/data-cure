/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  IPNSDto,
  LhFileControllerGenerateIpnsData,
  LhFileControllerMigrateS3Data,
  LhFileControllerPublishIpnsRecordData,
  LhFileControllerRetriveJwtData,
  LhFileControllerUploadUserData,
  S3Dto,
  UploadDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class LhFile<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags LHFile
   * @name LhFileControllerMigrateS3
   * @request POST:/lh-file/migrate-s3
   * @response `201` `LhFileControllerMigrateS3Data`
   */
  lhFileControllerMigrateS3 = (data: S3Dto, params: RequestParams = {}) =>
    this.request<LhFileControllerMigrateS3Data, any>({
      path: `/lh-file/migrate-s3`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags LHFile
   * @name LhFileControllerUploadUser
   * @request POST:/lh-file/upload-user
   * @response `201` `LhFileControllerUploadUserData`
   */
  lhFileControllerUploadUser = (data: UploadDto, params: RequestParams = {}) =>
    this.request<LhFileControllerUploadUserData, any>({
      path: `/lh-file/upload-user`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags LHFile
   * @name LhFileControllerRetriveJwt
   * @request GET:/lh-file/jwt
   * @response `200` `LhFileControllerRetriveJwtData`
   */
  lhFileControllerRetriveJwt = (params: RequestParams = {}) =>
    this.request<LhFileControllerRetriveJwtData, any>({
      path: `/lh-file/jwt`,
      method: 'GET',
      ...params,
    })
  /**
   * No description
   *
   * @tags LHFile
   * @name LhFileControllerPublishIpnsRecord
   * @request POST:/lh-file/publish-ipns
   * @response `201` `LhFileControllerPublishIpnsRecordData`
   */
  lhFileControllerPublishIpnsRecord = (
    data: IPNSDto,
    params: RequestParams = {},
  ) =>
    this.request<LhFileControllerPublishIpnsRecordData, any>({
      path: `/lh-file/publish-ipns`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags LHFile
   * @name LhFileControllerGenerateIpns
   * @request GET:/lh-file/generate-ipns
   * @response `200` `LhFileControllerGenerateIpnsData`
   */
  lhFileControllerGenerateIpns = (params: RequestParams = {}) =>
    this.request<LhFileControllerGenerateIpnsData, any>({
      path: `/lh-file/generate-ipns`,
      method: 'GET',
      ...params,
    })
}
