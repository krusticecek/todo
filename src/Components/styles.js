import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  min-height: 200px;
  margin-bottom: 40px;
  padding: 20px;
  width: 100%;
  border: 1px solid gold;
  border-radius: 10px;
  transition: box-shadow 300ms;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.26), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.span`
  cursor: pointer;
  color: Red;
`;

export const CardEditingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
