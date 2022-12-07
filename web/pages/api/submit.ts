import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import nodemailer from 'nodemailer'

let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE!);

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const body = req.body
    console.log(`Form submission received`)
    const date = new Date();
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
        res.status(200).send(`Thank you for your submission. Your submission has been successfully received.\n\nSubmission ID: ${records[0].getId()}, processed at ${date.toISOString()}`)
    }).catch(e => {
        console.error(e)
        res.status(500).send('There was an error in processing your submission.\n\nPlease contact Steve Muir or Nikko Osaka, emails are on the submission portal page. Thank you!')
    })

}
