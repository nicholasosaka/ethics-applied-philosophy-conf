import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'

let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE!);

type Data = {
    name: string,
    email: string,
    institution: string,
    studentstatus: string,
    abstract: string,
    keywords: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const body = req.body
    console.log(`Form submission received`)
    try {
        const records = await base('Submissions').create([
            {
                "fields": {
                    "Abstract": body.abstract,
                    "Keywords": body.keywords,
                    "Name": body.name,
                    "Email": body.email,
                    "Institution": body.institution,
                    "Student Status": body.studentstatus
                }
            },
        ]);
        console.log("Success");
        return res.redirect('/cfp/confirmation');
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.redirect('/cfp/failure');
    }
}
