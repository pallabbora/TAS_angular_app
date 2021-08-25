import { Manager } from "./Manager";

export interface Employee{

    employeeId: number,
    phoneNumber: number,
    firstName: string,
    lastName: string,
    gender: string,
    department: string,
    hireDate: Date,
    email: string,
    surveyStatus: string,
    //manager:{managerId:number}
    managerId:number

}