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
    console.log(`Form submission received (${body.title}), ${body.email}`)
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
        res.status(200).send(`Thank you for your submission. An organizer will be in contact within 72 hours to confirm submission. If you do not hear back within 72 hours, please email Nikko Osaka (email available on the submission portal page).\n\nSubmission ID: ${records[0].getId()}, processed at ${date.toISOString()}`)
    }).catch(e => {
        console.error(e)
        res.status(500).send('There was an error in processing your submission.\n\nPlease contact Steve Muir or Nikko Osaka, emails are on the submission portal page. Thank you!')
    })

}
