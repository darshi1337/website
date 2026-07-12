---
title: "Projects"
subtitle: "Selected Research & Implementations"
latex: true
---

<style>
  .byline { display: none; }
  sup { display: none; }
  main p:first-of-type::first-letter { float: revert; font-size: revert; font-family: revert; padding: revert; }
  .side img { max-width: 225px; box-shadow: none; margin-top: -26px; transition: transform 600ms ease-out; }
  @media (max-width: 860px) { .side img { margin-top: 0!important; } }
</style>

&nbsp;[^fn:1]Here is a curated list of research and engineering projects.

[^fn:1]: ![](./assets/images/home-illustration.png)

## Apogee

A privacy-first browser extension that performs local AI inference for webpage summarization and contextual question answering. Apogee integrates **WebLLM** and **WebGPU** to execute quantized language models directly inside the browser without relying on external APIs. For larger models, it seamlessly falls back to a local **Ollama** backend powered by a FastAPI server.

$$
\LARGE
\nabla
$$

- **Technologies**: JavaScript, WebGPU, WebLLM, FastAPI, Ollama, Python
- **Features**: In-browser LLM inference, streaming responses, browser extensions, local AI, cross-browser support
- **Repository**: https://github.com/darshi1337/apogee
- **License**: MIT

---

## HermitLM

An end-to-end framework for generating large-scale synthetic conversational datasets and training compact transformer language models from scratch. HermitLM includes automated data generation pipelines, custom tokenizer training, distributed model training, and evaluation tooling, enabling rapid experimentation with lightweight language models.

$$
\LARGE
\nabla
$$

- **Technologies**: Python, PyTorch, Transformers, SentencePiece, Hugging Face
- **Features**: Synthetic dataset generation, tokenizer training, transformer implementation, language model training
- **Repository**: https://github.com/darshi1337/hermitlm
- **License**: MIT
