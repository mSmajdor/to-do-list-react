import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: true },
    { id: 2, content: "spanko", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <header>
        <Header />
      </header>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />
        }
      />
    </Container>
  );
}

export default App;
