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

    }).catch(e => console.error(e))

    res.redirect('/cfp/confirmation')
}
