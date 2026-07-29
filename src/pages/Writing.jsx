import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import MainLayout from '../layouts/MainLayout';
import FadeInSection from '../components/FadeInSection';

import data from '../data.json';

import './Writing.css';

export default function Writing() {
  const { category, slug } = useParams();

  const [content, setContent] = useState('');

  const writing = data.writings[category]?.find((item) => item.slug === slug);

  useEffect(() => {
    if (!writing) return;

    fetch(`${import.meta.env.BASE_URL}${writing.file}`)
      .then((res) => res.text())
      .then(setContent);
  }, [writing]);

  if (!writing) {
    return (
      <MainLayout title="Not Found | Yuval">
        <div className="container writing-page">
          <h1>Writing not found</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`${writing.title} | Yuval`}>
      <section className="writing-page">
        <div className="container">
          <FadeInSection>
            <Link to="/thoughts" className="writing-back">
              ← Back to Thoughts
            </Link>

            <article className="writing-content">
              <header className="writing-header">
                <h1>{writing.title}</h1>

                <div className="writing-meta">
                  <span>{writing.date}</span>
                  <span>{category}</span>
                </div>

                <p className="writing-excerpt">{writing.excerpt}</p>
              </header>

              <div className="markdown-content">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </article>
          </FadeInSection>
        </div>
      </section>
    </MainLayout>
  );
}
