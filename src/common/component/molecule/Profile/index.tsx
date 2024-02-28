import { ProfileProps } from "@typings/common/molecule.ts";
import { ProfileContainer } from "./styles.ts";
import { Image, Stars } from "@atom/index.tsx";

const Profile = ({
  src,
  name = "닉네임",
  rate,
  variant = "default",
  className = "",
  customStyle,
  ...props
}: ProfileProps) => {
  return (
    <ProfileContainer
      variant={variant}
      className={`profile ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Image src={src} className={"profile__img"} variant={"profile"} />
      <div className="profile__content">
        <div className="profile__name">
          <strong>{name}</strong>
          {` 님`}
        </div>
        {variant == "review" && rate && (
          <div className="profile__rating">
            <Stars rate={rate} />
          </div>
        )}
      </div>
    </ProfileContainer>
  );
};

export default Profile;
