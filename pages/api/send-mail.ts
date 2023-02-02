import type { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail"

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY)
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, subject, message } = req.body;
        const msg = {
            to: 'ion.georgiana@hotmail.com',
            from: 'ion.georgiana2001@gmail.com',
            subject: subject,
            text: message,
            html: "<h1>Test</h1>"
        };
        console.log(msg)
        try {
            await sgMail.send(msg).then(() => {
                console.log('Email sent');
            });
            res.status(200).json({ message: 'Email sent' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}


// import sgMail from "@sendgrid/mail"

// import axios from "axios";
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (data: { email: string, subject: string, message: string }) => {
//     const { email, subject, message } = data;
//     const msg = {
//         to: 'ion.georgiana@hotmail.com',
//         from: email,
//         subject: subject,
//         text: message,
//     };
//     try {
//         await sgMail.send(msg).then(() => {
//             console.log('Email sent');
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };

// export default sendEmail
