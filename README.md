# Your First AI Request

A simple Node.js project that makes your first AI chat request using the [OpenAI SDK](https://github.com/openai/openai-node).

## What it does

Sends a prompt to an AI model and prints the response to the console. The default prompt asks for gift ideas for someone who loves hip-hop music.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- An OpenAI-compatible API key

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/harimanasa/Your-First-AI-Request.git
   cd Your-First-AI-Request
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set the required environment variables** (see below)

4. **Run the project**

   ```bash
   npm start
   ```

## Environment Variables

The following environment variables **must** be set before running the project:

| Variable  | Description                                      | Example value                          |
|-----------|--------------------------------------------------|----------------------------------------|
| `AI_KEY`  | Your API key for the AI provider                 | `sk-...`                               |
| `AI_URL`  | Base URL of the AI provider's API                | `https://api.openai.com/v1`            |
| `AI_MODEL`| The model name to use                            | `gpt-4o`                               |

You can export them in your shell:

```bash
export AI_KEY="your-api-key-here"
export AI_URL="https://api.openai.com/v1"
export AI_MODEL="gpt-4o"
npm start
```

Or create a `.env` file and load it with a tool like [`dotenv`](https://www.npmjs.com/package/dotenv).

## How to get an AI_KEY

### Option 1 – OpenAI (recommended for beginners)

1. Go to [https://platform.openai.com/signup](https://platform.openai.com/signup) and create a free account.
2. After signing in, open the **API keys** page: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
3. Click **Create new secret key**, give it a name, and copy the key shown — you won't be able to see it again.
4. Set `AI_KEY` to that value, `AI_URL` to `https://api.openai.com/v1`, and `AI_MODEL` to a model you have access to (e.g. `gpt-4o-mini` for the free tier).

> **Note:** Some models require a paid plan. `gpt-4o-mini` works on the free tier with usage limits.

### Option 2 – GitHub Models (free, no credit card)

1. Go to [https://github.com/marketplace/models](https://github.com/marketplace/models).
2. Pick a model (e.g. `gpt-4o`), click **Get API key**, and follow the prompts to generate a token.
3. Set:
   - `AI_KEY` → your GitHub token
   - `AI_URL` → `https://models.inference.ai.azure.com`
   - `AI_MODEL` → `gpt-4o`

### Option 3 – Other OpenAI-compatible providers

This project works with any provider that supports the OpenAI chat-completions API (e.g. Azure OpenAI, Groq, Together AI, Ollama). Consult your provider's documentation for the correct `AI_URL`, `AI_MODEL`, and `AI_KEY` values.

## Project structure

```
Your-First-AI-Request/
├── index.js        # Main script – builds the prompt and calls the AI
├── utils.js        # Helper that validates required environment variables
├── package.json
└── README.md
```

## License

This project is open source. Feel free to use and modify it.