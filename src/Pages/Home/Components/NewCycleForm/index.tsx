import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../../../context/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="taskSugestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}

