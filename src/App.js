import React from "react";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "spanko", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <header>
        <Header />
      </header>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
