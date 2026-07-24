'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TEAL = '#0e9ab5';
const DARK_NAVY = '#0b3b4a';

const blogs = [
  {
    id: 1,
    image: '/Banner.jpg',
    category: 'Cardiology',
    title: 'Heart Health Tips for a Longer, Healthier Life',
    excerpt: 'Cardiovascular disease remains one of the leading health concerns worldwide. Regular exercise, a balanced diet, and timely medical checkups can dramatically reduce your risk. Learn how simple lifestyle changes can protect your heart.',
    author: 'Admin',
    date: 'July 15, 2026',
    readTime: '4 min read',
    tag: 'Heart Health',
    tagColor: '#e91e63',
  },
  {
    id: 2,
    image: '/Banner2.jpg',
    category: 'Gastroenterology',
    title: 'Understanding Digestive Disorders and Their Treatments',
    excerpt: 'Digestive disorders affect millions of people every year. From acid reflux to irritable bowel syndrome, early detection and proper treatment can prevent serious complications. Our expert gastroenterologists are here to help you.',
    author: 'Admin',
    date: 'July 10, 2026',
    readTime: '5 min read',
    tag: 'Gastro',
    tagColor: '#3f51b5',
  },
  {
    id: 3,
    image: '/banner1.jpg',
    category: 'Neurology',
    title: 'Managing Migraine: Expert Tips from Our Neurologists',
    excerpt: 'Migraines can be debilitating and impact daily life significantly. Understanding triggers, maintaining a healthy sleep schedule, and seeking professional guidance are key to managing this condition effectively and improving quality of life.',
    author: 'Admin',
    date: 'July 5, 2026',
    readTime: '3 min read',
    tag: 'Neurology',
    tagColor: '#7b1fa2',
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog-section"
      style={{
        background: '#f8fafc',
        padding: '80px 0',
        borderTop: '1px solid #e9f0f4',
      }}
    >
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: TEAL,
              textTransform: 'uppercase',
              marginBottom: 14,
            }}>Health Articles</span>
            <h2 style={{
              fontSize: 'clamp(22px, 2.4vw, 28px)',
              fontWeight: 700,
              color: DARK_NAVY,
              fontFamily: 'Poppins, sans-serif',
              margin: 0,
              lineHeight: 1.25,
            }}>
              Latest health information
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, margin: '10px 0 0', maxWidth: 440 }}>
              Stay informed with expert health tips, medical insights and wellness guides from our specialists.
            </p>
          </div>
          <Link
            href="/blog"
            className="blog-view-all"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, #0e9ab5, #0b3b4a)',
              color: '#fff',
              textDecoration: 'none',
              padding: '12px 28px',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 6px 20px rgba(14,154,181,0.25)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            View All Posts
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">

          {/* Featured Left Banner */}
          <div className="blog-featured">
            <div
              style={{
                background: 'linear-gradient(135deg, #0b3b4a 0%, #0e4d60 50%, #0e9ab5 100%)',
                borderRadius: 20,
                padding: '40px 36px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 460,
              }}
            >
              {/* Decorative circles */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200, borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.1)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', top: 20, right: 20,
                width: 100, height: 100, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.07)',
                pointerEvents: 'none',
              }} />

              {/* Medical cross icon */}
              <div style={{
                position: 'absolute', top: 32, left: 32,
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#7dd3fc',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '4px 14px',
                  borderRadius: 20,
                  marginBottom: 16,
                  backdropFilter: 'blur(8px)',
                }}>Health Blog</span>
                <h3 style={{
                  color: '#ffffff',
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: 800,
                  fontFamily: 'Poppins, sans-serif',
                  margin: '0 0 14px',
                  lineHeight: 1.25,
                }}>
                  Check Latest Updates<br />On Our Blog
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  margin: '0 0 24px',
                }}>
                  Get expert health articles, wellness tips, and medical news from our experienced team of doctors and specialists at Acharjee Health.
                </p>
                <Link
                  href="/blog"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#ffffff',
                    color: DARK_NAVY,
                    textDecoration: 'none',
                    padding: '11px 24px',
                    borderRadius: 50,
                    fontSize: 13,
                    fontWeight: 800,
                    fontFamily: 'Poppins, sans-serif',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s',
                  }}
                  className="blog-cta"
                >
                  View Blog
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card-wrap">
              <div className="blog-card">
                {/* Image */}
                <div className="blog-img-wrap">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={220}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="blog-img"
                  />
                  <div className="blog-overlay" />
                  <span className="blog-cat-tag" style={{ background: blog.tagColor }}>
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      By {blog.author}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span style={{ color: TEAL, fontWeight: 600 }}>{blog.readTime}</span>
                  </div>

                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>

                  <Link href="/blog" className="blog-read-more" style={{ color: TEAL }}>
                    Read More
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 280px repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .blog-featured {
          grid-row: span 1;
        }
        .blog-card-wrap {
          display: flex;
          flex-direction: column;
        }
        .blog-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1.5px solid #f1f5f9;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
          border-color: rgba(14,154,181,0.25);
        }
        .blog-card:hover .blog-img {
          transform: scale(1.06);
        }
        .blog-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }
        .blog-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11,59,74,0.3) 0%, transparent 60%);
        }
        .blog-cat-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .blog-card-body {
          padding: 20px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 500;
          flex-wrap: wrap;
        }
        .blog-title {
          font-size: 15.5px;
          font-weight: 800;
          color: ${DARK_NAVY};
          font-family: 'Poppins', sans-serif;
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-excerpt {
          font-size: 13px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          transition: gap 0.2s ease;
          margin-top: auto;
          padding-top: 4px;
          border-top: 1px solid #f1f5f9;
        }
        .blog-read-more:hover {
          gap: 10px;
        }
        .blog-view-all:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(14,154,181,0.35) !important;
        }
        .blog-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.25) !important;
        }
        @media (max-width: 1200px) {
          .blog-grid {
            grid-template-columns: 240px repeat(3, 1fr);
          }
        }
        @media (max-width: 991px) {
          .blog-grid {
            grid-template-columns: 1fr 1fr;
          }
          .blog-featured {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-featured {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
