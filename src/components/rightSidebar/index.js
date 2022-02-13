import Contacts from "./Contacts";
import FollowTab from "./FollowTab";
import useUser from "../../hooks/use-user";

function RightSidebar() {
  const {
    user: { docId, followers, following, friends, userId },
  } = useUser();
  // console.log(friends);

  return (
    <section className="hidden md:inline-grid md:col-span-1">
      <div className="fixed top-15 right-5 w-1/5">
        <FollowTab
          docId={docId}
          followers={followers}
          following={following}
          friends={friends}
          userId={userId}
        />

        <Contacts userId={userId} docId={docId} friends={friends} />
      </div>
    </section>
  );
}

export default RightSidebar;
