import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "C",
    level: "intermediate",
    color: "#FF3B00",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "purple",
  },
];

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar photoName="./x.jpg" alt="x" />
        <div className="data">
          <Intro
            name="Amadi-Sheriff Delight"
            bio="Full-stack web developer and tutor at SmartTech. When not coding or
          teaching, I like to watch Tv series and listen to music, or to eat
          numerous delicacies at my mums house"
          />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.photoName} alt={props.x} className="avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "intermediate" ? "😤" : level === "advanced" ? "💪" : "👶"}
      </span>
    </div>
  );
}
