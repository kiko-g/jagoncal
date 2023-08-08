// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'

type Data = {
  message: string
  stdout?: string | string[]
  stderr?: string | string[]
}

// @desc     Ping service
// @route    GET /api/
// @access   Public
export default async function ping(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const scriptPath = './scripts/coords'
    exec(scriptPath, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return res.status(500).json({ message: 'Failed to execute C program.' })
      }

      res.json({
        message: `Successfully ran ${scriptPath}`,
        stdout: stdout.trim().split('\n'),
        stderr: stderr.trim().split('\n'),
      })
    })
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Something went wrong'
    res.status(500).json({ message: msg })
  }
}
