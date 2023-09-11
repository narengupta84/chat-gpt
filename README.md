# Chat-GPT Node API

This Node.js API allows you to integrate the OpenAI GPT-3 language model into your applications for chatbot functionality. It uses Express.js for the server, the OpenAI API for natural language processing, dotenv for environment variables, and CORS for handling cross-origin requests.

## Getting Started
These instructions will help you set up and run the Chat-GPT Node API on your local machine or a server.

## Prerequisites
Before you begin, ensure you have the following prerequisites installed:

1. Node.js (v16.20.1)
2. npm or Yarn package manager
3. An OpenAI API key. You can sign up for one at OpenAI.


## Installation
git clone https://github.com/narengupta84/chat-gpt.git
cd chat-gpt

## Create a .env file in the project root directory and add your OpenAI API key:
1. `CHAT_GPT_API_KEY={YOUR_OPENAI_KEY}`
2. `PORT=3000`


## Running the Server
1. npm i
2. npm run dev

By default, the server runs on port 3000, but you can configure this in the ``.env`` file using the PORT variable.

## API Endpoints

The API provides the following endpoints:

1. POST http://localhost:3000/: Send a chat message to the GPT-3 model for processing.
curl -X POST -H "Content-Type: application/json" -d '{"question": "Hello, GPT-3!"}' 


Happy chatting with GPT-3!
