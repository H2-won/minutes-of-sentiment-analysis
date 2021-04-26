import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .subTitle {
    font-size: 18px;
    font-weight: bold;
    color: ${palette.black};
    margin-right: 2rem;
  }

  div {
    width: 360px;
    padding: 0.75rem;
    font-size: 18px;
    color: ${palette.gray4};
  }

  input {
    height: 36px;
    width: 360px;
    font-size: 18px;
    color: ${palette.gray4};
    border: 0.5px solid ${palette.gray2};
    padding: 0.75rem;
    display: flex;
    align-items: center;
  }

  & + & {
    margin-top: 1.5rem;
  }
`;

function ProduceConferenceModal() {
  return (
    <Container>
      <ContentWrapper>
        <span className="subTitle">회의 코드</span>
        <div>ABC2f1d5k7G</div>
      </ContentWrapper>
      <ContentWrapper>
        <span className="subTitle">회의 제목</span>
        <input type="text" maxLength="24" />
      </ContentWrapper>
      <ContentWrapper>
        <span className="subTitle">비밀번호</span>
        <input type="password" maxLength="24" />
      </ContentWrapper>
    </Container>
  );
}

export default ProduceConferenceModal;
