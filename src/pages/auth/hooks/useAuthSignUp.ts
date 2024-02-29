import { useState } from "react";
import { AuthStepType } from "@pages/auth/typings/component/organism.ts";

const useAuthSignUp = () => {
  const [step, setStep] = useState<AuthStepType>("email");
  const [params, setParams] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickName: "",
    lectureBuilding: "공학관",
    code: "",
    authNumber: "",
  });

  console.log(params);
  const onChangeParams = (field: string, value: any) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClickEmailStep = () => {
    setStep("code");
  };
  const handleClickCodeStep = () => {
    setStep("nickName");
  };
  const handleClickNicknameStep = () => {
    setStep("password");
  };
  const handleClickPasswordStep = () => {};
  const handleClickButton = () => {
    if (step === "email") {
      handleClickEmailStep();
    } else if (step === "code") {
      handleClickCodeStep();
    } else if (step === "nickName") {
      handleClickNicknameStep();
    } else if (step === "password") {
      handleClickPasswordStep();
    }
  };
  return {
    step,
    params,
    onChangeParams,
    handleClickButton,
  };
};

export default useAuthSignUp;
