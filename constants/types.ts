export type Lesson = {
  character: string;
  date: string;
  id: number;
  link: string;
  notes: string | null;
  opponent: string;
  player: string;
  timestamped: boolean;
};

export type Filters = {
  character: string | undefined;
  opponent: string | undefined;
  notes: string | undefined;
  timestamped: boolean;
};
