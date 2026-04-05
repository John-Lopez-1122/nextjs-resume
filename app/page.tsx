import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="title">John Lopez Resume Page</h1>
        <h2 className="contactTitle">Contact Info:</h2>
        <p className="contactInfo">+1 (305) 965-1460 | Johnplopez123@gmail.com | <a href="https://linkedin.com/in/john-peter-lopez" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </header>
      <main>
        <h2 className="mainHeaders">Education</h2>
        <p className="eduText">University of South Florida - Tampa, Florida</p>
        <p className="eduText1">Bachelor of Science in Information Assurance & Cybersecurity Management	- Expected Fall 2027</p>
        <p className="eduText2">Relevant Coursework: Machine Learning, Data Analysis, Data Presentation, Risk Management Basics, Database Analysis and Creation, Project Management, Computing in Python</p>

        <h2 className="mainHeaders">Work Experience</h2>
        <p className="expText00">Cadet Trainee - Tampa, FL</p>
        <p className="expText01">USF AFROTC/AROTC	August 2023 - November 2025</p>
        <ul className="expList0">
          <li>Strengthen officer readiness skills by working alongside 100+ cadets in structured military-training activities focused on leadership, discipline, and strategic decision making</li>
          <li>Develop effective team communication and coordination through group drills, fitness sessions, and scenario-based problem-solving exercises</li>
          <li>Maintain consistency and personal discipline by completing near-daily training sessions throughout the academic week while balancing full-time coursework</li>
        </ul>

        <p className="expText10">The Cuco Company	- Miami, FL</p>
        <p className="expText11">Digital Media & Research Intern	August 2022 - April 2023</p>
        <ul className="expList1">
          <li>Research 50+ businesses and market trends to identify content opportunities and support targeted social media strategies</li>
          <li>Create and publish digital content across Meta and Instagram to strengthen brand visibility and maintain consistent engagement</li>
          <li>Compile and organize 40+ potential partnership leads to assist with outreach and business development initiatives</li>
        </ul>
        

        <h2 className="mainHeaders">Projects</h2>
        <p className="projText00">Student Dropout Prediction Machine Learning Model (NumPy, Jupyter, Seaborn, Matplotlib)</p>
        <ul className="projList0">
          <li>Building a predictive student dropout model with 4 team members by applying logistic regression models on 440 student records, using distribution measurements and histograms to analyze trends in student drop-outs.</li>
          <li>Understanding the provided variables, we developed an algorithm that is able to keep 95% accuracy when providing results.</li>
        </ul>

        <p className="projText10">Business Analytics using Tableau (Python, Tableau, Powerpoint)</p>
        <ul className="projList1">
          <li>Analyzed a dataset with 10 states and 17 product types to find what product types are under performing and what is selling well.</li>
          <li>Created a Tableau dashboard visualizing the profitability of certain product types as well as states with low profitability shown.</li>
          <li>Scripted, recorded and edited a detailed video explaining my analysis, the created dashboard and recommended actions to take for the company.</li>
        </ul>

        <p className="projText20">Car Dealership Internal Organization System Proposal</p>
        <ul className="projList2">
          <li>Designed & drafted a proposal for a new internal system for a car dealership to develop, including wire frames, data structure, estimated team size, and what type of development structure will be used.</li>
          <li>Designed how the system is to be made and what type of requirements and infrastructure is expected to be used to complete the project.</li>
        </ul>

        <h2 className="mainHeaders">Extra curriculars</h2>
        <p className="extraText">USF Whitehatters Computer Security Club - Tampa, FL</p>
        <p className="extraText1">Class Participant	August 2024 - Present</p>
        <ul className="extraList">
          <li>Study and practice with Cyber Security tools with simulated workloads.</li>
          <li>Collaborate with other team members to understand and utilized Cyber principles and utilities to find technology exploits.</li>
        </ul>

        <h2 className="mainHeaders">Skills</h2>
        <p className="skillText">Programming Languages: Python, HTML, CSS, JS, TSX, JSX, Tailwind CSS</p>
        <p className="skillText1">Tools & Libraries/Frameworks: NumPy, Seaborn, Matplotlib, Tableau, Bash basics</p>
        <p className="skillText2">Languages: English (native), Spanish (Learning)</p>
        <p className="skillText3">Interests: Model kit making, cars, military news, TV/Movies, testing new hardware/software</p>
      </main>
    </div>
  );
}