# Your First AI Request

A minimal Node.js project that sends a chat completion request to an AI provider using the [OpenAI SDK](https://github.com/openai/openai-node).

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (uses top-level `await`)
- An API key from an OpenAI-compatible AI provider

---

## Environment Variables

The script requires three environment variables. Set them in your shell before running, or create a `.env` file and load it with a tool like [`dotenv`](https://www.npmjs.com/package/dotenv).

| Variable   | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| `AI_KEY`   | Your API key for the AI provider (see below for how to obtain one)          |
| `AI_URL`   | The base URL of the AI provider's API (e.g. `https://api.openai.com/v1`)   |
| `AI_MODEL` | The model name to use (e.g. `gpt-4o`, `gpt-3.5-turbo`)                    |

### How to get `AI_KEY`

`AI_KEY` is the secret API key that authenticates your requests to the AI provider. Here are the most common sources:

**OpenAI (openai.com)**
1. Sign up or log in at <https://platform.openai.com>.
2. Click your profile icon → **API keys**.
3. Click **Create new secret key**, give it a name, and copy the key.
4. Store it somewhere safe — OpenAI will not show the full key again.

**GitHub Models (free)**
1. Go to <https://github.com/marketplace/models>.
2. Pick a model (e.g. `gpt-4o`) and click **Get API key**.
3. Generate a **Personal Access Token** (classic or fine-grained) with no special scopes.
4. Use `https://models.inference.ai.azure.com` as `AI_URL`.

**Azure OpenAI**
1. Create an Azure OpenAI resource in the [Azure portal](https://portal.azure.com).
2. Go to **Keys and Endpoint** inside your resource.
3. Copy **KEY 1** (or KEY 2) and the **Endpoint** URL.

**Other OpenAI-compatible providers** (Mistral, Together AI, Groq, etc.)
- Sign up on the provider's website and navigate to their **API Keys** or **Developer** section to generate a key.

> ⚠️ **Never commit your API key to source control.** Add any file that contains it (e.g. `.env`) to `.gitignore`.

---

## Installation

```bash
# 1. Clone the repo
git clone https://github.com/harimanasa/Your-First-AI-Request.git
cd Your-First-AI-Request

# 2. Install dependencies
npm install
```

---

## Usage

```bash
export AI_KEY="your-api-key-here"
export AI_URL="https://api.openai.com/v1"
export AI_MODEL="gpt-4o"

npm start
```

Expected output:

```
Prompt: Suggest some gifts for someone who loves hiphop music
Making AI request...
AI response:
1. Vinyl records from classic hip-hop albums ...
```

---

## Project Structure

```
.
├── index.js        # Main script — sends the AI request
├── utils.js        # checkEnvironment() — validates required env vars
├── package.json    # Project metadata and dependencies
└── README.md       # This file
```

---

## How It Works

1. `checkEnvironment()` verifies that `AI_KEY`, `AI_URL`, and `AI_MODEL` are set before anything else runs.
2. An `OpenAI` client is created pointing at your chosen provider.
3. A chat completion request is sent with the hard-coded prompt.
4. The response is printed to the console; errors are caught and reported with helpful messages.
