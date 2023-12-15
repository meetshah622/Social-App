import PlusSignIcon from "../../../../Icons/PlusSignIcon";
import "./StoriesWrapperStyle.scss";
import StoryBlock from "./StoryBlock";
import FollowAvatar1 from "../../../../assets/Images/Follow-Avatar-1.png";
import FollowAvatar2 from "../../../../assets/Images/Follow-Avatar-2.png";
import FollowAvatar3 from "../../../../assets/Images/Follow-Avatar-3.png";
import FriendsAvatar1 from "../../../../assets/Images/friends-Avatar-1.png";
import FriendsAvatar2 from "../../../../assets/Images/friends-Avatar-2.png";
import FriendsAvatar3 from "../../../../assets/Images/friends-Avatar-3.png";
function StoriesWrapper() {
  return (
    <div className="storiesWrapperStyle">
      <div className="addStoryBtn">
        <PlusSignIcon />
      </div>
      <StoryBlock imgSrc={FollowAvatar1} />
      <StoryBlock imgSrc={FollowAvatar2} />
      <StoryBlock imgSrc={FollowAvatar3} />
      <StoryBlock imgSrc={FriendsAvatar1} />
      <StoryBlock imgSrc={FriendsAvatar2} />
      <StoryBlock imgSrc={FriendsAvatar3} />
      <StoryBlock imgSrc={FollowAvatar1} />
      <StoryBlock imgSrc={FollowAvatar2} />
      <StoryBlock imgSrc={FriendsAvatar1} />
      {/* <StoryBlock imgSrc={FollowAvatar3} /> */}
    </div>
  );
}

export default StoriesWrapper;
