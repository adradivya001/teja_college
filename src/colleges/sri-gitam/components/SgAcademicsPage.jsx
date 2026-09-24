import React from 'react';
import { BookOpen, Target, Compass, TrendingUp, Atom, Dna, BarChart2, Users, Brain } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

const ICONS = { BookOpen, Target, Compass, TrendingUp, Atom, Dna, BarChart2, Users, Brain };

export function SgAcademicsPage({ onAction, data }) {
  const cName = data?.college?.name || 'Our College';
  const cShortName = data?.college?.shortName || 'Our College';
  const pageData = data?.pages?.academics?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const introData = pageData.find(s => s.type === 'academic-intro') || {};
  const journeyData = pageData.find(s => s.type === 'winning-process') || {};
  const programsData = pageData.find(s => s.type === 'programs') || {};
  const focusData = pageData.find(s => s.type === 'academic-focus') || {};
  const ctaData = pageData.find(s => s.type === 'cta-banner') || {};

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.eyebrow || "ACADEMICS"}
        breadcrumb="Academics"
        title={heroData.title || "Learning With Purpose"}
        subtitle={heroData.subtitle || "Develop strong concepts, strengthen subject knowledge and prepare for the next stage of your education."}
        image={heroData.image || "/sri-gitam/classroom_focus.png"}
      />

      {/* Academic Intro */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-split">
            <div className="sg-split-left">
              <div className="sg-split-img">
                <img src={introData.image || data?.gallery?.images?.[7]?.src || data?.gallery?.images?.[0]?.src || "/sri-gitam/classroom_study.png"} alt="Classroom Faculty and Learning" />
              </div>
            </div>
            <div className="sg-split-right">
              <span className="sg-eyebrow">{introData.eyebrow || "ACADEMIC APPROACH"}</span>
              <h2 className="sg-section-title">{introData.title || "An Academic Journey Built Around Understanding"}</h2>
              <p style={{ fontSize: '16px', color: 'var(--color-muted, #657080)', lineHeight: '1.7', marginBottom: '24px', whiteSpace: 'pre-line' }}>
                {introData.content || `Intermediate education is an important stage in a student's academic journey. ${cShortName}'s academic approach focuses on developing subject understanding, encouraging consistent learning and helping students prepare for future educational pathways.\n\nEach stream is designed to give students the foundational knowledge they need to progress into higher education with confidence and clarity.`}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Journey */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
              <span className="sg-eyebrow">{journeyData.eyebrow || "THE LEARNING JOURNEY"}</span>
              <h2 className="sg-section-title">{journeyData.title || "Five Stages of Academic Growth"}</h2>
              <p className="sg-section-desc" style={{ marginBottom: '32px' }}>
                {journeyData.description || "Our approach guides students through a structured academic progression from concept clarity to exam readiness."}
              </p>
              <button className="sg-btn-primary" onClick={() => onAction('navigate_to', 'programmes')}>Explore Programmes</button>
            </div>
            <div style={{ flex: 1 }}>
              <div className="sg-timeline">
                {(journeyData.steps || []).map((s, i) => (
                  <div key={i} className="sg-timeline-item" style={{ alignItems: 'flex-start' }}>
                    <div className="sg-timeline-num" style={{ marginTop: '8px', boxShadow: '0 0 0 8px white' }}>{s.n || `0${i+1}`}</div>
                    <div className="sg-timeline-body sg-card" style={{ flex: 1, padding: '24px 28px', marginTop: '0', cursor: 'default' }}>
                      {s.label && <p className="sg-timeline-label" style={{ marginBottom: '6px' }}>{s.label}</p>}
                      <h3 style={{ fontFamily: 'var(--font-heading, Plus Jakarta Sans, sans-serif)', fontSize: '20px', fontWeight: '800', color: 'var(--color-text, #181E24)', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
                        {s.title || s.h}
                      </h3>
                      <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted, #7A7267)', lineHeight: '1.6', margin: 0 }}>
                        {s.desc || s.p}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Academic Pathways */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">{programsData.eyebrow || "OUR PROGRAMMES"}</span>
            <h2 className="sg-section-title">{programsData.title || "Academic Pathways"}</h2>
            <p className="sg-section-desc sg-section-desc-center">{programsData.description || "Choose an Intermediate stream aligned with your interests and future goals."}</p>
          </div>
          <div className="sg-cards-grid">
            {(programsData.programs || []).map(p => {
              const IconComp = ICONS[p.icon] || Atom;
              return (
                <div key={p.id} className="sg-programme-card" style={{ background: p.bgColor, padding: '32px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)', transition: 'transform 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <IconComp size={26} color="var(--color-primary, #172A43)" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading, Playfair Display, serif)', fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: 'var(--color-primary, #172A43)' }}>{p.name}</h3>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-muted, #657080)', marginBottom: '20px' }}>{p.subjects}</p>
                  <button className="sg-text-link" onClick={() => onAction('navigate_to', 'programmes')}>Explore {p.name} →</button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Academic Focus */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">{focusData.eyebrow || "ACADEMIC FOCUS"}</span>
            <h2 className="sg-section-title">{focusData.title || "The Four Pillars of Our Academic System"}</h2>
          </div>
          <div className="sg-focus-grid">
            {(focusData.features || []).map((f, i) => {
              const IconComp = ICONS[f.icon] || Brain;
              return (
                <div key={i} className="sg-focus-item">
                  <div className="sg-focus-icon"><IconComp size={28} /></div>
                  <h4>{f.h}</h4>
                  <p>{f.p}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Teja Academy — Competitive Coaching Division */}
      {data?.tejaAcademy && (
        <section className="sg-section sg-section-white" id="teja-academy">
          <Container maxWidth="1280px">
            <div className="sg-section-header-center">
              <span className="sg-eyebrow" style={{ color: 'var(--color-primary, #E9007F)' }}>TEJA ACADEMY</span>
              <h2 className="sg-section-title">Prepare. Compete. Succeed.</h2>
              <p className="sg-section-desc sg-section-desc-center">
                Dedicated competitive coaching for government recruitment examinations (APPSC Groups, Police, Teaching, NRA CET) in Telugu & English Medium.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '36px' }}>
              {(data.tejaAcademy.categories || []).map((cat, idx) => (
                <div key={idx} className="sg-card" style={{ padding: '28px', borderRadius: '16px', border: '1px solid var(--color-border, #FCE4F2)', display: 'flex', flexDirection: 'column' }}>
                  <span className="sg-eyebrow" style={{ fontSize: '11px', marginBottom: '8px' }}>{cat.tag || "COMPETITIVE EXAM"}</span>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-secondary, #35106F)', margin: '0 0 8px 0' }}>{cat.name}</h3>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-primary, #E9007F)', margin: '0 0 12px 0' }}>{cat.target}</p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted, #534D5C)', lineHeight: '1.6', margin: '0 0 16px 0', flex: 1 }}>{cat.description}</p>
                  <div style={{ borderTop: '1px solid var(--color-border, #FCE4F2)', paddingTop: '12px', fontSize: '12.5px', color: 'var(--color-secondary, #35106F)', fontWeight: '600' }}>
                    Medium: Telugu & English Medium
                  </div>
                </div>
              ))}
            </div>

            {/* Teja Academy Highlight Bar */}
            <div style={{ marginTop: '40px', background: 'linear-gradient(135deg, var(--teja-purple, #35106F) 0%, var(--teja-magenta, #E9007F) 100%)', borderRadius: '18px', padding: '36px', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <span style={{ color: 'var(--teja-yellow, #FFD200)', fontWeight: '800', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>SELECTION RECORD</span>
                <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '4px 0 8px 0', color: '#FFFFFF' }}>500+ Government Job Selections*</h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#F8E6F5' }}>*As stated in Teja Academy promotional material. Guidance led by Director G. Tejeswara Reddy.</p>
              </div>
              <button className="sg-btn-primary" style={{ background: 'var(--teja-yellow, #FFD200)', color: 'var(--teja-purple, #35106F)', border: 'none', fontWeight: '800' }} onClick={() => onAction('open_admissions_modal')}>
                Enquire Academy Coaching
              </button>
            </div>
          </Container>
        </section>
      )}

      <SgCTABanner
        title={ctaData.title || "Choose a Path That Matches Your Future"}
        desc={ctaData.desc || `Explore the Intermediate streams available at ${cName}.`}
        primaryLabel={ctaData.primaryLabel || "Explore Programmes"}
        primaryTarget={ctaData.primaryTarget || "programmes"}
        onAction={onAction}
      />
    </div>
  );
}
