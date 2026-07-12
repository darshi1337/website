---
title: "Resume"
subtitle: "Curriculum Vitae"
latex: true
---

<style>
  .byline { display: none; }
  sup { display: none; }
  main p:first-of-type::first-letter { float: revert; font-size: revert; font-family: revert; padding: revert; }

  .resume-section { margin-bottom: 2.2rem; }
  .resume-item { margin-bottom: 1.8rem; }
  .resume-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.1rem; }
  .resume-title { font-family: var(--font-sc); text-transform: lowercase; font-weight: bold; font-size: 1.35rem; }
  .resume-title a { color: var(--link); }
  .resume-date { font-style: italic; font-family: var(--font-sans); font-size: 1.15rem; color: var(--accent); white-space: nowrap; }
  .resume-subtitle { display: flex; justify-content: space-between; font-style: italic; margin-bottom: 0.6rem; font-size: 1.2rem; }
  .resume-subtitle span:last-child { font-family: var(--font-sans); font-size: 1.1rem; }
  .resume-details { list-style-type: circle; margin-left: 1.4rem; margin-top: 0.4rem; margin-bottom: 0.8rem; }
  .resume-details li { margin-bottom: 0.4rem; font-size: 1.25rem; line-height: 1.8rem; }
  .resume-details strong { font-weight: 600; }

  .download-btn-container {
    text-align: center;
    margin: 1.5rem 0 2.5rem;
  }
  .download-btn {
    font-family: var(--font-sans) !important;
    font-weight: 500;
    font-size: 1.15rem;
    color: var(--text);
    border: 1px solid var(--border);
    padding: 0.45rem 1rem;
    border-radius: 4px;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--button-bg);
  }
  .download-btn:hover {
    background: var(--button-hover-bg) !important;
    border-color: var(--text);
    color: var(--text);
  }

  .side img { max-width: 225px; box-shadow: none; margin-top: -26px; transition: transform 600ms ease-out; }
  @media (max-width: 860px) { .side img { margin-top: 0!important; } }

  @media (max-width: 600px) {
    .resume-header, .resume-subtitle { flex-direction: column; gap: 0.2rem; }
    .resume-date { font-size: 1.05rem; }
    .resume-subtitle span:last-child { font-size: 1rem; }
  }
</style>

<div class="download-btn-container">
  <a href="{{< relURL "resume.pdf" >}}" class="download-btn" target="_blank">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    Download PDF Resume
  </a>
</div>

&nbsp;[^fn:1]Detailed record of academic and professional activities.

[^fn:1]: ![](./assets/images/home-illustration.png)

## Education

<div class="resume-item">
  <div class="resume-header">
    <span class="resume-title">Indian Institute of Technology (BHU)</span>
    <span class="resume-date">Oct. 2022 -- May 2026</span>
  </div>
  <div class="resume-subtitle">
    <span>B.Tech in Mechanical Engineering &middot; CGPA: 8.37/10.0</span>
    <span>Varanasi, India</span>
  </div>
</div>

<div class="resume-item">
  <div class="resume-header">
    <span class="resume-title">Central Board of Secondary Education</span>
    <span class="resume-date">2020 -- 2022</span>
  </div>
  <div class="resume-subtitle">
    <span>Senior Secondary (Class XII): 94.6%</span>
    <span>Bhubaneswar, India</span>
  </div>
</div>

## Technical Skills

- **Languages:** Python, C/C++, JavaScript, SQL
- **Machine Learning & AI:** PyTorch, Transformers, Hugging Face, LLMs, RAG, ChromaDB, Fine-Tuning
- **Backend & APIs:** FastAPI, Flask, Django, REST APIs
- **Cloud & Tools:** AWS, Docker, Git, GitHub, Firebase, VS Code, CI/CD

## Experience

