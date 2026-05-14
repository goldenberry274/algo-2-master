import { useEffect, useState } from "react";
import { topics } from "./data";
import "./App.css";

function getAllProblems() {
  return topics.flatMap((topic) =>
    topic.problems.map((problem) => ({
      ...problem,
      topicTitle: topic.title,
    }))
  );
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function MainPage({ onSelectTopic, onStartTimeTrial }) {
  return (
    <div className="page">
      <h1>My Course Material</h1>

      <p className="intro">
        Welcome! This website organizes my course notes, summaries, examples,
        images, and practice material by topic.
      </p>

      <button className="time-trial-button" onClick={onStartTimeTrial}>
        Start Time Trial
      </button>

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

function TimeTrialPage({ onBack }) {
  const [trialTopics, setTrialTopics] = useState([]);
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60);
  const [trialStarted, setTrialStarted] = useState(false);
  const [trialFinished, setTrialFinished] = useState(false);

  function startTrial() {
    const topicsWithProblems = topics.filter(
      (topic) => topic.problems && topic.problems.length > 0
    );

    const selectedTopics = shuffleArray(topicsWithProblems)
      .slice(0, 4)
      .map((topic) => {
        const questionAmount = Math.min(
          topic.problems.length,
          Math.floor(Math.random() * 2) + 3
        );

        return {
          ...topic,
          selectedProblems: shuffleArray(topic.problems).slice(0, questionAmount),
        };
      });

    setTrialTopics(selectedTopics);
    setTimeLeft(4 * 60 * 60);
    setTrialStarted(true);
    setTrialFinished(false);
  }

  function finishTrial() {
    setTrialFinished(true);
    setTimeLeft(0);
  }

  useEffect(() => {
    if (!trialStarted || trialFinished || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTrialFinished(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [trialStarted, trialFinished, timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="page">
      <button className="back-button" onClick={onBack}>
        ← Back to Main Page
      </button>

      <h1>Time Trial</h1>

      {!trialStarted && (
        <div className="trial-setup">
          <p className="intro">
            This mode picks 4 random topics. From each topic, it gives you 3–4
            random questions. You get 4 hours total.
          </p>

          <button className="time-trial-button" onClick={startTrial}>
            Start Trial
          </button>
        </div>
      )}

      {trialStarted && (
        <>
          <div className="timer-box">
            <h2>Time Left</h2>

            <div className="timer">
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </div>
          </div>

          <div className="trial-controls">
          {!trialFinished && (
            <button className="finish-button" onClick={finishTrial}>
              I am done with all questions
            </button>
          )}

            <button className="restart-button" onClick={startTrial}>
              Restart Trial
            </button>
          </div>

          {trialFinished && (
            <p className="solution-unlocked">Solutions are now unlocked.</p>
          )}

          <div className="trial-topics">
            {trialTopics.map((topic, topicIndex) => (
              <div className="trial-topic-section" key={topic.id}>
                <h2>
                  Topic {topicIndex + 1}: {topic.title}
                </h2>

                <div className="problems">
                  {topic.selectedProblems.map((problem, problemIndex) => (
                    <div className="problem-card" key={problemIndex}>
                      <h3>Question {problemIndex + 1}</h3>

                      <p className="problem-text">{problem.question}</p>

                      {trialFinished ? (
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
                      ) : (
                        <p className="locked-solution">
                          Solution locked until the timer ends or you finish the
                          trial.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
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
          <ProblemCard key={index} problem={problem} index={index} />
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
  const [showTimeTrial, setShowTimeTrial] = useState(false);

  function goBackHome() {
    setSelectedTopic(null);
    setShowTimeTrial(false);
  }

  if (showTimeTrial) {
    return <TimeTrialPage onBack={goBackHome} />;
  }

  if (selectedTopic) {
    return <TopicPage topic={selectedTopic} onBack={goBackHome} />;
  }

  return (
    <MainPage
      onSelectTopic={setSelectedTopic}
      onStartTimeTrial={() => setShowTimeTrial(true)}
    />
  );
}