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

> **What is OpenAI?** OpenAI is the company that created ChatGPT. The same AI that powers ChatGPT is available through their API (Application Programming Interface), which lets developers like you send messages to the AI from your own code and get responses back.

Follow these steps to create an account and generate your first API key:

#### Step 1 – Create a free OpenAI account

1. Open your browser and go to **[https://platform.openai.com/signup](https://platform.openai.com/signup)**.
2. Click **Sign up**.
3. Enter your **email address** and click **Continue**, or sign up instantly with your Google or Microsoft account.
4. Create a **password** (if using email) and click **Continue**.
5. Check your inbox for a **verification email** from OpenAI, open it, and click the confirmation link.
6. Fill in your name and (optionally) your organization, then click **Continue**.

You now have a free OpenAI account.

#### Step 2 – Add a small credit balance (required to use the API)

> The ChatGPT website is free to use, but API access is **pay-as-you-go**. For light experimentation, **$5 is enough to run thousands of requests**.

1. In the left sidebar, click **Settings** (gear icon) → **Billing**.
2. Click **Add payment method**, enter your card details, and confirm.
3. Under **Add to credit balance**, enter `5` (USD) and click **Confirm**.

#### Step 3 – Generate your API key

1. In the top-left corner, click the OpenAI logo to return to the home dashboard, then go to **[https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)**  
   *(or click **API keys** in the left sidebar)*.
2. Click the **+ Create new secret key** button.
3. Give your key a descriptive name (e.g. `my-first-ai-project`) and click **Create secret key**.
4. A key starting with `sk-...` will appear. **Copy it immediately** — OpenAI will never show it to you again.  
   Paste it somewhere safe (e.g. a notes app) for the next step.

#### Step 4 – Set your environment variables

Use the values below when following the [Setup](#setup) section:

```bash
export AI_KEY="sk-..."                        # the key you just copied
export AI_URL="https://api.openai.com/v1"
export AI_MODEL="gpt-4o-mini"                 # cheap model, great for beginners
npm start
```

> **Tip:** `gpt-4o-mini` is OpenAI's most affordable model and works great for learning. Once you're comfortable, you can switch `AI_MODEL` to `gpt-4o` for more powerful responses.

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