<div class="resume-item">
  <div class="resume-header">
    <span class="resume-title">Sirius AI</span>
    <span class="resume-date">June 2026 -- Present</span>
  </div>
  <div class="resume-subtitle">
    <span>AI Consultant</span>
    <span>Gurgaon, Haryana</span>
  </div>
  <ul class="resume-details">
    <li>Developed <strong>RAG</strong> applications using <strong>Python</strong> and <strong>vector databases</strong> for financial services knowledge retrieval.</li>
    <li>Built document processing pipelines with <strong>OCR</strong> and <strong>metadata extraction</strong> for enterprise knowledge bases.</li>
    <li>Collaborated with senior engineers to integrate <strong>LLM APIs</strong> and improve <strong>prompt performance</strong> across AI apps.</li>
    <li>Tested <strong>AI workflows</strong>, fixed backend issues, and delivered production-ready features using <strong>agile development</strong> practices.</li>
  </ul>
</div>

## Projects

<div class="resume-item">
  <div class="resume-header">
    <span class="resume-title"><a href="https://github.com/darshi1337/apogee">Apogee</a></span>
    <span class="resume-date">May 2026 -- Present</span>
  </div>
  <div class="resume-subtitle">
    <span>JavaScript, FastAPI, WebLLM, Ollama, RAGs</span>
  </div>
  <ul class="resume-details">
    <li>Built privacy-first cross-browser AI extension summarizing webpages and answering contextual questions.</li>
    <li>Integrated <strong>WebLLM</strong>, <strong>WebGPU</strong>, and <strong>Ollama</strong> enabling fully local language inference offline.</li>
    <li>Developed <strong>FastAPI</strong> backend with streaming responses, Python CLI, browser integration utilities.</li>
    <li>Implemented secure on-demand content extraction, browser messaging, supporting Chrome Firefox compatibility.</li>
  </ul>
</div>

<div class="resume-item">
  <div class="resume-header">
    <span class="resume-title"><a href="https://github.com/darshi1337/hermitlm">HermitLM</a></span>
    <span class="resume-date">April 2026 -- May 2026</span>
  </div>
  <div class="resume-subtitle">
    <span>PyTorch, Transformers, Tokenizers, Discord.py, gTTS, AWS</span>
  </div>
  <ul class="resume-details">
    <li>Generated and trained on a <a href="https://huggingface.co/datasets/darshi1337/hermitlm-100k-generic">100K synthetic conversation dataset</a> across 60 categories for consistent persona.</li>
    <li>Built an <strong>~8M parameter</strong> causal <strong>Transformer</strong> from scratch with multi-head attention and <strong>SwiGLU FFN</strong>.</li>
    <li>Developed a <strong>Discord bot</strong> interface that serves model responses with optional MP3 voice output using <strong>gTTS</strong>.</li>
    <li>Deployed the bot on an <strong>AWS EC2</strong> instance for <strong>24/7 availability</strong>, including environment setup.</li>
  </ul>
</div>

## Key Courses Taken

- **Mathematics:** Probability and Statistics (MA-202), Stochastic Process (MA-341)
- **Computer Science:** Operations Research (CSO-324), Database Management System (CSE-302)

## Achievements & Extra-Curricular Activities

| Achievement / Activity                                                                | Period       |
| :------------------------------------------------------------------------------------ | :----------- |
| **Inter IIT Tech Meet**: Secured 10th, 5th, and 6th positions in IGDC for three years | 2023 -- 2026 |
| **Rendezvous (IIT Delhi)**: Secured 3rd position in Sci-Biz-Tech Quiz                 | 2024         |
| **JEE Advanced**: Secured an All India Rank of 6110 out of 2 lakh candidates          | 2022         |
| **JEE Main**: Secured an All India Rank of 10089 out of 10 lakh candidates            | 2022         |
| **Technex**: Designed promotional posters as a member of the Design Team.             | 2024         |
| **RMO**: Qualified Regional Mathematical Olympiad (Top 35 in Odisha among all)        | 2019         |

## Positions of Responsibility

<div class="resume-item">
  <div class="resume-header">
    <span class="resume-title">Quiz Club, IIT (BHU)</span>
    <span class="resume-date">July 2024 -- May 2025</span>
  </div>
  <div class="resume-subtitle">
    <span>Joint Secretary</span>
  </div>
</div>
