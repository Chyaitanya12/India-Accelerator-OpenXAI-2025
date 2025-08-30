# Document Summarizer

## Project Information

**Name**: Chaitanya Niranjan Sutrave (Chaitanyasutrave22@gmail.com)  
**Team Name**: OpenXAI Innovators  
**Project Name**: Document Summarizer  
**Project Description**: An AI-powered document summarization tool that uses Ollama's language models to generate concise summaries of text documents. The application provides a clean, user-friendly interface for pasting text and receiving AI-generated summaries in real-time.

**Track**: AI-Powered Productivity Tools

## Overview

Document Summarizer is a Next.js application that leverages Ollama's language models to provide intelligent document summarization. Users can paste any text content, and the AI will generate a clear, concise summary that captures the main points and key information.

## Features

- **AI-Powered Summarization**: Uses Ollama's language models for high-quality text summarization
- **Clean UI**: Modern, responsive interface with gradient background
- **Real-time Processing**: Instant summarization with loading states
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **TypeScript**: Full TypeScript support for better development experience

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **AI Integration**: Ollama JavaScript library
- **Styling**: CSS3 with modern design patterns
- **Model**: llama3 (configurable via ollama-model.txt)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Ollama installed and running locally
- llama3 model downloaded in Ollama

### Installation

1. **Install Ollama** (if not already installed):
   ```bash
   # On macOS
   brew install ollama
   
   # Or download from https://ollama.com
   ```

2. **Download the model**:
   ```bash
   ollama pull llama3
   ```

3. **Install project dependencies**:
   ```bash
   cd nextjs-app
   npm install
   ```

### Running the Application

1. **Start Ollama** (if not already running):
   ```bash
   ollama serve
   ```

2. **Start the development server**:
   ```bash
   cd nextjs-app
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
cd nextjs-app
npm run build
npm start
```

## Usage

1. Open the application in your web browser
2. Paste the text you want to summarize into the text area
3. Click the "Summarize Document" button
4. Wait for the AI to process your text (typically takes a few seconds)
5. View the generated summary below the input area

## API Endpoint

The application provides a single API endpoint:

- **POST /api/summarize**
  - **Request Body**: `{ "text": "your document content here" }`
  - **Response**: `{ "summary": "generated summary text" }`

## Project Structure

```
0001_Document-Summarizer/
├── nextjs-app/                 # Next.js application
│   ├── app/                    # App router directory
│   │   ├── api/                # API routes
│   │   │   └── summarize/      # Summarization endpoint
│   │   │       └── route.ts
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── package.json            # Dependencies and scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── next.config.mjs         # Next.js configuration
│   ├── next-env.d.ts           # Next.js TypeScript types
│   └── .gitignore             # Git ignore rules
├── ollama-model.txt           # Ollama model specification
└── README.md                  # This file
```

## Customization

### Changing the Model

To use a different Ollama model, edit the `ollama-model.txt` file:

```bash
# Change to a different model
echo "llama3.2" > ollama-model.txt
```

### Modifying the Prompt

The summarization prompt can be modified in `nextjs-app/app/api/summarize/route.ts` by changing the system message:

```typescript
{
  role: "system", 
  content: "Your custom prompt instructions here"
}
```

## Troubleshooting

### Common Issues

1. **Ollama not running**: Ensure Ollama is installed and the service is running
2. **Model not found**: Make sure the specified model is downloaded in Ollama
3. **Connection errors**: Check that the Ollama server is accessible

### Debug Mode

Enable debug logging by checking the browser console for detailed error messages.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with Next.js and Ollama
- Part of the OpenxAI Global AI Accelerator program
- Uses the llama3 language model

---

**Happy Summarizing! 🚀**
