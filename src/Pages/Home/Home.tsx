import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { createContext, useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { NewCycleForm } from "./Components/NewCycleForm";
import { CountDown } from "./Components/CountDown";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interrupedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentAsFinished: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const task = watch("task");
  const isSubmitDisabled = !task;

  function markCurrentAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...cycles, newCycle]);
    setActiveCycleId(id);
    setamountSecondsPassed(0);

    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentAsFinished }}
        >
          <NewCycleForm />
          <CountDown />
        </CyclesContext.Provider>
        {activeCycle ? (
          <StopCountDownButton type="button" onClick={handleInterrupedCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}

