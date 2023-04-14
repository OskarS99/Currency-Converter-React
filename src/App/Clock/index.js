import { ClockLook } from "./styled";
import { useCurrentDate } from "./useCurrentDate.js";

const formateDate = (date) => date.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
  });


export const Clock = () => {
  const date = useCurrentDate();

  return (
     <ClockLook>
         Dzisiaj jest
         {" "}
         {formateDate(date)}
     </ClockLook>
  )
};
