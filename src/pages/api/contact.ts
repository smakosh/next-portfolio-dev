import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as Yup from 'yup';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email(),
      message: Yup.string().required(),
    });

    const data = await schema.validate(req.body);
    await axios({
      method: 'POST',
      url: `${process.env.FORMIUM_ENDPOINT}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    res.status(200).json({ message: 'Submission sent successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Submission failed to be sent.' });
  }
};

export default handler;
