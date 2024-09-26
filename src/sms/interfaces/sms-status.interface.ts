export interface SmsStatusResponse {
    smsid: string;
    status: number;
    statusdate: string;
}

export interface SmsStatusErrorResponse {
    errorCode: number;
    errMsg: string;
}

export interface SmsStatusParams {
    uTime: number;
    username: string;
    transactionId: number;
    smsId: string;
}