export interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  audioUrl: string;
  reference?: string;
}

export interface DuaCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  duas: Dua[];
}

export type Categories = 'salah' | 'ramadan' | 'morning-evening' | 'sleep' | 'general';