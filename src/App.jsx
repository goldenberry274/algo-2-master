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
  const [questionAmount, setQuestionAmount] = useState(1);
  const [trialProblems, setTrialProblems] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [trialStarted, setTrialStarted] = useState(false);
  const [trialFinished, setTrialFinished] = useState(false);

  function startTrial() {
    const allProblems = getAllProblems();
    const selected = shuffleArray(allProblems).slice(0, questionAmount);

    setTrialProblems(selected);
    setTimeLeft(questionAmount * 60 * 60);
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
            This page is meant to simulate an exam with limited time. Choose the number of questions you want to prepare on, then start the trial.
            <br />
            Solutions will only be revelaed either once the timer runs out, or the "I am done with the questions button" is clicked.
          </p>

          <label className="trial-label">
            Number of questions:
            <select
              value={questionAmount}
              onChange={(e) => setQuestionAmount(Number(e.target.value))}
            >
              <option value={1}>1 question</option>
              <option value={2}>2 questions</option>
              <option value={3}>3 questions</option>
              <option value={4}>4 questions</option>
            </select>
          </label>

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

          {!trialFinished && (
            <button className="finish-button" onClick={finishTrial}>
              I am done with all questions
            </button>
          )}

          {trialFinished && (
            <p className="solution-unlocked">
              Solutions are now unlocked.
            </p>
          )}

          <div className="problems">
            {trialProblems.map((problem, index) => (
              <div className="problem-card" key={index}>
                <h2>Question {index + 1}</h2>
                <p className="topic-name">{problem.topicTitle}</p>

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
                    Solution locked until the timer ends or you finish the trial.
                  </p>
                )}
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