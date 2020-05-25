import React from "react";
import styled from "styled-components";
import Text from "Styles/Text";

const Description = ({ name, country, rating, superHost, originalRate, sellingRate }) => {
  const SUPER_HOST_TEXT = "슈퍼호스트";
  const SELLING_RATE_TEXT = "/1박";

  return (
    <div>
      <DetailWrapper>
        {superHost && (
          <SuperHostBadge>
            <Text fontSize="xsm" fontWeight="semiBold">
              {SUPER_HOST_TEXT}
            </Text>
          </SuperHostBadge>
        )}
        <Text fontSize="sm" color="gray3">
          {country}
        </Text>
        <RatingWrapper>
          <Text fontSize="sm">{rating}</Text>
        </RatingWrapper>
      </DetailWrapper>
      <NameText fontSize="lg">{name}</NameText>
      <RateWrapper fontSize="lg" as="div">
        <OriginalRateText color="gray3">₩{originalRate}</OriginalRateText>
        <Text fontWeight="extraBold">₩{sellingRate}</Text>
        <Text>{SELLING_RATE_TEXT}</Text>
      </RateWrapper>
    </div>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacing.xsm};
`;

const SuperHostBadge = styled.div`
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacing.xxsm};
  margin-right: ${props => props.theme.spacing.xxsm};
  padding: 0 ${props => props.theme.spacing.xxsm};
`;

const RatingWrapper = styled(Text)`
  margin-left: auto;
`;

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacing.sm};
  ${Text} {
    line-height: 0;
  }
`;

const OriginalRateText = styled(Text)`
  text-decoration: line-through;
  margin-right: ${props => props.theme.spacing.xxsm};
`;

const NameText = styled(Text)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: ${props => props.theme.spacing.xsm};
`;

export default Description;
