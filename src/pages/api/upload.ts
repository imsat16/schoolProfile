import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const uploadHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const file = req.body.image;
    const response = await axios.post('https://example.com/upload', file, {
      headers: {
        'Content-Type': file.type,
      },
    });
    const imageUrl = response.data.url;
    // Lakukan proses upload gambar ke server atau penyimpanan yang Anda inginkan di sini
    // Dapatkan file gambar dari req.body.image

    // Contoh sederhana: Mengembalikan URL gambar yang diunggah

    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
};

export default uploadHandler;