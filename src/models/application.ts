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
export interface Applicationresponse{
    responseCode:string;
    responseMessage:string;
    AccountNumber:string;
    CustomerID:string;
    FullName:string;
}