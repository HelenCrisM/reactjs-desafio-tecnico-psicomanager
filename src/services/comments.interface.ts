

export interface IComments {
  postId?: number;
	id?: number;
	name: string;
  email: string;
	body: string;
}

export const defaultComments: IComments[] = [];
