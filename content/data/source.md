---
title: Resume Source
buttons:
  - text: Back
    icon: chevron-left
    href: '/resume'
    class: 'btn-primary'
  - text: View on Overleaf
    icon: overleaf
    href: 'https://www.overleaf.com/read/yjnpqvnbkrdg'
    class: 'btn-secondary'
---

# `resume.tex`

```latex{numberLines: true}
\documentclass[a4paper,11pt]{article}

% Base packages
\usepackage{array}
\usepackage{xunicode,xltxtra,url,parskip}
\RequirePackage{color,graphicx}
% Page formatting
\usepackage{fontawesome}
\usepackage[big]{layaureo}

% Set up LaTeX logo
\usepackage{metalogo}
\setlogokern{La}{-0.05em}
\setlogokern{aT}{-0.05em}
\setlogokern{Te}{-0.1em}
\setlogokern{eX}{-0.04em}
\setLaTeXa{\raisebox{5em}{\scshape a}}

% Set up zmq logo
\newcommand{\zmq}{\O{}MQ}

% Setup link colors
\usepackage{hyperref}
\definecolor{linkcolour}{rgb}{0,0.2,0.6}
\hypersetup{colorlinks,breaklinks,urlcolor=linkcolour, linkcolor=linkcolour}

% Use multirow package for vertically joined rows
\usepackage{multirow}

% Enable configuring spacing in Skills
\usepackage{setspace}

% Enable intelligent spacing for using in dots
\usepackage{xspace}

% Load font
\usepackage{libertine}

% Configure title format
\usepackage{titlesec}
\titleformat{\section}{\large\scshape\raggedright}{}{0em}{}[{\titlerule[0.4pt]}]
\titlespacing{\section}{0pt}{0pt}{5pt}

% Variables
% Left column width
\newcommand{\lcolwidth}{2.2cm}
\newcommand{\lcolwidthinner}{2.1cm}
% Right column width
\newcommand{\rcolwidth}{16.2cm}


% Defines resume section environment
\newenvironment{rsection}[1]
  {
    \section{#1}
    \begin{tabular}{>{\raggedleft\arraybackslash}p{\lcolwidth}|p{\rcolwidth}}
   } {
    \\\multicolumn{2}{c}{} \\[-10pt]
    \end{tabular}
  }
% defines resume subsection header
\newcommand{\rheader}[2]{
    \multirow[t]{2}{*}{
        \begin{minipage}[t]{\lcolwidthinner}
            \begin{flushright}
                \textsc{#1}
            \end{flushright}
        \end{minipage}
    } & \textbf{#2}
}
% defines resume subsection subheader
\newcommand{\rdesc}[1]{
  \\[-2pt]&\small{\emph{#1}\vspace{1pt} }
}
% defines resume subsection line
\newcommand{\rline}[1]{\\& #1}
% defines resume subsection item
\newcommand{\ritem}[2][ •\hspace{3pt}]{\\[-2pt]& \footnotesize{#1#2}}
% defines resume subsubsection header
\newcommand{\rsubheader}[2]{\\[1pt]& \footnotesize{\textbf{#1} \textit{#2}}\\[-12pt]}
% defines resume subsubsection item
\newcommand{\rsubitem}[1]{\ritem[\hspace{6pt}•\hspace{4pt}]{#1}}
% Defines resume skills environment
\newenvironment{rskills}[1][Skills]
  {
    % \setstretch{0.75}
    \section{#1}
    \begin{tabular}{>{\raggedleft\arraybackslash}p{\lcolwidth}p{\rcolwidth}}
    } {
    \end{tabular}
  }
% defines resume skills section line
\newcommand{\rskill}[2]{\textsc{#1}:& \small #2 \\ & \\[-14pt]}
% defines resume subsection gap
\newcommand{\rskip}{\\\multicolumn{2}{c}{} \\[-5pt]}
% dot with spaces on the sides as appropriate
\newcommand{\rdot}{\xspace\hspace{0pt}•\hspace{3pt}\xspace}


% Begin document
\begin{document}

% Set up margins/origin
\hsize=7.5in \vsize=11in
\hoffset=-0.65in \voffset=-0.5in
% Output page size
\pdfpagewidth=8.5in
\pdfpageheight=11in
% Non-numbered pages
\pagestyle{empty}


% Title
\begin{center}
     \Huge       Joseph Azevedo
  \\[2pt] \normalsize \href{mailto:joseph.az@gatech.edu}{joseph.az@gatech.edu} \rdot US Citizen \rdot (423) 284-1197 \rdot
\href{https://github.com/jazevedo620}{\faGithub\ jazevedo620} \rdot \href{https://jazevedo.me}{Portfolio: jazevedo.me} \\[6pt]
\end{center}
% Spacing
\vspace{11pt}


% Section: Education
\begin{rsection}{Education}
  \rheader{Jun 2018 -\\[-1pt] Current}{Georgia Institute of Technology{\normalfont, Atlanta, GA \hfill\  GPA: 4.0/4.0\ }}
  \rline{Bachelor of Science, Computer Science \hfill Graduation date: May 2022}
  \vspace{2pt}
  \ritem[]{Concentration: Networking \& Graphics}
\end{rsection}
% Spacing
\vspace{-4pt}


% Section: Skills
\begin{rskills}
  \rskill{Languages}        {Go, Rust, Python, Java, Scala, TypeScript, JavaScript, HTML/CSS, Bash, SQL, C\#, C}
  \rskill{Software}         {Git, Docker, Kubernetes, OpenShift, Azure, \LaTeX, Nginx, Apache, Maven, Webpack, Babel,
                             gRPC/Protobuf, Linux, Windows, SQL (Postgres, MySQL), NoSQL (MongoDB, Elasticsearch), ANTLR, Selenium}
  \rskill{Frameworks}       {React, Flask, Express, Play, Akka, Vue.js, jQuery, Android SDK, React Native, .NET, WPF}
  \rskill{Concepts}         {Containerization, Orchestration, Agile/SCRUM, Microservices, Unit \& integration testing, CI/CD}
  \rskill{Coursework}       {Data structures, Algorithms, Databases, Object-oriented design, Networking, Operating systems, Combinatorics}
\end{rskills}
% Spacing
\vspace{7pt}


% Section: Work Experience
\begin{rsection}{Work Experience}
  % Job: MathWorks software engineering intern
  \rheader{May 2020 -\\[-1pt] Aug 2020}{Software Engineering Intern}
  \rdesc{MathWorks}
  \ritem{Developed new features in a \textbf{Golang} microservice and a \textbf{React} dashboard, including unit and integration testing}
  \ritem{Designed a custom \textbf{Kubernetes} controller to work with internal framework and manage dynamic deployments}
  \ritem{Wrote design documentation and created proof of concept in \textbf{Go} investigating \textbf{Kubernetes} integration}
  \rskip
  
  % Job: CS 2340 TA 
  \rheader{Aug 2019 -\\[-1pt] Current}{Senior Teaching Assistant}
  \rdesc{Georgia Institute of Technology \ {\normalfont |}\hspace{2pt} CS 2340 - Objects \& Design (Object-oriented design)}
  \ritem{Led a team of 6 other teaching assistants to prepare and deliver lectures over the course of the semester}
  \ritem{Graded project milestones and held office hours for students making a group project in \textbf{Java Swing} or \textbf{Python Flask}}
  \ritem{Created code style autograder scripts/workflow using \textbf{Python} for student projects used by 1,300+ students over 3 semesters}
\end{rsection}
% Spacing
\vspace{-3pt}


% Section: Leadership
\begin{rsection}{Leadership}
  % Position: GTE President
  \rheader{July 2019 -\\[-1pt] Aug 2020}{President}
  \rdesc{Georgia Tech Esports Club}
  \ritem{Led one of the largest student organizations at Georgia Tech with over \textbf{300 active members} and \textbf{30 competitive teams}}
  \ritem{Designed for and coordinated push to unify branding for the club and its events, including logos, graphics, and videos}
  \ritem{Worked with team of officers to conduct corporate outreach and partner with campus administration for funding}
  % Position: Gamefest organizer
  \rsubheader{Logistics \& Event Organizer}{
    Gamefest 2019 {\normalfont\rdot \href{https://gamefest.gg/}{gamefest.gg}}}
  \rsubitem{Led a small team of organizers to plan and host a regional collegiate tournament with over \textbf{400 participants}}
  \rsubitem{Worked with campus administration to secure support and managed a team of \textbf{20 volunteers} working the day of the event}
\end{rsection}
% Spacing
\vspace{-3pt}


% Section: Projects
\begin{rsection}{Projects}
  % Project: rAdvisor performance monitor
  \rheader{Feb 2020 -\\[-1pt] Current}{rAdvisor}
  \rdesc{Open-source system resource utilization tool for Docker \& Kubernetes
    {\normalfont \rdot \href{https://github.com/elba-docker/radvisor}{\faGithub\ elba-docker/radvisor}}}
  \ritem{Developed a high-performance, concurrent CLI tool in \textbf{Rust} that monitors \textbf{Linux} cgroups and polls the \textbf{Docker} daemon}
  \ritem{Conducted hundreds of distributed experimental workflows using \textbf{Python}/\textbf{Bash} to test overhead and consistency}
  \ritem{Wrote final report that details the software design, experimental procedure, and results
    \rdot \href{https://github.com/elba-docker/report}{\faGithub\ elba-docker/report}}
  \ritem{Continued working as a \textbf{research assistant} starting Fall 2020 at Georgia Tech to work on integrating this tool into a system
    \newline\hphantom{t\,} performance monitoring toolkit}
  \rskip
  
  % Project: archit.us
  \rheader{May 2019 -\\[-1pt] Current}{Architus Full Stack Application}
  \rdesc{Open-source chat bot \& API with web dashboard
    {\normalfont \rdot \href{https://archit.us/}{architus} \rdot
        \href{https://github.com/architus/architus}{\faGithub\ architus/architus} \rdot
        \href{https://github.com/architus/archit.us}{\faGithub\ architus/archit.us}}}
  \ritem{Engineered front-end web application with \textbf{React}/\textbf{Redux} to consume, process, and display API data}
  \ritem{Built microservice-based back-end using \textbf{Python}/\textbf{Flask}, \textbf{Rust}, \textbf{RabbitMQ}, \textbf{PostgreSQL}, and \textbf{Elasticsearch}}
  \ritem{Spearheaded migration to use \textbf{Kubernetes}, motivated by increased server load and growing user base (\textbf{40,000+ users})}
  \rskip
  
  % Project: 2340 Risk
  \rheader{Jan 2019 -\\[-1pt] May 2019}{Risk Web Application}
  \rdesc{Software engineering class group project {\normalfont \rdot  \href{https://github.com/jazevedo620/cs2340-risk}{\faGithub\ jazevedo620/cs2340-risk}}}
  \ritem{Engineered back-end and websocket-based network model in \textbf{Scala}, using \textbf{Akka} actors to process game and lobby state}
  \ritem{Containerized application using \textbf{Docker}/\textbf{Alpine} and configured deployment on both \textbf{Kubernetes} and \textbf{OpenShift}}
\end{rsection}


\end{document}
```
