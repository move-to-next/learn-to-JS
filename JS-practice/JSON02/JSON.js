const movies = [
  {
    "id": 1,
    "title": "인셉션",
    "director": "크리스토퍼 놀란",
    "year": 2010,
    "genres": ["액션", "SF", "스릴러"],
    "ratings": [8.8, 9.0, 8.5, 9.2, 8.7]
  },
  {
    "id": 2,
    "title": "기생충",
    "director": "봉준호",
    "year": 2019,
    "genres": ["드라마", "스릴러", "코미디"],
    "ratings": [9.5, 9.0, 9.3, 9.1, 8.9]
  },
  {
    "id": 3,
    "title": "어벤져스: 엔드게임",
    "director": "안소니 루소, 조 루소",
    "year": 2019,
    "genres": ["액션", "모험", "SF"],
    "ratings": [9.2, 8.9, 9.0, 8.8, 9.1]
  },
  {
    "id": 4,
    "title": "올드보이",
    "director": "박찬욱",
    "year": 2003,
    "genres": ["액션", "드라마", "미스터리"],
    "ratings": [8.7, 8.5, 9.0, 8.3, 8.8]
  },
  {
    "id": 5,
    "title": "매트릭스",
    "director": "라나 워쇼스키, 릴리 워쇼스키",
    "year": 1999,
    "genres": ["액션", "SF"],
    "ratings": [9.0, 8.7, 8.8, 9.2, 8.5]
  }
]

// 평균 평점이 가장 높은 영화의 제목을 반환하는 함수를 구해보자

let topRating = movies.sort((a,b) => b.ratings - a.ratings);

function getHighestRatedMovie() {
  let highestAvgRating = 0;
  let highestRatedMovie = "";
  
  for (const movie of movies) {
    const avgRating = movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length;
    if (avgRating > highestAvgRating) {
      highestAvgRating = avgRating;
      highestRatedMovie = movie.title;
    }
  }
  
  return { title: highestRatedMovie, rating: highestAvgRating.toFixed(2) };
}

// 결과값 { title: '기생충', rating: '9.16' }