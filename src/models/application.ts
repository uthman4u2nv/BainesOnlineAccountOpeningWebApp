import { NumberLiteralType } from "typescript";

export interface BVNReq{
    BVN:string;
}
export interface BVNResp{
    phoneNumber:string;
    FirstName:string;
    LastName:string;
    OtherNames:string;
    DOB:string;
}

export interface AppReq{
    FirstName:string;
    MiddleName:string;
    LastName: string;
    Email:string;
    DateOfBirth:string;
    Gender:number;
    Address:string;
    PhoneNumber:string;
    ProductCode2:string;
}
export interface FixedReq{
    LiquidationAccount:string;
    CustomerID:string;
    Amount:number;
    Tenure:number;
    InterestRate:number;
    ProductCode:string;
}
export interface Applicationresponse{
    responseCode:string;
    responseMessage:string;
    AccountNumber:string;
    CustomerID:string;
    FullName:string;
}
export interface FixedDepositResponse{
    responseCode:string;
    responseMessage:string;
}