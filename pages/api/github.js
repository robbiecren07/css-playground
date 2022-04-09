import { Octokit } from '@octokit/rest'

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_USER_KEY
  })

  const followers = await octokit.request('/users/robbiecren07/followers?per_page=100')
  const followerCount = followers.data.length

  const stars = await octokit.request('/users/robbiecren07/repos')
  const starsCount = stars.data.filter(repo => !repo.fork).reduce((acc, item) => {
    return acc + item.stargazers_count
  }, 0)

  const reposStarred = await octokit.request('/users/robbiecren07/starred')
  const starredCount = reposStarred.data.length

  return res.status(200).json({ stars: starsCount, followers: followerCount, starred: starredCount })
}