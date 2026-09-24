import React from 'react';
import { useCollege } from '../../../context/CollegeContext';
import { SgAboutPage } from './SgAboutPage';
import { SgAcademicsPage } from './SgAcademicsPage';
import { SgProgrammesPage } from './SgProgrammesPage';
import { SgWhyUsPage } from './SgWhyUsPage';
import { SgCampusPage } from './SgCampusPage';
import { SgFacilitiesPage } from './SgFacilitiesPage';
import { SgStudentLifePage } from './SgStudentLifePage';
import { SgResultsPage } from './SgResultsPage';
import { SgAdmissionsPage } from './SgAdmissionsPage';
import { SgContactPage } from './SgContactPage';

const PAGE_MAP = {
  about: SgAboutPage,
  academics: SgAcademicsPage,
  programmes: SgProgrammesPage,
  'why-us': SgWhyUsPage,
  'why-sri-gitam': SgWhyUsPage,
  'why-gitam': SgWhyUsPage,
  'why-teja': SgWhyUsPage,
  facilities: SgFacilitiesPage,
  campus: SgCampusPage,
  'student-life': SgStudentLifePage,
  results: SgResultsPage,
  admissions: SgAdmissionsPage,
  contact: SgContactPage,
};

export function SgPageRouter({ activePage, onAction }) {
  const { collegeData } = useCollege();
  const PageComponent = PAGE_MAP[activePage];
  if (!PageComponent) return null;
  return <PageComponent onAction={onAction} data={collegeData} />;
}
