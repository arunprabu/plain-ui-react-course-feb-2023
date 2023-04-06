const mockPostList = [
  {
    id: 1,
    title: 'cricket match #1 -- result - lose',
    body: '......'
  },
  {
    id: 2,
    title: 'cricket match #2 -- result - win by over 50 runs',
    body: 'great...'
  }
];

export const mockFetch = async () => {
  const res = {
    json: async () => {
      return mockPostList;
    }
  };
  return res;
};

// the above mockFetch is callable like the one below -- which is similar to that of original fetch api.
// mockFetch()
//   .then((res) => {
//     return res.json();
//   })
//   .then((resInJson) => {
//     console.log(resInJson);
//   });
