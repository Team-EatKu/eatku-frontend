import { Icons, Colors } from "@styles";
import {
  Button,
  Icon,
  Image,
  Input,
  Logo,
  Stars,
  Tag,
  Text,
} from "@atom/index.tsx";
import {
  FilterRow,
  Profile,
  Rating,
  SearchBar,
  Tags,
  TextView,
} from "@molecule/index.tsx";
import { Filter, Header } from "@organism/index.tsx";
import { SampleContainer } from "./styles.ts";

import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const Index = () => {
  return (
    <SampleContainer>
      <div className="atom">
        <section>
          <Logo />
        </section>
        <section>
          <Icon icon={Icons.search} color={Colors.Black} />
        </section>
        <section style={{ width: "20rem" }}>
          <Button
            label={"버튼"}
            variant={"primary"}
            leftIcon={Icons.search}
            onClick={() => {
              axios
                .get(apiUrl + "user/nickname/이성성민민", {})
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
          <Button label={"버튼"} variant={"outline"} rightIcon={Icons.search} />
          <Button
            label={"버튼"}
            variant={"disabled"}
            rightIcon={Icons.search}
          />
          <Button label={"버튼"} size={"small"} rightIcon={Icons.search} />
          <Button label={"버튼"} size={"medium"} rightIcon={Icons.search} />
          <Button label={"버튼"} size={"large"} rightIcon={Icons.search} />
        </section>
        <section style={{ width: "35rem" }}>
          <Tag label={"태그"} />
          <Tag label={"태그"} variant={"active"} />
          <Tag label={"태그"} variant={"active"} icon={Icons.close} />
          <Tag label={"#해시태그"} variant={"hashtag"} />
        </section>
        <section style={{ width: "50rem" }}>
          <Image src={"https://placehold.co/200"} />
          <Image
            src={"https://placehold.co/300x200"}
            width={"30rem"}
            aspectRatio={"3 / 2"}
          />
          <Image
            src={"https://placehold.co/500x100"}
            width={"50rem"}
            aspectRatio={"5 / 1"}
          />
        </section>
        <section style={{ width: "30rem" }}>
          <Input />
        </section>
        <section style={{ width: "30rem" }}>
          <Stars rate={1} />
          <Stars rate={2} />
          <Stars rate={3} />
          <Stars rate={4} />
          <Stars rate={5} />
        </section>
        <section style={{ display: "flex" }}>
          <Text text={"텍스트입니다."} />
          <Text
            text={[
              "텍스트입니다1",
              "텍스트입니다2",
              "텍스트입니다3",
              "텍스트입니다4",
            ]}
          />
        </section>
      </div>
      <hr />
      <div className="molecule">
        <section style={{}}>
          <SearchBar placeholder={"공학관, 혼밥, 쌀국수"} />
        </section>
        <section style={{}}>
          <Rating current={"4.5"} />
        </section>
        <section style={{ width: "30rem" }}>
          <Profile src={"https://placehold.co/40"} name={"닉네임"} />
          <Profile
            src={"https://placehold.co/60"}
            name={"닉네임"}
            variant={"review"}
            rate={5}
          />
        </section>
        <section style={{}}>
          <FilterRow
            label={"위치"}
            tags={["건입", "중문", "후문", "쪽문", "구의"]}
          />
        </section>
        <section style={{}}>
          <TextView text={"매일 11:00 ~ 22:00"} icon={Icons.schedule} />
          <TextView
            text={[
              "물, 반찬, 국 셀프",
              "키오스크 주문",
              "사이즈업 가능(추가금액)",
              "Wi-Fi",
              "포장 가능",
            ]}
            icon={Icons.check}
          />
        </section>
        <section>
          <Tags
            tags={[
              "혼밥",
              "데이트",
              "밥약",
              "회식",
              "친구들과",
              "카공",
              "감성",
            ]}
            variant={"default"}
          />
        </section>
      </div>
      <hr />
      <div className="organism">
        <section>
          <Header />
        </section>
        <section>
          <Filter />
        </section>
      </div>
    </SampleContainer>
  );
};

export default Index;
