import styled from "@emotion/styled";

export const SampleContainer = styled.div`
  & > div.atom {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  & > div.molecule {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
