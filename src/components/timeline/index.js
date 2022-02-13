import Postfeed from "./Postfeed";
import useUser from "../../hooks/use-user";
import usePhotos from "../../hooks/use-photos";
import Feed from "./Feed";

function Timeline() {
  const { user } = useUser();
  const { photos } = usePhotos();
  console.log(photos);
  return (
    <div className="col-span-2 flex justify-center">
      <div className="container lg:w-5/6">
        <Postfeed username={user.username} userId={user.userId} />
        <Feed photos={photos} />
      </div>
    </div>
  );
}

export default Timeline;
