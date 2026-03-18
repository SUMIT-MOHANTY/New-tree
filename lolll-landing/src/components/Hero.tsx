'use client'

import { Heart, Zap, Users } from 'lucide-react'
import React, { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess('Thanks! Keep an eye on your email for updates.')
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Make Every
            <br />
            <span className="text-red-600">Moment</span> Fun
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Lolll brings joy to your daily life with curated content
            that sparks laughter and brightens your day.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm font-semibold">Instant Joy</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm font-semibold">Daily Updates</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-semibold">Community</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Joining...' : 'Get Started'}
              </button>
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            {success && <p className="text-green-600 mt-2 text-sm">{success}</p>}
          </form>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 h-64 rounded-lg flex items-center justify-center">
                <Heart className="w-24 h-24 text-white fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
