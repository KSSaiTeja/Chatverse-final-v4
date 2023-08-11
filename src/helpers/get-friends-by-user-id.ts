import { fetchRedis } from './redis'

export const getFriendsByUserId = async (userId: string) => {
  // retrieve friends for current user it is v5 git-v12-final-v6
  console.log("userid", userId)
  const friendIds = (await fetchRedis(
    'smembers',
    `user:${userId}:friends`
  )) as string[]
  console.log("friend ids", friendIds)

  const friends = await Promise.all(
    friendIds.map(async (friendId) => {
      const friend = await fetchRedis('get', `user:${friendId}`) as string
      const parsedFriend = JSON.parse(friend) as User
      return parsedFriend
    })
  )

  return friends
}
