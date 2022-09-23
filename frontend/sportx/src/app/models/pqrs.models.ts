export class PqrModel{

    identification:string;
    type_identification:number;
    names_customer:string;
    last_names_customer:string;
    mobile_phone: string;
    mobile: string;
    email: string;
    title: string;
    description:string;
    status:number;

    constructor(
        identification:string,
        type_identification:number,
        names_customer:string,
        last_names_customer:string,
        mobile_phone: string,
        mobile: string,
        email: string,
        title: string,
        description:string,
        status:number,
    ){
        this.identification = identification;
        this.type_identification = type_identification;
        this.names_customer = names_customer;
        this.last_names_customer = last_names_customer;
        this.mobile_phone = mobile_phone;
        this.mobile = mobile;
        this.email = email;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}