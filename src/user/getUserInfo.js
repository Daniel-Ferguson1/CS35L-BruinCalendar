import firebase from 'firebase/app';

export const getUserInfo = async userId => {
    const userInfoDoc = await firebase.firestore()
        .collection('users') //query user's collection
        .doc(userId) 
        .get(); // execute query

    const userInfo = userInfoDoc.data();

    if (!userInfo) return null;
    // give all of them if exiist.
    return {
        ...userInfo,
        id: userInfoDoc.id,
    };
}