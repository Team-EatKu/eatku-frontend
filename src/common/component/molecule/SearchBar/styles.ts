import styled from "@emotion/styled";
import { SearchBarContainerProps } from "@typings/common/molecule.ts";
import { Colors, Generators } from "@styles";

export const SearchBarContainer = styled.div<SearchBarContainerProps>`
  position: relative;
  width: ${(props) => props.width};
  height: 5rem;
  ${Generators.flexGenerator()};

  & > input.search-bar__input {
    padding-right: 7.5rem;
  }

  & > div.icon-wrapper {
    position: absolute;
    right: 0;
    height: 100%;
    ${Generators.flexGenerator()};
    padding: 0 2.5rem;
    cursor: pointer;

    & > span.search-bar__icon {
      transition: color 0.3s ease;
    }

    &:hover {
      & > span.search-bar__icon {
        color: ${Colors.Primary01};
      }
    }
  }

  ${(props) => props.customStyle};
`;
