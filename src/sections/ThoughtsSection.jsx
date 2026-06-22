import { useState } from 'react';

import data from '../data.json';

import FadeInSection from '../components/FadeInSection';
import WritingModal from '../components/WritingModal';

import './ThoughtsSection.css';

export default function ThoughtsSection() {
  const { writings } = data;

  const tabs = ['poems', 'journals', 'articles'];

  const [activeTab, setActiveTab] = useState('poems');

  const [selectedWriting, setSelectedWriting] = useState(null);

  return (
    <section className="thoughts-section">
      <div className="container">
        <div className="thought-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="writing-grid">
          {writings[activeTab].length > 0 ? (
            <div className="writing-grid">
              {writings[activeTab].map((writing, index) => (
                <FadeInSection key={writing.title} delay={index * 0.08}>
                  <div
                    className="writing-card"
                    onClick={() => setSelectedWriting(writing)}
                  >
                    <h3>{writing.title}</h3>

                    <div className="writing-card-date">{writing.date}</div>

                    <p>{writing.excerpt}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          ) : (
            <FadeInSection>
              <div className="empty-category">
                <div className="empty-icon">✦</div>

                <h3>Nothing here yet</h3>

                <p>
                  This {activeTab.slice(0, -1)} shelf is waiting for its first
                  entry.
                </p>
              </div>
            </FadeInSection>
          )}
        </div>

        <WritingModal
          writing={selectedWriting}
          writings={writings[activeTab]}
          onClose={() => setSelectedWriting(null)}
          onSelectWriting={setSelectedWriting}
        />
      </div>
    </section>
  );
}
