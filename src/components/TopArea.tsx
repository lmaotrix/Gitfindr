import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { TopAreaProps, UserProps } from "../types";
import { joinedDate } from "../utils/formatter";

export const TopArea = ({ setUser }: TopAreaProps) => {
  const { changeTheme, lightMode } = useContext(ThemeContext);
  const [empty, setEmpty] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [inputUser] = useState("lmaotrix");

  function hadleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      setEmpty(true);
      setUser(null);
      return;
    }

    setEmpty(false);
    fetchUser(usernameRef.current.value);
  }

  async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (response.status != 200) {
      setNotFound(true);
      setUser(null);
      return;
    }

    setNotFound(false);

    const user: UserProps = {
      pfp: data.avatar_url,
      name: data.name,
      joinedAt: joinedDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      links: {
        location: data.location,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog,
      },
    };
    console.log(data);

    setUser(user);
  }

  useEffect(()=> {
    fetchUser(inputUser)
  },[inputUser])

  return (
    <Container>
      <ThemeArea>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="200pt" height="124" viewBox="0 0 557.000000 322.000000"
 preserveAspectRatio="xMidYMid meet" fill="none">

<g transform="translate(-120.000000,322.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2087 1930 c-95 -24 -151 -73 -195 -170 -32 -69 -35 -199 -7 -270 41
-103 133 -174 242 -186 61 -8 140 16 173 51 26 28 40 24 40 -11 0 -22 4 -24
45 -24 l45 0 0 160 0 160 -130 0 -130 0 0 -45 0 -44 68 -3 c65 -3 67 -4 64
-28 -8 -65 -84 -117 -155 -106 -62 9 -101 38 -127 90 -18 39 -21 59 -18 124 7
134 56 196 155 196 59 0 99 -22 121 -67 12 -25 18 -27 78 -27 l64 0 -6 28
c-16 64 -65 121 -136 158 -38 20 -138 27 -191 14z" 
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M2530 1875 l0 -45 60 0 60 0 0 45 0 45 -60 0 -60 0 0 -45z"/>
<path d="M3132 1900 c-35 -21 -47 -44 -57 -102 -5 -35 -8 -38 -40 -38 -34 0
-35 -1 -35 -40 0 -39 1 -40 35 -40 l35 0 0 -180 0 -180 65 0 65 0 0 180 0 180
40 0 40 0 0 40 0 40 -41 0 c-39 0 -40 1 -37 33 3 30 6 32 46 35 l42 3 0 45 0
44 -62 0 c-45 0 -72 -6 -96 -20z" 
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M3340 1875 l0 -45 60 0 60 0 0 45 0 45 -60 0 -60 0 0 -45z" 
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M4370 1815 l0 -104 -36 24 c-93 63 -211 28 -266 -79 -30 -58 -29
-173 2 -239 54 -114 198 -149 283 -69 l27 26 0 -27 c0 -26 2 -27 55 -27 l55 0
0 300 0 300 -60 0 -60 0 0 -105z m-61 -146 c52 -18 76 -88 60 -173 -15 -78
-61 -115 -124 -98 -86 23 -109 194 -33 257 33 28 50 30 97 14z" 
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M2780 1825 l0 -65 -35 0 c-34 0 -35 -1 -35 -40 0 -39 1 -40 35 -40
l35 0 0 -144 c0 -80 4 -156 10 -171 13 -35 65 -55 140 -55 l60 0 0 49 0 49
-36 0 c-20 0 -40 6 -45 14 -5 7 -9 68 -9 136 l0 122 45 0 45 0 0 40 0 40 -45
0 -45 0 0 65 0 65 -60 0 -60 0 0 -65z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M1205 1869 c-2 -8 -32 -115 -65 -239 -33 -124 -63 -232 -66 -241 -3
-12 4 -20 26 -27 30 -11 30 -11 45 41 47 167 125 460 123 463 -2 1 -15 5 -30
9 -19 5 -29 3 -33 -6z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M848 1734 c-73 -58 -134 -109 -136 -113 -1 -4 60 -58 137 -119 131
-104 140 -109 155 -93 9 10 16 22 16 27 0 6 -47 47 -106 93 -58 46 -104 86
-102 91 2 4 51 45 109 91 103 82 106 85 91 107 -8 12 -18 22 -23 22 -4 0 -68
-48 -141 -106z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M1330 1820 c-6 -11 -9 -24 -6 -28 2 -4 50 -44 105 -87 56 -44 101
-83 101 -87 0 -4 -47 -44 -105 -89 -58 -45 -105 -87 -105 -94 0 -7 8 -19 18
-27 16 -15 27 -8 155 94 76 60 137 114 135 118 -4 12 -268 220 -279 220 -4 0
-13 -9 -19 -20z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M3755 1759 c-16 -7 -42 -23 -57 -37 l-28 -26 0 33 0 32 -57 -3 -58
-3 -3 -217 -2 -218 58 0 59 0 5 146 c6 175 16 197 90 202 35 2 48 -2 64 -19
17 -19 19 -39 22 -175 l4 -154 60 0 60 0 -4 173 c-3 185 -10 213 -58 249 -31
22 -114 32 -155 17z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M4795 1755 c-22 -8 -52 -28 -67 -45 l-28 -30 0 40 0 40 -55 0 -55 0
0 -220 0 -220 60 0 60 0 0 125 c0 95 4 134 16 156 19 37 74 63 115 54 l29 -7
0 61 c0 69 -4 71 -75 46z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M2530 1540 l0 -220 60 0 60 0 0 220 0 220 -60 0 -60 0 0 -220z"
fill={lightMode ? "#222731" : "#fff"}
/>
<path d="M3340 1540 l0 -220 60 0 60 0 0 220 0 220 -60 0 -60 0 0 -220z"
fill={lightMode ? "#222731" : "#fff"}
/>
</g>
</svg>
        <ChangeThemeBtn type="button" onClick={changeTheme}>
          {lightMode ? (
            <>
              DARK
              <img src="/assets/icon-moon.svg" alt="dark mode" />
            </>
          ) : (
            <>
              LIGHT
              <img src="/assets/icon-sun.svg" alt="light mode" />
            </>
          )}
        </ChangeThemeBtn>
      </ThemeArea>

      <InputArea
        onSubmit={(e) => {
          e.preventDefault();
          hadleSubmit();
        }}
      >
        <InputLabel>
          <img src="/assets/icon-search.svg"  alt="search .."/>
        </InputLabel>

        <Input
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="Search username ..."
        />
        {empty && <Warn>Enter User</Warn>}
        {notFound && <Warn>Not Found</Warn>}

        <SubmitBtn type="submit">Search</SubmitBtn>
      </InputArea>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;

const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Warn = styled.small`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #f74646;
    margin-right: 2.4rem;
`

const ChangeThemeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeBtn};
  cursor: pointer;

  img {
    margin-left: 1.6rem;
  }
`;

const InputArea = styled.form`
  margin-top: 0.6rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  transition: height 0.3s ease;
  position: relative;

  @media (min-width: 768px) {
    height: 6.9rem;
  }
`;

const InputLabel = styled.label`
  height: 2.4rem;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 192%;
  color: ${(props) => props.theme.colors.textNorm};
  background: none;
  border: none;
  margin: 0 0.8rem;

  @media (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 2.4rem;
  }

  &:focus {
    outline: 1px dashed #0079ff;
  }
`;

const SubmitBtn = styled.button`
  background: #0079ff;
  border: none;
  height: 100%;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 8.4rem;
  transition: all 0.3s ease-out;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #0079ff;
  }

  @media (min-width: 768px) {
    width: 10.6rem;
    font-size: 1.7rem;
  }
`;
