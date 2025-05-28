export interface IDocument {
  id?: string;
  content: string;
  metadata: {
    author: string;
    category: string;
  };
}
