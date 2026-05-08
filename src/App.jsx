import { useState } from "react";
import { topics } from "./data";
import "./App.css";

function MainPage({ onSelectTopic }) {
  return (
    <div className="page">
      <h1>Algorithms 2 - Practical Sessions</h1>

      <p className="intro">
        Welcome! This is a web app containing all the practice problems from the TA sessions
        with full solutions, all in one place!
      </p>

      <h2>Topics</h2>

      <div className="menu">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className="topic-button"
            onClick={() => onSelectTopic(topic)}
          >
            {topic.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function TopicPage({ topic, onBack }) {
  return (
    <div className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Main Page
      </button>

      <h1>{topic.title}</h1>
      <p className="intro">{topic.intro}</p>

      <div className="problems">
        {topic.problems.map((problem, index) => (
          <ProblemCard
            key={index}
            problem={problem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProblemCard({ problem, index }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="problem-card">
      <h2>Problem {index + 1}</h2>

      <p className="problem-text">{problem.question}</p>

      <button
        className="solution-button"
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && (
        <div className="solutions-container">
          {problem.solutionImages.map((image, imgIndex) => (
            <img
              key={imgIndex}
              className="solution-image"
              src={image}
              alt={`Solution ${imgIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <>
      {selectedTopic ? (
        <TopicPage
          topic={selectedTopic}
          onBack={() => setSelectedTopic(null)}
        />
      ) : (
        <MainPage onSelectTopic={setSelectedTopic} />
      )}
    </>
  );
}