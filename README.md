# jenkins-enterprise-cicd-cineverse

# 🚀 Enterprise CI/CD Pipeline Using Jenkins, SonarQube, Nexus, AWS S3 & Apache Tomcat

![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)
![Maven](https://img.shields.io/badge/Maven-Build-C71A36?logo=apachemaven)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?logo=jenkins)
![SonarQube](https://img.shields.io/badge/SonarQube-Code%20Quality-4E9BCD?logo=sonarqube)
![Nexus](https://img.shields.io/badge/Nexus-Repository-1B1C30?logo=sonatype)
![AWS S3](https://img.shields.io/badge/AWS%20S3-Artifact%20Storage-FF9900?logo=amazons3)
![Tomcat](https://img.shields.io/badge/Apache%20Tomcat-9-F8DC75?logo=apachetomcat)
![GitHub](https://img.shields.io/badge/GitHub-Source%20Control-181717?logo=github)
![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?logo=amazonaws)

> End-to-end CI/CD pipeline for building, analyzing, storing, and deploying a Java web application using Jenkins, GitHub, Maven, SonarQube, Nexus Repository, AWS S3, and Apache Tomcat.

---

## 📌 Project Overview

This project demonstrates the implementation of an **enterprise-style CI/CD pipeline** for a Java web application called **CineVerse**.

The pipeline automates the application delivery process from **source code checkout to application deployment** on Apache Tomcat..

The project integrates multiple DevOps tools to automate:

- Source code management
- Application build and testing
- Code quality analysis
- Artifact management
- Cloud artifact storage
- Application deployment

---

## 🏗️ CI/CD Architecture

```text
Developer
    ↓
GitHub
    ↓
Jenkins
    ↓
Maven Build & Test
    ↓
SonarQube
    ↓
Nexus Repository
    ↓
AWS S3
    ↓
Apache Tomcat
    ↓
🎬 CineVerse Application
```
##🛠️ Technologies Used

| Technology             | Purpose                        |
| ---------------------- | ------------------------------ |
| GitHub                 | Source Code Management         |
| Jenkins                | CI/CD Automation               |
| Maven                  | Build, Test & Package          |
| SonarQube              | Code Quality & Static Analysis |
| Nexus Repository       | Artifact Management            |
| AWS S3                 | Artifact Storage               |
| Apache Tomcat          | Application Deployment         |
| Java 17                | Application Development        |
| JSP / CSS / JavaScript | Frontend                       |

## 📂 Project Structure

jenkins-enterprise-cicd-cineverse/
```
│
├── pom.xml
├── Jenkinsfile
│
├── src/
│   └── main/
│       └── webapp/
│           ├── index.jsp
│           ├── css/
│           │   └── style.css
│           ├── js/
│           │   └── script.js
│           └── WEB-INF/
│               └── web.xml
│
├── docs/
│   └── screenshots/
│       ├── 01-github-repository.png
│       ├── 02-jenkins-pipeline-success.png
│       ├── 03-jenkins-console-output.png
│       ├── 04-sonarqube-analysis.png
│       ├── 05-nexus-artifact.png
│       ├── 06-s3-artifact.png
│       ├── 07-tomcat-deployment.png
│       └── 08-cineverse-live.png
│
└── README.md
```
<img width="1490" height="746" alt="image" src="https://github.com/user-attachments/assets/90a69453-9a43-4af9-8157-776f1fc0bd0a" />
