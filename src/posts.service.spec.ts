import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);

    expect(createdPost).toEqual({
      ...post,
      id: '2',
      date: expect.any(String),
    });
  });

  it('should find a post', () => {
    expect(postsService.find('1')).toEqual(
      expect.objectContaining({
        id: '1',
        text: 'Some pre-existing post',
        date: expect.any(String),
      }),
    );
  });
});