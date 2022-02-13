import { firebase, FieldValue } from "../lib/firebase";

export const getUserDataByUserId = async (userId) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
};

export const getSuggestions = async (userId, friends) => {
  const result = await firebase.firestore().collection("users").limit(5).get();
  const users = result.docs
    .map((item) => ({
      ...item.data(),
      docId: item.id,
    }))
    .filter(
      (profile) =>
        profile.userId !== userId && !friends.includes(profile?.userId)
    );
  return users;
};

export const handleLoggedUserFollowing = async (
  docId,
  suggestedUserId,
  followed
) => {
  await firebase
    .firestore()
    .collection("users")
    .doc(docId)
    .update({
      following: followed
        ? FieldValue.arrayRemove(suggestedUserId)
        : FieldValue.arrayUnion(suggestedUserId),
    });
};

export const handleFollowedUserFollowers = async (
  suggestedDocId,
  userId,
  followed
) => {
  await firebase
    .firestore()
    .collection("users")
    .doc(suggestedDocId)
    .update({
      followers: followed
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
};

export const handleLoggedUserFriends = async (
  docId,
  suggestedUserId,
  isFriend
) => {
  await firebase
    .firestore()
    .collection("users")
    .doc(docId)
    .update({
      friends: isFriend
        ? FieldValue.arrayRemove(suggestedUserId)
        : FieldValue.arrayUnion(suggestedUserId),
    });
};

export const handleSuggestedUserFriends = async (
  suggestedDocId,
  userId,
  isFriend
) => {
  await firebase
    .firestore()
    .collection("users")
    .doc(suggestedDocId)
    .update({
      friends: isFriend
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
};

export const getFriendsProfile = async (friend) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", friend)
    .get();

  const response = await result.docs.map((user) => ({
    ...user.data(),
    docId: user.id,
  }));
  return response[0];
};

export const submitInput = async (input, userId, postId) => {
  const result = await firebase.firestore().collection("posts").add({
    postsId: postId,
    userId: userId,
    post: input,
    likes: [],
    comments: [],
    userLatitude: "40.7128°",
    userLongitude: "74.0060°",
    dateCreated: Date.now(),
  });
};

export const getFollowingUsersPhotos = async (following, userId) => {
  const response = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();
  const userFollowedPhotos = response.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));
  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      const user = await getUserDataByUserId(photo.userId);
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );
  return photosWithUserDetails;
};

export const handleLikesFirebase = async (docId, userId, toggleLiked) => {
  // console.log(userId);
  const response = await firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      likes: toggleLiked
        ? FieldValue.arrayRemove({
            userId: userId,
          })
        : FieldValue.arrayUnion(userId),
    });
};

export const addCommentFirebase = async (docId, username, comment) => {
  const response = await firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({
        displayName: username,
        comment,
        likes: 0,
      }),
    });
};

export const checkUserExists = async (username) => {
  const response = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();
  const userData = response.docs.map((user) => ({
    ...user.data(),
    docId: user.id,
  }));
  if (userData[0]) {
    return userData;
  }
};

export const addBioProfile = async (docId, bio) => {
  const response = await firebase
    .firestore()
    .collection("users")
    .doc(docId)
    .update({
      bio: FieldValue.arrayUnion(bio),
    });
};

export const getPhotosByUserData = async (userId) => {
  const response = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", userId)
    .get();
  const data = response.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return data;
};

export const removeUserFriend = async (
  docId,
  userId,
  friendDocId,
  friendUserId
) => {
  await firebase
    .firestore()
    .collection("users")
    .doc(docId)
    .update({
      friends: FieldValue.arrayRemove(friendUserId),
    });
  await firebase
    .firestore()
    .collection("users")
    .doc(friendDocId)
    .update({
      friends: FieldValue.arrayRemove(userId),
    });
};
