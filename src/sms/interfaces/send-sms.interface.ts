export interface SendSmsParams {
    phone: string;
    text: string;
}

export interface SendSmsResponse {
    trasactionid: number;
    smsid: string;
}

export interface SendSmsErrorResponse {
    errorCode: number;
    errMsg: string;
}