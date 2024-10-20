![Github image](https://myoctocat.com/assets/images/base-octocat.svg)

## Kerakli npm larni o'rnatish

```bash
$ npm install
```

## Loyihani ishlatish

### Loyiha uchun kerak bo'ladigan kalitlarni qo'shish

```bash
# .env.example file nomini .env ga o'zgartiring
$ mv .env.example .env


# .env filedagi kalitlarni o'zingizniki bilan o'zgartiring
$ nano .env

```

> [!NOTE]
> Tepadagi buyruqlar odatda Linux OS uchun siz ketmaketliklarni sichqoncha orqali bajarsangiz ham bo'ladi

### Nest serverni yoqish

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Sayqal.uz ning sms jo'natish xizmatidan foydalanish uchun nodejs(nestjs) misol. Bu norasmiy !

> [!NOTE]
> Kod da va logikada hato va kamchiliklar bo'lishi mumkun, zero hatosiz kod bu yozilmagan yoki o'chirib tashlagan koddir.


### Maxfiy kalitlar

```bash
# sayqal.uz dagi sizning usernameingiz
SAYQAL_CLIENT_USERNAME= 

# sayqal.uz sms jo'natish uchun API endpoint
SAYQAL_SMS_SEND_URL="https://routee.sayqal.uz/sms"

# sayqal.uz tomonidan beriladigan maxfiy kalit
SAYQAL_CLIENT_SECRET=s
```


## Contributing

Agar biron hato yoki refactor qilmoqchi bo'lsangiz pull request ochsangiz hursand bo'laman...
