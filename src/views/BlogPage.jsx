'use client';

import React, { useState } from 'react';
import { Search, ArrowRight, ArrowLeft } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function BlogPage() {
  const { blogs } = usePlots();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogSearch, setBlogSearch] = useState('');

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
      b.category.toLowerCase().includes(blogSearch.toLowerCase())
  );

  if (selectedBlog) {
    return (
      <article className="shell page-section pt-12 lg:pt-16">
        <button
          type="button"
          onClick={() => setSelectedBlog(null)}
          className="inline-flex min-h-11 items-center gap-2 text-[14px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#7A5C10]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All guides
        </button>

        <header className="mt-8">
          <p className="text-[14px] text-[#7A5C10]">{selectedBlog.category}</p>
          <h1 className="mt-3 display-lg max-w-[26ch] text-[#0B1F3A]">{selectedBlog.title}</h1>
          <p className="mt-4 text-[15px] text-[var(--text-soft)]">
            {selectedBlog.author} · {selectedBlog.date} · {selectedBlog.readTime}
          </p>
        </header>

        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          width={1600}
          height={900}
          className="mt-8 h-[260px] w-full object-cover sm:h-[380px] lg:h-[460px]"
        />

        <div className="measure mt-10 whitespace-pre-line text-[19px] leading-[1.75] text-[#1A1A1A]">
          {selectedBlog.content}
        </div>
      </article>
    );
  }

  return (
    <div className="shell page-section pt-12 lg:pt-16">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-[14px] text-[#7A5C10]">Guides</p>
          <h1 className="mt-3 display-xl max-w-[20ch] text-[#0B1F3A]">
            Notes on land, approval and title.
          </h1>
        </div>
        <p className="lg:col-span-5 max-w-[46ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
          BDA, BMRDA and BIAPPA approvals, A-Khata conversion, and the growth corridors the desk
          follows — written to be read before a site visit.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-[14px] text-[var(--text-soft)] figures">
          {filteredBlogs.length} of {blogs.length} guides
        </p>
        <div className="relative w-full max-w-sm">
          <label htmlFor="blog-search" className="sr-only">
            Search guides
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5F5F5F]"
            aria-hidden="true"
          />
          <input
            id="blog-search"
            type="search"
            placeholder="BDA, khata, airport…"
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
            className="min-h-12 w-full bg-[#EFEEE8] pl-9 pr-4 text-[17px] text-[#1A1A1A] placeholder:text-[#5F5F5F] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <p className="mt-14 max-w-[46ch] text-[17px] leading-relaxed text-[var(--text-soft)]">
          Nothing matches that search yet. Try a corridor, an approval authority, or ask the desk.
        </p>
      ) : (
        <ul className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <li key={blog.id}>
              <button
                type="button"
                onClick={() => setSelectedBlog(blog)}
                className="frame block w-full text-left"
                aria-label={`Read ${blog.title}`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover"
                />
              </button>

              <div className="plate-line">
                <span>{blog.category}</span>
                <span>{blog.readTime}</span>
              </div>

              <h2 className="mt-3 font-heading text-[1.25rem] leading-snug text-[#0B1F3A]">
                <button type="button" onClick={() => setSelectedBlog(blog)} className="text-left hover:text-[#7A5C10]">
                  {blog.title}
                </button>
              </h2>
              <p className="mt-2 line-clamp-3 text-[16px] leading-relaxed text-[var(--text-soft)]">
                {blog.summary}
              </p>
              <button
                type="button"
                onClick={() => setSelectedBlog(blog)}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-[16px] text-[#0B1F3A] underline decoration-[#C8A34D] decoration-2 underline-offset-4 hover:text-[#7A5C10]"
              >
                Read the guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
