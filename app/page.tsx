export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <header className="bg-gray-900 text-white text-center px-6 py-8">
        <h1 className="text-4xl font-bold mb-2">John Lopez</h1>
        <h2 className="text-lg font-semibold text-gray-300 mb-1">Contact Info</h2>
        <p className="text-sm text-gray-400">
          +1 (305) 965-1460 | Johnplopez123@gmail.com |{" "}
          <a
            href="https://linkedin.com/in/john-peter-lopez"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">

        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide pb-2 border-b-2 border-blue-900 mb-4">
            Education
          </h2>
          <p className="font-semibold text-gray-800">University of South Florida — Tampa, Florida</p>
          <p className="text-gray-700">
            Bachelor of Science in Information Assurance & Cybersecurity Management — Expected Fall 2027
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Relevant Coursework: Machine Learning, Data Analysis, Data Presentation, Risk Management Basics,
            Database Analysis and Creation, Project Management, Computing in Python
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide pb-2 border-b-2 border-blue-900 mb-4">
            Work Experience
          </h2>

          <div className="mb-5">
            <p className="font-semibold text-gray-800">Cadet Trainee — Tampa, FL</p>
            <p className="text-sm text-gray-500">USF AFROTC/AROTC | August 2023 – November 2025</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Strengthen officer readiness skills by working alongside 100+ cadets in structured military-training activities focused on leadership, discipline, and strategic decision making</li>
              <li>Develop effective team communication and coordination through group drills, fitness sessions, and scenario-based problem-solving exercises</li>
              <li>Maintain consistency and personal discipline by completing near-daily training sessions throughout the academic week while balancing full-time coursework</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="font-semibold text-gray-800">The Cuco Company — Miami, FL</p>
            <p className="text-sm text-gray-500">Digital Media & Research Intern | August 2022 – April 2023</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Research 50+ businesses and market trends to identify content opportunities and support targeted social media strategies</li>
              <li>Create and publish digital content across Meta and Instagram to strengthen brand visibility and maintain consistent engagement</li>
              <li>Compile and organize 40+ potential partnership leads to assist with outreach and business development initiatives</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide pb-2 border-b-2 border-blue-900 mb-4">
            Projects
          </h2>

          <div className="mb-5">
            <p className="font-semibold text-gray-800">
              Student Dropout Prediction Machine Learning Model{" "}
              <span className="font-normal text-sm text-gray-500">(NumPy, Jupyter, Seaborn, Matplotlib)</span>
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Building a predictive student dropout model with 4 team members by applying logistic regression models on 440 student records, using distribution measurements and histograms to analyze trends in student drop-outs</li>
              <li>Understanding the provided variables, we developed an algorithm that is able to keep 95% accuracy when providing results</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="font-semibold text-gray-800">
              Business Analytics using Tableau{" "}
              <span className="font-normal text-sm text-gray-500">(Python, Tableau, PowerPoint)</span>
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Analyzed a dataset with 10 states and 17 product types to find what product types are under performing and what is selling well</li>
              <li>Created a Tableau dashboard visualizing the profitability of certain product types as well as states with low profitability shown</li>
              <li>Scripted, recorded and edited a detailed video explaining my analysis, the created dashboard and recommended actions to take for the company</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="font-semibold text-gray-800">Car Dealership Internal Organization System Proposal</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Designed & drafted a proposal for a new internal system for a car dealership to develop, including wire frames, data structure, estimated team size, and what type of development structure will be used</li>
              <li>Designed how the system is to be made and what type of requirements and infrastructure is expected to be used to complete the project</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide pb-2 border-b-2 border-blue-900 mb-4">
            Extra Curriculars
          </h2>
          <p className="font-semibold text-gray-800">USF Whitehatters Computer Security Club — Tampa, FL</p>
          <p className="text-sm text-gray-500">Class Participant | August 2024 – Present</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Study and practice with Cyber Security tools with simulated workloads</li>
            <li>Collaborate with other team members to understand and utilize Cyber principles and utilities to find technology exploits</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide pb-2 border-b-2 border-blue-900 mb-4">
            Skills
          </h2>
          <p className="text-gray-700"><span className="font-semibold">Programming Languages:</span> Python, HTML, CSS, JS, TSX, JSX, Tailwind CSS</p>
          <p className="text-gray-700 mt-1"><span className="font-semibold">Tools & Libraries/Frameworks:</span> NumPy, Seaborn, Matplotlib, Tableau, Bash basics</p>
          <p className="text-gray-700 mt-1"><span className="font-semibold">Languages:</span> English (native), Spanish (Learning)</p>
          <p className="text-gray-700 mt-1"><span className="font-semibold">Interests:</span> Model kit making, cars, military news, TV/Movies, testing new hardware/software</p>
        </section>

      </main>

      <footer className="bg-gray-900 text-center text-gray-400 text-sm py-4">
        © 2025 John Lopez
      </footer>

    </div>
  );
}
