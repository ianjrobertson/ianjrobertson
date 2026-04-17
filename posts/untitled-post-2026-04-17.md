---
title: "Building an OSINT research engine with Elixir"
date: "2026-04-17"
excerpt: "What I learned about Elixir, OTP, and dynamic systems building a research engine"
---

### Introduction
For one of my final projects as a student at BYU, I needed to create a end-to-end project that demonstrated mastery with system design and database modeling. I will be building in Elixir when I begin my upcoming job after graduation, so I wanted to focus on a project that would help give me some experience building in an Elixir focused stack. 

### Picking a vertical
I understood that one of Elixirs (and Erlangs) killer features is the ability to spin up independent and safe processes. I wanted to therefore build a project where the ability to scale a task horizontally would enable really cool things to happen. I think generally it's a poor idea to pick a technology looking for a problem, but it's a school project so let's go for it.

Around this time, I was also taking a security class and learning about open source intelligence (OSINT), so I thought intelligence gathering could be a task that could benefit from horizontal scaling. 

### Design
