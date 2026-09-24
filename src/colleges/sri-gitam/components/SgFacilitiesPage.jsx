import React from 'react';
import { MapPin, ExternalLink, BookOpen, FlaskConical, BookMarked, Layers, Users, ShieldCheck, Bus } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';
import './SgCampusFacilities.css';

const ICONS = { BookOpen, FlaskConical, BookMarked, Layers, Users, ShieldCheck, Bus, MapPin };

export function SgFacilitiesPage({ onAction, data }) {
  const pageData = data?.pages?.facilities?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const facilitiesData = pageData.find(s => s.type === 'philosophy' || s.type === 'why-us') || {};
  const galleryImages = data?.gallery?.images?.map(i => i.src) || [];

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.eyebrow || "WORLD-CLASS FACILITIES"}
        breadcrumb="Facilities"
        title={heroData.title || "Infrastructure Built for Excellence"}
        subtitle={heroData.subtitle || "Explore our advanced science laboratories, 50-computer online exam testing lab, libraries, and student amenities."}
        image={heroData.image || galleryImages[7] || galleryImages[0] || "/teja/gallery/teja_main_building.png"}
      />

      {/* Facilities Grid */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">INSTITUTIONAL INFRASTRUCTURE</span>
            <h2 className="sg-section-title">Built for Learning & Exploration</h2>
            <p className="sg-section-desc sg-section-desc-center">
              Every facility at {data?.college?.name} is intentionally planned to foster subject understanding, hands-on scientific practice, and exam confidence.
            </p>
          </div>

          <div className="sgf-grid">
            {(facilitiesData.pillars || []).map((f, i) => {
              const IconComp = ICONS[f.icon] || FlaskConical;
              const accentColors = ['var(--color-sg-peach, #F8E9E3)', 'var(--color-sg-sage, #EAF2EE)', 'var(--color-sg-sand, #F5EFE3)', 'var(--color-sg-lavender, #F0ECF6)'];
              return (
                <div key={i} className="sgf-card" style={{ '--card-accent': accentColors[i % accentColors.length] }}>
                  <div className="sgf-card-bg">
                    <img src={galleryImages[i % (galleryImages.length || 1)]} alt={f.title} loading="lazy" />
                    <div className="sgf-card-overlay" />
                  </div>

                  <div className="sgf-card-default">
                    <div className="sgf-icon-wrap">
                      <IconComp size={26} />
                    </div>
                    <span className="sgf-tag">Facility</span>
                    <h3 className="sgf-title">{f.title}</h3>
                    <p className="sgf-desc">{f.desc}</p>
                    <div className="sgf-hover-hint">
                      <span>Explore</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  <div className="sgf-card-hover">
                    <div className="sgf-icon-wrap sgf-icon-wrap--light">
                      <IconComp size={26} />
                    </div>
                    <h3 className="sgf-title sgf-title--light">{f.title}</h3>
                    <p className="sgf-detail">{f.desc}</p>
                  </div>

                  <div className="sgf-num">0{i + 1}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Facilities Photo Gallery */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">FACILITIES GALLERY</span>
            <h2 className="sg-section-title">Campus Facilities in Action</h2>
            <p className="sg-section-desc sg-section-desc-center">
              A visual tour of our laboratories, testing centers, seminar halls, and learning spaces.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {(data?.gallery?.images || []).map((item, i) => (
              <div 
                key={i} 
                className="sg-card"
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  padding: 0,
                  border: '1px solid var(--color-border, #EDE5D8)',
                  boxShadow: '0 4px 16px rgba(24, 30, 36, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', width: '100%', overflow: 'hidden', background: '#F8F4EC' }}>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#22084B', display: 'block' }} 
                  />
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <span className="sg-eyebrow" style={{ fontSize: '10px', padding: '2px 8px', marginBottom: '6px' }}>
                    {item.category || 'Facility'}
                  </span>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-text, #181E24)', margin: 0 }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SgCTABanner
        title="Experience Our Campus & Laboratories"
        desc="Book a campus visit or talk to our admissions counselors to learn how our facilities help students achieve top ranks."
        primaryLabel="Enquire About Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
