import { DetailContainer } from "./styles.ts";
import MainLayout from "../../../../common/layout/MainLayout";
import { Detail, Info, Menus, Reviews } from "@pages/detail/component/organism";
import { useGetNickname } from "@api/endpoints/user/useGetNickname.ts";

const Index = () => {
  const queryResult = useGetNickname({
    apiUrl: "/user/nickname/{nickName}",
    apiParams: {
      nickName: "이이성성민민",
    },
  });
  console.log(queryResult.data);

  return (
    <DetailContainer>
      <MainLayout>
        <Info />
        <Detail />
        <Menus />
        <Reviews />
      </MainLayout>
    </DetailContainer>
  );
};

export default Index;
