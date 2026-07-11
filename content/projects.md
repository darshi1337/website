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

&nbsp;[^fn:1]Here is a curated list of research and engineering projects. All formulations are documented under rigorous mathematical models.

[^fn:1]: ![](./assets/images/home-illustration.png)

## Fast Fourier Transform (FFT) in Rust

Implementation of a split-radix Cooley-Tukey FFT algorithm with cache-oblivious memory layouts.

$$\hat{X}_k = \sum_{n=0}^{N-1} x_n e^{-i 2\pi k n / N}$$

- **Repository**: [github.com/example/fft-rust](https://github.com/)
- **License**: MIT

## Convex Optimization Solver

An interior-point solver for second-order cone programming (SOCP) written in pure C.

$$\begin{aligned}
\text{minimize} \quad & c^T x \\
\text{subject to} \quad & \| A_i x + b_i \|_2 \le c_i^T x + d_i, \quad i = 1, \dots, m
\end{aligned}$$

- **Repository**: [github.com/example/socp-c](https://github.com/)
