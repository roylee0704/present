'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'app.title': 'Government Meeting Management',
    'app.subtitle': 'Project Documentation Portal',
    'company.name': 'Titvn AI Co., Ltd',
    'date': 'September 2025',

    // Sidebar
    'sidebar.title': 'Project Documents',
    'sidebar.subtitle': 'Select a document to view its content',
    'priority.legend': 'Priority Legend:',
    'priority.high': 'High - Core project documents',
    'priority.medium': 'Medium - Implementation details',
    'priority.low': 'Low - Compliance checklists',

    // Document titles and descriptions
    'doc.brief.title': 'Project Brief',
    'doc.brief.description': 'Comprehensive project overview and problem statement for the Government Meeting Management Mobile Application',
    'doc.prd.title': 'Product Requirements Document',
    'doc.prd.description': 'Detailed technical and functional requirements for the Flutter tablet application',
    'doc.scope-of-work.title': 'Scope of Work',
    'doc.scope-of-work.description': 'Complete project deliverables, timeline, and implementation strategy',
    'doc.quotation.title': 'Project Quotation',
    'doc.quotation.description': 'Detailed pricing breakdown and investment allocation for the digital transformation project',
    'doc.audit.title': 'Security & Compliance Audit',
    'doc.audit.description': 'Comprehensive audit plan covering security, compliance, performance, and audit trail requirements',
    'doc.thai-government-compliance.title': 'Thai Government Compliance',
    'doc.thai-government-compliance.description': 'Legal framework compliance including ETA, PDPA, and Cybersecurity Act requirements',
    'doc.discovery-recovery-checklist.title': 'Discovery & Recovery Checklist',
    'doc.discovery-recovery-checklist.description': 'Technical discovery and disaster recovery procedures for government systems',
    'doc.eta-checklist.title': 'ETA Compliance Checklist',
    'doc.eta-checklist.description': 'Electronic Transactions Act compliance verification and implementation checklist',
    'doc.pdpa-audit-checklist.title': 'PDPA Audit Checklist',
    'doc.pdpa-audit-checklist.description': 'Personal Data Protection Act compliance audit and verification procedures',

    // Priority labels
    'priority.high.label': 'HIGH PRIORITY',
    'priority.medium.label': 'MEDIUM PRIORITY',
    'priority.low.label': 'LOW PRIORITY',

    // Actions
    'action.open_new_tab': 'Open in new tab',
    'action.retry': 'Retry',

    // Loading and error states
    'loading.document': 'Loading document...',
    'error.title': 'Error Loading Document',

    // Language switcher
    'language.english': 'English',
    'language.thai': 'ไทย'
  },
  th: {
    // Header
    'app.title': 'ระบบจัดการการประชุมภาครัฐ',
    'app.subtitle': 'พอร์ทัลเอกสารโครงการ',
    'company.name': 'บริษัท ทิตวีเอ็น เอไอ จำกัด',
    'date': 'กันยายน 2568',

    // Sidebar
    'sidebar.title': 'เอกสารโครงการ',
    'sidebar.subtitle': 'เลือกเอกสารเพื่อดูเนื้อหา',
    'priority.legend': 'คำอธิบายความสำคัญ:',
    'priority.high': 'สูง - เอกสารหลักของโครงการ',
    'priority.medium': 'กลาง - รายละเอียดการนำไปใช้',
    'priority.low': 'ต่ำ - รายการตรวจสอบการปฏิบัติตามกฎระเบียบ',

    // Document titles and descriptions
    'doc.brief.title': 'สรุปโครงการ',
    'doc.brief.description': 'ภาพรวมโครงการและปัญหาที่ครอบคลุมสำหรับแอปพลิเคชันมือถือจัดการการประชุมภาครัฐ',
    'doc.prd.title': 'เอกสารข้อกำหนดผลิตภัณฑ์',
    'doc.prd.description': 'ข้อกำหนดทางเทคนิคและการทำงานโดยละเอียดสำหรับแอปพลิเคชันแท็บเล็ต Flutter',
    'doc.scope-of-work.title': 'ขอบเขตงาน',
    'doc.scope-of-work.description': 'ผลิตภัณฑ์ที่ส่งมอบ ไทม์ไลน์ และกลยุทธ์การดำเนินงานที่สมบูรณ์',
    'doc.quotation.title': 'ใบเสนอราคาโครงการ',
    'doc.quotation.description': 'รายละเอียดการแบ่งราคาและการจัดสรรการลงทุนสำหรับโครงการการเปลี่ยนแปลงดิจิทัล',
    'doc.audit.title': 'การตรวจสอบความปลอดภัยและการปฏิบัติตาม',
    'doc.audit.description': 'แผนการตรวจสอบที่ครอบคลุมความปลอดภัย การปฏิบัติตาม ประสิทธิภาพ และข้อกำหนดการติดตามการตรวจสอบ',
    'doc.thai-government-compliance.title': 'การปฏิบัติตามกฎหมายรัฐบาลไทย',
    'doc.thai-government-compliance.description': 'การปฏิบัติตามกรอบกฎหมายรวมถึงข้อกำหนด ETA, PDPA และ Cybersecurity Act',
    'doc.discovery-recovery-checklist.title': 'รายการตรวจสอบการค้นพบและการกู้คืน',
    'doc.discovery-recovery-checklist.description': 'ขั้นตอนการค้นพบทางเทคนิคและการกู้คืนจากภาวะฉุกเฉินสำหรับระบบรัฐบาล',
    'doc.eta-checklist.title': 'รายการตรวจสอบการปฏิบัติตาม ETA',
    'doc.eta-checklist.description': 'การตรวจสอบและรายการตรวจสอบการดำเนินการปฏิบัติตามพระราชบัญญัติการทำธุรกรรมทางอิเล็กทรอนิกส์',
    'doc.pdpa-audit-checklist.title': 'รายการตรวจสอบการปฏิบัติตาม PDPA',
    'doc.pdpa-audit-checklist.description': 'การตรวจสอบการปฏิบัติตามและขั้นตอนการตรวจสอบพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล',

    // Priority labels
    'priority.high.label': 'ความสำคัญสูง',
    'priority.medium.label': 'ความสำคัญกลาง',
    'priority.low.label': 'ความสำคัญต่ำ',

    // Actions
    'action.open_new_tab': 'เปิดในแท็บใหม่',
    'action.retry': 'ลองใหม่',

    // Loading and error states
    'loading.document': 'กำลังโหลดเอกสาร...',
    'error.title': 'ข้อผิดพลาดในการโหลดเอกสาร',

    // Language switcher
    'language.english': 'English',
    'language.thai': 'ไทย'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'th')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
