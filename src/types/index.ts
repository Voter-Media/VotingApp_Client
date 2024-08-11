export type voterType = {
  email: string;
  faculty: string;
  firstName: string;
  gender: string;
  lastName: string;
  password: string;
  phone: string;
  role: string;
  user_id: string;
  verified: boolean;
  voted: boolean;
  voter_id: string;
  year_level: string;
};

export type candidateType = {
  candidate_id: number;
  user_id?: string;
  firstName: string;
  lastName: string;
  year_level: string;
  faculty: string;
  gender: string;
  position: string;
  vote_count: number;
  party?: string;
  description?: string;
  isWinner?: boolean;
};
