'use client';

import { useState } from 'react';
import { FileText, Menu, X, ExternalLink } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

interface DocumentItem {
  id: string;
  title: string;
  description: string;
  fileName: string;
  priority: 'high' | 'medium' | 'low';
}

const documents: DocumentItem[] = [
  {
    id: 'brief',
    title: 'Project Brief',
    description: 'Comprehensive project overview and problem statement for the Government Meeting Management Mobile Application',
    fileName: 'brief.md',
    priority: 'high'
  },
  {
    id: 'prd',
    title: 'Product Requirements Document',
    description: 'Detailed technical and functional requirements for the Flutter tablet application',
    fileName: 'prd.md',
    priority: 'high'
  },
  {
    id: 'scope-of-work',
    title: 'Scope of Work',
    description: 'Complete project deliverables, timeline, and implementation strategy',
    fileName: 'scope-of-work.md',
    priority: 'high'
  },
  {
    id: 'quotation',
    title: 'Project Quotation',
    description: 'Detailed pricing breakdown and investment allocation for the digital transformation project',
    fileName: 'quotation.md',
    priority: 'medium'
  },
  {
    id: 'audit',
    title: 'Security & Compliance Audit',
    description: 'Comprehensive audit plan covering security, compliance, performance, and audit trail requirements',
    fileName: 'audit.md',
    priority: 'medium'
  },
  {
    id: 'thai-government-compliance',
    title: 'Thai Government Compliance',
    description: 'Legal framework compliance including ETA, PDPA, and Cybersecurity Act requirements',
    fileName: 'thai-government-compliance.md',
    priority: 'medium'
  },
  {
    id: 'discovery-recovery-checklist',
    title: 'Discovery & Recovery Checklist',
    description: 'Technical discovery and disaster recovery procedures for government systems',
    fileName: 'discovery-recovery-checklist.md',
    priority: 'low'
  },
  {
    id: 'eta-checklist',
    title: 'ETA Compliance Checklist',
    description: 'Electronic Transactions Act compliance verification and implementation checklist',
    fileName: 'eta-checklist.md',
    priority: 'low'
  },
  {
    id: 'pdpa-audit-checklist',
    title: 'PDPA Audit Checklist',
    description: 'Personal Data Protection Act compliance audit and verification procedures',
    fileName: 'pdpa-audit-checklist.md',
    priority: 'low'
  }
];

export default function DocumentPresentation() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem>(documents[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const priorityColors = {
    high: 'border-l-red-500 bg-red-50 dark:bg-red-950/20',
    medium: 'border-l-orange-500 bg-orange-50 dark:bg-orange-950/20',
    low: 'border-l-green-500 bg-green-50 dark:bg-green-950/20'
  };

  const priorityBadges = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    medium: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 py-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FileText className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Government Meeting Management
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Project Documentation Portal
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Titvn AI Co., Ltd</span>
            <span>•</span>
            <span>September 2025</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed lg:static lg:translate-x-0 inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800
          border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-200 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project Documents
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Select a document to view its content
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {documents.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setSelectedDoc(doc);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full text-left p-4 rounded-lg border-l-4 transition-all duration-200
                      ${selectedDoc.id === doc.id
                        ? `${priorityColors[doc.priority]} border-opacity-100`
                        : 'border-l-gray-200 dark:border-l-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                          {doc.description}
                        </p>
                      </div>
                      <span className={`
                        inline-flex items-center px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide
                        ${priorityBadges[doc.priority]}
                      `}>
                        {doc.priority}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <p className="font-medium mb-1">Priority Legend:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>High - Core project documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Medium - Implementation details</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Low - Compliance checklists</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-none">
            {/* Document Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedDoc.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {selectedDoc.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`
                    inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                    ${priorityBadges[selectedDoc.priority]}
                  `}>
                    {selectedDoc.priority.toUpperCase()} PRIORITY
                  </span>
                  <a
                    href={`/docs/${selectedDoc.fileName}`}
                    target="_blank"
                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                    title="Open in new tab"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Document Content */}
            <div className="px-1 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 bg-gray-50 min-h-screen overflow-x-hidden">
              <MarkdownRenderer fileName={selectedDoc.fileName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
