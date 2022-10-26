import { Play } from "phosphor-react";
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountDownButton,
  MinutesAmountInput,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="taskSugestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="taskSugestions">
            <option value="01" />
            <option value="A" />
            <option value="2" />
            <option value="B" />
            <option value="José" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type="submit">
          <Play />
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}

