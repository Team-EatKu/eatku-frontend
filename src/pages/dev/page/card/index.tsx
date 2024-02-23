import { CardContainer } from "./styles.ts";
import { Searchcard } from "@organism/index.tsx";

const index = () => {
  return (
    <CardContainer>
      <section>
        <Searchcard />
      </section>
    </CardContainer>
  );
};

export default index;
