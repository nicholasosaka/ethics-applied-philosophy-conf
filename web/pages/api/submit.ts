// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    email: string,
    institution: string,
    studentstatus: string,
    abstract: string,
    keywords: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const body = req.body
    res.status(200).json(
        {
            name: `${body.name}`,
            email: `${body.email}`,
            institution: `${body.institution}`,
            studentstatus: `${body.studentstatus}`,
            abstract: `${body.abstract}`,
            keywords: `${body.keywords}`,
        })
}
