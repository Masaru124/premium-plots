'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { usePlots } from '../context/PlotsContext';

export default function BlogPage() {
  const { blogs } = usePlots();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogSearch, setBlogSearch] = useState('');

  const filteredBlogs = blogs.filter(
    (b) => b.title.toLowerCase().includes(blogSearch.toLowerCase()) || b.category.toLowerCase().includes(blogSearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="space-y-3 border-b border-[#e2e8f0] pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-[#FFC727]" />
          Bengaluru Real Estate Knowledge Base & SEO Guides
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d3d] tracking-tight font-heading">
          Plot Investment & Legal Verification Guides
        </h1>
        <div className="divider-gold mt-3" />
        <p className="text-[#718096] text-sm max-w-3xl mt-2">
          Everything you need to know about BDA, BMRDA, BIAPPA plot approvals, A-Katha conversion, and high-growth land corridors in Bengaluru.
        </p>
      </div>

      {selectedBlog ? (
        /* Blog Detail View */
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-10 space-y-6 max-w-4xl mx-auto shadow-sm">
          <button
            onClick={() => setSelectedBlog(null)}
            className="text-xs text-[#1e3a6e] hover:text-[#FFC727] flex items-center gap-1 font-semibold transition-colors"
          >
            ← Back to All Articles
          </button>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#0f1d3d]/8 border border-[#0f1d3d]/15 text-[#0f1d3d] text-xs font-bold">
              {selectedBlog.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f1d3d] font-heading">{selectedBlog.title}</h2>
            <div className="flex items-center gap-4 text-xs text-[#a0aec0] pt-1">
              <span>By {selectedBlog.author}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>
          </div>

          <div className="h-72 rounded-2xl overflow-hidden border border-[#e2e8f0]">
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose max-w-none text-[#4a5568] text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
            {selectedBlog.content}
          </div>
        </div>
      ) : (
        /* Blog Grid List */
        <div className="space-y-8">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-[#a0aec0] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search articles (e.g. BDA, Khata, Airport)..."
              value={blogSearch}
              onChange={(e) => setBlogSearch(e.target.value)}
              className="w-full bg-white border border-[#e2e8f0] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1a202c] focus:outline-none focus:border-[#0f1d3d]/40 focus:ring-2 focus:ring-[#0f1d3d]/10 shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-[11px] text-[#a0aec0]">
                      <span className="text-[#1e3a6e] font-semibold uppercase">{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1d3d] group-hover:text-[#FFC727] transition-colors line-clamp-2 font-heading">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#718096] line-clamp-3">{blog.summary}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center text-xs font-semibold text-[#FFC727] border-t border-[#e2e8f0] mt-4">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
