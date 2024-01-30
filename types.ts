type ItemData = {
  id: string;
  text: string;
};

type Input = {
  goalText: string;
  onChangeText: (text: string) => void;
  onAddGoal: () => void;
};
export type { ItemData, Input };
