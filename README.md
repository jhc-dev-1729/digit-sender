# digit-sender
👉 A PIN sender package for NestJS.

## 🚀 Install

```
npm i @nestjs-1729/digit-sender
```

## 🖵 Preview

<p align="center">
<img src="https://github.com/jhc-dev-1729/digit-sender/blob/master/pin_template_sample.png?raw=true" alt="pin_template_sample" width="500px" textalign="center">
</p>

## 💻 Usage
```
/** .../app.module.ts */

...
import { DigitSenderModule } from '@nestjs-1729/digit-sender/dist/digit-sender.module';
...

@Module({
  ...
  imports: [
    ...
    DigitSenderModule.forRoot({
      hostType: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWD
      }
    })
    ...
  ]
  ...
})
```
```
/** .../app.service.ts */

...
import {DigitSenderService} from '@nestjs-1729/digit-sender/dist/digit-sender.service'
...

@Injectable()
export class AppService {
  ...
  constructor(
    private digitSenderService: DigitSenderService
  ){}
  
  async sendPinViaEmail(...){
    await this.digitSenderService.sendPin({
      to: 'to@sample.com',
      from: 'from@sample.com',
      contactMail: 'contact@sample.com',
      subject: 'Sample Subject',
      pinSize: 6,
      wordmark: 'Sample'
    },
    (pin: string) => {
      /** pin handler */
    },
    (result: any) => {
      /** success handler */
    },
    (error: any) => {
      /** error handler */
    })
  }
  ...
}
```

## 📖 Document

### DigitSenderModule.forRoot({...})

``` 
DigitSenderModule.forRoot({
  hostType: string,
  auth: {
    user: string,
    pass: string
  },
  hostInfo: {
    host: string,
    port: number,
    secure: boolean
  }
}) 
```
``` hostType ``` - gmail | custom

``` hostInfo ``` - Optional | Mandatory

### sendPin(...)

```
this.digitSenderService.sendPin(sendMail, pinHandler, [successHandler, errorHandler])
```

``` 
sendMail = {
    to: string, 
    from: string,
    contactMail: string,
    subject: string, 
    pinSize: number,
    wordmark: string,
}
```

```pinHandler``` - A function that can manage with generated pin before sending mail.

```successHandler``` - A function that can execute after successful email sending process.

```errorHandler``` - A function that can execute after unsuccessful email sending process.

### pin.hbs
You can find and edit ```pin.hbs``` file at ```.../dist/templates``` folder. Furthermore, you can see the bunch of ***commented*** ```html``` code with ```<!-- optional -->```. You can use it whenever you want to add the ```© Copyright``` on the bottom of the email content.

## 🧑‍💻 Contributor 
Email Template Designed By [JAE](http://github.com/JAE-L)
