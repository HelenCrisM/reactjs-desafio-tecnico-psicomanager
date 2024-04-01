import { IPost } from "../../services/post.interface";

export interface INewPostButton {
	posts: IPost[];
	setPosts: (updatedPost: IPost[]) => void;
}
