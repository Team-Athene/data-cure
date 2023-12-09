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

export type LhFileControllerGenerateIpnsData = any

export type LhFileControllerMigrateS3Data = any

export type LhFileControllerRetriveJwtData = any

export type LhFileControllerUploadUserData = any

export interface S3Dto {
  /** @example "AKIAZB27L43CC3JJNZX2" */
  accessKeyId: string
  /** @example "datacure-dapp" */
  bucket: string
  /** @example "8Qyo70ZCgaoOozu4Zgnit79NUiEaZsYj8iC7GNS9" */
  key: string
  /** @example "ap-south-1" */
  region: string
}

export interface UploadDto {
  s3: S3Dto
  user: UserDto
}

export interface UserDto {
  /** @example "123443218765" */
  aadhar: number
  /** @example "31-45" */
  age: string
  /** @example "B+" */
  bloodGroup: string
  /** @example "Caucasian" */
  ethnicity: string
  /** @example "Male" */
  gender: string
  /** @example "Dennis Sam" */
  name: string
  /** @example "true" */
  sale: boolean
}
