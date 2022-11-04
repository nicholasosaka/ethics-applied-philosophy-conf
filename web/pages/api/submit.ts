import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import nodemailer from 'nodemailer'

let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE!);

type Data = {
    name: string,
    email: string,
    institution: string,
    studentstatus: string,
    abstract: string,
    keywords: string,
    title: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const body = req.body
    console.log(`Form submission received`)
    base('Submissions').create([
        {
            "fields": {
                "Abstract": body.abstract,
                "Keywords": body.keywords,
                "Name": body.name,
                "Email": body.email,
                "Institution": body.institution,
                "Student Status": body.studentstatus,
                "Title": body.title
            }
        },
    ]).then(async (records) => {
        console.log(`ID: ${records[0].getId()}`);

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // generated ethereal user
                pass: process.env.EMAIL_PASS, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: {
                name: "Ethics and Applied Philosophy Graduate Conference",
                address: process.env.EMAIL_USER!
            },
            to: body.email, // list of receivers
            subject: "Submission Confirmation for the Ethics and Applied Philosophy Graduate Conference", // Subject line
            text:
                `This is a receipt of submission for the Ethics and Applied Philosophy Graduate Conference

            Name: ${body.name}
            Email: ${body.email}
            Institution: ${body.institution}
            Student Status: ${body.studentstatus}
            Paper Title: ${body.title}
            
            Your abstract and keywords are ommitted for brevity.
            
            Thank you for your submission!`,
        });

        console.log("Message sent: %s", info.messageId);

    }).catch(e => console.error(e))

    res.redirect('/cfp/confirmation')
}
