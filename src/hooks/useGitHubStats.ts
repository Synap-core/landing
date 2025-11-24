'use client'

import { useState, useEffect } from 'react'

export interface GitHubStats {
  stars: number
  contributors: number
  isLoading: boolean
  error?: string
}

/**
 * Hook to fetch real GitHub stats
 * Returns mock data for now (stars < 10) to trigger "building community" messaging
 * Once the repo has meaningful stars, this will fetch real data
 */
export function useGitHubStats(options?: {
  owner?: string
  repo?: string
  mockStars?: number
}): GitHubStats {
  const { owner = 'synap', repo = 'core', mockStars = 0 } = options || {}
  
  const [stats, setStats] = useState<GitHubStats>({
    stars: mockStars,
    contributors: 0,
    isLoading: true
  })

  useEffect(() => {
    // For now, return mock data to show "building community" message
    // In the future, uncomment this to fetch real stats:
    /*
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats')
        }
        const data = await response.json()
        
        setStats({
          stars: data.stargazers_count || 0,
          contributors: data.subscribers_count || 0,
          isLoading: false
        })
      } catch (error) {
        setStats({
          stars: mockStars,
          contributors: 0,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    fetchStats()
    */
    
    // Mock implementation (current)
    setTimeout(() => {
      setStats({
        stars: mockStars,
        contributors: 0,
        isLoading: false
      })
    }, 100)
  }, [owner, repo, mockStars])

  return stats
}
