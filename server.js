import { config } from "dotenv"
config()
import express from 'express';
import cors from 'cors';
const app = express()

import OpenAI from 'openai';


//BEGIN Increase bodyParser size so that API can handle big image file byte array
//var bodyParser = require('body-parser');
import bodyParser from 'body-parser';

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
//END Increase bodyParser size so that API can handle big image file byte array

// Use the cors middleware
app.use(cors());

app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_API_KEY,
});


app.get('/', async (req, res) => {
  res.send(
    'Welcome to Chat-GPT 🚀'
  );
});

app.post('/', async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: req.body.question }],
    model: 'gpt-3.5-turbo',
  });
  res.send({
    "answer": completion.choices[0].message.content
  });
});

app.listen(process.env.PORT, () => console.log(`Node API app is running 🚀 on port ${process.env.PORT}`))