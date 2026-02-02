'use client';
import { useState, useEffect } from 'react';
import { companyInfo } from '@/data/properties';

export default function SocialFeed() {
  const [activeTab, setActiveTab] = useState('tiktok');

  // TikTok embed URLs - these will show latest videos
  const tiktokUsername = 'mofarmlandsltd';
  const instagramUsername = 'mofarm_lands';

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Follow Us on <span className="text-primary">Social Media</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            See our latest property updates, site visits, and happy customers
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'tiktok'
                  ? 'bg-charcoal text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              TikTok (11.7K)
            </button>
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </button>
          </div>
        </div>

        {/* TikTok Feed */}
        {activeTab === 'tiktok' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-charcoal">@{tiktokUsername}</h3>
                  <p className="text-gray-500">11.7K Followers • Land Tours & Property Updates</p>
                </div>
                <a 
                  href={companyInfo.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto btn btn-primary"
                >
                  Follow
                </a>
              </div>

              {/* TikTok Embed - This shows the actual TikTok profile feed */}
              <div className="relative w-full" style={{minHeight: '500px'}}>
                <blockquote 
                  className="tiktok-embed" 
                  cite={`https://www.tiktok.com/@${tiktokUsername}`}
                  data-unique-id={tiktokUsername}
                  data-embed-type="creator"
                  style={{maxWidth: '100%'}}
                >
                  <section>
                    <a target="_blank" href={`https://www.tiktok.com/@${tiktokUsername}?refer=creator_embed`}>@{tiktokUsername}</a>
                  </section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
                
                {/* Fallback content while loading */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-4">Loading TikTok feed...</p>
                    <a 
                      href={companyInfo.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on TikTok →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instagram Feed */}
        {activeTab === 'instagram' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-charcoal">@{instagramUsername}</h3>
                  <p className="text-gray-500">Property Photos & Customer Stories</p>
                </div>
                <a 
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto btn bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                >
                  Follow
                </a>
              </div>

              {/* Instagram Embed Widget */}
              <div className="relative w-full" style={{minHeight: '500px'}}>
                {/* Using LightWidget for Instagram feed - Free service */}
                <iframe 
                  src={`https://www.instagram.com/${instagramUsername}/embed`}
                  className="w-full border-0 rounded-xl"
                  style={{minHeight: '500px'}}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                {/* Alternative: Direct link if embed doesn't work */}
                <div className="mt-6 text-center">
                  <a 
                    href={companyInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
                  >
                    View all posts on Instagram →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <a 
            href={companyInfo.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all group"
          >
            <svg className="w-8 h-8 mx-auto mb-2 text-charcoal group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <div className="text-2xl font-bold text-accent">11.7K</div>
            <div className="text-gray-500 text-sm">TikTok Followers</div>
          </a>
          <a 
            href={companyInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all group"
          >
            <svg className="w-8 h-8 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
            <div className="text-2xl font-bold text-accent">13K</div>
            <div className="text-gray-500 text-sm">Facebook Likes</div>
          </a>
          <a 
            href={companyInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all group"
          >
            <svg className="w-8 h-8 mx-auto mb-2 text-pink-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div className="text-2xl font-bold text-accent">140+</div>
            <div className="text-gray-500 text-sm">Instagram Followers</div>
          </a>
        </div>
      </div>
    </section>
  );
}
