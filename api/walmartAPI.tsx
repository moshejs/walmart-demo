import axios from "axios";

const pageUrl = "https://pf-pets.azurewebsites.net/dog_toys";

// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export interface PostsResult { // ??
//   posts: Post[]
// }

export async function getProducts() {
  const { data } = await axios.get<any[]>(pageUrl);
  return data;
}
