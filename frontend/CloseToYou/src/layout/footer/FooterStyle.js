import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  display: flex;

  box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 5rem;

  -webkit-tap-highlight-color: transparent;

  p {
    margin: 0;
    margin-bottom: 0.3rem;
  }
`;

export const ClosetWrapper = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);

    outline: none;
  }
`

export const ClosetImg = styled.img`
  
  width: 2rem;
  height: 2rem;

  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
  `

export const ClosetText = styled.p`
  

  color: ${(props) => (props.url.substring(0,8) === '/closets') ? 'rgba(255, 105, 105, 1)' : 'rgba(169, 169, 169, 1)'};

  text-align: center;
  font-size: 1rem;
  font-weight: 700;
`

export const ClothesWrapper = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);

    outline: none;
  }
`

export const ClothesImg = styled.img`
  
  width: 2rem;
  height: 2rem;

  margin-top: 0.5rem;
  margin-bottom: 0.3rem;


`

export const ClothesText = styled.p`
  

  color: ${(props) => (props.url.substring(0, 8) === '/clothes') ? 'rgba(255, 105, 105, 1)' : 'rgba(169, 169, 169, 1)'};

  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  
`

export const BookmarkWrapper = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);

    outline: none;
  }
`

export const BookmarkImg = styled.img`
  
  width: 2rem;
  height: 2rem;

  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`

export const BookmarkText = styled.p`

  color: ${(props) => (props.url.includes('/bookmarks')) ? 'rgba(255, 105, 105, 1)' : 'rgba(169, 169, 169, 1)'};

  text-align: center;
  font-size: 1rem;
  font-weight: 700;
`

export const ProfileWrapper = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);

    outline: none;
  }
`

export const ProfileImg = styled.img`
  
  width: 2rem;
  height: 2rem;

  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`

export const ProfileText = styled.p`
  

  color: ${(props) => (props.url === '/user' || props.url === '/nickname' || props.url === '/password') ? 'rgba(255, 105, 105, 1)' : 'rgba(169, 169, 169, 1)'};

  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  
`