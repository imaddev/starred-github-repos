/**
 * Interface for the 'ReposList' data
 */
export interface ReposListEntity {
  id: string | number; // Primary ID
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: Date;
}
