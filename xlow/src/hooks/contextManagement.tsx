import { FilterContext } from "@/contexts/filter-contexts";
import { useContext } from "react";

export function contextManagement() {
  return useContext(FilterContext);
}
