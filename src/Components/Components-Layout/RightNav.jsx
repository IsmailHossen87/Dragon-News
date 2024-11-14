import FindUs from "./FindUs/FindUs";
import SocialLogin from "./SocialLogin/SocialLogin";

const RightNav = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;