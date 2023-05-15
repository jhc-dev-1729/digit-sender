interface DigitSenderConfig{
    hostType: string, 
    auth: EmailAuth, 
    hostInfo?: HostInfo
}

interface HostInfo{
    host: string,
    port?: number,
    secure?: boolean
}

interface DigitSenderTransport extends HostInfo{
    secure: boolean | undefined,
    auth: EmailAuth,
}

interface EmailAuth{
    user: string,
    pass: string,
}

interface DigitSenderMailInfo{
    to: string, 
    from: string,
    contactMail: string,
    subject: string, 
    pinSize: number,
    wordmark: string,
}

export {DigitSenderConfig, HostInfo, EmailAuth, DigitSenderTransport, DigitSenderMailInfo}