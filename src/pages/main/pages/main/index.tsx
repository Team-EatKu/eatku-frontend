import { MainContainer } from "./styles.ts";
import { RecommendView, Title } from "@pages/main/component/organism/index.ts";
import MainLayout from "../../../../common/layout/MainLayout";
import { Filter } from "@organism/index.tsx";
import { Image } from "@atom/index.tsx";
import mainBg from "@img/bg/main-bg.svg";

const index = () => {
  return (
    <MainContainer>
      <MainLayout>
        <Title name={"소복이"} lectureBuilding={"공학관"} />
        <Image src={mainBg} width={"100%"} aspectRatio={"1280 / 270"} />
        <Filter />
        <RecommendView />
      </MainLayout>
    </MainContainer>
  );
};

export default index;
