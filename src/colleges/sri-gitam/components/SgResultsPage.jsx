import React, { useState } from 'react';
import { Trophy, Percent, Award, GraduationCap } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const STAT_BLOCKS = [
  { icon: Trophy, label: 'Top Scores', sublabel: 'Academic Excellence' },
  { icon: Percent, label: 'Pass Percentage', sublabel: 'Overall Performance' },
  { icon: Award, label: 'Student Achievements', sublabel: 'Recognitions & Milestones' },
  { icon: GraduationCap, label: 'Competitive Exam Results', sublabel: 'Entrance Performance' },
];

const YEARS = ['2025–26', '2024–25', '2023–24'];

export function SgResultsPage({ onAction, data }) {
  const [activeYear, setActiveYear] = useState('2025–26');
  const pageData = data?.pages?.results?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.title || "RESULTS"}
        breadcrumb={heroData.title || "Results"}
        title={heroData.title || "Student Achievements"}
        subtitle={heroData.subtitle || "Recognising the academic effort, progress and achievements of our students."}
        image={data?.gallery?.images?.[1]?.src || "/sri-gitam/gallery/smart_classrooms_1789976999081.jpg"}
      />

      {/* Celebrating Progress */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">ACHIEVEMENTS</span>
              <h2 className="sg-section-title">Celebrating Student Progress</h2>
              <p className="sg-section-desc">
                Academic achievements reflect the effort of students, teachers and families working together towards a common goal.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-secondary, #B6533E)', fontStyle: 'italic', marginTop: '24px' }}>
                Results will be updated with verified academic data.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div className="sg-result-blocks">
                {STAT_BLOCKS.map((s, i) => (
                  <div key={i} className="sg-result-block">
                    <div className="sg-result-block-icon"><s.icon size={36} /></div>
                    <h3>—</h3>
                    <p style={{ fontWeight: '600', color: 'var(--color-primary, #172A43)', marginBottom: '4px' }}>{s.label}</p>
                    <p style={{ fontSize: '13px' }}>{s.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Year Filter */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header">
            <span className="sg-eyebrow">ACADEMIC RESULTS</span>
            <h2 className="sg-section-title">Year-Wise Performance</h2>
          </div>
          <div className="sg-year-tabs">
            {YEARS.map(y => (
              <button key={y} className={`sg-year-tab ${activeYear === y ? 'active' : ''}`} onClick={() => setActiveYear(y)}>
                {y}
              </button>
            ))}
          </div>
          <div className="sg-empty-state">
            <h3>Results for {activeYear}</h3>
            <p>Verified academic results for this academic year will be updated here once available.</p>
          </div>
        </Container>
      </section>

      {/* Achievement Stories / Toppers Grid */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">OUR TOP ACHIEVERS</span>
            <h2 className="sg-section-title">Meet Our Achievers</h2>
            <p className="sg-section-desc sg-section-desc-center">
              Celebrating our students who secured State Ranks, NEET All India Honors, and JEE Main distinctions.
            </p>
          </div>

          {data?.pages?.results?.achievers && data?.pages?.results?.achievers?.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '32px' }}>
              {data.pages.results.achievers.map((achiever, i) => (
                <div key={i} className="sg-card" style={{ padding: '24px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid var(--color-border, #E8E1D9)', textAlign: 'center' }}>
                  <div style={{ width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px auto', border: '3px solid var(--color-secondary, #C99A3D)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <img src={achiever.image} alt={achiever.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span className="sg-eyebrow" style={{ fontSize: '11px', marginBottom: '6px', color: 'var(--color-secondary, #C99A3D)' }}>{achiever.rank}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-primary, #12304A)', margin: '0 0 6px 0' }}>{achiever.name}</h3>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-primary, #12304A)', margin: '0 0 4px 0' }}>{achiever.score}</p>
                  <p style={{ fontSize: '12.5px', color: 'var(--color-muted, #657080)', margin: 0 }}>{achiever.exam}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="sg-empty-state">
              <Award size={48} color="var(--color-border, #E8E1D9)" style={{ margin: '0 auto 16px', display: 'block' }} />
              <h3>Student Achievements</h3>
              <p>Verified student achievement stories will be added here. This section will be updated as information becomes available.</p>
            </div>
          )}
        </Container>
      </section>

      <SgCTABanner
        title="Every Achievement Begins With a Strong Foundation"
        desc={`Start your Intermediate journey at ${data?.college?.name}.`}
        primaryLabel="Explore Academics"
        primaryTarget="academics"
        onAction={onAction}
      />
    </div>
  );
}
