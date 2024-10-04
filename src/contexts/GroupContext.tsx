import { createContext, ReactNode, useContext, useState } from "react";
import { Group } from "@/types";

interface GroupContextType {
  groups: Group[] | undefined;
  setGroups: React.Dispatch<React.SetStateAction<Group[] | undefined>>;
}

const GroupContext = createContext<GroupContextType | undefined>(undefined);

export function GroupProvider({ children }: { children: ReactNode }) {
  const [groups, setGroups] = useState<Group[] | undefined>(undefined);

  return (
    <GroupContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupContext.Provider>
  );
}

export function useGroupContext() {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroupContext must be used within a GroupProvider");
  }
  return context;
}
