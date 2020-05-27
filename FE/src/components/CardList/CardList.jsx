import React, { useContext } from "react";
import styled from "styled-components";
import { CardListContext } from "Contexts/cardListContext";
import { fetchActions } from "Actions/actions";
import useFetch from "CustomHooks/useFetch";
import Title from "./Title";
import Card from "./Card/Card";

const CardList = () => {
  const { cardList, dispatch } = useContext(CardListContext);

  const { loading, errorMsg } = useFetch({
    url: "http://3.34.15.148/api/listing",
    dispatch,
    actionType: {
      success: fetchActions.FETCH_SUCCESS,
      error: fetchActions.FETCH_ERROR,
    },
  });

  return (
    <Wrapper>
      <Title numberOfResults={cardList.length} />
      {loading ? <span>로딩중</span> : cardList.map(({ id, ...cardData }) => <Card key={id} data={cardData} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: ${props => props.theme.spacings.base};
  padding-bottom: ${props => props.theme.spacings.xxl};

  @media (min-width: ${props => props.theme.sizes.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.sizes.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.sizes.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default CardList;
