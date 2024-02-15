import styled from "@emotion/styled";
import { ProfileContainerProps } from "@typings/common/molecule.ts";
import { Generators } from "@styles";
import { CssType } from "@typings/commonType.ts";
import { css } from "@emotion/react";

export const ProfileVariants: CssType = {
  default: css`
    & > img.profile__img {
      width: 4rem;
    }

    & > div.profile__content {
      & > div.profile__name {
        & > strong {
          ${Generators.fontGenerator("2rem", "400", "2.4rem")};
        }

        ${Generators.fontGenerator("2rem", "300", "2.4rem")};
      }
    }
  `,
  review: css`
    height: 6rem;

    & > img.profile__img {
      width: 6rem;
    }

    & > div.profile__content {
      height: 100%;
      padding: 0.6rem 0;
      ${Generators.flexGenerator("column", "space-between", "flex-start")};

      & > div.profile__name {
        & > strong {
          ${Generators.fontGenerator("2rem", "400", "2.4rem")};
        }

        ${Generators.fontGenerator("2rem", "300", "2.4rem")};
      }
    }
  `,
};
export const ProfileContainer = styled.div<ProfileContainerProps>`
  ${Generators.flexGenerator("row", "flex-start", "center")};
  gap: 1rem;
  min-width: 12.5rem;

  ${(props) => props.variant && ProfileVariants[props.variant]}

  ${(props) => props.customStyle};
`;
