import React, { useState, useEffect } from 'react';

interface Language {
  favorite: string[],
  want_to: string[]
}

interface Region {
  prefecture: string,
  city: string
}

interface Name {
  first: string,
  last: string
}

interface Data {
  name: Name,
  age: number,
  sex: number,
  region: Region,
  github_id: string,
  language: Language,
  id: number,
  profile_sentence: string
}
export const PostMatch = () => {
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.43.131:8000/users', {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
      });
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        {data.map((user) => (
            <div>
                <h1>{user.name.first} {user.name.last}</h1>
                <p>Age: {user.age}</p>
                <p>Sex: {user.sex}</p>
                <p>Region: {user.region.prefecture} {user.region.city}</p>
                <p>Github ID: {user.github_id}</p>
                <p>Language:</p>
                <ul>
                    {user.language.favorite.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                </ul>
                <p>Profile Sentence: {user.profile_sentence}</p>
            </div>
        ))}
    </div>
  );
}

