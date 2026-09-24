import React from 'react';
import { MapPin, ExternalLink, ShieldCheck, Phone, Compass, CheckCircle2 } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SgInnerHero } from './SgInnerHero';
import { SgCTABanner } from './SgCTABanner';
import './SgShared.css';

export function SgCampusPage({ onAction, data }) {
  const pageData = data?.pages?.campus?.sections || [];
  const heroData = pageData.find(s => s.type === 'about-hero') || {};
  const galleryImages = data?.gallery?.images?.map(i => i.src) || [];
  const campuses = data?.college?.campuses || [];
  const contact = data?.college?.contact || {};

  return (
    <div className="sg-page">
      <SgInnerHero
        eyebrow={heroData.eyebrow || "OUR CAMPUSES & HOSTELS"}
        breadcrumb="Campuses"
        title={heroData.title || "Boys Campus, Girls Campus & Urban Centres"}
        subtitle={heroData.subtitle || "Explore our dedicated boys & girls campuses, residential hostel facilities, and central corporate admissions office in Anantapur."}
        image={heroData.image || galleryImages[0] || "/teja/gallery/teja_main_building.png"}
      />

      {/* Campuses & Hostels Cards */}
      <section className="sg-section sg-section-white">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">CAMPUS NETWORK</span>
            <h2 className="sg-section-title">Dedicated Campuses Across Anantapur</h2>
            <p className="sg-section-desc sg-section-desc-center">
              Teja Junior College operates dedicated learning campuses and residential hostel environments tailored for safety, study discipline, and focused learning.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '32px' }}>
            {campuses.map((c, i) => (
              <div key={c.id || i} className="sg-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', borderRadius: '18px', background: '#FFFFFF', border: '1px solid var(--color-border, #E8E1D9)', boxShadow: '0 8px 24px rgba(53, 16, 111, 0.06)' }}>
                <div style={{ width: '100%', height: '220px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px', background: '#22084B' }}>
                  <img src={c.image || galleryImages[i % (galleryImages.length || 1)]} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#22084B' }} />
                </div>
                <span className="sg-eyebrow" style={{ fontSize: '11px', marginBottom: '8px', alignSelf: 'flex-start' }}>{c.category || 'CAMPUS'}</span>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-primary, #35106F)', margin: '0 0 12px 0' }}>{c.displayName || c.name}</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-muted, #534D5C)', lineHeight: '1.65', marginBottom: '20px', flex: 1 }}>{c.description}</p>
                
                <div style={{ borderTop: '1px solid var(--color-border, #FCE4F2)', paddingTop: '16px', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <MapPin size={18} color="var(--color-primary, #E9007F)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ fontSize: '13.5px', color: 'var(--color-text, #211F24)', margin: 0, lineHeight: '1.5', fontWeight: '500' }}>{c.address}</p>
                  </div>
                  {c.phone && (
                    <p style={{ fontSize: '13.5px', color: 'var(--color-muted, #534D5C)', margin: '0 0 16px 0', fontWeight: '600' }}>
                      Contact: <a href={`tel:${c.phone}`} style={{ color: 'var(--color-primary, #E9007F)', textDecoration: 'none' }}>{c.phone}</a>
                    </p>
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sg-btn-primary"
                    style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', textDecoration: 'none', padding: '12px 16px', fontSize: '14px' }}
                  >
                    <ExternalLink size={15} style={{ marginRight: '8px' }} /> View on Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Campus Life Highlights */}
      <section className="sg-section sg-section-cream">
        <Container maxWidth="1280px">
          <div className="sg-section-header-center">
            <span className="sg-eyebrow">RESIDENTIAL & ENVIRONMENT</span>
            <h2 className="sg-section-title">Hostels & Campus Environment</h2>
            <p className="sg-section-desc sg-section-desc-center">
              Comprehensive student care with 24/7 security, nutritious dining, dedicated study hours, and senior warden mentoring.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="sg-card" style={{ padding: '24px', borderRadius: '16px' }}>
              <CheckCircle2 color="var(--color-primary, #E9007F)" size={28} style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Separate Boys & Girls Hostels</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted, #534D5C)', lineHeight: '1.6' }}>Independent campus wings with CCTV surveillance, bio-metric security, and round-the-clock warden care.</p>
            </div>
            <div className="sg-card" style={{ padding: '24px', borderRadius: '16px' }}>
              <CheckCircle2 color="var(--color-primary, #E9007F)" size={28} style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Supervised Study Hours</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted, #534D5C)', lineHeight: '1.6' }}>Structured morning and evening study sessions under the active supervision of resident subject faculty.</p>
            </div>
            <div className="sg-card" style={{ padding: '24px', borderRadius: '16px' }}>
              <CheckCircle2 color="var(--color-primary, #E9007F)" size={28} style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Hygienic Dining & Nutrition</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted, #534D5C)', lineHeight: '1.6' }}>Pure vegetarian and non-vegetarian nutritious meals prepared in steam-operated modern kitchens.</p>
            </div>
            <div className="sg-card" style={{ padding: '24px', borderRadius: '16px' }}>
              <CheckCircle2 color="var(--color-primary, #E9007F)" size={28} style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Transport & City Connectivity</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted, #534D5C)', lineHeight: '1.6' }}>Fleet of college buses connecting all key routes and suburban neighborhoods of Anantapuramu.</p>
            </div>
          </div>
        </Container>
      </section>

      <SgCTABanner
        title={`Visit ${data?.college?.name} Campuses`}
        desc="Schedule a campus visit to explore classrooms, hostels, sports grounds, and laboratories."
        primaryLabel="Enquire About Admissions"
        primaryTarget="admissions"
        onAction={onAction}
      />
    </div>
  );
}
