async function getHNStories() {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const storyIds = await response.json();

  const stories = await Promise.all(
    storyIds.slice(0, 30).map(async (id) => {
      const storyResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const story = await storyResponse.json();
      return story;
    })
  );
  console.log(stories);
  return stories;
}

getHNStories();

export default getHNStories;
